import React from 'react';

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("bharathchandra.bcr@gmail.com");
    const [message, setMessage] = React.useState("");

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method:"POST",
            headers:{"Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message}),
        })
        .then(() => alert("Message sent!"))
        .catch((error) => alert(error));
        let location = "mailto:"+email;
        window.open(
            location,
            '_blank' // <- This is what makes it open in a new window.
        );
    } 
    
    return(
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-center justify-start relative"> && 
                    <div className="bg-gray-900 absolute flex flex-wrap py-6 rounded shadow-md" style={{marginBottom: -340}}>
                        <div className="lg:w-1/2 px-4 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <p className="text-green-400 leading-relaxed">
                                bharath.barakam@outlook.com
                            </p>
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <p className="text-green-400 leading-relaxed">(513) 666-8565</p>
                        </div> 
                    </div>
                </div>
                <form
                    netlify
                    name="contact"
                    action="mailto:emailid@example.com" method="post" enctype="text/plain"
                    onSubmit={handleSubmit}
                    className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="sm:text-4xl text-3xl mb-1 font-medium title-font">
                            Hire Me
                        </h2>
                        <p className="leading-relaxed mb-5">
                            A Software Developer with 8 years of experience and proficient in a wide range of technologies such as React, JavaScript, Java, Node, Python, PHP. 
                        </p> 
                        <div className="relative mb-4">
                            <label html for="name" className="leading-7 text-sm text-gray-400">
                                Name
                            </label>
                            <input 
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                                onChange={(e) => setEmail(e.target.value)}
                            /> 
                        </div>
                        <div className="relative mb-4">
                            <label
                                htmlFor="message"
                                className="leading-7 text-sm text-gray-400">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-gray-800 rounded border border-gray-700 focus:borderindigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" 
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Submit
                        </button>
                </form>
            </div>
        </section>
    )
}