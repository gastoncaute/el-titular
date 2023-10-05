import BurgerButton from "./HeaderButtons/BurgerButton";
import FacebookButton from "./HeaderButtons/SocialButtons/FacebookButton";
import InstagramButton from "./HeaderButtons/SocialButtons/InstagrasmButton";
import TikTokButton from "./HeaderButtons/SocialButtons/TikTokButton";
import TwitterButton from "./HeaderButtons/SocialButtons/TwitterButton";
import YouTubrButton from "./HeaderButtons/SocialButtons/YouTubeButton";
import Categories from "./HeaderComponents/Categories";
import Title from "./HeaderComponents/Title";

export default function Header() {
    return (
        <section className="flex justify-center">
            <header className="grid grid-cols-4 grid-rows-1 bg-slate-500 w-screen fixed">
                <ul className="flex justify-center items-center col-start-1 col-end-2 row-span-1">
                    <li className="w-full flex items-center ml-8">
                        <BurgerButton />
                    </li>
                    <li className="w-full flex items-center justify-left">
                        <button>
                            <a href="">Inicio</a>
                        </button>
                    </li>
                </ul>
                <ul className="flex justify-center col-start-4 col-end-5 row-span-1">
                    <li className="m-2">
                        <InstagramButton />
                    </li>
                    <li className="m-2">
                        <TwitterButton />
                    </li>
                    <li className="m-2">
                        <TikTokButton />
                    </li>
                    <li className="m-2">
                        <YouTubrButton />
                    </li>
                    <li className="m-2">
                        <FacebookButton />
                    </li>
                </ul>
            </header>
            <Title />
        </section>
    )
}

