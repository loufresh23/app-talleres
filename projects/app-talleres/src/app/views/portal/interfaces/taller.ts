
export interface Instructor {
  id: number;
  nombre: string;
}

export interface Taller {
  id: number;
  slug: string;
  nombre: string;
  descripcion: string;
  img: string;
  img2: string;
  dia: string;
  hora: string;
  instructor: Instructor;
  temario: string;
}
