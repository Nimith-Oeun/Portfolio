import React from 'react'
import ContactForm from './components/contactForm'

export default function Contact() {
  return (
    <>
      <main className='w-full bg-teal-600 mx-auto max-sm:w-full'>
        <section className="flex overflow-hidden flex-col items-center max-md:px-5 max-md:pb-16 px-5">
            <div className=" w-full max-md:max-w-full">
              <div className="flex justify-center items-center p-10 max-sm:p-5" >
                <ContactForm />
              </div>
            </div>
        </section>
      </main>
    </>
  )
}