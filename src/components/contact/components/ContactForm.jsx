import React, { useState } from "react";
import Swal from "sweetalert2";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(event.target);

        formData.append("access_key", "894fdf5e-2693-4ea5-8919-caf71407069f");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            }).then((res) => res.json());

            if (res.success) {
                Swal.fire({
                    title: "Success!",
                    text: "Message Sent Successfully!",
                    icon: "success",
                    background: '#1f2937',
                    color: '#ffffff',
                    confirmButtonColor: '#00A78E',
                });
                setName("");
                setEmail("");
                setMessage("");
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong. Please try again.",
                    icon: "error",
                    background: '#1f2937',
                    color: '#ffffff',
                    confirmButtonColor: '#00A78E',
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Something went wrong. Please try again.",
                icon: "error",
                background: '#1f2937',
                color: '#ffffff',
                confirmButtonColor: '#00A78E',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="w-full">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-10 border border-white/20 shadow-2xl">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        Send Me a Message
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-[#00A78E] to-teal-400 mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-300 text-lg">
                        Let's start a conversation about your next project
                    </p>
                </div>
                
                <form onSubmit={onSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="group">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-200 group-focus-within:text-[#00A78E] transition-colors duration-300">
                                Full Name *
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A78E] focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
                                    aria-label="Name"
                                    placeholder="Enter your full name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        
                        <div className="group">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-200 group-focus-within:text-[#00A78E] transition-colors duration-300">
                                Email Address *
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A78E] focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
                                    aria-label="Email"
                                    placeholder="Enter your email address"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="group">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-200 group-focus-within:text-[#00A78E] transition-colors duration-300">
                            Your Message *
                        </label>
                        <div className="relative">
                            <textarea
                                name="message"
                                className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00A78E] focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/15 resize-none"
                                aria-label="Message"
                                placeholder="Tell me about your project, goals, or any questions you have..."
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows="6"
                            ></textarea>
                            <div className="absolute top-4 right-3">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <button
                        type="submit"
                        className="w-full group relative overflow-hidden bg-gradient-to-r from-[#00A78E] to-teal-600 hover:from-teal-600 hover:to-[#00A78E] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        disabled={isSubmitting}
                    >
                        <span className="relative z-10 flex items-center justify-center">
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending Message...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </>
                            )}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </button>
                </form>
                
                {/* Additional Info */}
                <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="text-center text-gray-400 text-sm">
                        Usually responds within 24 hours • All information is kept confidential
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;
