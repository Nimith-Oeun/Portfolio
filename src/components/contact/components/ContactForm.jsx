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
                });
                setName("");
                setEmail("");
                setMessage("");
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong. Please try again.",
                    icon: "error",
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Something went wrong. Please try again.",
                icon: "error",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="flex flex-col items-center  w-full px-5 py-10 max-sm:px-0 max-sm:py-0 ">
            <div className="w-full max-w-2xl p-8 max-sm:p-4 border  rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-white mb-6">Contact Us</h2>
                <form onSubmit={onSubmit} className="space-y-6">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-2 text-sm font-medium text-white">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="w-full px-4 py-2  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:placeholder-transparent"
                            aria-label="Name"
                            placeholder="Full Name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-2 text-sm font-medium text-white">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="w-full px-4 py-2   border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:placeholder-transparent"
                            aria-label="Email"
                            placeholder="E-Mail"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message" className="mb-2 text-sm font-medium text-white">
                            Message
                        </label>
                        <textarea
                            name="message"
                            className="w-full px-4 py-2  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none focus:placeholder-transparent"
                            aria-label="Message"
                            placeholder="Message"
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows="6"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-lg font-medium hover:text-teal-600 hover:bg-white border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;