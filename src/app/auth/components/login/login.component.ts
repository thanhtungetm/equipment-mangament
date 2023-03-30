import { Component } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { catchError } from "rxjs";
import { UtilHelper } from "src/app/helper/utils.helper";
import { checkWhiteSpace } from "src/app/helper/validator.helper";
import { AuthService } from "src/app/shared/services/auth.service";
@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
    loginForm!: FormGroup;

    isLoading = false;

    errMessage: string = "";
    loading = false;

    constructor(private _formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.loginForm = this._formBuilder.group({
            username: ["", [Validators.required, checkWhiteSpace()]],
            password: ["", [Validators.required, checkWhiteSpace()]]
        });
    }

    submit() {
        this.errMessage = "";
        this.isLoading = true;
        this.validation();
        console.log(this.loginForm);
        if (this.loginForm.valid)
            this.authService.login(this.loginForm.value).subscribe({
                next: (data) => {
                    console.log("Success:", data);
                    console.log("isAuthenticated:", this.authService.isAuthenticated());
                    this.isLoading = false;
                    if (this.authService.isUserRole()) {
                        this.router.navigate(["/user"]);
                    } else this.router.navigateByUrl("/");
                },
                error: (err) => {
                    console.log("Err in Login:", err);
                    console.log("isAuthenticated:", this.authService.isAuthenticated());
                    this.errMessage = err;
                    this.isLoading = false;
                },
                complete: () => console.log("completed")
            });
    }

    validation() {
        if (UtilHelper.isEmptyString(this.f["username"].value)) {
            this.f["username"].setErrors({ required: true });
        }
        if (UtilHelper.isEmptyString(this.f["password"].value)) {
            this.f["password"].setErrors({ required: true });
        }
    }

    get f() {
        return this.loginForm.controls;
    }
}
