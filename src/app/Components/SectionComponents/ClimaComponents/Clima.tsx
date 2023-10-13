import { ClimaWidget } from "./ClimaWidget";

export default function Clima() {
    
    return(
        <div className="col-start-1 col-end-2 flex justify-center -z-10">
            <div className="border border-pageColor m-8 fixed w-1/6 h-5/6 rounded-3xl flex justify-center items-center mt-16 mr-4">
                <ClimaWidget />
            {/*navigator.getCurrentLocation */}
            </div>
        </div>
    )
}