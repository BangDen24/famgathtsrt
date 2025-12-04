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
    <section className="mb-6 sm:mb-8 md:mb-10">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-brand-600 mb-3 sm:mb-4 px-1">
        {title}
      </h2>

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
              className={`rounded-lg sm:rounded-xl border transition-all ${
                active
                  ? "bg-brand-100 border-brand-400 shadow-md"
                  : "bg-white border-neutral-200"
              }`}
            >
              <AccordionTrigger className="px-3 sm:px-4 py-3 sm:py-4 hover:no-underline">
                <div className="flex items-start sm:items-center gap-2 sm:gap-3 w-full">
                  <div className="flex-1 text-left min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                      <p className="font-semibold text-brand-800 text-sm sm:text-base whitespace-nowrap">
                        {item.time}
                      </p>
                      {active && (
                        <Badge className="bg-green-500 hover:bg-green-600 text-white text-[10px] sm:text-xs w-fit">
                          Sedang Berlangsung
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm sm:text-base font-medium line-clamp-2 pr-2">
                      {item.title}
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-3 sm:px-4 pb-3 sm:pb-4">
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {item.detail}
                </p>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
};

export default function RundownPage() {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const checkActive = (start: string, end: string, targetDate: string): boolean => {
    const target = new Date(targetDate);
    target.setHours(0, 0, 0, 0);
    
    const currentDate = new Date(now);
    currentDate.setHours(0, 0, 0, 0);
    
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
    { time: "08.00 – 09.00", s:"08:00", e:"09:00", title: "Kumpul di Office Sedana Karawang", detail: "Persiapan keberangkatan konvoi" },
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
    <main className="min-h-screen bg-brand-50 px-4 sm:px-6 md:px-8 py-4 sm:py-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 sticky top-0 py-2 sm:py-3 z-10 -mx-4 sm:-mx-6 md:-mx-8 px-4 sm:px-6 md:px-8">
          <Link href="/" className="flex items-center">
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-brand-500 hover:text-brand-600 transition-colors" />
          </Link>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-600">
            Rundown Acara
          </h1>
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
      </div>
    </main>
  );
}