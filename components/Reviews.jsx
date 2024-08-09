"use client";

import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CArdTitle,
} from "../components/ui/card";

// import Swiper react components
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

// Import swiper style
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Philippe Baron",
    job: "Newind Marketing",
    review:
      "Une collaboration exceptionnelle avec Ziyad. Ses site web sont à la fois esthétiques et fonctionnels. Je recommande vivement ses services. Il est vraiment rapide!",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Daniel Ferland",
    job: "ADWS Canada",
    review:
      "Une vrai machine! Travailler avec Ziyad est un réel plaisir. Ce qu'il developpe dépasse toutes mes attentes en termes de design et de performance. Hautement recommandé ! »",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Reda Sarhane",
    job: "Magellan Agency",
    review:
      "Un perfectionniste trés exigeant en terme de qualité des livrables, un esprit créatif et organisationnel rare. Beaucoup de passion et de patience",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Hakim Lamrichi",
    job: "Nahrawand Academy",
    review:
      "Ziyad, que dire, beaucoup de culture générale developpe chez lui un esprit créatif et perfectionniste hors paire. bonne continuation, tu es le meilleur!",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Hamza Aniba",
    job: "Vitoderm",
    review:
      "Une vrai surprise! je ne pense pas que j epourrai me passer de ses services. un jocker et un solution man a toutes mes urgences.",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Témoignages</h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      {/* image */}
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />
                      {/* name */}
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className='text-lg text-muted-foreground'>
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
