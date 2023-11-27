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
  image_principal: {
    epigrafe: any;
    imagen: {
      _type: any;
      asset: {
        _ref: string;
        _type: string;
      };
    };
  };
  copete: any;
  segundo_bloque: {
    imagen_2: {
      imagen: {
        _type: any;
        asset: {
          _ref: string;
          _type: string;
        };
      };
      epigrafe: any;
    };
    YouTubeCode_1: string;
    TwitterID_1: string;
    segunda_descripcion: any;
  };
  tercer_bloque: {
    imagen_3: {
      imagen: {
        _type: any;
        asset: {
          _ref: string;
          _type: string;
        };
      };
      epigrafe: any;
    };
    YouTubeCode_2: string;
    TwitterID_2: string;
    tercera_descripcion: any;
  };
  cuarto_bloque: {
    imagen_4: {
      imagen: {
        _type: any;
        asset: {
          _ref: string;
          _type: string;
        };
      };
      epigrafe: any;
    };
    YouTubeCode_3: string;
    TwitterID_3: string;
    cuarta_descripcion: any;
  };
  quinto_bloque: {
    imagen_5: {
      imagen: {
        _type: any;
        asset: {
          _ref: string;
          _type: string;
        };
      };
      epigrafe: any;
    };
    YouTubeCode_4: string;
    TwitterID_4: string;
    quinta_descripcion: any;
  };

  imagenes_array: any;
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

export interface Video {
  _id: string;
  title: any;
  categoria: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: string;
  link_video: string;
}

export interface Dolar {
  casa: {
    compra: number;
    venta: any;
    agencia: number;
    nombre: string;
    variacion: number;
    ventaCero: string;
    decimales: number;
  };
}
