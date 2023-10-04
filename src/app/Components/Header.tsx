import Categories from "./HeaderButtons/Categories";
import FacebookButton from "./HeaderButtons/SocialButtons/FacebookButton";
import InstagramButton from "./HeaderButtons/SocialButtons/InstagrasmButton";
import TikTokButton from "./HeaderButtons/SocialButtons/TikTokButton";
import TwitterButton from "./HeaderButtons/SocialButtons/TwitterButton";
import YouTubrButton from "./HeaderButtons/SocialButtons/YouTubeButton";

export default function Header() {
    return (
        <header className="grid grid-cols-4 grid-rows-1 bg-slate-500">
            <ul className="flex justify-center items-center col-start-1 col-end-2 row-span-1">
                <li>
                    <a href="">Inicio</a>
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
    )
}

{/* <div className="col-start-2 col-end-4 row-start-1 row-end-3 flex flex-col justify-center items-center bg-slate-400 rounded-b-3xl border-l border-r border-b border-black">
<h1>Titulo de la pagina</h1>
<h3>Slogan de la pagina</h3>
</div>
<div className="col-start-2 col-end-4 row-start-3 row-end-4 flex justify-center w-11/12 bg-slate-400 rounded-b-3xl border-l border-r border-b border-black">
<Categories />
</div> */}