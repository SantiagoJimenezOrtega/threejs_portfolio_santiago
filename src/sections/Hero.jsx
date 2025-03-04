import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import {HackerRoom} from "../components/HackerRoom.jsx";
import {Suspense} from "react";
import {CanvasLoader} from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube  from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";


const Hero = () => {

    const isSmall= useMediaQuery({maxWidth: 400});
    const isMobile= useMediaQuery({maxWidth: 768});
    const isTablet= useMediaQuery({minWidth: 768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-20 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-semibold text-white text-center font-generalsans">
                    Hi, I am santiago
                    <span className="waving-hand">
                        👋
                    </span>
                </p>
                <p className="hero_tag text-gray_gradient text-center">
                    Building Great Web Experiences
                </p>
                <div className="w-full h-full absolute inset-0">
                    {/*<Leva/>*/}
                    <Canvas className="w-full h-full mt-">
                        <Suspense fallback={<CanvasLoader/>}>

                        <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
                            <HeroCamera isMobile={isMobile}>
                        <HackerRoom
                            //scale={0.3}
                            //position={[0, 0, 0]}
                            //rotation={[0, -Math.PI / 2, 0]}
                            position={sizes.deskPosition}
                            rotation={[0.3, -3.6, 0]}
                            scale={sizes.deskScale}
                        />
                            </HeroCamera >
                        <group>
                            <Target position={ sizes.targetPosition}/>
                            <ReactLogo position={ sizes.reactLogoPosition}/>
                            <Cube position={ sizes.cubePosition}/>
                            <Rings position={ sizes.ringPosition}/>
                        </group>

                            <ambientLight intensity={1} />
                            <directionalLight intensity={1} position={[10, 10, 10]}/>
                        </Suspense>
                    </Canvas>

                    <div className="absolute bottom-7 left-0 right-0 w-full flex c-space justify-center">
                        <a href="#about" className="w-fit">
                            <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
                        </a>

                    </div>


                </div>
            </div>
        </section>
    )
}
export default Hero
