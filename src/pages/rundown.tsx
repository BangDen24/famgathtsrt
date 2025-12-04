"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface RundownItem {
  time: string;
  s: string;
  e: string;
  title: string;
  detail: string;
}

interface SectionProps {
  title: string;
  data: RundownItem[];
  targetDate: string;
  checkActive: (start: string, end: string, targetDate: string) => boolean;
}

const Section = ({ title, data, targetDate, checkActive }: SectionProps) => {
  const activeIndex = data.findIndex((item) => checkActive(item.s, item.e, targetDate));
  
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-brand-600 mb-4">{title}</h2>

      <Accordion 
        type="single" 
        collapsible 
        defaultValue={activeIndex !== -1 ? `item-${activeIndex}` : undefined}
        className="space-y-2"
      >
        {data.map((item, i) => {
          const active = checkActive(item.s, item.e, targetDate);

          return (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className={`rounded-xl border transition-all ${
                active
                  ? "bg-brand-100 border-brand-400 shadow-md"
                  : "bg-white border-neutral-200"
              }`}
            >
              <AccordionTrigger className="px-4 hover:no-underline">
                <div className="flex items-center gap-3 w-full">
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-brand-800">{item.time}</p>
                      {active && (
                        <Badge className="bg-green-500 hover:bg-green-600 text-white text-xs">
                          Sedang Berlangsung
                        </Badge>
                      )}
                    </div>
                    <p className="text-base font-medium">{item.title}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <p className="text-sm text-neutral-600">{item.detail}</p>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
};

export default function RundownPage() {
  // Initialize dengan Date, bukan null
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    // Jangan set state di sini, langsung ke interval saja
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const checkActive = (start: string, end: string, targetDate: string): boolean => {
    // targetDate format: "2025-12-06" atau "2025-12-07"
    const target = new Date(targetDate);
    target.setHours(0, 0, 0, 0);
    
    const currentDate = new Date(now);
    currentDate.setHours(0, 0, 0, 0);
    
    // Cek apakah tanggal sekarang sama dengan target date
    if (currentDate.getTime() !== target.getTime()) {
      return false;
    }

    const [sh, sm] = start.split(":").map(Number);
    const [eh, em] = end.split(":").map(Number);

    const startTime = new Date(now);
    startTime.setHours(sh, sm, 0);

    const endTime = new Date(now);
    endTime.setHours(eh, em, 0);

    return now >= startTime && now <= endTime;
  };

  const sabtu: RundownItem[] = [
    { time: "08.00 – 09.00", s:"08:00", e:"09:00", title: "Kumpul di Office Sedana Karawang", detail: "Sakam / Riko — Persiapan keberangkatan konvoi" },
    { time: "09.00 – 12.00", s:"09:00", e:"12:00", title: "Perjalanan", detail: "Dari Office Sedana ke Rest Area 147A" },
    { time: "12.00 – 12.30", s:"12:00", e:"12:30", title: "Istirahat & Shalat Dzuhur", detail: "Rest Area 147A Padaleunyi" },
    { time: "12.30 – 13.30", s:"12:30", e:"13:30", title: "Perjalanan", detail: "Menuju Hotel Cahaya Garut" },
    { time: "13.30 – 14.00", s:"13:30", e:"14:00", title: "Tiba di Hotel", detail: "Pembagian makan siang" },
    { time: "14.00 – 15.00", s:"14:00", e:"15:00", title: "Istirahat + Shalat Ashar", detail: "Pembagian kunci kamar" },
    { time: "15.00 – 17.30", s:"15:00", e:"17:30", title: "Fun Games", detail: "Games keluarga & lomba ringan" },
    { time: "17.00 – 18.30", s:"17:00", e:"18:30", title: "Istirahat & Persiapan", detail: "Mandi & bersiap malam keakraban" },
    { time: "18.30 – 19.00", s:"18:30", e:"19:00", title: "Pembukaan Acara", detail: "Doa + sambutan panitia" },
    { time: "19.00 – 20.00", s:"19:00", e:"20:00", title: "Makan Malam", detail: "Prasmanan" },
    { time: "20.00 – 22.00", s:"20:00", e:"22:00", title: "Malam Keakraban", detail: "Domba guling + doorprize" },
    { time: "22.00 ~", s:"22:00", e:"23:59", title: "Istirahat / Tidur", detail: "Kembali ke kamar masing-masing" },
  ];

  const minggu: RundownItem[] = [
    { time: "06.00 – 07.00", s:"06:00", e:"07:00", title: "Senam Pagi / Jalan Santai", detail: "Olahraga ringan" },
    { time: "07.00 – 08.00", s:"07:00", e:"08:00", title: "Sarapan Pagi", detail: "Restoran hotel" },
    { time: "08.00 – 09.30", s:"08:00", e:"09:30", title: "Acara Bebas", detail: "Berenang / eksplor hotel" },
    { time: "11.00 – 12.00", s:"11:00", e:"12:00", title: "Check-out", detail: "Bersih-bersih & pengecekan kamar" },
  ];

  return (
    <main className="min-h-screen bg-brand-50 p-6">
      {/* Header */}
      <header className="flex items-center gap-3 mb-6">
        <Link href="/">
          <ArrowLeft className="w-6 h-6 text-brand-500" />
        </Link>
        <h1 className="text-2xl font-bold text-brand-600">Rundown Acara</h1>
      </header>

      <Section 
        title="Sabtu, 06 Desember 2025" 
        data={sabtu} 
        targetDate="2025-12-06"
        checkActive={checkActive} 
      />
      <Section 
        title="Minggu, 07 Desember 2025" 
        data={minggu} 
        targetDate="2025-12-07"
        checkActive={checkActive} 
      />
    </main>
  );
}