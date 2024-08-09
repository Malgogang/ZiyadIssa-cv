import {
  GanttChartSquare,
  Blocks,
  Instagram,
  Clapperboard,
  ImageUp,
  SquarePen,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Design Web",
    description:
      "je transforme vos idées en réalité digitale. Offrez à votre entreprise un site web unique et innovant qui capte l'attention et engage vos visiteurs.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Developpement Web",
    description:
      "Votre vision, mon expertise : développons ensemble un site web sur mesure et performant. Assurez à votre entreprise une présence en ligne solide et efficace.",
  },
  {
    icon: <SquarePen size={72} strokeWidth={0.8} />,
    title: "Copywriting",
    description:
      "Des mots qui captivent : je transforme vos idées en messages percutants et unique. Faites passer votre entreprise au niveau supérieur avec des contenus convaincants.",
  },
  {
    icon: <ImageUp size={72} strokeWidth={0.8} />,
    title: "Design Graphique",
    description:
      "Des visuels qui parlent : je conçois des créations graphiques uniques pour donner vie à vos idées. Faites ressortir l'identité visuelle de votre entreprise avec un design inoubliable.",
  },
  {
    icon: <Clapperboard size={72} strokeWidth={0.8} />,
    title: "Édition Photo/Video",
    description:
      "Transformez vos images et séquences en œuvres d'art inoubliables, où chaque détail est soigneusement travaillé pour capturer l'essence de vos moments précieux.",
  },
  {
    icon: <Instagram size={72} strokeWidth={0.8} />,
    title: "Socials Media Marketing",
    description:
      "Maximisez votre présence, engagez votre audience et renforcez votre marque grâce à des stratégies innovantes et des contenus percutants, adaptés à chaque plateforme.",
  },
];

const Services = () => {
  return (
    <section className="mt-10 mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-24 xl:mb-24 text-center mx-auto">
          Mes Services
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
