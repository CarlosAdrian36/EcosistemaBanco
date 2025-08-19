export interface Banco {
  Titulo: string;
  bancoId: string;
  descripcion: string;
  lenguaje: Lenguaje[] | null;
}

enum Lenguaje {
  Español = 1,
  Ingles = 2,
  Frances = 3,
}
