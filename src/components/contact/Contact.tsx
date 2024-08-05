// src/components/contact/Contact.tsx
import React from 'react';
import styled from 'styled-components';

const ContactStyled = styled.div`
  padding: 20px;
  text-align: center;
  color: white;
`;

const Contact: React.FC = () => {
    return (
      <div className=" text-white p-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Contact</h1>
        <p className="text-lg mb-8 text-center">
          Feel free to reach out to me through the contact form or via email.
        </p>
        <div className="max-w-md mx-auto bg-gray-700 p-6 rounded-lg shadow-lg">
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  };

export default Contact;
