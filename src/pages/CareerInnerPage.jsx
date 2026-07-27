import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import ArrowRight from "../components/ArrowRight";
import ColorAccent from "../components/ColorAccent";
import NewsletterBanner from "../components/NewsletterBanner";
import Footer from "../components/Footer";
import { jobs } from "../data/jobs";

const tabContent = {
  Details: [
    "Create and edit video content for multi-platform use and distribution for social media channels.",
    "Design & Create highly engaging industry-related content in both photo, gif & video format",
    "Publish Posts on various social media channels",
    "Promote content on social networks and monitor engagement (e.g. comments and shares)",
    "Research industry-related topics",
    "Editing audio and sound design on projects",
    "Engage in opportunities to develop original content and concepts for web and mobile",
    "Create motion graphics and animations using 2D and 3D applications for marketing and promotional usage.",
    "Manage the day-to-day handling of all social media channels adapting content to suit different channels",
  ],
  Requirements: [
    "Bachelor's degree in Computer Science, Engineering, or a related field",
    "3+ years of professional experience in software development",
    "Strong proficiency in JavaScript, React, and modern frontend frameworks",
    "Experience with RESTful APIs and backend integration",
    "Familiarity with version control systems (Git)",
    "Excellent problem-solving and communication skills",
    "Ability to work independently and as part of a team",
  ],
  Responsibilities: [
    "Develop and maintain high-quality web applications using modern technologies",
    "Collaborate with design and product teams to implement new features",
    "Write clean, maintainable, and well-documented code",
    "Participate in code reviews and provide constructive feedback",
    "Troubleshoot and debug applications to optimize performance",
    "Stay up-to-date with emerging technologies and industry trends",
    "Contribute to architectural decisions and technical planning",
  ],
};

