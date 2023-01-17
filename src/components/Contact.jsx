import React from 'react'

export default function Contact() {
  return (
    <div id="contact" className="h-screen w-full pt-24 bg-orange-900 bg-opacity-5 flex justify-between items-center flex-col">
    <div className="flex flex-col p-4 justify-center items-center max-w-screen-lg mx-auto text-center text-orange-900">
      <h1 className='text-6xl font-bold font-siganatrue'>contact us!</h1>
      You can leave a message and we will get back to you as soon as possible
    </div>

    <form action="https://getform.io/f/67597346-bb7a-4f2a-9a8d-bc36586010e1" method="POST" className="h-2/3 flex flex-col w-4/5 md:w-1/3 justify-evenly m-auto">
      <input
        type="text"
        placeholder="enter your name"
        name="name"
        className="p2 bg-transparent border-2 border-orange-900 rounded-md focus:outline-none "
      />
      <input
        type="text"
        placeholder="enter your email"
        name="email"
        className="p2 bg-transparent border-2 border-orange-900 rounded-md focus:outline-none"
      />
      <textarea
      placeholder="enter your message"
        name="message"
        rows="10"
        className="p2 bg-transparent rounded-md  focus:outline-none border-2 border-orange-900"
      ></textarea>
      <button className="px-6 py-3 flex items-center rounded-md hover:scale-110 duration-300 bg-white text-orange-900 font-bold mx-auto border-2 border-orange-900">
        Let's tolk
      </button>
    </form>
  </div>
  )
}
