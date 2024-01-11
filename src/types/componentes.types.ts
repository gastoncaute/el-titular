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
  moneda: string;
  casa: string;
  nombre: string;
  compra: number;
  venta: any;
  fechaActualizacion: any;
}

export interface Clima {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: any;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
