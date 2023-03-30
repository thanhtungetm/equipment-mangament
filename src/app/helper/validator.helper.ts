import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function checkWhiteSpace(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const hasWhiteSpace = (control.value as string).includes(" ");
        return hasWhiteSpace ? { hasWhiteSpace: { value: control.value } } : null;
    };
}
export function checkPassword(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        // const hasUppercaseChar = (control.value as string).match(/[A-Z]/g)
        // const hasLowercaseChar = (control.value as string).match(/[a-z]/g)
        // const hasNumber = (control.value as string).match(/[0-9]/g)
        const isValid = (control.value as string).match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)
        console.log(isValid);
        
        return !isValid ? { isValid: { value: control.value } } : null;
    };
}

export function requiredFileType(type: string) {
    return function (control: FormControl) {
        const file = control.value;
        console.log('File:', file);
        
        if (file) {
            const extension = file.name.split(".")[1].toLowerCase();
            if (type.toLowerCase() !== extension.toLowerCase()) {
                return {
                    requiredFileType: true
                };
            }

            return null;
        }

        return null;
    };
}
