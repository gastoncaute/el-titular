import Categories from "./HeaderButtons/Categories";

export default function Title() {
    return(
        <section className="flex flex-col items-center justify-center fixed w-1/2 object-center ">
                <div className="flex flex-col justify-evenly items-center bg-slate-400 rounded-b-3xl border-l border-r border-b border-black w-full h-24">
                    <h1>Titulo de la pagina</h1>
                    <h3>Slogan de la pagina</h3>
                </div>
                <div className="flex bg-slate-400 rounded-b-3xl border-l border-r border-b border-black w-11/12 h-12">
                    <Categories />
                </div>
            </section>
    )
}