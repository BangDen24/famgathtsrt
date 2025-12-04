import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-50 p-6 flex flex-col justify-between">
      {/* Header */}
      <header className="text-center mt-6">
        <h1 className="text-3xl font-bold text-brand-500">Family Gathering 2025</h1>
        <Image src="/banner.jpg" alt="Family Gathering" width={200} height={200} />
      </header>

      {/* Content */}
      <section className="mt-12 flex flex-col gap-4">
        <Link href="/rundown">
          <Button
          variant={"outline"}
            className="w-full py-6 text-lg bg-brand-500 hover:bg-brand-400 text-black"
          >
            Lihat Rundown
          </Button>
        </Link>

        <Link href="https://share.google/TEsyyR3R5zEfZhCas" target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="w-full py-6 text-lg border-brand-300 text-brand-500"
          >
            Lokasi Acara
          </Button>
        </Link>

        <Link href="/kontak">
          <Button
            variant="outline"
            className="w-full py-6 text-lg border-brand-300 text-brand-500"
          >
            Kontak PIC
          </Button>
        </Link>
      </section>

      {/* Footer simple */}
      <footer className="text-center text-xs text-neutral-500 mt-12 mb-4">
        © 2025 Family Gathering
      </footer>
    </main>
  );
}
