export interface Dessin {
  id: number;
  titre: string;
  formes: FormeGeometrique[];
}

export interface FormeGeometrique {
  type: string;
  position: { x: number; y: number };
  dimensions: { largeur: number; hauteur: number };
  couleur: string;
}
