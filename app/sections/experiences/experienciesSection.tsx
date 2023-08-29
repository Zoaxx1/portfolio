import Experiencies from './data/experiencies.json';
import { Description } from '@interfaces/description'
import TitleComponent from "@components/title/titleComponent"
import DescriptionComponent from '@components/description/descriptionComponent';

export default function ExperienceSection () {
    const experiences: Description[] = Experiencies

    return (
        <div id='experiencie'>
            <TitleComponent title={'Experiencia Laboral'}></TitleComponent>
            <hr className="opacity-10 mb-4"/>
            {
                experiences.map((exp, i) => <DescriptionComponent key={i + exp.title} description={exp}></DescriptionComponent>)
            }
        </div>
    )
}