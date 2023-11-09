export interface Noticia {
  _id: string;
  bajada: string;
  descripcion: string;
  title: string;
  _createdAt: any;
  categoria: string;
  image_principal: string;
  epigrafe: string;
  copete: string;
  parrafo_1: string;
  parrafo_2: string;
  YouTubeCode_1: any;
  TwitterID_1: string;
}

export interface Autor {
  _id: string;
  name: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: string;
  photo: {
    _type: string;
    asset: {
      _type: string;
      _ref: string;
    };
  };
}
