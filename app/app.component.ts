import { Component, OnInit } from '@angular/core';
import { ValueService } from './value.service';
import {Value} from './value';

@Component({
    selector: 'value-app',
    templateUrl: 'display.html',
    providers: [ValueService]
})
export class AppComponent implements OnInit {
    values: Value[];
    title = "AngularJS 2 (promise and service)"

    constructor(private valueService: ValueService) { }

    ngOnInit() {
        this.valueService.getValues().then(values => this.values = values);
    }
}

