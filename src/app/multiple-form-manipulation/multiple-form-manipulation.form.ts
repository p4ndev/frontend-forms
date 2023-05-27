import { FormControl, FormGroup } from "@angular/forms";

export abstract class MultipleFormManipulationForm{

    form = new FormGroup({
        name : new FormControl(),
        email : new FormControl(),
        to : new FormControl(),
        subject : new FormControl(''),
        content : new FormControl()
    });

    get name() : FormControl<string>{
        return this.form.controls.name;
    }

    get email() : FormControl<string>{
        return this.form.controls.email;
    }

    get subject() : FormControl<string | null>{
        return this.form.controls.subject;
    }

    get content() : FormControl<string>{
        return this.form.controls.content;
    }

    get to() : FormControl<string>{
        return this.form.controls.to;
    }

}
