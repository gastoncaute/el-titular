import Categories from "./Categories";

export default function Title() {
    return(
        <section className="flex flex-col items-center justify-center absolute w-1/2 object-center ">
                <div className="flex items-end bg-gradient-to-b from-pageColor to-gradientColor rounded-b-3xl border-l border-r border-b border-white w-6/12 h-16 pb-3 fixed top-20">
                    <Categories />
                </div>
                <div className="flex justify-evenly items-center bg-gradient-to-b from-pageColor to-gradientColor rounded-b-3xl border-l border-r border-b border-white w-titleWidth h-24 absolute top-0">
                    <h1>Titulo de la pagina</h1>
                </div>
            </section>
    )
}