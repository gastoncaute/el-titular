export default function Clima() {
  return (
    <div className="col-start-1 col-end-2 row-start-1 flex justify-center clima_widget">
      <div className="m-8 fixed w-1/6 h-5/6 flex justify-center items-center -mt-8 mr-4">
        <script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        ></script>
        <div
          className="elfsight-app-97f08140-4b50-4b41-ac63-c01631f53212"
          data-elfsight-app-lazy
        ></div>
      </div>
    </div>
  );
}

// import { Clima } from "@/types/componentes.types";

// async function obtenerClima() {
//   const res = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=-38.00&lon=-57.55&appid=156c31ab1b623e3dd0ca6bdeecfb9c69`
//   );
//   const datos = await res.json();
//   return datos as Clima;
// }

// export default async function Clima() {
//   const clima = await obtenerClima();

//   return (
//     <div className="col-start-1 col-end-2 row-start-1 flex justify-center clima_widget text-white">
//       <div className="clima-widget-image">
//         {clima ? (
//           <ul>
//             <li className="clima-widget-title">
//               <h1>Clima en {clima.name}</h1>
//             </li>
//             <li className="clima-widget-description">
//               Clima: {clima.weather[0].description}
//             </li>
//             <li className="clima-widget-temp">
//               Temperatura: {Math.ceil(clima.main.temp - 273.15)}ºC
//             </li>
//             <li className="clima-widget-tempSens">
//               Sensación Térmica: {Math.ceil(clima.main.feels_like - 273.15)}ºC
//             </li>
//             <li className="clima-widget-maxTemp">
//               Temperatura Máxima: {Math.ceil(clima.main.temp_max - 273.15)}ºC
//             </li>
//             <li className="clima-widget-minTemp">
//               Temperatura Mínima: {Math.ceil(clima.main.temp_min - 273.15)}ºC
//             </li>
//             <li className="clima-widget-hum">
//               Humedad: {clima.main.humidity}%
//             </li>
//             <li className="clima-widget-wind">
//               Viento: {Math.ceil(clima.wind.speed * 3.6)} k/h{" "}
//             </li>
//             <li>Amanecer: {clima.sys.sunrise}</li>
//           </ul>
//         ) : (
//           <p>Cargando...</p>
//         )}
//       </div>
//     </div>
//   );
// }
