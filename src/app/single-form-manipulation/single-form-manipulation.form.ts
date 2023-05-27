import { FormControl, FormGroup } from "@angular/forms";

export abstract class SingleFormManipulationForm{

    form = new FormGroup({
        name    : new FormControl(),
        email   : new FormControl(),
        gender  : new FormControl(null),
        optIn   : new FormControl(false)
    });

    get name() : FormControl<string>{
        return this.form.controls.name;
    }

    get email() : FormControl<string>{
        return this.form.controls.email;
    }

    get gender() : FormControl<number | null>{
        return this.form.controls.gender;
    }

    get optIn() : FormControl<boolean | null>{
        return this.form.controls.optIn;
    }

}
