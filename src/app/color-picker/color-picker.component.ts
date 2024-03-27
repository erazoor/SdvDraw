import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
})
export class ColorPickerComponent {
  public selectedColor: string = '#000000';
  @Output() colorChange = new EventEmitter<string>();

  colorChanged(): void {
    this.colorChange.emit(this.selectedColor);
  }
}
