import TitleComponent from "@components/title/titleComponent"
import Educations from './data/education.json';
import { Description } from '@interfaces/description';
import DescriptionComponent from "@components/description/descriptionComponent"

export default function EducationSection () {
    const educations: Description[] = Educations;

    return (
        <div id='education'>
            <TitleComponent title={'Educación'}></TitleComponent>
            <hr className="opacity-10 mb-4"/>
            { educations.map((ed,i) => <DescriptionComponent key={i + ed.title} description={ed}></DescriptionComponent>)}
        </div>
    )
}