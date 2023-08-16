import { TECHNOLOGIES } from './translates/es.json';
import Technologies from './data/technologies.json';
import { TechnologiesSkills } from './interfaces/interfaces';
import SkillsComponent from './components/skills_component';

export default function TechnologiesSection () {
    const technologies: TechnologiesSkills[] = Technologies;

    return (
        <div>
            <p className="text-4xl text-cyan-500 mb-5">{ TECHNOLOGIES.TITLE }</p>
            <p className='mb-5 text-md'>{ TECHNOLOGIES.DESCRIPTION }</p>
            <div className={`grid grid-cols-2 grid-rows-${technologies.length / 2} gap-4`}>
                <SkillsComponent technologies={technologies} ></SkillsComponent>
            </div>
        </div>
    )
}