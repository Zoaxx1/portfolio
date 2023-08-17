import TitleComponent from "@components/title/title_component"
import Educations from './data/education.json';
import { Description } from '@interfaces/description';
import DescriptionComponent from "@components/description/description_component"

export default function EducationSection () {
    const educations: Description[] = Educations;

    return (
        <div>
            <TitleComponent title={'Educación'}></TitleComponent>
            <hr className="opacity-10 mb-4"/>
            { educations.map((ed,i) => <DescriptionComponent key={i + ed.title} description={ed}></DescriptionComponent>)}
        </div>
    )
}