import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { EmployeeConcreteModalComponent } from "./components/employee-concrete-modal/employee-concrete-modal.component";
import { EmployeeFormComponent } from "./components/employee-form/employee-form.component";
import { EquipmentFilterComponent } from "./components/equipment-filter/equipment-filter.component";
import { EquipmentSearchComponent } from "./components/equipment-search/equipment-search.component";
import { EquipmentTabComponent } from "./components/equipment-tab/equipment-tab.component";
import { ErrorComponent } from './components/error/error.component';
import { ModalComponent } from "./components/modal/modal.component";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { PreviewImageComponent } from "./components/preview-image/preview-image.component";
import { SuccessComponent } from './components/success/success.component';
import { TableHeadComponent } from "./components/table-head/table-head.component";
import { WarningComponent } from "./components/warning/warning.component";
import { InValidDirective } from "./directive/in-valid.directive";
import { ShowModalDirective } from "./directive/show-modal.directive";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ImageUrlPipe } from './pipe/image-url.pipe';
import { PaginatePipe } from './pipe/paginate.pipe';
import { SkeletonTableComponent } from './components/skeleton-table/skeleton-table.component';

@NgModule({
    declarations: [
        NotFoundComponent,
        TableHeadComponent,
        PaginationComponent,
        ModalComponent,
        ShowModalDirective,
        WarningComponent,
        InValidDirective,
        PreviewImageComponent,
        PaginatePipe,
        SuccessComponent,
        ErrorComponent,
        ImageUrlPipe,
        EmployeeFormComponent,
        EmployeeConcreteModalComponent,
        EquipmentTabComponent,
        EquipmentSearchComponent,
        EquipmentFilterComponent,
        SkeletonTableComponent

    ],
    imports: [FontAwesomeModule, CommonModule, ReactiveFormsModule],
    exports: [
        FontAwesomeModule,
        NotFoundComponent,
        TableHeadComponent,
        PaginationComponent,
        ModalComponent,
        WarningComponent,
        InValidDirective,
        PreviewImageComponent,
        PaginatePipe,
        SuccessComponent,
        ErrorComponent,
        ImageUrlPipe,
        EmployeeFormComponent,
        EmployeeConcreteModalComponent,
        EquipmentTabComponent,
        EquipmentSearchComponent,
        EquipmentFilterComponent,
        SkeletonTableComponent
    ]
})
export class SharedModule {}
