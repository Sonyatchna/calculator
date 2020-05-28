import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private num1: number;
  private num2: number;
  private result: number;
  private resHeading: string;
  @ViewChild('resultBlock', {static: false}) resultBlock: ElementRef;

  constructor() { }

  private sum(): void {
    [this.result, this.resHeading] = [this.num1 + this.num2, this.num1 + ' + ' + this.num2];
    this.resultBlock.nativeElement.style.visibility = 'visible';
  }

  private diff(): void {
    [this.result, this.resHeading] = [this.num1 - this.num2, this.num1 + ' - ' + this.num2];
    this.resultBlock.nativeElement.style.visibility = 'visible';
  }

  private mult(): void {
    [this.result, this.resHeading] = [this.num1 * this.num2, this.num1 + ' * ' + this.num2];
    this.resultBlock.nativeElement.style.visibility = 'visible';
  }

  private div(): void {
    [this.result, this.resHeading] = [this.num1 / this.num2, this.num1 + ' / ' + this.num2];
    this.resultBlock.nativeElement.style.visibility = 'visible';
  }
}
