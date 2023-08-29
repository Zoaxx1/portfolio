import { TECHNOLOGIES } from './translates/es.json';
import Technologies from './data/technologies.json';
import { TechnologiesSkills } from './interfaces/interfaces';
import SkillsComponent from './components/skillsComponent';
import TitleComponent from '@components/title/titleComponent';

export default function TechnologiesSection () {
    const technologies: TechnologiesSkills[] = Technologies;

    return (
        <div id='skills'>
            <TitleComponent title={TECHNOLOGIES.TITLE}></TitleComponent>
            <p className='mb-5 text-md'>{ TECHNOLOGIES.DESCRIPTION }</p>
            <div className={`grid grid-cols-2 grid-rows-${technologies.length / 2} gap-4`}>
                {
                    technologies.map((tec, i) => <SkillsComponent key={i + tec.skill} technology={tec} ></SkillsComponent>)
                }
            </div>
        </div>
    )
}