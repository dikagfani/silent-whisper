import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background text-gray-400 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-600">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 items-center text-center">
        
        
        <div className="flex flex-col gap-4 text-xs md:text-sm md:text-left">
          <Link href="/" className="hover:text-foreground transition-colors">
            Beranda
          </Link>
          <Link
            href="/galeri"
            className="hover:text-foreground transition-colors"
          >
            Galeri
          </Link>
          <Link
            href="/artikel"
            className="hover:text-foreground transition-colors"
          >
            Artikel
          </Link>
        </div>

        
        <div className="flex flex-col items-center">
          <div className=" mb-4">
            <img
              src="/images/logo.jpeg"
              alt="Silent Whisper"
              className="h-25 w-auto"
            />
          </div>

          <p className="text-[11px] md:text-xs text-gray-400 max-w-sm mb-6 tracking-wide">
            <em>"Fearless fashion for the fearless you"</em> <br /> <br />
            Silent Whisper merupakan usaha mikro di bidang fashion asal Bandung, Jawa Barat, yang berfokus pada pakaian berkarakter dark urban streetwear. Brand memiliki visi besar untuk menghadirkan pakaian berkualitas tinggi yang mampu mencerminkan ekspresi diri anak muda yang modern, berani, dan autentik.
          </p>

          <div className="flex items-center gap-3 mb-8">
            <a
              href="https://www.instagram.com/silentwhisperco"
              target="blank"
              className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-xs text-gray-400 hover:text-white transition-all"
            >
              <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>

            </a>
            <a
              href="https://www.tiktok.com/@silentwhisper.co?_r=1&_t=ZS-97HvyEV68pQ"
              target="blank"
              className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-xs text-gray-400 hover:text-white transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.03 1.6 4.17 1.12 1.25 2.75 1.9 4.43 2.02v3.76c-1.63-.04-3.24-.53-4.57-1.48-.02 2.29-.01 4.58-.02 6.87-.08 2.29-.94 4.57-2.58 6.16-1.78 1.76-4.32 2.58-6.78 2.2-2.73-.32-5.3-2.31-6.04-5.02-.87-3.08.31-6.61 2.87-8.38 1.48-1.04 3.32-1.49 5.12-1.27v3.8c-1.22-.16-2.5.21-3.41 1.07-1.01.91-1.39 2.39-.93 3.69.43 1.3 1.71 2.27 3.08 2.27 1.42.04 2.8-.84 3.25-2.19.22-.59.26-1.23.25-1.86-.01-4.24-.01-8.49-.01-12.73.53-.01 1.05-.01 1.58-.02z"/>
              </svg>
            </a>

            <a
              href="https://shopee.co.id/silentwhisper.co"
              target="blank"
              className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-xs text-gray-400 hover:text-white transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19.12 6.78h-2.17V5.5c0-2.48-2.02-4.5-4.5-4.5s-4.5 2.02-4.5 4.5v1.28H5.78C4.24 6.78 3 8.02 3 9.56v9.44c0 1.54 1.24 2.78 2.78 2.78h13.34c1.54 0 2.78-1.24 2.78-2.78V9.56c0-1.54-1.24-2.78-2.78-2.78zM9.45 5.5c0-1.65 1.35-3 3-3s3 1.35 3 3v1.28H9.45V5.5zm10.23 13.5c0 .7-.57 1.28-1.28 1.28H6.5c-.7 0-1.28-.57-1.28-1.28V10.5c0-.7.57-1.28 1.28-1.28h11.9c.7 0 1.28.57 1.28 1.28v8.5z"/>
              </svg>
            </a>
          </div>

          <p className="text-[10px] md:text-xs text-gray-400 tracking-wider">
            Copyright © 2026 - Silent Whisper
          </p>
        </div>


        <div className="flex flex-col gap-4 text-xs md:text-sm md:text-right">
          <Link
            href="/tentang-kami"
            className="hover:text-foreground transition-colors"
          >
            Tentang Kami
          </Link>
          <Link
            href="/kontak"
            className="hover:text-foreground transition-colors"
          >
            Kontak
          </Link>
          <Link
            href="/kebijakan-privasi"
            className="hover:text-foreground transition-colors"
          >
            Kebijakan Privasi
          </Link>
        </div>
      </div>
    </footer>
  );
}
