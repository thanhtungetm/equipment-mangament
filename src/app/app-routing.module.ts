import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthLayoutComponent } from "./layout/auth-layout/auth-layout.component";
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";
import { AdminGuard } from "./shared/guard/admin.guard";
import { AuthenticationGuard } from "./shared/guard/authentication.guard";
import { LoginAcceptionGuard } from "./shared/guard/login-acception.guard";
import { NotFoundComponent } from "./shared/not-found/not-found.component";

const routes: Routes = [
    {
        path: "",
        // component: MainLayoutComponent,
        pathMatch: "full",
        redirectTo: "/admin/equipments"
        // canActivate: [AuthenticationGuard, AdminGuard],
        
    },
    {
        path: "auth",
        component: AuthLayoutComponent,
        loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
        canLoad: [LoginAcceptionGuard]
    },
    {
        path: "admin",
        component: MainLayoutComponent,
        loadChildren: () => import("./admin/admin.module").then((m) => m.AdminModule),
        canActivate: [AuthenticationGuard, AdminGuard]
    },
    {
        path: "user",
        component: MainLayoutComponent,
        canActivate: [AuthenticationGuard],
        loadChildren: () => import("./user/user.module").then((m) => m.UserModule)
    },
    {
        path: "profile",
        canActivate: [AuthenticationGuard],
        component: MainLayoutComponent,
        loadChildren: () => import("./profile/profile.module").then((m) => m.ProfileModule)
    },
    { path: "**", component: NotFoundComponent ,canActivate: [AuthenticationGuard],}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
