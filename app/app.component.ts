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
    title : string;

    constructor(private valueService: ValueService) {
        this.title = "AngularJS version 2 build";
        
    }

    ngOnInit() {
        this.valueService.getValues().then(values => this.values = values);
    }
}

