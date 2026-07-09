import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-25 py-2 bg-background border-b border-gray-600">
      
      <div className="flex items-center">
        <Link href="/">
          <img src="images/logo.jpeg" alt="" className="h-20 w-25" />
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-sm font-medium text-gray-400 hover:text-foreground transition-colors">
          Beranda
        </Link>
        <Link href="/galeri" className="text-sm font-medium text-gray-400 hover:text-foreground transition-colors">
          Galeri
        </Link>
        <Link href="/artikel" className="text-sm font-medium text-gray-400 hover:text-foreground transition-colors">
          Artikel
        </Link>
        <Link href="/tentang-kami" className="text-sm font-medium text-gray-400 hover:text-foreground transition-colors">
          Tentang Kami
        </Link>
        <Link href="/kontak" className="text-sm font-medium text-gray-400 hover:text-foreground transition-colors">
          Kontak
        </Link>
      </div>

      <div className="flex items-center">
        <Link 
          href="https://api.whatsapp.com/send?phone=6281394818985&text=Halo%20min,%20mau%20tanya%20showcase%20Silent%20Whisper!" 
          className="bg-background border-2 border-gray-400 px-4 py-2.5 text-sm font-medium text-white shadow-xs hover:bg-[#FD5A37] hover:border-[#FD5A37] transition-all"
        >
          Hubungi Kami
        </Link>
      </div>
    </nav>
  )
}