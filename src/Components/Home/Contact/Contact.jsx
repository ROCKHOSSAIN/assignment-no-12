import React from 'react';

const Contact = () => {
  return (
    <div className="md:flex container mx-auto items-center">
      {/* Contact Info */}
      <div className="">
        <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
        <p>
          <strong>Address:</strong> 123 Main St, Cityville, State, 12345
        </p>
        <p>
          <strong>Phone:</strong> (555) 123-4567
        </p>
        <p>
          <strong>Email:</strong> blood@gmail.com
        </p>
      </div>

      {/* Contact Form */}
      <div className="md:w-2/3 max-w-md mx-auto mt-8 p-4">
        <h1 className="text-2xl font-semibold text-center mb-6">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Enter full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="user@gmail.com"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Ex:(123) 456-7890"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Your message..."
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
