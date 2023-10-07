import BurgerButton from "./HeaderComponents/HeaderButtons/BurgerButton";
import SocialButtons from "./HeaderComponents/HeaderButtons/SocialButtons";
import Title from "./HeaderComponents/Title";

export default function Header() {
    return (
        <section className="flex justify-center">
            <header className="grid grid-cols-4 bg-gradient-to-b from-pageColor to-gradientColor w-screen h-14 fixed">
                <ul className="flex justify-center items-center col-start-1 col-end-2">
                    <li className="w-48 flex items-center ml-8">
                        <BurgerButton />
                    </li>
                    <li className="w-full flex items-center justify-left">
                        <button>
                            <a href="">Inicio</a>
                        </button>
                    </li>
                </ul>
                <ul className="flex justify-center col-start-4 col-end-5">
                    <SocialButtons />
                </ul>
            </header>
            <Title />
        </section>
    )
}

