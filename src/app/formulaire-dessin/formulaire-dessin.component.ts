import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DessinService } from '../dessin.service';

@Component({
  selector: 'app-formulaire-dessin',
  templateUrl: './formulaire-dessin.component.html',
  styleUrl: './formulaire-dessin.component.css',
})
export class FormulaireDessinComponent implements OnInit {
  dessinForm!: FormGroup;

  constructor(private fb: FormBuilder, private dessinService: DessinService) {}

  ngOnInit(): void {
    this.dessinForm = this.fb.group({
      titre: ['', [Validators.required]],
      description: [''],
    });
  }

  onSubmit(): void {
    if (this.dessinForm.valid) {
      const dessinData = this.dessinForm.value;
      if (dessinData.id) {
        this.dessinService.updateDessin(dessinData).subscribe({
          next: (data) => {
            console.log('Dessin mis à jour', data);
            this.showMessage('Dessin mis à jour avec succès.');
            this.redirectToList();
          },
          error: (error) => {
            console.error('Erreur lors de la mise à jour du dessin', error);
            this.showMessage('Erreur lors de la mise à jour du dessin.');
          },
        });
      } else {
        this.dessinService.createDessin(dessinData).subscribe({
          next: (data) => {
            console.log('Dessin créé', data);
            this.showMessage('Dessin créé avec succès.');
            this.redirectToList();
          },
          error: (error) => {
            console.error('Erreur lors de la création du dessin', error);
            this.showMessage('Erreur lors de la création du dessin.');
          },
        });
      }
    }
  }

  private showMessage(message: string): void {
    console.log(message);
  }

  private redirectToList(): void {
    // this.router.navigate(['/dessins']);
  }
}
