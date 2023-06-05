export default function InfoLogin() {
    return (
        <>
        <div className='w-1/2 bg-violet-400 rounded-lg relative overflow-hidden'>
            <img className="absolute opacity-20 drop-shadow-bolder w-1/2 bottom-0" src="/src/assets/svg/planet-galaxy.svg" alt="planet-galaxy.svg" />
            <img className="absolute opacity-20 drop-shadow-bolder w-2/3 top-1/2 right-0 rotate-12 translate-x-1/3 -translate-y-1/2" src="/src/assets/svg/planet-science.svg" alt="planet-science.svg" />
            <img className="absolute opacity-20 drop-shadow-bolder w-2/3 -rotate-45 -translate-x-1/4 -translate-y-1/4" src="/src/assets/svg/planet.svg" alt="planet.svg" />
            <img className="absolute opacity-20 drop-shadow-bolder w-1/4 right-0" src="/src/assets/svg/satellite.svg" alt="satellite.svg" />
        </div>
        </>
    )
}