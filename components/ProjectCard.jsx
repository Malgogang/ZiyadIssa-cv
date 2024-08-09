import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Badge } from "lucide-react";
import { IoLink } from "react-icons/io5";

const ProjectCard = ({project}) => {
  return <Card className='group overflow-hidden relative'>
            <CardHeader className='p-0'>
                {/* image */}
                <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden saturate-0 hover:saturate-100">
                    <Image 
                        className="absolute bottom-0 shadow-2xl"
                        src={project.image}
                        width={247}
                        height={250}
                        alt=""
                        priority
                    />
                    {/* button links */}
                    <div className="flex gap-x-4">
                        <Link
                            href={project.route}
                            target="_blank"
                            className='bg-slate-500 w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group group-hover:scale-100 group-hover:opacity-100 hover:bg-primary transition-all duration-200'>
                            <IoLink className='text-white text-2xl' />
                        </Link>
                    </div>

                </div>
            </CardHeader>
            <div className="h-full px-8 py-6">
                <h4 className="h4 mb-1 text-center">{project.name}</h4>
                <p className="text-muted-foreground text-lg text-center">{project.description}</p>
            </div>
        </Card>;
}

export default ProjectCard