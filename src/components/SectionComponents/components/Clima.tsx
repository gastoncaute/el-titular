/* eslint-disable @next/next/no-img-element */
import { Clima } from "@/types/componentes.types";
import { obtenerClima } from "@/utils/obtenerClima";

export default async function Clima() {
  const clima = await obtenerClima();

  return (
    <div className="clima_widget text-white">
      <div className="clima-widget-image">
        {clima ? (
          <ul>
            <li className="clima-widget-title">
              {clima.name}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-map-pin"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="#fff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg>
            </li>
            <li className="clima-widget-description">
              {clima.weather.length > 0 && (
                <img
                  src={`http://openweathermap.org/img/w/${clima.weather[0].icon}.png`}
                  alt={clima.weather[0].description}
                  className="clima-widget-icon"
                />
              )}
            </li>
            <li className="clima-widget-temp">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-temperature"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                strokeWidth="1.3"
                stroke="#fff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
                <path d="M10 9l4 0" />
              </svg>{" "}
              {Math.ceil(clima.main.temp - 273.15)}ºC
            </li>
            <li className="clima-widget-maxMinTemp">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-temperature-plus"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="#fff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
                <path d="M8 9l4 0" />
                <path d="M16 9l6 0" />
                <path d="M19 6l0 6" />
              </svg>
              {Math.ceil(clima.main.temp_max - 273.15)}ºC
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-temperature-minus"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="#fff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
                <path d="M8 9l4 0" />
                <path d="M16 9l6 0" />
              </svg>{" "}
              {Math.ceil(clima.main.temp_min - 273.15)}ºC
            </li>
            <li className="clima-widget-wind">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-wind"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="#fff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
                <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
                <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
              </svg>
              {Math.ceil(clima.wind.speed * 3.6)} k/h
            </li>
            <li className="clima-widget-vis">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-eye"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="#fff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
              </svg>
              Visibilidad: {Number((clima.visibility / 1000).toFixed(2))} km
            </li>
            <li className="clima-widget-hum">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-droplets"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4.072 20.3a2.999 2.999 0 0 0 3.856 0a3.002 3.002 0 0 0 .67 -3.798l-2.095 -3.227a.6 .6 0 0 0 -1.005 0l-2.098 3.227a3.003 3.003 0 0 0 .671 3.798z" />
                <path d="M16.072 20.3a2.999 2.999 0 0 0 3.856 0a3.002 3.002 0 0 0 .67 -3.798l-2.095 -3.227a.6 .6 0 0 0 -1.005 0l-2.098 3.227a3.003 3.003 0 0 0 .671 3.798z" />
                <path d="M10.072 10.3a2.999 2.999 0 0 0 3.856 0a3.002 3.002 0 0 0 .67 -3.798l-2.095 -3.227a.6 .6 0 0 0 -1.005 0l-2.098 3.227a3.003 3.003 0 0 0 .671 3.798z" />
              </svg>
              Humedad: {clima.main.humidity}%
            </li>
          </ul>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
      <div className="banner-1"></div>
      <div className="banner-1"></div>
      <div className="banner-1"></div>
    </div>
  );
}
