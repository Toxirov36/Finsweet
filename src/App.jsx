import { useState } from "react";

// ── helpers ──────────────────────────────────────────────────────────────────
const ArrowRight = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
  </svg>
);

const Logo = ({ light = false }) => (
  <div className={`flex items-center gap-1 font-bold text-lg ${light ? "text-white" : "text-gray-900"}`}>
    <span className="text-indigo-500">{`{`}</span>Finsweet<span className="text-indigo-500">{`}`}</span>
  </div>
);

const ColorAccent = () => (
  <div className="flex gap-1">
    <div className="w-4 h-4 bg-orange-400 rounded-sm" />
    <div className="w-4 h-4 bg-indigo-600 rounded-sm" />
  </div>
);

const NavBar = ({ activePage, setPage }) => {
  const links = ["Home","Service","Company","Career","Blog","Contact us"];
  return (
    <nav className="bg-gray-900 px-8 py-4 flex items-center justify-between sticky top-0 z-50">
      <Logo light />
      <div className="flex items-center gap-6">
        {links.map(l => (
          <button key={l}
            onClick={() => ["Home","Service","Company","Career"].includes(l) && setPage(l)}
            className={`text-sm transition-colors ${activePage===l?"text-orange-400":"text-gray-300 hover:text-white"}`}>
            {l}
          </button>
        ))}
        <button className="flex items-center gap-1 border border-white text-white text-sm px-4 py-2 rounded hover:bg-white hover:text-gray-900 transition-colors">
          Clone project <ArrowRight />
        </button>
      </div>
    </nav>
  );
};

const NewsletterBanner = () => (
  <div className="relative mx-8 my-16 bg-indigo-600 rounded-lg px-12 py-10 flex items-center justify-between overflow-hidden">
    <div className="absolute -top-4 -left-4 w-16 h-16 bg-orange-400 opacity-60 rounded" />
    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-orange-300 opacity-40 rounded" />
    <div className="relative z-10">
      <p className="text-indigo-200 text-xs tracking-widest uppercase mb-2">Newsletter</p>
      <h3 className="text-white text-2xl font-bold leading-tight">Subscribe our News Letter<br/>to get Latest Updates.</h3>
    </div>
    <div className="relative z-10 flex gap-3 w-80">
      <input type="email" placeholder="Paresh@Pixeto.com" className="flex-1 px-4 py-3 rounded text-sm bg-white outline-none"/>
    </div>
  </div>
);

const Footer = ({ setPage }) => (
  <footer>
    <div className="px-12 py-16 bg-white">
      <div className="flex gap-16">
        <div className="flex-1">
          <ColorAccent />
          <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-4">Let's make<br/>something special</h2>
          <p className="text-gray-900 font-semibold mb-4">Let's talk! 👍</p>
          <p className="text-gray-600 text-sm">020 7993 2905</p>
          <p className="text-gray-600 text-sm">hi@finsweet.com</p>
          <p className="text-gray-500 text-sm mt-3">DLF Cybercity, Bhubaneswar,<br/>India, 652050</p>
        </div>
        {[
          { title: null, links: ["Home","Service","Company","Career","News"] },
          { title: "Service", links: ["Technical support","Testing","Development","AWS/Azure","Consulting","Information Technology"] },
          { title: "Resources", links: ["About Us","Testimonial","Privacy Policy","Terms of use","Blog"] },
        ].map((col, i) => (
          <div key={i} className="min-w-32">
            {col.title && <p className="font-bold text-gray-900 mb-3">{col.title}</p>}
            {col.links.map(l => (
              <button key={l} onClick={() => ["Home","Service","Company","Career"].includes(l) && setPage(l)}
                className="block text-gray-500 text-sm mb-2 hover:text-gray-900 transition-colors text-left">{l}</button>
            ))}
          </div>
        ))}
        <div className="flex flex-col justify-end">
          <button className="flex items-center gap-2 text-sm font-semibold">
            <span className="flex gap-1"><span className="w-4 h-3 bg-indigo-600 rounded-sm inline-block"/><span className="w-4 h-3 bg-orange-400 rounded-sm inline-block"/></span>
            Contact Us <ArrowRight />
          </button>
        </div>
      </div>
    </div>
    <div className="bg-orange-50 px-12 py-4 flex items-center justify-between">
      <Logo />
      <p className="text-gray-500 text-sm">©2021 Finsweet</p>
      <div className="flex gap-3 text-gray-500 text-sm">
        {["Facebook","Twitter","Instagram","LinkedIn"].map(s=>(
          <span key={s} className="hover:text-gray-900 cursor-pointer">{s[0]}</span>
        ))}
      </div>
    </div>
  </footer>
);

