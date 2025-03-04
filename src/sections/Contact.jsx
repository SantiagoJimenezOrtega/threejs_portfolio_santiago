import {useRef, useState} from "react";
import emailjs from '@emailjs/browser'

const Contact = () => {

    const FormRef = useRef();

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    //service_vfzrsgn service id emailJS
    const handleChange = ({target:{name, value}}) => {
        setForm({...form,[name]:value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            await emailjs.send(
                'service_vfzrsgn',
                'template_4j3faei',
                {
                    from_name: form.name,
                    to_name: 'Santiago',
                    from_email: form.email,
                    to_email: 'santoducol@gmail.com',
                    message: form.message
                }, '9Jj-cyvXlFC0vSHrN'
            )
            setLoading(false);

            alert('Your message has been sent')

            setForm({
                name:'',
                email:'',
                message:''
            })

        } catch (error) {
            setLoading(false);

            console.log(error)

            alert('Something went Wrong!!')

        }



    }
    return (
        <section className="c-space my-20 " id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col xl:mb-32">
                <img src="/assets/terminal.png" alt="terminal background"
                     className="absolute inset-0 min-h-screen lg:z-[-1]"/>
                <div className="contact-container pt-15 xl:pt-20">
                    <h3 className="head-text">Let's talk</h3>
                    <p className="text-white-600 text-lg mt-3">Whether you're looking to build a new website,
                        improve your existing platform, or bring a unique
                        project to life, I 'm here to help.
                    </p>
                    <form ref={FormRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3 ">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value ={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Enter your name"/>
                        </label>
                        <label className="space-y-3 ">
                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name="email"
                                value ={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Enter your email"/>
                        </label>
                        <label className="space-y-3 ">
                            <span className="field-label">Your Message</span>
                            <textarea
                                name="message"
                                value ={form.message}
                                onChange={handleChange}
                                required={5}
                                className="field-input"
                                placeholder="Hi, I'm interested in ..."/>
                        </label>
                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact
