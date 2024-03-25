import { Component, OnInit } from '@angular/core';
import { DessinService } from '../dessin.service';
import { Dessin } from '../models/dessin';

@Component({
  selector: 'app-liste-dessins',
  templateUrl: './liste-dessins.component.html',
  styleUrl: './liste-dessins.component.css',
})
export class ListeDessinsComponent implements OnInit {
  dessins: Dessin[] = [];

  constructor(private dessinService: DessinService) {}

  ngOnInit(): void {
    this.dessinService.getDessins().subscribe((data: Dessin[]) => {
      this.dessins = data;
    });
  }
}
