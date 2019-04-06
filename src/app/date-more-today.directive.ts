import { NG_VALIDATORS, FormControl } from '@angular/forms';
import { Directive } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

function dateMoreToday(control: FormControl) {
    const selectedDate = NgbDate.from(control.value);
    if (selectedDate) {
        const date = new Date();
        const today = NgbDate.from({
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate()
        });
        const forbidden = selectedDate.before(today);
        return forbidden ? { dateMoreToday: true } : null;
    }
    return null;
}

@Directive({
    selector: '[dateMoreToday][ngModel]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useValue: dateMoreToday,
            multi: true
        }
    ]
})

export class DateMoreToday {
}