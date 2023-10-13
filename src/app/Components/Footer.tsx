import CategoriesButton from "./HeaderComponents/CategoriesButton";
import SocialButtons from "./HeaderComponents/HeaderButtons/SocialButtons";

export default function Footer() {
    return(
        <section className="w-full grid grid-cols-4 bg-gradient-to-b from-pageColor to-gradientColor text-white">
            <div className="col-start-2 col-end-4 flex flex-col justify-center items-center">
                <h1 className="text-7xl font-bold border-b w-full flex justify-center p-4">El Titular</h1>
                <div className="flex flex-col justify-center items-center p-4">
                <div className="p-4">
                    <SocialButtons />
                </div>
                    <h3 className="text-4xl m-4">Slogan de la pagina</h3>
                </div>
                <div className="p-4 flex justify-between w-full">
                    <ul className="w-full flex items-center justify-evenly">
                        <li className="flex">
                            <CategoriesButton />
                        </li>
                    </ul>
                </div>
                <div className="w-full flex justify-center m-4">
                    <p className="p-4 text-2xl">hola@gmail.com</p>
                    <p className="p-4 text-2xl">(223) 12345678</p>
                </div>
            </div>
        </section>
    )
}