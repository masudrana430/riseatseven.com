import { platforms } from "@/data/site";

export function SearchPlatforms() {
  return (
    <section className="px-4 py-12">
      <div className="r7-container">
        <p className="text-7xl font-black uppercase leading-[0.75] tracking-[-0.13em]">#</p>
        <h2 className="mt-2 text-[63px] font-black uppercase leading-[0.78] tracking-[-0.13em]">
          We<br />Create<br />Category<br />Leaders
        </h2>
        <p className="mt-5 text-xl font-black uppercase leading-none tracking-[-0.06em]">on every searchable platform</p>
        <div className="mt-8 grid grid-cols-2 gap-2">
          {platforms.map((platform) => (
            <div key={platform} className="flex min-h-20 items-center justify-center rounded-[2rem] bg-white px-3 text-center text-sm font-black uppercase tracking-[-0.04em] shadow-sm">
              {platform}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
