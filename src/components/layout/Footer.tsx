export function Footer() {
  return (
    <footer id="contact" className="bg-r7-black px-4 pb-8 pt-12 text-white">
      <div className="r7-container">
        <p className="text-[13px] font-black uppercase text-r7-lime">Ready to Rise at Seven?</p>
        <h2 className="mt-3 max-w-[10ch] text-[50px] font-black uppercase leading-[0.82] tracking-[-0.1em]">
          Stay updated with Rise news
        </h2>
        <a href="mailto:hello@example.com" className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-r7-lime px-7 text-sm font-black uppercase text-r7-black">
          Get in touch
        </a>
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 text-sm font-black uppercase text-white/75">
          {['Services', 'Work', 'About', 'Culture', 'Blog', 'Careers', 'Contact'].map((link) => (
            <a href="#" key={link}>{link}</a>
          ))}
        </div>
        <p className="mt-10 text-xs uppercase text-white/45">© 2025 Rise at Seven Ltd. All rights reserved</p>
      </div>
    </footer>
  );
}
