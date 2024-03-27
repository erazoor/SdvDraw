import { Component, Input } from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'app-forme-geometrique',
  templateUrl: './forme-geometrique.component.html',
  styleUrls: ['./forme-geometrique.component.css'],
})
export class FormeGeometriqueComponent {
  @Input() canvas: any;
  @Input() currentColor: string = '#000000';

  setColor(newColor: string): void {
    this.currentColor = newColor;
    if (this.canvas) {
      if (this.canvas.isDrawingMode) {
        this.canvas.freeDrawingBrush.color = newColor;
      }
    }
  }

  addRectangle(): void {
    if (this.canvas) {
      const rect = new fabric.Rect({
        left: Math.random() * 700,
        top: Math.random() * 300,
        fill: this.currentColor,
        width: 60,
        height: 70,
      });
      this.canvas.add(rect);
    }
  }

  addCircle(): void {
    if (this.canvas) {
      const circle = new fabric.Circle({
        left: Math.random() * 700,
        top: Math.random() * 300,
        fill: this.currentColor,
        radius: 50,
      });
      this.canvas.add(circle);
    }
  }

  addTriangle(): void {
    if (this.canvas) {
      const triangle = new fabric.Triangle({
        left: Math.random() * 700,
        top: Math.random() * 300,
        fill: this.currentColor,
        width: 80,
        height: 80,
      });
      this.canvas.add(triangle);
    }
  }

  addLine(): void {
    if (this.canvas) {
      const line = new fabric.Line([50, 100, 200, 200], {
        left: Math.random() * 700,
        top: Math.random() * 300,
        stroke: this.currentColor,
      });
      this.canvas.add(line);
    }
  }

  addText(): void {
    if (this.canvas) {
      const text = new fabric.Textbox('Text', {
        left: Math.random() * 700,
        top: Math.random() * 300,
        fill: this.currentColor,
      });
      this.canvas.add(text);
    }
  }

  addFreeDrawing(): void {
    if (this.canvas) {
      this.canvas.isDrawingMode = true;
      this.canvas.freeDrawingBrush = new fabric.PencilBrush(this.canvas);
      this.canvas.freeDrawingBrush.color = this.currentColor;
      this.canvas.freeDrawingBrush.width = 5;
    }
  }

  removeFreeDrawing(): void {
    if (this.canvas) {
      this.canvas.isDrawingMode = false;
    }
  }
}
