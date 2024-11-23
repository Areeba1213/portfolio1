
import React from 'react';
import { LuMailCheck } from 'react-icons/lu';
import { BsTelephone } from 'react-icons/bs';

function Contact() {
  return (
    <div id="contact" className="pt-32 container">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="space-y-8">
          <h2 className="text-5xl" data-aos="zoom-in-up">Get In Touch</h2>
          <p className="text-grey-600 text-[18px] pt-2" data-aos="zoom-in-up">
            Drop me a line, give me a call, or send me a message by submitting a form.
          </p>
          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <LuMailCheck size={30} />
            <span>areebashahid107@gmail.com</span>
          </div>
          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <BsTelephone size={30} />
            <span>(021) 0313 2462143</span>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="space-y-6">
          <div className="flex flex-col gap-2" data-aos="zoom-in-up">
            <label htmlFor="name" className="font-medium">Name</label>
            <input
              type="text"
              id="name"
              className="h-[40px] bg-transparent border border-accent px-2"
            />
          </div>

          <div className="flex flex-col gap-2" data-aos="zoom-in-up">
            <label htmlFor="email" className="font-medium">Email</label>
            <input
              type="email"
              id="email"
              className="h-[40px] bg-transparent border border-accent px-2"
            />
          </div>

          <div className="flex flex-col gap-2" data-aos="zoom-in-up">
            <label htmlFor="msg" className="font-medium">Message</label>
            <textarea
              id="msg"
              rows={6}
              className="bg-transparent border border-accent px-2"
            ></textarea>
          </div>

          <button className="bg-accent text-white py-2 px-6 w-full rounded" data-aos="zoom-in-up">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
