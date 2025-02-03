
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { WORK_EXPERIENCE } from "@/utils/data";

export default function WorkExperienceList () {
   
    return (
        <Accordion type="single" collapsible className="w-full">
            {
                WORK_EXPERIENCE.map((experience, index: number) => (
                    <AccordionItem key={experience.company} value={`item ${index}`}>
                        <AccordionTrigger>
                            <div className="text-left">
                                <p className="text-xl font-bold">{experience.title}</p>
                                <span className="text-slate-500 text-sm ">{experience.company}</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <h3 className="font-medium text-lg">Achievements</h3>
                            <ul className="list-disc ml-5">
                                {experience.achievements && experience.achievements.map((achievement: string) => {
                                    return <li key={achievement}><p className="text-lg text-slate-500">{achievement}</p></li>;
                                })}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                ))
            }
        </Accordion>
    )
}