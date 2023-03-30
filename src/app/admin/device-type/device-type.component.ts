import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { faFilter, faPlus, faSort } from "@fortawesome/free-solid-svg-icons";
import { EquipmentService } from "src/app/shared/services/equipment.service";
import { ISortInfo } from "../admin-shared/model/sort-info.model";
import { EquipmentFilterService } from "../admin-shared/services/equipment-filter.service";
import { IDeviceType } from "../equipment/model/device-type.model";
import { AddDeviceTypeComponent } from "./components/add-device-type/add-device-type.component";
import { DeviceBrandModalComponent } from "./components/device-brand-modal/device-brand-modal.component";
import { UpdateDeviceTypeComponent } from "./components/update-device-type/update-device-type.component";

@Component({
  selector: 'app-device-type',
  templateUrl: './device-type.component.html',
  styleUrls: ['./device-type.component.scss']
})
export class DeviceTypeComponent implements OnInit {
  loading: boolean = true;
  faFilter = faFilter;
  faPlus = faPlus;
  faSort = faSort;

  currentPage = 0;
  ITEM_PER_PAGE = 5;

  list: IDeviceType[] = [];
  currentEquipment: IDeviceType | null = null;

  showWarning = false;

  columnList: { title: string; fieldName?: string }[] = [
      {
          title: "Id",
          fieldName: "id"
      },

      {
          title: "Name",
          fieldName: "name"
      },
      {
          title: "Actions"
      }
  ];
  currentSortField!: string;
  directionSort: "ASC" | "DESC" = "ASC";

  @ViewChild("modalContainer", { read: ViewContainerRef }) modalContainer!: ViewContainerRef;

  constructor(
      private equipmentService: EquipmentService,
      private equipmentFilterService: EquipmentFilterService,
      private router: Router,
      private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
      this.getEquipments();
    //   this.equipmentFilterService.equimentFilter$.subscribe((filter) => {
    //       this.currentPage = 0;
    //        this.equipmentService.getAllDeviceTypes();
    //       console.log(this.list, filter);
    //       // this.router.navigate([], {
    //       //     relativeTo: this.activatedRoute,
    //       //     queryParams: filter,
    //       //     queryParamsHandling: "merge"
    //       // });
    //   });
  }
  ngAfterViewInit() {}

  getEquipments() {
      this.equipmentService.getAllDeviceTypes().subscribe({
          next: (data) => {
              console.log("End component:", data);
              this.list = data;
          }
      });
  }

  sortBy(sortInfo: ISortInfo) {
      this.list = this.equipmentService.sortBy(sortInfo);
      console.log(this.list);
  }
  handleChangePage(page: any) {
      console.log("Page change", page);
      this.currentPage = page;
  }

  openAddEquipment() {
      this.modalContainer.clear();
      const addModal = this.modalContainer.createComponent(AddDeviceTypeComponent);
    //   addModal.instance.success.subscribe(() => this.getEquipments());
  }
  openUpdateEquipment(equipment: IDeviceType) {
      this.modalContainer.clear();
      const updateModal = this.modalContainer.createComponent(UpdateDeviceTypeComponent);
    //   updateModal.instance.equipment = equipment;
    //   updateModal.instance.success.subscribe(() => this.getEquipments());
  }

  openConcreteEquipment(equipment: IDeviceType) {
      this.modalContainer.clear();
      const concreteModal = this.modalContainer.createComponent(DeviceBrandModalComponent);
    //   concreteModal.instance.equipment = equipment;
  }
  openDeleteEquipment(equipment: IDeviceType) {
      this.currentEquipment = equipment;
      this.showWarning = true;
  }

  deleteEquipment(choose: boolean) {
      this.showWarning = false;
      if (!choose) return;
      console.log("Current:", this.currentEquipment);
      this.equipmentService.deleteEquipment(this.currentEquipment!.id).subscribe((data) => {
          console.log("Delete successfully:", data);
          this.getEquipments();
      });
  }
  //     this.modalContainer.clear()
  //     const deleteModal = this.modalContainer.createComponent()
  //     addModal.instance.success.subscribe(()=>this.getEquipments())
  // }
}
