import { NG_VALIDATORS, FormControl } from '@angular/forms';
import { Directive } from '@angular/core';

function aboveZeroValidator(control: FormControl) {
    const forbidden = control.value <= 0;
    return forbidden ? { aboveZero : true } : null;
}

@Directive({
    selector: '[aboveZero][ngModel]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useValue: aboveZeroValidator,
            multi: true
        }
    ]
})

export class AboveZeroValidator {
}