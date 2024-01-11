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
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="icon icon-tabler icon-tabler-map-pin"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 stroke-width="1.5"
//                 stroke="#fff"
//                 fill="none"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               >
//                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                 <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
//                 <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
//               </svg>
//               {clima.name}
//             </li>
//             <li className="clima-widget-description">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="icon icon-tabler icon-tabler-brand-soundcloud"
//                 width="64"
//                 height="64"
//                 viewBox="0 0 24 24"
//                 stroke-width="1"
//                 stroke="#fff"
//                 fill="none"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               >
//                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                 <path d="M17 11h1c1.38 0 3 1.274 3 3c0 1.657 -1.5 3 -3 3l-6 0v-10c3 0 4.5 1.5 5 4z" />
//                 <path d="M9 8l0 9" />
//                 <path d="M6 17l0 -7" />
//                 <path d="M3 16l0 -2" />
//               </svg>
//             </li>
//             <li className="clima-widget-temp">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="icon icon-tabler icon-tabler-temperature"
//                 width="32"
//                 height="32"
//                 viewBox="0 0 24 24"
//                 stroke-width="1"
//                 stroke="#fff"
//                 fill="none"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               >
//                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                 <path d="M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
//                 <path d="M10 9l4 0" />
//               </svg>{" "}
//               {Math.ceil(clima.main.temp - 273.15)}ºC
//             </li>
//             <li className="clima-widget-maxTemp">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="icon icon-tabler icon-tabler-temperature-plus"
//                 width="32"
//                 height="32"
//                 viewBox="0 0 24 24"
//                 stroke-width="1"
//                 stroke="#fff"
//                 fill="none"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               >
//                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                 <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
//                 <path d="M8 9l4 0" />
//                 <path d="M16 9l6 0" />
//                 <path d="M19 6l0 6" />
//               </svg>
//               {Math.ceil(clima.main.temp_max - 273.15)}ºC
//             </li>
//             <li className="clima-widget-minTemp">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="icon icon-tabler icon-tabler-temperature-minus"
//                 width="32"
//                 height="32"
//                 viewBox="0 0 24 24"
//                 stroke-width="1"
//                 stroke="#fff"
//                 fill="none"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               >
//                 <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                 <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
//                 <path d="M8 9l4 0" />
//                 <path d="M16 9l6 0" />
//               </svg>{" "}
//               {Math.ceil(clima.main.temp_min - 273.15)}ºC
//             </li>
//             <li className="clima-widget-hum">
//               Humedad: {clima.main.humidity}%
//             </li>
//             <li className="clima-widget-wind">
//               Viento: {Math.ceil(clima.wind.speed * 3.6)} k/h{" "}
//             </li>
//           </ul>
//         ) : (
//           <p>Cargando...</p>
//         )}
//       </div>
//     </div>
//   );
// }
