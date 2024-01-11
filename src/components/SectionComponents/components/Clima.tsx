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
//   console.log(clima.weather);

//   return (
//     <div className="col-start-1 col-end-2 row-start-1 flex justify-center clima_widget text-white">
//       <div className="clima-widget-image">
//         {clima ? (
//           <ul className="mt-16 mb-4 w-full h-4/5 flex flex-col justify-between items-center">
//             <li>
//               <h1>Clima en {clima.name}</h1>
//             </li>
//             <li>Clima: {clima.weather[0].description}</li>
//             <li>Temperatura: {Math.ceil(clima.main.temp - 273.15)}ºC</li>
//             <li>
//               Sensación Térmica: {Math.ceil(clima.main.feels_like - 273.15)}ºC
//             </li>
//             <li>
//               Temperatura Máxima: {Math.ceil(clima.main.temp_max - 273.15)}ºC
//             </li>
//             <li>
//               Temperatura Mínima: {Math.ceil(clima.main.temp_min - 273.15)}ºC
//             </li>
//             <li>Humedad: {clima.main.humidity}%</li>
//             <li>Viento: {Math.ceil(clima.wind.speed * 3.6)} k/h </li>
//             <li>Amanecer: {clima.sys.sunrise}</li>
//           </ul>
//         ) : (
//           <p>Cargando...</p>
//         )}
//       </div>
//     </div>
//   );
// }
