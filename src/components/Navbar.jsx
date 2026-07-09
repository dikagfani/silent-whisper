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
        <Link href="/beranda" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
          Beranda
        </Link>
        <Link href="/galeri" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
          Galeri
        </Link>
        <Link href="/artikel" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
          Artikel
        </Link>
        <Link href="/tentang-kami" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
          Tentang Kami
        </Link>
        <Link href="/kontak" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
          Kontak
        </Link>
      </div>

      <div className="flex items-center">
        <Link 
          href="https://api.whatsapp.com/send?phone=6281394818985&text=Halo%20min,%20mau%20tanya%20showcase%20Silent%20Whisper!" 
          className="bg-background border border-gray-500 px-4 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#FD5A37] transition-all active:scale-98"
        >
          Hubungi Kami
        </Link>
      </div>
    </nav>
  )
}