const CareerInnerPage = () => {
  const { jobTitle } = useParams();
  const job = jobs.find(j => j.title === decodeURIComponent(jobTitle || ""));
  const [activeTab, setActiveTab] = useState("Details");
  const [agreed, setAgreed] = useState(true);
  const [form, setForm] = useState({ firstName:"", lastName:"", email:"", mobile:"", fit:"" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = "First name is required";
    if (!form.lastName.trim()) errs.lastName = "Last name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email format";
    if (!form.mobile.trim()) errs.mobile = "Mobile number is required";
    if (!form.fit.trim()) errs.fit = "Please tell us why you're a good fit";
    if (!agreed) errs.agreed = "You must agree to the privacy policy";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setForm({ firstName:"", lastName:"", email:"", mobile:"", fit:"" });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-50 px-4 md:px-8 lg:px-12 py-3">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
          <span>›</span>
          <Link to="/career" className="hover:text-gray-900 transition-colors">Career</Link>
          <span>›</span>
          <span className="text-gray-900 font-semibold">{job?.title || "Job"}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-white px-4 md:px-8 lg:px-12 py-10 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          <div className="flex-1">
            <p className="text-gray-400 text-xs tracking-widest uppercase mb-2">Career at Finsweet</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{job?.title || "Full Stack Developer"}</h1>
            <p className="text-gray-500 text-sm mb-6">Through True Rich Attended does no end it his mother since real had half every him case in packages.</p>
            <div className="w-3 h-3 bg-orange-400 mb-4" />
            <a href="#apply-form" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition-colors">
              Apply Now <ArrowRight />
            </a>
          </div>
          <div className="flex-1 w-full">
            <div className="bg-orange-50 rounded-lg p-6 md:p-8 relative">
              <div className="absolute top-4 right-4"><ColorAccent /></div>
              <h2 className="font-bold text-gray-900 text-xl mb-4">Job Description</h2>
              <p className="text-gray-600 text-sm mb-2">{job?.loc || "Remote"}, {job?.exp || "4 to 5 Years Of Experience"}</p>
              <p className="text-gray-600 text-sm mb-2">Department: Product Engineering</p>
              <p className="text-gray-600 text-sm">{job?.type || "Full Time"} · {job?.salary || "$10K - $15K"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-blue-50 px-4 md:px-8 lg:px-12 py-10 lg:py-16">
        <div className="flex gap-4 md:gap-8 border-b border-gray-200 mb-8 overflow-x-auto">
          {["Details","Requirements","Responsibilities"].map(tab=>(
            <button key={tab} onClick={()=>setActiveTab(tab)}
              className={`pb-3 text-sm font-semibold transition-colors whitespace-nowrap ${activeTab===tab?"text-indigo-600 border-b-2 border-indigo-600":"text-gray-500 hover:text-gray-900"}`}>
              {tab}
            </button>
          ))}
        </div>
        <ul className="space-y-3 max-w-2xl mx-auto">
          {tabContent[activeTab].map((item,i)=>(
            <li key={i} className="flex gap-3 text-gray-600 text-sm">
              <span className="text-gray-400 mt-0.5">•</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Apply Form */}
      <section id="apply-form" className="bg-white px-4 md:px-8 lg:px-12 py-10 lg:py-16">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Apply Now</h2>
        {submitted && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <p className="text-green-700 text-sm font-semibold">✅ Application submitted successfully! We'll get back to you soon.</p>
          </div>
        )}
        <form onSubmit={handleSubmit} className="max-w-2xl space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input value={form.firstName} onChange={e=>setForm({...form,firstName:e.target.value})}
                placeholder="First Name" className={`w-full bg-blue-50 px-4 py-3 rounded text-sm outline-none focus:ring-2 focus:ring-indigo-300 ${errors.firstName?"ring-2 ring-red-300":""}`} />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
            </div>
            <div className="flex-1">
              <input value={form.lastName} onChange={e=>setForm({...form,lastName:e.target.value})}
                placeholder="Last Name" className={`w-full bg-blue-50 px-4 py-3 rounded text-sm outline-none focus:ring-2 focus:ring-indigo-300 ${errors.lastName?"ring-2 ring-red-300":""}`} />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})}
                placeholder="Email Id" type="email" className={`w-full bg-blue-50 px-4 py-3 rounded text-sm outline-none focus:ring-2 focus:ring-indigo-300 ${errors.email?"ring-2 ring-red-300":""}`} />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div className="flex-1">
              <input value={form.mobile} onChange={e=>setForm({...form,mobile:e.target.value})}
                placeholder="Mobile No" className={`w-full bg-blue-50 px-4 py-3 rounded text-sm outline-none focus:ring-2 focus:ring-indigo-300 ${errors.mobile?"ring-2 ring-red-300":""}`} />
              {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
            </div>
          </div>
          <div>
            <textarea value={form.fit} onChange={e=>setForm({...form,fit:e.target.value})}
              placeholder="Why do you think you are a good fit for Finsweet?" rows={5}
              className={`w-full bg-blue-50 px-4 py-3 rounded text-sm outline-none focus:ring-2 focus:ring-indigo-300 resize-none ${errors.fit?"ring-2 ring-red-300":""}`} />
            {errors.fit && <p className="text-red-500 text-xs mt-1">{errors.fit}</p>}
          </div>
          <div className="flex items-start gap-3">
            <div onClick={()=>setAgreed(!agreed)} className={`w-5 h-5 rounded flex-shrink-0 cursor-pointer flex items-center justify-center mt-0.5 ${agreed?"bg-indigo-600":"bg-gray-200"}`}>
              {agreed && <svg viewBox="0 0 12 12" width="10" height="10"><path d="M1 6l3.5 3.5L11 2" stroke="white" strokeWidth="2" fill="none"/></svg>}
            </div>
            <div>
              <p className="text-gray-500 text-xs leading-relaxed">I agree to accept the privacy policy.</p>
              {errors.agreed && <p className="text-red-500 text-xs mt-1">{errors.agreed}</p>}
            </div>
          </div>
          <div className="relative inline-block">
            <div className="absolute -top-1 -left-1 w-3 h-3 bg-orange-400"/>
            <button type="submit" className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition-colors relative z-10">
              Submit Application <ArrowRight />
            </button>
          </div>
        </form>
      </section>

      <NewsletterBanner />
      <Footer />
    </div>
  );
};

export default CareerInnerPage;