import React from 'react'
import ContactForm from './components/ContactForm.jsx'

export default function Contact() {
  return (
    <>
      <main className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-[#00A78E] relative overflow-hidden'>
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00A78E] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
        </div>

        {/* Header Section */}
        <div className="relative z-10 text-center pt-16 pb-8 px-4">
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-[#00A78E] bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00A78E] to-teal-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <section className="relative z-10 flex flex-col items-center px-4 pb-16">
          <div className="w-full max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Contact Info Cards */}
              <div className="lg:col-span-1 space-y-6">
                {/* Email Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00A78E] to-teal-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">Email</h3>
                  <p className="text-gray-300 text-sm">oeunnimith@gmail.com</p>
                </div>

                {/* Phone Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00A78E] to-teal-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">Phone</h3>
                  <p className="text-gray-300 text-sm">+855 95 446 136</p>
                </div>

                {/* Location Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00A78E] to-teal-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">Location</h3>
                  <p className="text-gray-300 text-sm">Phnom Penh, Cambodia</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}