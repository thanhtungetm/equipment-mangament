import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilHelper } from 'src/app/helper/utils.helper';
import { EquipmentService } from 'src/app/shared/services/equipment.service';
import { IDeviceBrand } from '../../model/device-brand.model';
import { IDeviceType } from '../../model/device-type.model';
import { IEquipment } from '../../model/equipment.model';

@Component({
  selector: 'app-equipment-form',
  templateUrl: './equipment-form.component.html',
  styleUrls: ['./equipment-form.component.scss']
})
export class EquipmentFormComponent {
  form!: FormGroup;

  @Input() update : boolean = false
  @Input() equipment : IEquipment | null = null
  @Output() onSubmit = new EventEmitter<FormGroup>()

  deviceTypeList: IDeviceType[] = [];
  brandList: IDeviceBrand[] = [];

  imageFile : File | null = null

  constructor(private fb: FormBuilder, private equipmentService: EquipmentService) {}

  ngOnInit(): void {
      this.initAddForm();

      this.equipmentService.getAllDeviceTypes().subscribe({
          next: (data) => {
              this.deviceTypeList = data;
          }
      });

      if (this.equipment) {
        const typeId = Number(this.equipment.equipmentBrandDeviceTypeId);
        this.equipmentService.getDeviceBrandsOfDeviceType(typeId).subscribe({
            next: (data) => {
                this.brandList = data;
            }
        });
    }
  }

  initAddForm() {
      this.form = this.fb.group({
          name: [ this.equipment?.name||"", [Validators.required]],
          equipmentBrandId: [this.equipment?.equipmentBrandId || {value:"", disabled:true}, [Validators.required]],
          equipmentType: [this.equipment?.equipmentBrandDeviceTypeId || '' , [Validators.required]],
          image: [null,],
          specifications: [this.equipment?.specifications||"",[Validators.required]],

      });
  }


  submit() {
      this.onSubmit.emit(this.form)
  }

  handleChangeDeviceType(event: Event) {
      const deviceType = (event.target as HTMLSelectElement).value;
      if (deviceType === "") {
          this.form.controls['equipmentBrandId'].disable()
          this.brandList = [];
      } else {
          this.equipmentService.getDeviceBrandsOfDeviceType(Number(deviceType)).subscribe(
              (list) => {
                  this.brandList = list;
                  this.f['equipmentBrandId'].enable()

                  if(this.brandList.length ===0){
                      this.f['equipmentBrandId'].setErrors({noneBrandId: true})
                  }
              },
              (err) => (this.brandList = [])
          );
      }
  }

  onFileSelected(event: Event){
      console.log("File slected");
      this.form.controls['image'].markAsTouched()
      const file = (event.target as HTMLInputElement).files?.[0];
      if(!UtilHelper.isImageFile(file)){
          this.f['image'].setErrors({requiredFileType: true})
          console.log("False");
          
      }else{
          this.imageFile = file || null
          this.form.patchValue({
              image: this.imageFile
          })
          this.previewImage(this.imageFile!)
      }
  }

  previewImage(file:File){

  }

  get f(){
      return this.form.controls
  }
  isPristine(){
    return this.form.pristine
  }
}
