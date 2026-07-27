import { useState } from "react";
import ArrowRight from "../components/ArrowRight";
import ColorAccent from "../components/ColorAccent";
import NewsletterBanner from "../components/NewsletterBanner";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email format";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-900 px-4 md:px-8 lg:px-12 py-12 lg:py-20 relative overflow-hidden">
        <div className="absolute top-8 right-4 md:right-12">
          <ColorAccent />
        </div>
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-400 opacity-20 rounded" />
        <div className="absolute top-16 right-1/3 w-3 h-3 bg-indigo-500 hidden md:block" />
        <div className="relative z-10 max-w-2xl">
          <div className="w-3 h-3 bg-orange-400 mb-6" />
          <p className="text-gray-400 text-xs tracking-widest uppercase mb-3">
            Contact Us
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
            Let's Start a<br />Conversation
          </h1>
          <p className="text-gray-400 text-sm max-w-md">
            Have a project in mind? We'd love to hear from you. Send us a
            message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-white px-4 md:px-8 lg:px-12 py-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:-mt-28 relative z-20">
          {[
            {
              icon: "📞",
              title: "Call Us",
              line1: "020 7993 2905",
              line2: "+91 888 777 6660",
              accent: "bg-indigo-600",
            },
            {
              icon: "✉️",
              title: "Email Us",
              line1: "hi@finsweet.com",
              line2: "career@finsweet.com",
              accent: "bg-orange-400",
            },
            {
              icon: "📍",
              title: "Visit Us",
              line1: "DLF Cybercity, Bhubaneswar,",
              line2: "India, 652050",
              accent: "bg-indigo-600",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-lg p-6 md:p-8 shadow-lg border border-gray-50 relative group hover:shadow-xl transition-shadow"
            >
              <div
                className={`absolute top-0 left-0 w-full h-1 ${card.accent} rounded-t-lg`}
              />
              <span className="text-3xl block mb-4">{card.icon}</span>
              <h3 className="font-bold text-gray-900 text-lg mb-3">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm">{card.line1}</p>
              <p className="text-gray-500 text-sm">{card.line2}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form + Info */}
      <AnimatedSection>
        <section className="bg-blue-50 px-4 md:px-8 lg:px-12 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left - Form */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-indigo-600" />
                <p className="text-gray-400 text-xs tracking-widest uppercase">
                  Get In Touch
                </p>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
                Send us a Message
              </h2>
              <p className="text-gray-500 text-sm mb-8 max-w-md">
                Fill in the form below and our team will get back to you within 24
                hours.
              </p>

              {submitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-700 text-sm font-semibold">
                    ✅ Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Your Name *"
                      className={`w-full bg-white px-4 py-3 rounded text-sm outline-none focus:ring-2 focus:ring-indigo-300 border border-gray-100 ${
                        errors.name ? "ring-2 ring-red-300" : ""
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="Email Address *"
                      type="email"
                      className={`w-full bg-white px-4 py-3 rounded text-sm outline-none focus:ring-2 focus:ring-indigo-300 border border-gray-100 ${
                        errors.email ? "ring-2 ring-red-300" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="Phone Number"
                    className="flex-1 bg-white px-4 py-3 rounded text-sm outline-none focus:ring-2 focus:ring-indigo-300 border border-gray-100"
                  />
                  <select
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    className="flex-1 bg-white px-4 py-3 rounded text-sm outline-none focus:ring-2 focus:ring-indigo-300 border border-gray-100 text-gray-600"
                  >
                    <option value="">Select Subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="project">Project Discussion</option>
                    <option value="support">Technical Support</option>
                    <option value="career">Career Opportunity</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
                <div>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Write your message here... *"
                    rows={5}
                    className={`w-full bg-white px-4 py-3 rounded text-sm outline-none focus:ring-2 focus:ring-indigo-300 resize-none border border-gray-100 ${
                      errors.message ? "ring-2 ring-red-300" : ""
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>
                <div className="relative inline-block">
                  <div className="absolute -top-1 -left-1 w-3 h-3 bg-orange-400" />
                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded hover:bg-indigo-700 transition-colors relative z-10 font-semibold"
                  >
                    Send Message <ArrowRight />
                  </button>
                </div>
              </form>
            </div>

            {/* Right - Info */}
            <div className="w-full lg:w-80 flex flex-col gap-6">
              <div className="bg-gray-900 rounded-lg p-6 md:p-8 text-white">
                <div className="w-3 h-3 bg-orange-400 mb-4" />
                <h3 className="font-bold text-lg mb-3">Working Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="w-full h-px bg-gray-700" />
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="w-full h-px bg-gray-700" />
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Sunday</span>
                    <span className="text-orange-400">Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 md:p-8 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "Facebook", icon: "f", color: "bg-blue-600" },
                    { name: "Twitter", icon: "𝕏", color: "bg-gray-900" },
                    { name: "Instagram", icon: "📷", color: "bg-pink-500" },
                    { name: "LinkedIn", icon: "in", color: "bg-blue-700" },
                  ].map((social) => (
                    <button
                      key={social.name}
                      className={`${social.color} text-white rounded py-2 px-3 text-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2`}
                    >
                      <span className="text-xs">{social.icon}</span>
                      {social.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Office Locations */}
      <AnimatedSection>
        <section className="bg-white px-4 md:px-8 lg:px-12 py-12 lg:py-16">
          <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-4">
            <div>
              <p className="text-gray-400 text-xs tracking-widest uppercase mb-2">
                Our Offices
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
                We have offices across
                <br />
                the globe
              </h2>
            </div>
            <ColorAccent />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                city: "Bhubaneswar",
                country: "India",
                address: "DLF Cybercity, Chandrasekharpur",
                phone: "+91 888 777 6660",
                type: "Headquarters",
                img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&auto=format&fit=crop",
              },
              {
                city: "San Francisco",
                country: "USA",
                address: "580 Howard St, Suite 402",
                phone: "+1 415 555 0199",
                type: "Branch Office",
                img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&auto=format&fit=crop",
              },
              {
                city: "London",
                country: "UK",
                address: "45 King William Street, EC4R",
                phone: "+44 020 7993 2905",
                type: "Branch Office",
                img: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=400&auto=format&fit=crop",
              },
            ].map((office) => (
              <div
                key={office.city}
                className="border border-gray-100 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow"
              >
                <div className="overflow-hidden">
                  <img
                    src={office.img}
                    alt={`${office.city} office`}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-indigo-600 font-semibold bg-indigo-50 px-2 py-1 rounded-full">
                    {office.type}
                  </span>
                  <h3 className="font-bold text-gray-900 text-lg mt-3 mb-1">
                    {office.city},{" "}
                    <span className="text-gray-400">{office.country}</span>
                  </h3>
                  <p className="text-gray-500 text-sm mb-1">{office.address}</p>
                  <p className="text-gray-500 text-sm">{office.phone}</p>
                  <div className="flex mt-4">
                    <div className="w-8 h-0.5 bg-orange-400" />
                    <div className="flex-1 h-0.5 bg-indigo-600 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection>
        <section className="bg-orange-50 px-4 md:px-8 lg:px-12 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="flex-1">
              <div className="w-3 h-3 bg-indigo-600 mb-4" />
              <p className="text-gray-400 text-xs tracking-widest uppercase mb-2">
                FAQ
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
                Frequently Asked
                <br />
                Questions
              </h2>
              <p className="text-gray-500 text-sm mb-6 max-w-sm">
                Can't find the answer you're looking for? Reach out to our team
                and we'll get back to you shortly.
              </p>
              <button
                onClick={() =>
                  window.scrollTo({ top: 500, behavior: "smooth" })
                }
                className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition-colors font-semibold"
              >
                Contact Support <ArrowRight />
              </button>
            </div>
            <div className="flex-1 space-y-3">
              <FaqItem
                question="What services does Finsweet offer?"
                answer="We provide a comprehensive range of services including technical support, software development, AWS/Azure cloud solutions, consulting, and IT services. Our team works closely with clients to deliver customized solutions."
              />
              <FaqItem
                question="How long does a typical project take?"
                answer="Project timelines vary depending on scope and complexity. A typical web application takes 8-16 weeks from discovery to deployment. We provide detailed timelines during the project planning phase."
              />
              <FaqItem
                question="What is your pricing model?"
                answer="We offer flexible pricing including fixed-price projects, time & materials, and dedicated team models. We'll recommend the best approach based on your project requirements and budget."
              />
              <FaqItem
                question="Do you offer post-launch support?"
                answer="Yes! We provide comprehensive post-launch support and maintenance packages. Our team ensures your application stays updated, secure, and performs optimally after deployment."
              />
              <FaqItem
                question="How can I request a quote?"
                answer="You can fill out the contact form above, email us at hi@finsweet.com, or call us directly. We'll schedule a discovery call to understand your needs and provide a detailed proposal."
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      <NewsletterBanner />
      <Footer />
    </div>
  );
};

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="font-bold text-gray-900 text-sm">{question}</span>
        <span
          className={`text-indigo-600 text-xl font-bold transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-gray-500 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