// ── HOME PAGE ─────────────────────────────────────────────────────────────────
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

// ── SERVICE PAGE ──────────────────────────────────────────────────────────────
const ServicePage = ({ setPage }) => (
  <div>
    {/* Hero */}
    <section className="bg-orange-50 px-12 py-20">
      <div className="flex gap-16">
        <div className="flex-1">
          <p className="text-gray-400 text-xs tracking-widest uppercase mb-3">Our Services</p>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">We Build Software Solution that Solve Clients Business Challenges</h1>
          <p className="text-gray-500 text-sm mb-8 max-w-sm">had half every him case in packages enquire we up ecstatic.</p>
          <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition-colors">
            Request A Quote <ArrowRight />
          </button>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-3">
          {["Technical support","Development →","AWS/Azure","Consulting","Information Technology"].map(s=>(
            <p key={s} className={`text-lg font-semibold ${s.includes("→")?"text-indigo-600":"text-gray-900"} hover:text-indigo-600 cursor-pointer transition-colors`}>{s}</p>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="bg-white px-12 py-20">
      <p className="text-gray-400 text-xs tracking-widest uppercase mb-2">Our Process</p>
      <div className="flex justify-between mb-4">
        <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">The process we are working<br/>With Our client Worldwide</h2>
        <ColorAccent />
      </div>
      <p className="text-gray-500 text-sm mb-10 max-w-lg">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.</p>
      <div className="grid grid-cols-3 gap-6">
        {[
          { n:"01", icon:"📍", title:"Discover" },
          { n:"02", icon:"✏️", title:"Designing" },
          { n:"03", icon:"💡", title:"Development" },
          { n:"04", icon:"🔍", title:"Testing" },
          { n:"05", icon:"🚀", title:"Deployment" },
          { n:"06", icon:"🛠", title:"Maintenance" },
        ].map(p=>(
          <div key={p.title} className="border border-gray-100 rounded-lg p-6">
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

    {/* Service Details */}
    {[
      { side:"right", tag:"Technical Support", title:"Best in class tech support for your company. We become your tech backbone", img:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop", bg:"white" },
      { side:"left", tag:"Developoment", title:"Bring your ideas to reality with certified team of developers, working with latest technologies", img:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop", bg:"blue-50" },
      { side:"right", tag:"AWS/Azure", title:"We help you deploy, manage and secure your application on leading web services", img:"https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&auto=format&fit=crop", bg:"white" },
      { side:"left", tag:"Consulting", title:"Get advice from world class professionals", img:"https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&auto=format&fit=crop", bg:"blue-50" },
      { side:"right", tag:"Information Technology", title:"We want to get local identification in every corner of the world in this era of global citizenship.", img:"https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=600&auto=format&fit=crop", bg:"white" },
    ].map((s,i)=>(
      <section key={i} className={`bg-${s.bg} px-12 py-16`}>
        <div className={`flex gap-16 items-center ${s.side==="left"?"flex-row-reverse":""}`}>
          <div className="flex-1">
            <p className="text-gray-400 text-xs tracking-widest uppercase mb-2">{s.tag}</p>
            <h2 className="text-2xl font-extrabold text-gray-900 leading-tight mb-4">{s.title}</h2>
            <p className="text-gray-500 text-sm leading-relaxed">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.</p>
          </div>
          <div className="flex-1">
            <img src={s.img} alt="" className="w-full h-60 object-cover rounded-lg" />
          </div>
        </div>
      </section>
    ))}

    <NewsletterBanner />
    <Footer setPage={setPage} />
  </div>
);

// ── COMPANY PAGE ──────────────────────────────────────────────────────────────
const CompanyPage = ({ setPage }) => (
  <div>
    {/* Hero */}
    <section className="bg-white px-12 py-20">
      <div className="flex justify-between items-start mb-2">
        <div className="w-3 h-3 bg-orange-400 mt-1" />
        <ColorAccent />
      </div>
      <p className="text-gray-400 text-xs tracking-widest uppercase mb-3">Company</p>
      <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4 max-w-lg">Award-winning Company seen and used by millions around the world.</h1>
      <p className="text-gray-500 text-sm mb-10 max-w-lg">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralised.</p>
      <div className="flex gap-3 mb-12">
        {[
          "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&auto=format&fit=crop",
        ].map((src,i)=>(
          <div key={i} className="relative flex-1">
            <img src={src} alt="" className="w-full h-52 object-cover rounded" />
            {i===1 && <div className="absolute top-0 right-0 w-3 h-16 bg-orange-400"/>}
            {i===1 && <div className="absolute top-0 right-3 w-3 h-8 bg-indigo-600"/>}
          </div>
        ))}
      </div>
      <div className="flex gap-12 items-start">
        <div className="flex-1">
          <div className="w-3 h-3 bg-indigo-600 mb-3" />
          <p className="text-gray-400 text-xs mb-2">Our Story ⚡</p>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">From Startups to Titans of Industry</h2>
          <p className="text-gray-500 text-sm leading-relaxed">Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense of gay produce excited perceived do on a china mean its so ye when in explained Hearts am next over match mr partiality not shoud latter thus as out no passed forming middleton exercise up</p>
        </div>
        <div className="flex-1 bg-orange-50 rounded-lg p-8">
          <div className="grid grid-cols-2 gap-6">
            {[["1560+","Project Delivered"],["100+","Professional"],["950+","Happy Client"],["10 yrs","Experience"]].map(([n,l])=>(
              <div key={l}>
                <p className="text-3xl font-extrabold text-gray-900">{n}</p>
                <div className="w-8 h-0.5 bg-orange-400 mt-1 mb-1"/>
                <p className="text-gray-500 text-sm">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Logos */}
    <section className="bg-white px-12 py-6 border-t border-gray-100">
      <div className="flex justify-center gap-16">
        {[1,2,3,4,5].map(i=>(
          <div key={i} className="flex items-center gap-2 text-gray-400 text-sm">
            <div className="w-5 h-5 border border-gray-300 rounded-full" />
            logoipsum™
          </div>
        ))}
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

    {/* Vision */}
    <section className="bg-white px-12 py-20">
      <p className="text-gray-400 text-xs tracking-widest uppercase mb-2">Our Vision</p>
      <h2 className="text-3xl font-extrabold text-gray-900 leading-tight mb-4 max-w-xl">We want to get local identification in every corner of the world in this era of global citizenship.</h2>
      <p className="text-gray-500 text-sm mb-10 max-w-lg">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.</p>
      <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&auto=format&fit=crop" alt="" className="w-full h-64 object-cover rounded-lg" />
    </section>

    {/* Team */}
    <section className="bg-white px-12 py-16">
      <p className="text-gray-400 text-xs tracking-widest uppercase mb-2">Meet Our Team</p>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Teamwork is the only<br/>way we work</h2>
      <p className="text-gray-500 text-sm mb-8 max-w-xs">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.</p>
      <div className="grid grid-cols-4 gap-1">
        {[
          { img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&face" },
          { img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop" },
          { img:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop" },
          { img:"https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=300&auto=format&fit=crop" },
        ].map((m,i)=>(
          <img key={i} src={m.img} alt="" className="w-full h-44 object-cover" />
        ))}
        <div className="relative bg-gray-900 flex flex-col justify-end p-4">
          <p className="text-white font-bold text-sm">Javena Melo</p>
          <p className="text-gray-400 text-xs">Support Assist</p>
          <div className="flex gap-2 mt-2 text-gray-400 text-xs">
            <span>tw</span><span>ig</span><span>in</span>
          </div>
        </div>
        {[
          "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=300&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=300&auto=format&fit=crop",
        ].map((src,i)=>(
          <img key={i+10} src={src} alt="" className="w-full h-44 object-cover" />
        ))}
      </div>
    </section>

    <NewsletterBanner />
    <Footer setPage={setPage} />
  </div>
);

// ── CAREER PAGE ───────────────────────────────────────────────────────────────
const jobs = [
  { title:"Full Stack Developer", loc:"Bengaluru", type:"Full Time", salary:"$10K - $15K", equity:"No equity" },
  { title:"Testing Engineer", loc:"Remote", type:"Full Time", salary:"$08K - $10K", equity:"No equity" },
  { title:"Hr Manager", loc:"Mumbai", type:"Fulltime", salary:"$08K - $10K", exp:"4 to 5 Yrs Exp" },
  { title:"Product Designer", loc:"Mumbai", type:"Fulltime", salary:"$08K - $10K", exp:"4 to 5 Yrs Exp" },
  { title:"Wordpress Developer", loc:"Mumbai", type:"Full Time", salary:"$08K - $10K", exp:"4 to 5 Yrs Exp" },
  { title:"Jr. QA Tester", loc:"California", type:"Full Time", salary:"$14K - $23K", equity:"No equity" },
  { title:"Sr. UX Designer", loc:"California, USA", type:"Full Time", salary:"$14K - $23K", equity:"No equity" },
  { title:"Social Media Manager", loc:"Kolkata, India", type:"Fulltime", salary:"$5K - $6K", exp:"Fresher" },
  { title:"Golang Developer", loc:"Mumbai", type:"Fulltime", salary:"$08K - $10K", exp:"4 to 5 Yrs Exp" },
];

const CareerPage = ({ setPage, setSelectedJob }) => (
  <div>
    {/* Hero */}
    <section className="bg-white px-12 py-20 text-center relative">
      <div className="absolute top-8 right-12"><ColorAccent /></div>
      <p className="text-gray-400 text-xs tracking-widest uppercase mb-4">Career at Finsweet</p>
      <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">We hired people who are<br/>Always Passionate about<br/>what they do</h1>
      <p className="text-gray-500 text-sm mb-10 max-w-lg mx-auto">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw..</p>
      {/* Big CAREERS text with images */}
      <div className="relative inline-block">
        <h2 className="text-9xl font-extrabold text-gray-900 tracking-tighter select-none" style={{WebkitTextFillColor:"transparent", WebkitTextStroke:"2px #e5e7eb"}}>Careers</h2>
        <div className="absolute inset-0 flex items-center justify-center gap-1 overflow-hidden">
          {["https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=100&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=100&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?w=100&auto=format&fit=crop"].map((src,i)=>(
            <img key={i} src={src} alt="" className="h-16 w-24 object-cover" style={{clipPath:"none"}} />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <p className="text-gray-600 text-sm">See Our open positions</p>
        <p className="text-2xl">👇</p>
      </div>
    </section>

    {/* Jobs */}
    <section className="bg-blue-50 px-12 py-16">
      <div className="grid grid-cols-3 gap-4">
        {jobs.map(job=>(
          <div key={job.title} className="bg-white rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-1">{job.title}</h3>
            <p className="text-gray-400 text-xs mb-1">{job.loc} · {job.type}</p>
            <p className="text-gray-400 text-xs mb-4">{job.salary} · {job.equity||job.exp}</p>
            <button onClick={()=>{ setSelectedJob(job); setPage("CareerInner"); }}
              className="flex items-center gap-1 text-indigo-600 text-sm font-semibold">
              Apply Now <ArrowRight />
            </button>
          </div>
        ))}
      </div>
    </section>

    {/* Culture */}
    <section className="bg-white px-12 py-16">
      <p className="text-gray-400 text-xs tracking-widest uppercase mb-2">Our Work & Culture</p>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-4 max-w-md">Come and join a team of highly skilled professionals.</h2>
      <p className="text-gray-500 text-sm max-w-lg">Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.</p>
    </section>

    {/* Benefits */}
    <section className="bg-white px-12 py-16 border-t border-gray-100">
      <div className="grid grid-cols-3 gap-8">
        {[
          { icon:"🏥", title:"Covid-19 insurance" },
          { icon:"⏰", title:"Flexible working time" },
          { icon:"🏠", title:"Work from home" },
          { icon:"🏕", title:"Annual retreats" },
          { icon:"📚", title:"Learning stipend" },
          { icon:"💪", title:"Gym membership" },
        ].map(b=>(
          <div key={b.title}>
            <span className="text-2xl text-orange-400 mb-2 block">{b.icon}</span>
            <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
            <p className="text-gray-500 text-sm">Through True Rich Attended does no end it his mother since real had halfdoes no end it.</p>
          </div>
        ))}
      </div>
    </section>

    <NewsletterBanner />
    <Footer setPage={setPage} />
  </div>
);

// ── CAREER INNER PAGE ─────────────────────────────────────────────────────────
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

// ── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("Home");
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="min-h-screen bg-white font-sans">
      <NavBar activePage={page} setPage={setPage} />
      {page === "Home" && <HomePage setPage={setPage} />}
      {page === "Service" && <ServicePage setPage={setPage} />}
      {page === "Company" && <CompanyPage setPage={setPage} />}
      {page === "Career" && <CareerPage setPage={setPage} setSelectedJob={setSelectedJob} />}
      {page === "CareerInner" && <CareerInnerPage setPage={setPage} job={selectedJob} />}
    </div>
  );
}