'use client';

import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="flex justify-center items-center min-h-screen ">
      <div className="p-12 rounded-lg flex flex-col items-center space-y-8 max-w-xl w-full">
        <h3 className="text-white text-2xl font-bold">Connect with Me</h3>
        <p className="text-gray-400 text-center">
          Reach out to me on any of the following platforms!
        </p>
        <div className="flex space-x-6">
          {/* GitHub */}
          <a
            href="https://github.com/rohitp4nt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" // GitHub logo URL
              alt="GitHub"
              className="w-12 h-12"
            />
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/rohitp4nt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
           <img
  src="https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg"
  alt="Twitter"
  className="w-12 h-12"
/>

          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/rohitpn4t"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" // Instagram logo URL
              alt="Instagram"
              className="w-12 h-12"
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rohit-pant-897172201/"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" // LinkedIn logo URL
              alt="LinkedIn"
              className="w-12 h-12"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
