'use client';
import Link from "next/link";
import { Button } from "./ui/button";

// import Swiper react components
import {Swiper} from 'swiper/react';
import {SwiperSlide} from 'swiper/react';

// Import swiper style
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

// Components
import ProjectCard from '../components/ProjectCard' ;

const projectData = [
    {
        image: '/work/2.png',
        techno: 'Wordpress',
        name:'Vitoderm',
        description:
            'Marque de produits cosmétique 100% naturelle et Marocaine',
        route: 'https://www.vitoderm.com',
        github: '/',
    },
    {
        image: '/work/3.png',
        techno: 'Full Stack',
        name:'TransXport Canada',
        description:
            'Concessionnaire de vehicule et organisme de financement',
        route: '#',
        github: '/',
    },
    {
        image: '/work/4.png',
        techno: 'Full Stack',
        name:'Norm Auto Levis',
        description:
            'Concessionnaire automobile et organisme de financement',
        route: 'https://normautos.myauto123.com/',
        github: '/',
    },
    {
        image: '/work/5.png',
        techno: 'Full Stack',
        name:'FGR Auto Mirabel',
        description:
            'Concessionnaire automobile et organisme de financement',
        route: 'https://www.fgrauto.com/',
        github: '/',
    },
    {
        image: '/work/6.png',
        techno: 'Full Stack',
        name:'Auto TL',
        description:
            'Concessionnaire automobile et organisme de financement',
        route: 'https://www.autotl.ca/',
        github: '/',
    },
    {
        image: '/work/7.png',
        techno: 'Wordpress',
        name:'ADWS - Auto Dealer Web Service',
        description:
            'Agence de developement web spécialisée en concessions automobiles et vehicules',
        route: 'https://www.adws.ca/',
        github: '/',
    },
    {
        image: '/work/8.png',
        techno: 'Full Stack',
        name:'Occasion Saint-hubert',
        description:
            'Concessionnaire automobile et organisme de financement',
        route: 'https://www.occasionsthubert.com/',
        github: '/',
    },
    {
        image: '/work/1.png',
        techno: 'Wordpress',
        name:'Celipack',
        description:
            '1er Importateur d\'emballage pharmaceutique, cosmétique et alimentaire au Maroc',
        route: 'https://celipack.com/',
        github: '/',
    },
  ];


const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
        <div className="container mx-auto">
            {/* text */}
            <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                <h2 className="section-title mb-4">Projets Réalisés</h2>
                <p className="subtitle mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link href='/projects'>
                    <Button>Tous les projets</Button>
                </Link>
            </div>
            {/* slider */}
            <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
                <Swiper 
                    className="h-[480px]"
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                    }}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                >
                    {/* show only the first 4 project for the slide */}
                    {projectData.slice(0, 8).map((project, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <ProjectCard project={project} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Work