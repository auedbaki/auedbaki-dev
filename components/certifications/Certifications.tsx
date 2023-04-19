import SectionWrapper from "../SectionWrapper";
import { useState } from "react";
import { certificate } from '@/types/main';
import  Certificate  from './Certificate';


interface Props {
    certificationData: certificate[]
}

const Certifications = ( {certificationData} : Props ) => {

    const [certifications, setCertifications] = useState([...certificationData].reverse() as certificate[])

    return (
        <SectionWrapper id="certification" className="mx-4 md:mx-0 min-h-screen pt-12">
            <h2 className="text-4xl mb-8 pb-12 text-center">Certification & Badges</h2>

            
            {/* <div className="overflow-x-auto scroll-hide md:w-full max-w-screen-sm mx-auto mt-6 flex justify-between items-center gap-2 md:gap-3 bg-white dark:bg-grey-800 p-2 rounded-md">
                {categories.map((c: string = "", i: number) => (
                    <span key={i} onClick={() => filterProjects(c)} className={`p-1.5 md:p-2 w-full text-sm md:text-base text-center capitalize rounded-md ${category.toLowerCase() === c.toLowerCase() ? "bg-violet-600 text-white" : "hover:bg-gray-100 hover:dark:bg-grey-900"} cursor-pointer transition-all`}>
                        {c}
                    </span>
                ))}
            </div> */}

            <div className="md:mx-6 lg:mx-auto lg:w-5/6 2xl:w-3/4 my-4 md:my-8 mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
                {certifications.map((c: certificate, i: number) => (
                    // <ProjectCard key={i} {...p} />
                    <Certificate key={i} {...c}  />
                ))}
            </div>


            {/* {filteredProjects.length > 6
                &&
                <ViewAll scrollTo='projects' title={viewAll ? 'Okay, I got it' : 'View All'} handleClick={() => setViewAll(!viewAll)} />
            } */}
        </SectionWrapper>
    )
}

export default Certifications