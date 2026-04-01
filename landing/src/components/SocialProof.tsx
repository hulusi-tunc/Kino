const avatarColors = ["#E2E4E9", "#FBDFB1", "#C2D6FF", "#C2EFFF"];

function Divider() {
  return <div className="w-px h-[40px] bg-border" />;
}

export default function SocialProof() {
  return (
    <section className="bg-cream py-10 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0 flex items-center justify-between">
        {/* Stat 1: Videos Created */}
        <div className="flex flex-col items-center">
          <span className="font-inter-tight font-bold text-[28px] text-text-primary">
            2M+
          </span>
          <span className="font-instrument text-[13px] text-text-secondary mt-1">
            videos created
          </span>
        </div>

        <Divider />

        {/* Stat 2: Creators */}
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            {/* Avatar stack — hidden on mobile */}
            <div className="hidden md:flex items-center -space-x-[7px] mr-2">
              {avatarColors.map((color, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full border-2 border-white"
                  style={{ backgroundColor: color, zIndex: avatarColors.length - i }}
                />
              ))}
            </div>
            <span className="font-inter-tight font-bold text-[28px] text-text-primary">
              500K
            </span>
          </div>
          <span className="font-instrument text-[13px] text-text-secondary mt-1">
            creators
          </span>
        </div>

        <Divider />

        {/* Stat 3: Max Resolution */}
        <div className="flex flex-col items-center">
          <span className="font-inter-tight font-bold text-[28px] text-text-primary">
            4K
          </span>
          <span className="font-instrument text-[13px] text-text-secondary mt-1">
            max resolution
          </span>
        </div>
      </div>
    </section>
  );
}
