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

export default NewsletterBanner;