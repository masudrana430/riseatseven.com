import { featuredWork } from "@/data/site";

export function FeaturedWork() {
  return (
    <section className="overflow-hidden bg-r7-black px-4 py-12 text-white">
      <div className="r7-container">
        <h2 className="text-[54px] font-black uppercase leading-[0.82] tracking-[-0.12em]">Featured Work</h2>
        <div className="no-scrollbar -mx-4 mt-7 flex snap-x gap-3 overflow-x-auto px-4 pb-1">
          {featuredWork.map((item) => (
            <article key={item.brand} className="min-w-[82%] snap-center rounded-[2rem] bg-white p-4 text-r7-black">
              <div className="aspect-[4/3] rounded-[1.5rem] bg-r7-lime" />
              <p className="mt-4 text-xs font-black uppercase text-r7-black/55">{item.category} [{item.years}]</p>
              <h3 className="mt-2 text-[32px] font-black uppercase leading-[0.83] tracking-[-0.09em]">{item.brand}</h3>
              <p className="mt-4 text-base font-black uppercase leading-none tracking-[-0.04em]">{item.title}</p>
            </article>
          ))}
        </div>
        <a href="#" className="mt-7 inline-flex h-14 items-center justify-center rounded-full bg-r7-lime px-7 text-sm font-black uppercase text-r7-black">Explore Our Work</a>
      </div>
    </section>
  );
}
