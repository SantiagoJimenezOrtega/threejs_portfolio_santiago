import React from 'react'

const Footer = () => {
    return (
        <section className="c-space my-20 relative pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 ">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
            <div className="flex gap-3 justify-center">
                <div className="social-icon">
                    <a href="https://github.com/SantiagoJimenezOrtega" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/github.svg" alt="Github" className="w-1/2 h-1/2 ml-2.5" />
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/santiagojimenezo/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-1/2 h-1/2 ml-2.5" />
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://www.instagram.com/aquichago/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/instagram.svg" alt="Instagram" className="w-1/2 h-1/2 ml-2.5" />
                    </a>
                </div>
            </div>

            <div className="text-white-500 ">© Santiago All Rights reserved. </div>

        </section>
    )
}
export default Footer
