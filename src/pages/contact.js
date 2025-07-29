import React from 'react';
import Navbar from '../components/navbar';
import { Mail, Phone, MapPin } from 'lucide-react';
import Footer from '../components/footer';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <section className="text-[#1a1a36] py-16 px-6 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Contact Us</h1>

          <div className="grid md:grid-cols-2 gap-12 bg-white p-8 rounded-3xl shadow-lg">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Message</label>
                  <textarea
                    rows="5"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Write your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-8 text-gray-700">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p>office.ie@imail.iitm.ac.in
</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p>044 - 2257 8514</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600" />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p>I Floor, Sudha & Shankar Innovation Hub,<br/>
                        IIT Madras, Chennai - 600 036</p>
                </div>
              </div>
              <div className="mt-8">
                <iframe
                  src="https://maps.google.com/maps?q=12.992230642061594, 80.23084390958972&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-60 rounded-xl border border-gray-300"
                  title="map"
                ></iframe> 
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
