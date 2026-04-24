import ColorAccent from "../components/ColorAccent";
import NewsletterBanner from "../components/NewsletterBanner";
import Footer from "../components/Footer";

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

export default CompanyPage;