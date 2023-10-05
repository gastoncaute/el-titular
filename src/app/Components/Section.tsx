export default function Section() {
    return(
        <section className="w-full h-screen grid grid-cols-4 grid-rows-1">
            <div className="w-full h-full bg-red-700 col-start-1 col-end-2 flex justify-center items-center">Clima</div>
            <div className="w-full h-full bg-green-600 col-start-2 col-end-4 flex justify-center items-center">Noticias</div>
            <div className="w-full h-full bg-blue-600 col-start-4 col-end-5 flex justify-center items-center">Calendario o Tendencias de TW</div>
        </section>
    )
}