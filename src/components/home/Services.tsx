import { services } from "@/data/site";

export function Services() {
  return (
    <section id="services" className="px-4 py-12">
      <div className="r7-container">
        <h2 className="text-[64px] font-black uppercase leading-[0.75] tracking-[-0.13em]">Our<br />Services</h2>
        <div className="mt-8 divide-y divide-r7-black/15 border-y border-r7-black/15">
          {services.map((service) => (
            <a key={service} href="#" className="flex items-center justify-between py-5 text-[23px] font-black uppercase leading-none tracking-[-0.07em]">
              {service}
              <span className="grid size-8 place-items-center rounded-full bg-r7-black text-sm text-white">→</span>
            </a>
          ))}
        </div>
        <a href="#" className="mt-8 inline-flex h-14 items-center justify-center rounded-full bg-r7-black px-7 text-sm font-black uppercase text-white">View All Services</a>
      </div>
    </section>
  );
}
