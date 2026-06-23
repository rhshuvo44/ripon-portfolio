"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeader } from "@/components/shared/section-header";

import "swiper/css";
import "swiper/css/pagination";

export function Testimonials() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          index="07"
          label="Testimonials"
          title={
            <>
              What clients <span className="gradient-text italic">say</span>.
            </>
          }
        />
      </div>

      <div className="container-px mx-auto max-w-5xl">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={28}
          slidesPerView={1}
          loop
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="testimonial-swiper pb-14"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="rounded-3xl border border-border bg-card/50 p-8 md:p-12">
                <Quote className="h-9 w-9 text-signal-500/40 mb-6" />
                <p className="font-display text-xl md:text-2xl leading-relaxed text-balance mb-8">
                  &ldquo;{t.review}&rdquo;
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden border border-border">
                      <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="48px" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {t.role} · {t.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
