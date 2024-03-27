import { Component, OnInit } from '@angular/core';
import { DessinService } from '../dessin.service';
import { Dessin } from '../models/dessin';

@Component({
  selector: 'app-liste-dessins',
  templateUrl: './liste-dessins.component.html',
  styleUrls: ['./liste-dessins.component.css'],
})
export class ListeDessinsComponent implements OnInit {
  dessins: Dessin[] = [];
  displayedColumns: string[] = ['titre', 'actions'];

  constructor(private dessinService: DessinService) {}

  ngOnInit(): void {
    this.dessinService.getDessins().subscribe((data: Dessin[]) => {
      this.dessins = data;
    });
  }

  deleteDessin(id: number): void {
    this.dessinService.deleteDessin(id).subscribe(() => {
      this.dessins = this.dessins.filter((dessin) => dessin.id !== id);
    });
  }
}
