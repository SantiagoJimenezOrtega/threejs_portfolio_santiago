import {useState} from 'react'
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {
    const [hasCopied, setHasCopied ] = useState(false)     ;
    const handleCopy =  () => {
        navigator.clipboard.writeText("santoducol@gmail.com")        ;
        setHasCopied(true) ;
        setTimeout(() => {
            setHasCopied(false)
        }, 2000);
        
    }
    return (
        <section className="c-space my-20 lg:mb-10" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-2 md:grid-cols-2 grid-cols-1  xs:grid-cols-1 gap-5 h-full overflow-y-auto">
                <div className="col-span-2 xs:col-span-1  sm:col-span-1 md:col-span-1 lg:col-span-1 xl:row-span-1 ">
                    <div className="grid-container" >
                        <img src="/assets/grid12.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Hi, I'm Santiago.</p>
                            <p className="grid-subtext"> With 2 years of experience in Frontend Development and over a year in Game Development, I’m passionate about building intuitive, visually engaging web interfaces and creating immersive, interactive gaming experiences that captivate users.</p>
                            <a href="/documents/Santiago_JimenezOrtega_Resume.pdf" download="Santiago_JimenezOrtega_Resume">
                                <Button name="Download CV" isBeam containerClass="w-full mt-10"></Button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 col-span-1 md:col-span-1 xl:row-span-1 xs:row-span-2" >
                    <div className="grid-container" >
                        <img src="/assets/grid21.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">I craft dynamic and engaging web applications and games by leveraging my expertise in JavaScript/TypeScript, React, Python, Blender, and Unreal Engine. My skill set allows me to blend cutting-edge technology with creativity, delivering immersive and high-performing digital experiences.</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 col-span-1 xl:row-span-1 lg:col-span-1" >
                    <div className="grid-container" >
                        <div className="rounded-3x1 w-full sm:h-[326px] h-fit flex justify-center items-center" >
                            <Globe

                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: 5.53261, lng: -73.36168,
                                    text: "I'm here!",
                                    color: "white",
                                    size: 250
                                }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I work remotly across most timezones.</p>
                            <p className="grid-subtext">I'm based in Colombia, but I work remotely for clients all over the world.</p>
                            <a href="#contact">
                                <Button name="Contact me" isBeam containerClass="w-full mt-10"></Button>
                            </a>
                        </div>
                    </div>
                </div>
                 <div className=" col-span-2 xl:row-span-1 md:col-span-1 lg:col-span-1 xl:col-span-2 ">
                     <div className="grid-container" >
                         <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                         <div>
                             <p className="grid-headtext">Creating Engaging Digital Experiences</p>
                             <p className="grid-subtext">I'm passionate about building intuitive web interfaces and immersive digital experiences. I focus on seamless user interactions, responsive design, and performance optimization. With experience in both frontend and game development, I bring creative ideas to life through code, enhancing usability and engagement.</p>
                         </div>
                     </div>
                 </div>
                <div className="md:col-span-1 col-span-2 col-span-1 xl:row-span-1 ">
                    <div className="grid-container" >
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[166px] sm:h-[276px] h-fit object-cover sm:object-top " />
                        <div className="space-y-2">
                            <p className="grid-subtext flex justify-center items-center mt-20">Contact me</p>
                            <div className="copy-container" onClick={handleCopy} >
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy"  />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">santoducol@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>
        </section>
    )
}
export default About
