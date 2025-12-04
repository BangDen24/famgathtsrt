import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-50 flex flex-col justify-between">
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 max-w-4xl mx-auto w-full">
        {/* Header */}
        <header className="text-center flex flex-col items-center gap-4 sm:gap-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-500 leading-tight px-2">
            Family Gathering<br className="sm:hidden" /> Taiyo Sinar<br className="sm:hidden" /> ME DIV - DEPT-2 Tahun 2025
          </h1>
          
          {/* Responsive Image */}
          <div className="w-full max-w-2xl relative aspect-[3/1] rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/banner.jpg" 
              alt="Family Gathering Taiyo Sinar Cikampek - Karawang 2025 Banner" 
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>

        {/* Content */}
        <section className="mt-8 sm:mt-12 md:mt-16 flex flex-col gap-3 sm:gap-4 max-w-md mx-auto w-full">
          <Link href="/rundown" className="w-full">
            <Button
              variant="outline"
              className="w-full py-5 sm:py-6 text-base sm:text-lg bg-brand-500 hover:bg-brand-400 text-black font-medium transition-all hover:scale-[1.02]"
            >
              📋 Lihat Rundown
            </Button>
          </Link>
          
          <Link 
            href="https://share.google/TEsyyR3R5zEfZhCas" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button
              variant="outline"
              className="w-full py-5 sm:py-6 text-base sm:text-lg border-brand-300 text-brand-500 hover:bg-brand-50 font-medium transition-all hover:scale-[1.02]"
            >
              📍 Lokasi Acara
            </Button>
          </Link>
          
          {/* <Link href="/kontak" className="w-full">
            <Button
              variant="outline"
              className="w-full py-5 sm:py-6 text-base sm:text-lg border-brand-300 text-brand-500 hover:bg-brand-50 font-medium transition-all hover:scale-[1.02]"
            >
              📞 Kontak PIC
            </Button>
          </Link> */}
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center text-xs sm:text-sm text-neutral-500 py-4 sm:py-6">
        © 2025 Family Gathering Taiyo Sinar
      </footer>
    </main>
  );
}