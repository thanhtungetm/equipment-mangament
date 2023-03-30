import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DeviceTypeComponent } from "./device-type.component";
import { RouterModule, Routes } from "@angular/router";
import { AddDeviceTypeComponent } from './components/add-device-type/add-device-type.component';
import { UpdateDeviceTypeComponent } from './components/update-device-type/update-device-type.component';
import { DeviceBrandModalComponent } from './components/device-brand-modal/device-brand-modal.component';
import { SharedModule } from "src/app/shared/shared.module";

const routes: Routes = [{ path: "", component: DeviceTypeComponent }];

@NgModule({
    declarations: [DeviceTypeComponent, AddDeviceTypeComponent, UpdateDeviceTypeComponent, DeviceBrandModalComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule]
})
export class DeviceTypeModule {}
