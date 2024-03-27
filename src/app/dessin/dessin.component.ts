import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { fabric } from 'fabric';
import { DessinService } from '../dessin.service';
import { ActivatedRoute } from '@angular/router';
import { Dessin } from '../models/dessin';

@Component({
  selector: 'app-dessin',
  templateUrl: './dessin.component.html',
  styleUrls: ['./dessin.component.css'],
})
export class DessinComponent implements AfterViewInit {
  @ViewChild('htmlCanvas') htmlCanvas!: ElementRef;
  public canvas: any;
  private id: number | undefined;
  currentColor: string = '#000000';
  logMessages: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private dessinService: DessinService
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  ngAfterViewInit(): void {
    this.canvas = new fabric.Canvas(this.htmlCanvas.nativeElement, {
      height: screen.height - 350,
      width: screen.width - 50,
    });
    this.loadDessin();
    this.canvas.on('object:moving', () => {
      this.recordHistory();
      this.logMessages.push('Un dessin a été bougé.');
    });
    this.canvas.on('object:added', () => {
      this.recordHistory();
      this.logMessages.push('Un dessin a été créé.');
    });
    this.canvas.on('object:modified', () => {
      this.recordHistory();
      this.logMessages.push('Un dessin a été modifié.');
    });
    this.canvas.on('object:removed', () => {
      this.recordHistory();
      this.logMessages.push('Un dessin a été supprimé.');
    });

    document.addEventListener('keydown', this.handleKeyDown);
  }

  ngOnDestroy(): void {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  changeFormColor(newColor: string): void {
    this.currentColor = newColor;
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.ctrlKey && event.key === 'z') {
      this.undo();
    }
  }

  private history: any[] = [];
  private currentHistoryIndex: number = -1;

  recordHistory(): void {
    if (this.currentHistoryIndex !== this.history.length - 1) {
      this.history = this.history.slice(0, this.currentHistoryIndex + 1);
    }
    this.history.push(JSON.stringify(this.canvas));
    this.currentHistoryIndex++;
    console.log('Recorded history index', this.currentHistoryIndex);
  }

  undo(): void {
    if (this.currentHistoryIndex > 0) {
      this.currentHistoryIndex--;
      console.log('Undo to history index', this.currentHistoryIndex);
      this.canvas.loadFromJSON(this.history[this.currentHistoryIndex], () => {
        this.canvas.renderAll();
      });
    }
  }

  loadDessin(): void {
    if (this.id) {
      this.dessinService.getDessinById(this.id).subscribe((dessin: Dessin) => {
        this.canvas.loadFromJSON(
          dessin.formes,
          this.canvas.renderAll.bind(this.canvas)
        );
      });
    }
  }

  resetScene(): void {
    this.canvas.clear();
  }

  deleteSelected(): void {
    const selectedObjects = this.canvas.getActiveObjects();

    selectedObjects.forEach((obj: any) => {
      this.canvas.remove(obj);
    });

    this.canvas.discardActiveObject();
    this.canvas.requestRenderAll();
  }

  saveScene(): void {
    const json = JSON.stringify(this.canvas.toJSON());
    const dessinToUpdate: Dessin = {
      id: this.id ?? 0,
      titre: 'Mon Nouveau Dessin',
      formes: JSON.parse(json),
    };

    this.dessinService.updateDessin(dessinToUpdate).subscribe({
      next: (data) => {
        console.log('Dessin sauvegardé', data);
      },
      error: (error) => {
        console.error('Erreur lors de la sauvegarde du dessin', error);
      },
    });
  }
}
