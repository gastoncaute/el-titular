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
                <h2>Clima en Mar del Plata</h2>
                {clima ? (
                    <ul>
                        <li>{clima.weather[0].main}</li>
                        <li>Temperatura: {clima.main.temp}</li>
                        <li>Sensación Térmica: {clima.main.feels_like}</li>
                        <li>Temperatura Mínima: {clima.main.temp_max}</li>
                        <li>Temperatura Máxima: {clima.main.temp_min}</li>
                        <li>Presión Atmosférica: {clima.main.pressure}</li>
                        <li>Humedad: {clima.main.humidity}</li>
                    </ul>
                ) : (
                    <p>Cargando...</p>
                )}
            </div>
        </>
    );
}
