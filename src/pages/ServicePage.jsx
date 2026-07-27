import { Link } from "react-router-dom";
import ArrowRight from "../components/ArrowRight";
import ColorAccent from "../components/ColorAccent";
import NewsletterBanner from "../components/NewsletterBanner";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";

const bgClasses = { "white": "bg-white", "blue-50": "bg-blue-50" };

const ServicePage = () => (
  <div>
    {/* Hero */}
    <section className="bg-orange-50 px-4 md:px-8 lg:px-12 py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="flex-1">
          <p className="text-gray-400 text-xs tracking-widest uppercase mb-3">Our Services</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">We Build Software Solution that Solve Clients Business Challenges</h1>
          <p className="text-gray-500 text-sm mb-8 max-w-sm">had half every him case in packages enquire we up ecstatic.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition-colors">
            Request A Quote <ArrowRight />
          </Link>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-3">
          {["Technical support","Development →","AWS/Azure","Consulting","Information Technology"].map(s=>(
            <p key={s} className={`text-lg font-semibold ${s.includes("→")?"text-indigo-600":"text-gray-900"} hover:text-indigo-600 cursor-pointer transition-colors`}>{s}</p>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <AnimatedSection>
      <section className="bg-white px-4 md:px-8 lg:px-12 py-12 lg:py-20">
        <p className="text-gray-400 text-xs tracking-widest uppercase mb-2">Our Process</p>
        <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">The process we are working<br className="hidden md:block"/>With Our client Worldwide</h2>
          <ColorAccent />
        </div>
        <p className="text-gray-500 text-sm mb-10 max-w-lg">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { n:"01", icon:"📍", title:"Discover" },
            { n:"02", icon:"✏️", title:"Designing" },
            { n:"03", icon:"💡", title:"Development" },
            { n:"04", icon:"🔍", title:"Testing" },
            { n:"05", icon:"🚀", title:"Deployment" },
            { n:"06", icon:"🛠", title:"Maintenance" },
          ].map(p=>(
            <div key={p.title} className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between mb-4">
                <span className="text-2xl">{p.icon}</span>
                <span className="text-gray-300 text-sm font-bold">{p.n}</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-gray-500 text-sm">We aim to attain the greatest satisfaction for our clients and be one of the prominent.</p>
              <div className="flex mt-4">
                <div className="w-8 h-0.5 bg-orange-400"/>
                <div className="flex-1 h-0.5 bg-indigo-600 ml-1"/>
              </div>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>

    {/* Service Details */}
    {[
      { side:"right", tag:"Technical Support", title:"Best in class tech support for your company. We become your tech backbone", img:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop", bg:"white" },
      { side:"left", tag:"Development", title:"Bring your ideas to reality with certified team of developers, working with latest technologies", img:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop", bg:"blue-50" },
      { side:"right", tag:"AWS/Azure", title:"We help you deploy, manage and secure your application on leading web services", img:"https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&auto=format&fit=crop", bg:"white" },
      { side:"left", tag:"Consulting", title:"Get advice from world class professionals", img:"https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&auto=format&fit=crop", bg:"blue-50" },
      { side:"right", tag:"Information Technology", title:"We want to get local identification in every corner of the world in this era of global citizenship.", img:"https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=600&auto=format&fit=crop", bg:"white" },
    ].map((s,i)=>(
      <AnimatedSection key={i}>
        <section className={`${bgClasses[s.bg]} px-4 md:px-8 lg:px-12 py-10 lg:py-16`}>
          <div className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${s.side==="left"?"lg:flex-row-reverse":""}`}>
            <div className="flex-1">
              <p className="text-gray-400 text-xs tracking-widest uppercase mb-2">{s.tag}</p>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 leading-tight mb-4">{s.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.</p>
            </div>
            <div className="flex-1 w-full">
              <img src={s.img} alt={s.tag} className="w-full h-48 md:h-60 object-cover rounded-lg" />
            </div>
          </div>
        </section>
      </AnimatedSection>
    ))}

    <NewsletterBanner />
    <Footer />
  </div>
);

export default ServicePage;