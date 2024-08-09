import DevImg from './DevImg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from 'lucide-react';
import { get } from 'react-hook-form';


const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Ziyad Issa',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+212 661 093 231',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'issaziyad@gmail.com',
    },
    {
        icon: <Calendar size={20} />,
        text: 'Casablanca, August 25, 1990',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Licence in graphic design',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Casablanca, Morocco',
    },
];

const qualificationData = [
    {
        title: 'Formation',
        data: [
            {
                university: 'College Lasalle - Casablanca',
                qualification: 'Diplome +3 de technicien en graphique design',
                years: '2010 - 2013',
            },
        ],
    },
    {
        title: 'Expérience',
        data: [
            {
                company: 'Auto Dealer Web Service',
                role: 'Développeur web front-end',
                years: "Fev.2024 à Aujourd'hui",
            },
            {
                company: 'Newind Marketing',
                role: 'Développeur web front-end',
                years: "Janv.2024 à Aujourd'hui",
            },
            {
                company: 'Nahrawand',
                role: 'Directeur Artistique Sénior',
                years: 'Mar.2020 à Nov.2023',
            },
            {
                company: 'Capricorn agency',
                role: 'Directeur Artistique Sénior',
                years: 'Janv.2016 à déc.2019',
            },
            {
                company: 'Brand Strategy group',
                role: 'Directeur Artistique Sénior',
                years: 'Juin.2013 à oct.2015',
            },
        ],
    },
];

const skillData = [
    {
        title: 'Skills',
        data: [
            {
                name: 'Html, Css, Javascript, PHP',
            },
            {
                name: 'Front-end Development',
            },
            {
                name: 'ReactJs, NextJs, VueJs, NodeJs, ',
            },
            {
                name: 'Sass, Tailwind, Bootstrap',
            },
        ],
    },
    {
        title: 'Tools',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
            {
                imgPath: '/about/figma.svg',
            },
            {
                imgPath: '/about/wordpress.svg',
            },
            {
                imgPath: '/about/notion.svg',
            },
        ],
    },
];

const Language = [
    {
        title: 'French',
        level: '100%'
    },
    {
        title: 'English',
        level: '70%'
    },
    {
        title: 'Arabic',
        level: '100%'
    },
];



const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };
    return (
        <section className='xl:h-[1080px] pb-12 xl:py-24'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>À propos de moi</h2>
                <div className='flex flex-col xl:flex-row'>
                    {/* image */}
                    <div className="hidden xl:flex flex-1 relative">
                        <DevImg 
                            containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
                            imgSrc='/about/developer.png'
                        />
                    </div>
                    {/* tabs */}
                    <div className='flex-1'>
                        <Tabs defaultValue='personal'>
                            <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Informations</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Qualifications</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Compétences</TabsTrigger>
                            </TabsList>
                            {/* tabs content */}
                            <div className='text-lg mt-12 xl:mt-8'>
                                {/* personal */}
                                <TabsContent value='personal'>
                                    <div className='text-center xl:text-left'>
                                        <h3 className='h3 mb-4'>Qualité de service inégalée depuis plus de 10 ans</h3>
                                        <p className='subtitle max-w-xl mx-auto xl:mx-0'>Designer de métier, je me spécialise dans la création de sites Web intuitifs dotés d'une technologie de pointe, offrant des expériences utilisateur dynamiques et engageantes.</p>
                                        {/* icons */}
                                        <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                            {infoData.map((item, index) => {
                                                return (
                                                    <div 
                                                        className='flex items-center gap-x-4 mx-auto xl:mx-0'
                                                        key={index}>
                                                            <div className='text-primary'>{item.icon}</div>
                                                            <div>{item.text}</div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                            {/* Languages */}
                                            <div className='flex flex-col gap-y-2'>
                                                <div className='text-primary'>Langues </div>
                                                <div className='border-b border-border'></div>
                                                <div>Français & Arabe (Billingue)</div>
                                                <div>Anglais Américain (lu, écrit, parlé)</div>
                                            </div>
                                            {/* Loisirs */}
                                            <div className='flex flex-col gap-y-2'>
                                                <div className='text-primary'>Loisirs </div>
                                                <div className='border-b border-border'></div>
                                                <div>Sport, Techno music, Cuisine</div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* qualifications */}
                                <TabsContent value='qualifications'>
                                    <div>
                                        <h3 className='h3 mb-8 text-center xl:text-left'>
                                            Mon Parcour Professionnel
                                        </h3>
                                        {/* experience & education wrapper */}
                                        <div className='grid md:grid-cols-2 gap-y-8'>
                                            {/* experience */}
                                            <div className='flex flex-col gap-y-6'>
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <Briefcase />
                                                    <h4 className='capitalize font-medium'>
                                                        {getData(qualificationData, 'Expérience').title}
                                                    </h4>
                                                </div>
                                                {/* list */}
                                                <div className='flex flex-col gap-y-8'>
                                                    {getData(qualificationData, 'Expérience').data.map((item, index) => {
                                                        const {company, role, years} = item;
                                                        return (
                                                            <div className='flex gap-x-8 group' key={index}>
                                                                <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                                </div>
                                                                <div>
                                                                    <div className='font-semibold text-xl leading-none mb-2'>{company}</div>
                                                                    <div className='text-lg leading-none text-muted-foreground mb-4'>{role}</div>
                                                                    <div className='text-base font-medium'>{years}</div>
                                                                </div>
                                                            </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                            {/* education */}
                                            <div className='flex flex-col gap-y-6'>
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <GraduationCap size={28} /> 
                                                    <h4 className='capitalize font-medium'>
                                                        {getData(qualificationData, 'Formation').title}
                                                    </h4>
                                                </div>
                                                {/* list */}
                                                <div className='flex flex-col gap-y-8'>
                                                    {getData(qualificationData, 'Formation').data.map((item, index) => {
                                                        const {university, qualification, years} = item;
                                                        return (
                                                            <div className='flex gap-x-8 group' key={index}>
                                                                <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                                </div>
                                                                <div>
                                                                    <div className='font-semibold text-xl leading-none mb-2'>{university}</div>
                                                                    <div className='text-lg leading-none text-muted-foreground mb-4'>{qualification}</div>
                                                                    <div className='text-base font-medium'>{years}</div>
                                                                </div>
                                                            </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* skills */}
                                <TabsContent value='skills'>
                                    <div className='text-center xl:text-left'>
                                        <h3 className='h3 mb-8'>Mon Quotidien | Ma Passion</h3>
                                        <div className='mb-14'>
                                            <h4 className='text-xl font-semibold mb-2'>Compétences</h4>
                                            <div className='border-b border-border mb-4'></div>
                                            {/* skills list */}
                                            <div>
                                                {getData(skillData, 'Skills').data.map(
                                                    (item, index) => {
                                                        const {name} = item;
                                                        return (
                                                            <div className='w-2/4 text-center xl:text-left mx-auto xl:mx-0 pb-1' key={index}>
                                                                <div className='font-medium'>{name}</div>
                                                            </div>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </div>
                                        {/* tools */}
                                        <div>
                                            <h4 className='text-xl font-semibold mb-2 xl:text-left'>
                                                Outils & Applications
                                            </h4>
                                            <div className='border-b border-border mb-4'></div>
                                            <div className='flex gap-x-8 justify-center xl:justify-start'>
                                                {getData(skillData, 'Tools').data.map((item, index) => {
                                                    const {imgPath} = item ;
                                                    return (
                                                        <div key={index}>
                                                            <Image
                                                                src={imgPath}
                                                                width={48}
                                                                height={48}
                                                                alt=''
                                                                priority
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
