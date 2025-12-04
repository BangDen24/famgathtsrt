import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 flex flex-col">
      {/* Top Logos */}
      <div className="w-full py-3 sm:py-4 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          {/* Logo Taiyo */}
          <div className="relative w-24 h-12 sm:w-28 sm:h-16 md:w-36 md:h-20">
            <Image
              src="/taiyo.png"
              alt="Logo Taiyo Sinar"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Logo K3 */}
          <div className="relative w-20 h-12 sm:w-28 sm:h-16 md:w-36 md:h-20">
            <Image
              src="/k3.png"
              alt="Logo K3"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 max-w-5xl mx-auto w-full">
        {/* Header */}
        <header className="text-center flex flex-col items-center gap-4 sm:gap-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 blur-3xl opacity-20 animate-pulse"></div>
            <h1 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent leading-tight px-2 py-2">
              Family Gathering
              <br className="sm:hidden" /> Taiyo Sinar
              <br className="sm:hidden" /> ME DIV - DEPT-2 Tahun 2025
            </h1>
          </div>

          {/* Banner with decorative elements */}
          <div className="relative w-full max-w-3xl group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative aspect-[3/1] rounded-xl overflow-hidden shadow-2xl ring-1 ring-blue-200">
              <Image
                src="/banner.jpg"
                alt="Family Gathering Banner"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* Decorative text */}
          <p className="text-sm sm:text-base text-blue-600/80 font-medium max-w-2xl px-4">
            ✨ Sabtu-Minggu, 6-7 Desember 2025 ✨
          </p>
        </header>

        {/* Action Buttons */}
        <section className="mt-8 sm:mt-12 md:mt-16 flex flex-col gap-3 sm:gap-4 max-w-md mx-auto w-full">
          <Link href="/rundown" className="w-full group">
            <Button
              variant="outline"
              className="w-full py-6 sm:py-7 text-base sm:text-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold transition-all hover:scale-[1.02] shadow-lg hover:shadow-xl border-0 group-hover:shadow-blue-500/50"
            >
              <span className="flex items-center gap-2">
                📋 Lihat Rundown Acara
              </span>
            </Button>
          </Link>

          <Link
            href="https://maps.app.goo.gl/Y239Wt4VuyqkCP3k7"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full group"
          >
            <Button
              variant="outline"
              className="w-full py-6 sm:py-7 text-base sm:text-lg bg-white hover:bg-blue-50 border-2 border-blue-300 text-blue-600 hover:text-blue-700 font-semibold transition-all hover:scale-[1.02] shadow-md hover:shadow-lg"
            >
              <span className="flex items-center gap-2">
                📍 Lokasi Rest Area KM.147
              </span>
            </Button>
          </Link>

          <Link
            href="https://maps.app.goo.gl/8q65y76Ajaqa9fH4A"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full group"
          >
            <Button
              variant="outline"
              className="w-full py-6 sm:py-7 text-base sm:text-lg bg-white hover:bg-blue-50 border-2 border-blue-300 text-blue-600 hover:text-blue-700 font-semibold transition-all hover:scale-[1.02] shadow-md hover:shadow-lg"
            >
              <span className="flex items-center gap-2">
                📍 Lokasi Villa Cahaya Garut
              </span>
            </Button>
          </Link>

          {/* Uncomment if needed
          <Link href="/kontak" className="w-full group">
            <Button
              variant="outline"
              className="w-full py-6 sm:py-7 text-base sm:text-lg bg-white hover:bg-blue-50 border-2 border-blue-300 text-blue-600 hover:text-blue-700 font-semibold transition-all hover:scale-[1.02] shadow-md hover:shadow-lg"
            >
              <span className="flex items-center gap-2">
                📞 Kontak PIC
              </span>
            </Button>
          </Link>
          */}
        </section>

        {/* Info Cards */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-md border border-blue-200/50 hover:shadow-lg transition-all hover:scale-[1.02]">
            <div className="text-2xl mb-2">🏨</div>
            <h3 className="font-bold text-blue-700 mb-1">Villa Cahaya Garut</h3>
            <p className="text-xs sm:text-sm text-blue-600/70">
              Penginapan nyaman untuk keluarga
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-md border border-blue-200/50 hover:shadow-lg transition-all hover:scale-[1.02]">
            <div className="text-2xl mb-2">🎉</div>
            <h3 className="font-bold text-blue-700 mb-1">Fun Games & BBQ</h3>
            <p className="text-xs sm:text-sm text-blue-600/70">
              Aktivitas seru bersama keluarga
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/60 backdrop-blur-sm border-t border-blue-200/50 text-center text-xs sm:text-sm text-blue-600/70 py-4 sm:py-6">
        <p className="font-medium">
          © 2025 Family Gathering Taiyo Sinar ME DIV - DEPT-2
        </p>
        <p className="text-xs mt-1">
          Dibuat dengan ❤️ untuk keluarga besar Taiyo
        </p>
      </footer>
    </main>
  );
}
