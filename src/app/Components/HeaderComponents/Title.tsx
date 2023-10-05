import Categories from "./Categories";

export default function Title() {
    return(
        <section className="flex flex-col items-center justify-center absolute w-1/2 object-center ">
                <div className="flex flex-col justify-evenly items-center bg-slate-400 rounded-b-3xl border-l border-r border-b border-black w-1/2 h-24 fixed top-0">
                    <h1>Titulo de la pagina</h1>
                    <h3>Slogan de la pagina</h3>
                </div>
                <div className="flex items-end bg-slate-400 rounded-b-3xl border-l border-r border-b border-black w-11/12 h-36 pb-3">
                    <Categories />
                </div>
            </section>
    )
}