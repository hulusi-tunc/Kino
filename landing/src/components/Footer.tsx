/* ------------------------------------------------------------------ */
/*  Link Column                                                        */
/* ------------------------------------------------------------------ */

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-sans font-semibold text-[14px] text-text-primary">
        {title}
      </span>
      {links.map((link) => (
        <a
          key={link}
          href="#"
          className="font-sans text-[14px] text-text-secondary hover:text-text-primary transition-colors"
        >
          {link}
        </a>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Social Icons                                                       */
/* ------------------------------------------------------------------ */

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M9.47 6.77L14.18 1.5H13.04L8.96 6.01L5.72 1.5H1.5L6.44 8.78L1.5 14.31H2.64L6.95 9.54L10.37 14.31H14.59L9.47 6.77ZM7.53 8.85L7.02 8.11L3.06 2.4H5.17L8 6.73L8.51 7.47L13.04 13.45H10.93L7.53 8.85Z"
        fill="#686763"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M14.36 4.5a1.74 1.74 0 00-1.22-1.23C12.05 3 8 3 8 3s-4.05 0-5.14.27A1.74 1.74 0 001.64 4.5 18.14 18.14 0 001.37 8c-.01 1.18.08 2.37.27 3.5a1.74 1.74 0 001.22 1.23C3.95 13 8 13 8 13s4.05 0 5.14-.27a1.74 1.74 0 001.22-1.23c.19-1.13.28-2.32.27-3.5.01-1.18-.08-2.37-.27-3.5zM6.6 10.12V5.88L10.23 8 6.6 10.12z"
        fill="#686763"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect
        x="2"
        y="2"
        width="12"
        height="12"
        rx="3.5"
        stroke="#686763"
        strokeWidth="1.3"
      />
      <circle cx="8" cy="8" r="2.5" stroke="#686763" strokeWidth="1.3" />
      <circle cx="11.5" cy="4.5" r="0.75" fill="#686763" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Footer() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="max-w-[1200px] mx-auto px-6 xl:px-0 pt-16 pb-12">
        {/* Columns */}
        <div className="grid grid-cols-2 md:flex gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:flex-1 flex flex-col gap-3">
            <span className="font-sans font-semibold text-[18px] text-text-primary">
              KINO
            </span>
            <p className="font-sans text-[14px] leading-[22px] text-text-secondary max-w-[240px]">
              Your AI video director. Professional quality, one sentence away.
            </p>
          </div>

          {/* Link columns */}
          <LinkColumn
            title="Product"
            links={["Features", "Pricing", "Examples", "API"]}
          />
          <LinkColumn
            title="Company"
            links={["About", "Blog", "Careers", "Contact"]}
          />
          <LinkColumn
            title="Legal"
            links={["Privacy Policy", "Terms of Service", "Cookie Policy"]}
          />
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-border">
          <span className="font-sans text-[13px] text-text-secondary">
            &copy; 2026 Kino. All rights reserved.
          </span>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-text-secondary hover:text-text-primary transition-colors"
              aria-label="X (Twitter)"
            >
              <XIcon />
            </a>
            <a
              href="#"
              className="text-text-secondary hover:text-text-primary transition-colors"
              aria-label="YouTube"
            >
              <YouTubeIcon />
            </a>
            <a
              href="#"
              className="text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
