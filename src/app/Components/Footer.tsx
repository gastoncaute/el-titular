import CategoriesButton from "./HeaderComponents/CategoriesButton";
import SocialButtons from "./HeaderComponents/HeaderButtons/SocialButtons";

export default function Footer() {
    return(
        <section className="w-full grid grid-cols-4 bg-gradient-to-b from-pageColor to-gradientColor text-white">
            <div className="col-start-2 col-end-4 flex flex-col justify-center items-center">
                <h1 className="text-7xl font-bold border-b w-full flex justify-center p-4">El Titular</h1>
                <div className="flex flex-col justify-center items-center p-4">
                <div className="p-4 flex justify-evenly">
                    <SocialButtons />
                </div>
                    <h3 className="text-4xl m-4">Slogan de la pagina</h3>
                </div>
                <div className="p-4 flex justify-between w-full">
                    <ul className="w-full flex items-center justify-center">
                        <li className="w-full flex justify-evenly">
                            <CategoriesButton />
                        </li>
                    </ul>
                </div>
                <div className="w-full flex justify-center m-4">
                    <p className="p-4 text-2xl flex items-center">
                        {/* @ts-ignore */}
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                            <path d="M3 7l9 6l9 -6" />
                        </svg>
                        hola@gmail.com</p>
                    <p className="p-4 text-2xl flex items-center">
                        {/* @ts-ignore */}
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        </svg>
                        (223) 12345678
                    </p>
                </div>
            </div>
        </section>
    )
}