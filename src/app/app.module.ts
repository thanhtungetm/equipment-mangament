import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { APIConfig } from "src/config/api.config";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardModule } from "./dashboard/dashboard.module";
import { AppHttpInterceptorService } from "./shared/services/app-http-interceptor.service";
import { SharedModule } from "./shared/shared.module";
import { RouterModule } from "@angular/router";
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";
import { AuthLayoutComponent } from "./layout/auth-layout/auth-layout.component";
import { NavBarComponent } from "./layout/nav-bar/nav-bar.component";
import { TogglenavDirective } from "./layout/directive/toggle-nav.directive";
import { LayoutModule } from "./layout/layout.module";
import { FormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { EmployeeModule } from './admin/employee/employee.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, SharedModule, DashboardModule, LayoutModule],
    providers: [
        { provide: "BASE_URL", useValue: APIConfig.baseUrl },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AppHttpInterceptorService,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
