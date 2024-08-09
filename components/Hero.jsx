import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

import { FaHeart } from "react-icons/fa";

// components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-bold mb-4 text-primary tracking-[4px]">
            Créative Manager <br/>| Développeur Web Front-end |
            </div>
            <h1 className="h1 mb-4">
              Bonjour, Mon nom est <span className="text-primary">Ziyad Issa</span>
            </h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
            Expert en conception graphique et développement web, je fusionne l'art du design avec la précision du code pour créer des expériences numériques captivantes.
            </p>
            {/* Button */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Me contacter
                  <Send size={18} />
                </Button>
              </Link>
              <Link href="https://www.cadoshka.com/cv-ziyad-issa-2024-fr.pdf" target="_blank">
                <Button variant="secondary" className="gap-x-2">
                  Télécharger mon CV
                  <Download size={18} />
                </Button>
              </Link>
            </div>
            
            {/* social */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[32px] hover:text-primary transition-all"
            />
          </div>
          
          {/* image */}
          <div className="hidden xl:flex relative ">
            
            {/* badge 1 */}
            <Badge
                icon={<FaHeart />}
                containerStyles='absolute top-[24%] -left-[5rem]'
                endCountNum={12}
                badgeText={"Ans d'Expérience"}
            />
            {/* badge 2 */}
            <Badge
                icon={<RiTodoFill/>}
                containerStyles='absolute top-[80%] -left-[1rem]'
                endCountNum={177}
                badgeText={"Projets Réalisés"}
            />
            {/* badge 3 */}
            <Badge
                icon={<RiTeamFill/>}
                containerStyles='absolute top-[44%] -right-[4rem]'
                endCountNum={16}
                endCountText='k'
                badgeText={"Followers Instagram"}
            />

            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bottom"
              imgSrc="/hero/developer.png"
            />
          </div>
        </div>
        
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12">
          <RiArrowDownSLine className="text-3xl text-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
