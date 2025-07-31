import { AbstractControl, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

export class ForbiddenNameValidator implements Validator{
    constructor(private nameExp:RegExp){}
    validate(control: AbstractControl): ValidationErrors | null {

        const forbidden=this.nameExp.test(control.value);
        return forbidden?{forbiddenName:(control.value)}:null;
    }
}

export function forbiddenNameValidator(nameExp:RegExp):ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null =>{

        const forbidden=nameExp.test(control.value);
        return forbidden?{forbiddenName:(control.value)}:null;
    }
}