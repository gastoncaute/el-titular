async function obtenerClima() {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=-38.00&lon=-57.55&appid=156c31ab1b623e3dd0ca6bdeecfb9c69`);
    const datos = await res.json();
    return datos
}

export async function ClimaWidget() {
    const clima = await obtenerClima();

    return (
        <>
            <div className="flex flex-col items-center justify-center text-xl">
                {clima ? (
                    <ul>
                        <li>Clima en {clima.name}</li>
                        <li>Temperatura: {Math.ceil(clima.main.temp - 273.15)}ºC </li>
                        <li>Sensación Térmica: {Math.ceil(clima.main.feels_like - 273.15)}ºC</li>
                        <li>Temperatura Máxima: {Math.ceil(clima.main.temp_max - 273.15)}ºC</li>
                        <li>Temperatura Mínima: {Math.ceil(clima.main.temp_min - 273.15)}ºC</li>
                        <li>Humedad: {clima.main.humidity}%</li>
                        <li>Viento: {Math.ceil(clima.wind.speed * 3.6)} k/h </li>
                        <li>Amanecer: {clima.sys.sunrise}</li>
                    </ul>
                ) : (
                    <p>Cargando...</p>
                )}
            </div>
        </>
    );
}
