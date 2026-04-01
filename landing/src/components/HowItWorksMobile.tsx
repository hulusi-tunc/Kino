import Image from "next/image";

export default function HowItWorksMobile() {
  return (
    <section className="md:hidden bg-cream py-24 px-6">
      <div className="flex flex-col items-center gap-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="font-instrument font-medium text-[11px] text-text-secondary uppercase tracking-[2.5px]">
            How It Works
          </span>
          <h2 className="font-inter-tight font-bold text-[32px] text-text-primary">
            From words to worlds.
          </h2>
          <p className="font-instrument text-[14px] text-text-secondary text-center tracking-[-0.28px]">
            Describe a scene. Watch your vision become cinematic video.
          </p>
        </div>

        {/* Static story card */}
        <div className="relative w-[304px] h-[476px] rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-black">
            <Image
              src="/images/BG-2.png"
              alt=""
              fill
              className="object-cover opacity-30"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, #160601 0%, rgba(78,21,7,0.34) 62%, black 93%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
