"use client";

export function PreFooter() {
  return (
    <section className="bg-gray-prefooter py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-center items-center space-x-4">
          {/* Meetup */}
          <a
            href="https://www.meetup.com/Bitcoin-Meetup-Switzerland"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Meetup"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
          </a>
          
          {/* YouTube */}
          <a
            href="https://www.youtube.com/channel/UC5nVX9C2vM1dFg0BvatKEOg"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="YouTube"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          
          {/* X / Twitter */}
          <a
            href="https://x.com/bitcoin_ch"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="X"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}