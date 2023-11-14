export interface Noticia {
  autor: {
    _ref: string;
    _type: string;
  };
  _id: string;
  _rev: string;
  _createdAt: any;
  _updatedAt: string;
  _type: string;
  categoria: string;
  title: string;
  bajada: string;
  copete: string;
  image_principal: {
    epigrafe: string;
    imagen: {
      _type: any;
      asset: {
        _ref: string;
        _type: string;
      };
    };
  };
  epigrafe: string;
  parrafo_1: string;
  parrafo_2: string;
  imagen_2: string;
  parrafo_3: string;
  parrafo_4: string;
  imagen_3: string;

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

export interface Foto {
  _id: string;
  title: string;
  categoria: string;
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
