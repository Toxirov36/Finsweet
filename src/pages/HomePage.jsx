import NewsletterBanner from "../components/NewsletterBanner";
import Footer from "../components/Footer";
import ArrowRight from "../components/ArrowRight";
import ColorAccent from "../components/ColorAccent";
import { useState } from "react";

const HomePage = ({ setPage }) => {
  const [testimonial] = useState(0);
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-900 px-12 py-20 flex items-center gap-16 min-h-80">
        <div className="flex-1">
          <div className="w-3 h-3 bg-orange-400 mb-6" />
          <h1 className="text-white text-5xl font-extrabold leading-tight mb-4">
            Transform Your Idea<br/>Into Reality with<br/>Finsweet
          </h1>
          <p className="text-gray-400 text-sm mb-8 max-w-xs">The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good attitude.</p>
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition-colors">
            Request Quote <ArrowRight />
          </button>
        </div>
        <div className="flex-1 relative">
          <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&auto=format&fit=crop" alt="Team" className="rounded-lg w-full object-cover h-72" />
          <div className="absolute -bottom-2 -right-2 w-8 h-20 bg-orange-400" />
          <div className="absolute top-0 right-0 w-4 h-4 bg-indigo-500" />
        </div>
      </section>
 
      {/* Clients */}
      <section className="bg-gray-800 px-12 py-6 flex items-center gap-8">
        <div className="text-white mr-8">
          <p className="text-gray-400 text-xs">Our Clients</p>
          <p className="text-white text-sm font-semibold">We've Worked with</p>
        </div>
        {[1,2,3,4,5].map(i=>(
          <div key={i} className="flex items-center gap-2 text-gray-400 text-sm">
            <div className="w-5 h-5 border border-gray-600 rounded-full" />
            logoipsum
          </div>
        ))}
      </section>
 
      {/* About */}
      <section className="px-12 py-20 bg-white">
        <p className="text-gray-400 text-xs tracking-widest uppercase mb-2">About Us</p>
        <div className="flex gap-16">
          <div className="flex-1">
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">The company leads entire webdesign process from concept to delivery.</h2>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Era Of Technology.</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.</p>
          </div>
        </div>
        <div className="flex gap-3 mt-10 mb-8">
          {[
            "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&auto=format&fit=crop",
          ].map((src,i)=>(
            <div key={i} className="relative flex-1">
              <img src={src} alt="" className="w-full h-52 object-cover rounded" />
              {i===2 && <div className="absolute top-0 right-0 w-3 h-16 bg-orange-400"/>}
            </div>
          ))}
        </div>
        <div className="flex gap-12 mt-8">
          {[["1560+","Project Delivered"],["100+","Professional"],["950+","Happy Client"],["10 yrs","Experience"]].map(([n,l])=>(
            <div key={l}>
              <p className="text-3xl font-extrabold text-gray-900">{n}</p>
              <div className="w-8 h-0.5 bg-orange-400 mt-1 mb-1"/>
              <p className="text-gray-500 text-sm">{l}</p>
            </div>
          ))}
          <div className="ml-auto self-center">
            <button className="flex items-center gap-2 text-indigo-600 font-semibold text-sm">Read about us <ArrowRight /></button>
          </div>
        </div>
      </section>
 
      {/* Expertise */}
      <section className="bg-blue-50 px-12 py-20">
        <div className="flex gap-16 items-start">
          <div className="flex-1">
            <p className="text-gray-400 text-xs tracking-widest uppercase mb-2">Our Expertise</p>
            <h2 className="text-3xl font-extrabold text-gray-900 leading-tight mb-4">We want to get local identification in every corner of the world in this era of global citizenship</h2>
            <p className="text-gray-500 text-sm leading-relaxed">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.</p>
          </div>
          <div className="flex-1">
            <div className="w-3 h-3 bg-indigo-600 ml-auto mb-4" />
            {[
              { icon: "⏱", title: "On Time Delivery", desc: "Through True Rich Attended does no end it his mother since real had half every him." },
              { icon: "⭐", title: "Best Quality", desc: "Through True Rich Attended does no end it his mother since real had half every him." },
              { icon: "🤝", title: "Support Assist", desc: "Through True Rich Attended does no end it his mother since real had half every him." },
            ].map(item=>(
              <div key={item.title} className="bg-white rounded-lg p-5 mb-3 flex gap-4">
                <span className="text-orange-400 text-xl">{item.icon}</span>
                <div>
                  <p className="font-bold text-gray-900 mb-1">{item.title}</p>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
            <div className="flex mt-4">
              <div className="flex-1 h-1 bg-orange-400 rounded"/>
              <div className="flex-1 h-1 bg-indigo-600 rounded ml-1"/>
            </div>
          </div>
        </div>
      </section>
 
      {/* Services */}
      <section className="bg-orange-50 px-12 py-20">
        <p className="text-gray-400 text-xs tracking-widest uppercase mb-2">Our Services</p>
        <div className="flex gap-16 mb-10">
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">We build software solutions that solve client's business challenges</h2>
          </div>
          <div className="flex-1 flex items-end">
            <button onClick={()=>setPage("Service")} className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition-colors">
              Start a Project <ArrowRight />
            </button>
          </div>
        </div>
        <div className="flex gap-6">
          {[
            { icon: "🔧", title: "Technical support", desc: "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service" },
            { icon: "🧪", title: "Testing Management", desc: "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service" },
            { icon: "💻", title: "Development", desc: "We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service" },
          ].map(s=>(
            <div key={s.title} className="bg-white rounded-lg p-6 flex-1">
              <span className="text-2xl mb-4 block">{s.icon}</span>
              <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{s.desc}</p>
              <button className="flex items-center gap-1 text-indigo-600 text-sm font-semibold">Read more <ArrowRight /></button>
            </div>
          ))}
        </div>
      </section>
 
      {/* Process */}
      <section className="bg-white px-12 py-20">
        <div className="flex justify-between items-start mb-10">
          <div>
            <p className="text-gray-400 text-xs tracking-widest uppercase mb-2">Our Process</p>
            <h2 className="text-3xl font-extrabold text-gray-900 leading-tight mb-3">The process we are working<br/>With Our client Worldwide</h2>
            <p className="text-gray-500 text-sm max-w-md">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.</p>
          </div>
          <ColorAccent />
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[
            { n:"01", icon:"📍", title:"Discover" },
            { n:"02", icon:"✏️", title:"Designing" },
            { n:"03", icon:"💡", title:"Development" },
            { n:"04", icon:"🔍", title:"Testing" },
            { n:"05", icon:"🚀", title:"Deployment" },
            { n:"06", icon:"🛠", title:"Maintenance" },
          ].map((p,i)=>(
            <div key={p.title} className="border border-gray-100 rounded-lg p-6 relative">
              <div className="flex justify-between items-start mb-4">
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
 
      {/* Testimonial */}
      <section className="bg-white px-12 py-16">
        <div className="flex gap-16">
          <div className="flex-1">
            <div className="w-3 h-3 bg-indigo-600 mb-6" />
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Our customers love what we do</h2>
            <p className="text-gray-500 text-sm mb-4">Transform your idea into reality with finsweet</p>
            <p className="text-gray-400 text-sm mb-8">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
            <div className="flex gap-3 mb-3">
              {[1,2,3].map(i=>(
                <div key={i} className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/40?img=${i+10}`} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs">30+ Customer Reviews</p>
          </div>
          <div className="flex-1 relative border-l-4 border-orange-400 pl-8">
            <div className="text-indigo-600 text-6xl font-serif mb-4">"</div>
            <p className="text-gray-900 text-xl font-semibold leading-relaxed mb-6">Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!</p>
            <div className="flex items-center gap-3">
              <img src="https://i.pravatar.cc/40?img=15" alt="" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="font-bold text-gray-900 text-sm">Johnny Andre</p>
                <p className="text-gray-400 text-xs">Director, Company</p>
              </div>
              <div className="ml-auto text-gray-300 text-xs">logoipsum™</div>
            </div>
          </div>
        </div>
      </section>
 
      {/* Blog */}
      <section className="bg-blue-50 px-12 py-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 bg-indigo-600" />
          <h2 className="text-2xl font-extrabold text-gray-900">Read our latest blogs & news</h2>
        </div>
        <div className="flex gap-6">
          {[
            { date:"Jan 19, 2021", title:"Today's best design trends for digital products", img:"https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&auto=format&fit=crop" },
            { date:"Jan 19, 2021", title:"A practical guide to building a brand strategy", img:"https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&auto=format&fit=crop" },
          ].map(b=>(
            <div key={b.title} className="flex gap-4 bg-white rounded-lg p-4 flex-1">
              <img src={b.img} alt="" className="w-32 h-24 object-cover rounded" />
              <div>
                <p className="text-gray-400 text-xs mb-1">{b.date}</p>
                <h3 className="font-bold text-gray-900 text-sm mb-3">{b.title}</h3>
                <button className="flex items-center gap-1 text-indigo-600 text-xs font-semibold">Read More <ArrowRight /></button>
              </div>
            </div>
          ))}
        </div>
      </section>
 
      <NewsletterBanner />
      <Footer setPage={setPage} />
    </div>
  );
};
export default HomePage;