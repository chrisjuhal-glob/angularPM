import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}