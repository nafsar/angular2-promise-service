import { Component, OnInit } from '@angular/core';
import { ValueService } from './value.service';

export class Value {
    name: string;
    payed: number;

}

@Component({
    selector: 'value-app',
    templateUrl: 'display.html',
    providers: [ValueService]
})
export class AppComponent implements OnInit {
    values: Value[];
    title = "AngularJS 2 (promise & service)"

    constructor(private valueService: ValueService) { }

    ngOnInit() {
        this.valueService.getValues().then(values => this.values = values);
    }
}

