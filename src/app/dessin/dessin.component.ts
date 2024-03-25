import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'app-dessin',
  templateUrl: './dessin.component.html',
  styleUrls: ['./dessin.component.css'],
})
export class DessinComponent implements OnInit {
  @ViewChild('htmlCanvas') htmlCanvas: ElementRef;
  private canvas: fabric.Canvas;

  ngOnInit(): void {
    this.canvas = new fabric.Canvas(this.htmlCanvas.nativeElement, {
      height: 400,
      width: 800,
    });
    this.canvas.on('object:moving', (event: { target: any }) => {
      console.log('moving: ', event.target);
    });
  }

  addRectangle(): void {
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 60,
      height: 70,
    });
    this.canvas.add(rect);
  }
}
