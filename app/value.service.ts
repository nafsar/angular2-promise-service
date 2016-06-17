import { Injectable } from '@angular/core';
import { Value } from './value';
import { VALUES } from './mock-values';
@Injectable()
export class ValueService {
  getValues() {
    return Promise.resolve(VALUES);
  }
}