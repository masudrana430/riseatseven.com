import { clientLogos } from "@/data/site";

export function AgencyLogos() {
  return (
    <section className="px-4 py-10">
      <div className="r7-container">
        <h2 className="mb-4 text-[24px] font-black uppercase leading-none tracking-[-0.07em]">The agency behind ...</h2>
        <div className="grid grid-cols-2 gap-2">
          {clientLogos.map((logo) => (
            <div key={logo} className="flex aspect-[1.25] items-center justify-center rounded-[2rem] bg-r7-black p-4 text-center text-xl font-black uppercase tracking-[-0.08em] text-white">
              {logo}
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-[2rem] bg-white p-5">
          <p className="text-[28px] font-black uppercase leading-[0.92] tracking-[-0.08em]">
            A global team of search-first content marketers engineering semantic relevancy & category signals for both the internet and people
          </p>
          <div className="mt-5 flex gap-2">
            <a href="#" className="rounded-full bg-r7-black px-5 py-3 text-xs font-black uppercase text-white">Our Story</a>
            <a href="#services" className="rounded-full bg-r7-lime px-5 py-3 text-xs font-black uppercase text-r7-black">Our Services</a>
          </div>
        </div>
      </div>
    </section>
  );
}
