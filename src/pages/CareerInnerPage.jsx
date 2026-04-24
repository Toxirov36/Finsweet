import {useState} from "react"
import ArrowRight from "../components/ArrowRight"
import ColorAccent from "../components/ColorAccent";
import NewsletterBanner from "../components/NewsletterBanner";
import Footer from "../components/Footer";

const CareerInnerPage = ({ setPage, job }) => {
  const [activeTab, setActiveTab] = useState("Details");
  const [agreed, setAgreed] = useState(true);
  const [form, setForm] = useState({ firstName:"", lastName:"", email:"", mobile:"", fit:"" });
 
  return (
    <div>
      {/* Hero */}
      <section className="bg-white px-12 py-16">
        <div className="flex gap-16 items-start">
          <div className="flex-1">
            <p className="text-gray-400 text-xs tracking-widest uppercase mb-2">Career at Ether</p>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{job?.title || "Full Stack Developer"}</h1>
            <p className="text-gray-500 text-sm mb-6">Through True Rich Attended does no end it his mother since real had half every him case in packages.</p>
            <div className="w-3 h-3 bg-orange-400 mb-4" />
            <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition-colors">
              Apply Now <ArrowRight />
            </button>
          </div>
          <div className="flex-1">
            <div className="bg-orange-50 rounded-lg p-8 relative">
              <div className="absolute top-4 right-4"><ColorAccent /></div>
              <h2 className="font-bold text-gray-900 text-xl mb-4">Job Description</h2>
              <p className="text-gray-600 text-sm mb-2">Remote, India , 4 to 5 Years Of Experience</p>
              <p className="text-gray-600 text-sm mb-2">Department: Product Engineering</p>
              <p className="text-gray-600 text-sm">Full Time 5 Position Available.</p>
            </div>
          </div>
        </div>
      </section>
 
      {/* Tabs */}
      <section className="bg-blue-50 px-12 py-16">
        <div className="flex gap-8 border-b border-gray-200 mb-8">
          {["Details","Requirements","Responsibilities"].map(tab=>(
            <button key={tab} onClick={()=>setActiveTab(tab)}
              className={`pb-3 text-sm font-semibold transition-colors ${activeTab===tab?"text-indigo-600 border-b-2 border-indigo-600":"text-gray-500 hover:text-gray-900"}`}>
              {tab}
            </button>
          ))}
        </div>
        <ul className="space-y-3 max-w-2xl mx-auto">
          {[
            "Create and edit video content for multi-platform use and distribution for social media channels (Facebook, Youtube, Instagram, Snapchat, IGTV, Facebook Stories and Instagram Stories).",
            "Design & Create highly engaging industry-related content in both photo, gif & video format",
            "Publish Posts on various social media channels",
            "Promote content on social networks and monitor engagement (e.g. comments and shares)",
            "Research industry-related topics",
            "Editing audio and sound design on projects",
            "Engage in opportunities to develop original content and concepts for web and mobile",
            "Create motion graphics and animations using 2D and 3D applications for marketing and promotional usage.",
            "Manage the day-to-day handling of all social media channels such as LinkedIn, Facebook, Twitter, Pinterest, Instagram, Tiktok and YouTube, adapting content to suit different channels",
          ].map((item,i)=>(
            <li key={i} className="flex gap-3 text-gray-600 text-sm">
              <span className="text-gray-400 mt-0.5">•</span>
              {item}
            </li>
          ))}
        </ul>
      </section>
 
      {/* Apply Form */}
      <section className="bg-white px-12 py-16">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Apply Now</h2>
        <div className="max-w-2xl space-y-4">
          <div className="flex gap-4">
            <input value={form.firstName} onChange={e=>setForm({...form,firstName:e.target.value})}
              placeholder="First Name" className="flex-1 bg-blue-50 px-4 py-3 rounded text-sm outline-none focus:ring-2 focus:ring-indigo-300" />
            <input value={form.lastName} onChange={e=>setForm({...form,lastName:e.target.value})}
              placeholder="Last Name" className="flex-1 bg-blue-50 px-4 py-3 rounded text-sm outline-none focus:ring-2 focus:ring-indigo-300" />
          </div>
          <div className="flex gap-4">
            <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})}
              placeholder="Email Id" className="flex-1 bg-blue-50 px-4 py-3 rounded text-sm outline-none focus:ring-2 focus:ring-indigo-300" />
            <input value={form.mobile} onChange={e=>setForm({...form,mobile:e.target.value})}
              placeholder="Mobile No" className="flex-1 bg-blue-50 px-4 py-3 rounded text-sm outline-none focus:ring-2 focus:ring-indigo-300" />
          </div>
          <textarea value={form.fit} onChange={e=>setForm({...form,fit:e.target.value})}
            placeholder="Why do you thing you are good fit for Ether?" rows={5}
            className="w-full bg-blue-50 px-4 py-3 rounded text-sm outline-none focus:ring-2 focus:ring-indigo-300 resize-none" />
          <div className="flex items-start gap-3">
            <div onClick={()=>setAgreed(!agreed)} className={`w-5 h-5 rounded flex-shrink-0 cursor-pointer flex items-center justify-center mt-0.5 ${agreed?"bg-indigo-600":"bg-gray-200"}`}>
              {agreed && <svg viewBox="0 0 12 12" fill="white" width="10" height="10"><path d="M1 6l3.5 3.5L11 2"/></svg>}
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">I agree to accept the privacy policy. We will add your contact details provided in this form to our system for contacting you regarding your request.</p>
          </div>
          <div className="relative inline-block">
            <div className="absolute -top-1 -left-1 w-3 h-3 bg-orange-400"/>
            <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition-colors relative z-10">
              Submit Application <ArrowRight />
            </button>
          </div>
        </div>
      </section>
 
      <NewsletterBanner />
      <Footer setPage={setPage} />
    </div>
  );
};

export default CareerInnerPage