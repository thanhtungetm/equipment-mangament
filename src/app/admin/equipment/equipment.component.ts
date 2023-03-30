import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { faFilter, faPlus, faSort } from "@fortawesome/free-solid-svg-icons";
import { EquipmentService } from "src/app/shared/services/equipment.service";
import { ISortInfo } from "../admin-shared/model/sort-info.model";
import { EquipmentFilterService } from "../admin-shared/services/equipment-filter.service";
import { AddEquipmentComponent } from "./components/add-equipment/add-equipment.component";
import { ConcreteModalComponent } from "./components/concrete-modal/concrete-modal.component";
import { UpdateEquipmentComponent } from "./components/update-equipment/update-equipment.component";
import { ViewEquipmentComponent } from "./components/view-equipment/view-equipment.component";
import { IDeviceType } from "./model/device-type.model";
import { IEquipmentFilter } from "./model/equiment-filter.model";
import { IEquipment } from "./model/equipment.model";

@Component({
    selector: "app-equipment",
    templateUrl: "./equipment.component.html",
    styleUrls: ["./equipment.component.scss"],
    providers: [EquipmentFilterService]
})
export class EquipmentComponent implements OnInit {
    loading: boolean = true;
    faFilter = faFilter;
    faPlus = faPlus;
    faSort = faSort;

    currentPage = 0;
    ITEM_PER_PAGE = 5;

    list: IEquipment[] = [];
    currentEquipment: IEquipment | null = null;
    deviceTypeList: IDeviceType[] = [];

    showWarning = false;

    columnList: { title: string; fieldName?: string }[] = [
        {
            title: "Id",
            fieldName: "id"
        },
        {
            title: "Image"
        },
        {
            title: "Name",
            fieldName: "name"
        },
        {
            title: "Type",
            fieldName: "equipmentBrandDeviceTypeName"
        },
        {
            title: "Brand",
            fieldName: "equipmentBrandName"
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
        this.equipmentFilterService.equimentFilter$.subscribe((filter) => {
            this.currentPage = 0;
            this.list = this.equipmentService.filterList(filter);
            console.log(this.list, filter);
            // this.router.navigate([], {
            //     relativeTo: this.activatedRoute,
            //     queryParams: filter,
            //     queryParamsHandling: "merge"
            // });
        });
    }
    ngAfterViewInit() {}

    getEquipments() {
        this.equipmentService.getEquipments().subscribe({
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
        const addModal = this.modalContainer.createComponent(AddEquipmentComponent);
        addModal.instance.success.subscribe(() => this.getEquipments());
    }
    openUpdateEquipment(equipment: IEquipment) {
        this.modalContainer.clear();
        const updateModal = this.modalContainer.createComponent(UpdateEquipmentComponent);
        updateModal.instance.equipment = equipment;
        updateModal.instance.success.subscribe(() => this.getEquipments());
    }

    openConcreteEquipment(equipment: IEquipment) {
        this.modalContainer.clear();
        const concreteModal = this.modalContainer.createComponent(ConcreteModalComponent);
        concreteModal.instance.equipment = equipment;
    }
    openDeleteEquipment(equipment: IEquipment) {
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
