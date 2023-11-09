export async function obtenerAutor() {
  const res = await fetch(
    "https://lrwm6m86.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27author%27%5D",
    {
      method: "GET",
      cache: "no-store",
    }
  );
  if (res.ok) {
    const data = await res.json();
    if (data && data.result) {
      return data.result;
    } else {
      return [];
    }
  } else {
    throw new Error("Error al obtener el autor del servidor");
  }
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
