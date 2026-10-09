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
    video_epigrafe: any;
    video: {
      _type: any;
      asset: {
        _ref: string;
        _type: string;
      };
    };
    incrustaciones?: Incrustacion[];
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
    video: {
      _type: any;
      asset: {
        _ref: string;
        _type: string;
      };
    };
    YouTubeCode_1: string;
    TwitterID_1: string;
    segunda_descripcion: any;
    incrustaciones?: Incrustacion[];
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
    video: {
      _type: any;
      asset: {
        _ref: string;
        _type: string;
      };
    };
    YouTubeCode_2: string;
    TwitterID_2: string;
    tercera_descripcion: any;
    incrustaciones?: Incrustacion[];
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
    video: {
      _type: any;
      asset: {
        _ref: string;
        _type: string;
      };
    };
    YouTubeCode_3: string;
    TwitterID_3: string;
    cuarta_descripcion: any;
    incrustaciones?: Incrustacion[];
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

export type Incrustacion = {
  _key?: string;
  tipo: "youtube" | "facebook" | "instagram" | "tiktok" | "html" | "pdf";
  url?: string;
  codigoHtml?: string;
  tituloPdf?: string;
  archivoPdfUrl?: string;
};
