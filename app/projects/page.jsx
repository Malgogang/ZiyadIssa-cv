"use client";
import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { Tabs } from "@/components/ui/tabs";

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
// remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.techno)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all projects' return all projects, else filter by category
    return category === 'all projects'
      ? project
      : project.techno === category;
   });

   console.log(filteredProjects);

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  key={index}
                  value={category}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
           <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
           </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;