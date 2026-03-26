import { Element } from '../models/element.model';

export const ELEMENTS: Element[] = [
  {
    id: 1,
    nom: 'Element Primer',
    valorNumeric: 100,
    categoria: 'A',
    descripcio: 'Descripció 1',
  },
  { id: 2, nom: 'Element Segon', valorNumeric: 200, categoria: 'B' }, // Sense descripció (és opcional)
  {
    id: 3,
    nom: 'Element Tercer',
    valorNumeric: 150,
    categoria: 'A',
    descripcio: 'Descripció 3',
  },
  { id: 4, nom: 'Element Quart', valorNumeric: 300, categoria: 'C' },
  {
    id: 5,
    nom: 'Element Cinquè',
    valorNumeric: 120,
    categoria: 'B',
    descripcio: 'Descripció 5',
  },
  { id: 6, nom: 'Element Sisè', valorNumeric: 80, categoria: 'A' },
  {
    id: 7,
    nom: 'Element Setè',
    valorNumeric: 250,
    categoria: 'C',
    descripcio: 'Descripció 7',
  },
  { id: 8, nom: 'Element Vuitè', valorNumeric: 180, categoria: 'B' },
  {
    id: 9,
    nom: 'Element Novè',
    valorNumeric: 400,
    categoria: 'A',
    descripcio: 'Descripció 9',
  },
  { id: 10, nom: 'Element Desè', valorNumeric: 220, categoria: 'C' },
];
