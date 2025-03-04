import React from "react";
import coverImage from "../assets/about.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";
const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us | Royal Bakery</title>
        <meta
          name="description"
          content="Get in touch with Royal Bakery for inquiries, orders, and customer support. We're here to help with all your bakery needs!"
        />
        <meta
          name="keywords"
          content="contact us, customer support, bakery orders, Royal Bakery, get in touch, order inquiry, cake orders, pastries, fresh bakery"
        />
        <meta property="og:title" content="Contact Us | Royal Bakery" />
        <meta
          property="og:description"
          content="Have questions or need assistance? Contact Royal Bakery for orders and support."
        />
        <meta property="og:url" content="https://www.royalbakery.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Contact Us | Royal Bakery" />
        <meta
          name="twitter:description"
          content="Reach out to Royal Bakery for support, orders, and inquiries."
        />
      </Helmet>

      <Navbar />
      <div className="w-full  h-full bg-[#171718] ">
        {/* Hero Section */}
        <div className="relative h-96 sm:mt-30 md:mt-40 w-full ">
          <div className="absolute inset-0 ">
            <img
              // src={coverImage}
              alt="Contact us cover"
              lazy="true"
              className="w-full h-full object-cover"
              style={{
                backgroundImage: `url(${coverImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                lazy: "true",
                backgroundAttachment: "fixed",
              }}
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          <div className="relative h-full flex flex-col justify-center items-center text-white">
            <span className="text-4xl md:text-6xl uppercase cormorant-garamond-medium text-center max-w-2xl mb-6">
              Contact Us
            </span>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            {/* Contact Form */}
            <div className="bg-[#1E1E1F] p-8 rounded-lg">
              <span className="text-3xl  mb-6 text-white cormorant-garamond-medium">
                Send Us a Message
              </span>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 bg-[#171718] border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#8B7355]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 bg-[#171718] border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#8B7355]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-3 bg-[#171718] border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#8B7355]"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="5"
                    className="w-full p-3 bg-[#171718] border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#8B7355]"
                  ></textarea>
                </div>
                {/* <button
                  type="submit"
                  className="w-full py-3 bg-[#8B7355] text-white rounded-md hover:bg-[#7A6548] transition-colors duration-300"
                >
                  Send Message
                </button> */}
                <button
                  type="submit"
                  className="relative w-full overflow-hidden border border-[#8B7355] px-6 py-2 sm:px-8 sm:py-3 text-xs sm:text-sm tracking-widest group"
                >
                  <span className="relative z-10 transition-colors text-white  jost-font  duration-300 group-hover:text-white">
                    SEND US
                  </span>
                  <div className="absolute inset-0 bg-[#8B7355] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <span className="text-3xl  mb-6 text-white cormorant-garamond-medium">
                  Get in Touch
                </span>
                <p className="text-gray-400  mb-8">
                  We'd love to hear from you. Whether you have a question about
                  our products, want to place a custom order, or need
                  assistance, we're here to help.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-center space-x-4 text-gray-400">
                  <MapPin size={24} className="text-[#8B7355]" />
                  <div>
                    <span className="text-white  mb-1 cormorant-garamond-medium ">
                      Visit Us
                    </span>
                    <p>219/2 kandyroad chavakachcheri Jaffna 40000</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-gray-400">
                  <Phone size={24} className="text-[#8B7355]" />
                  <div>
                    <span className="text-white cormorant-garamond-medium mb-1">
                      Call Us
                    </span>
                    <p>+94 77 614 6135</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-gray-400">
                  <Mail size={24} className="text-[#8B7355]" />
                  <div>
                    <span className="text-white cormorant-garamond-medium  mb-1">
                      Email Us
                    </span>
                    <p>info@royalbakery.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-gray-400">
                  <Clock size={24} className="text-[#8B7355]" />
                  <div>
                    <span className="text-white cormorant-garamond-medium  mb-1">
                      Opening Hours
                    </span>
                    <p>Monday - Sunday: 7:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full h-96 bg-[#1E1E1F] rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.2374965864688!2d80.16358827478892!3d9.660737490427993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afef9ad936612b1%3A0xd94efd22854f12d6!2sRoyal%20Bake%20House!5e0!3m2!1sen!2slk!4v1740737758499!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
