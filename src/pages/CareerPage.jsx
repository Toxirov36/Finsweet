import ArrowRight from "../components/ArrowRight";
import ColorAccent from "../components/ColorAccent";
import NewsletterBanner from "../components/NewsletterBanner";
import Footer from "../components/Footer";

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

export default CareerPage;