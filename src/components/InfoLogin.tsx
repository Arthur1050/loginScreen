import SlideComents from "./SlideComents";
import SobreNos from "./SobreNos";

export default function InfoLogin() {
    return (
        <>
        <div className='w-1/2 bg-violet-400 rounded-lg relative flex flex-col p-2 overflow-hidden'>
            <img className="pointer-events-none absolute select-none opacity-10 drop-shadow-bolder w-3/4 bottom-0 translate-y-1/4 -translate-x-1/4" src="/src/assets/svg/planet-galaxy.svg" alt="planet-galaxy.svg" />
            <img className="pointer-events-none absolute select-none opacity-10 drop-shadow-bolder w-1/2 top-1/2 right-0 rotate-12 translate-x-1/3 -translate-y-1/2" src="/src/assets/svg/planet-science.svg" alt="planet-science.svg" />
            <img className="pointer-events-none absolute select-none opacity-10 drop-shadow-bolder w-2/3 -rotate-45 -translate-x-1/4 -translate-y-1/4" src="/src/assets/svg/planet.svg" alt="planet.svg" />
            <img className="pointer-events-none absolute select-none opacity-10 drop-shadow-bolder w-1/4 right-6 top-4" src="/src/assets/svg/satellite.svg" alt="satellite.svg" />
            <SobreNos />
            <SlideComents />
        </div>
        </>
    )
}