import { news } from "@/data/site";

export function WhatsNew() {
  return (
    <section className="px-4 py-12">
      <div className="r7-container">
        <h2 className="text-[64px] font-black uppercase leading-[0.75] tracking-[-0.13em]">What's<br />New</h2>
        <div className="mt-8 grid gap-3">
          {news.map((item, index) => (
            <article key={item} className="rounded-[2rem] bg-white p-5 shadow-sm">
              <p className="text-xs font-black uppercase text-r7-black/45">News · 2 mins</p>
              <h3 className="mt-3 text-[23px] font-black uppercase leading-[0.95] tracking-[-0.06em]">{item}</h3>
              <p className="mt-4 text-sm font-black uppercase text-r7-black/55">0{index + 1}</p>
            </article>
          ))}
        </div>
        <a href="#" className="mt-7 inline-flex h-14 items-center justify-center rounded-full bg-r7-black px-7 text-sm font-black uppercase text-white">Explore More Thoughts</a>
      </div>
    </section>
  );
}
