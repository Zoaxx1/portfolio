import TitleComponent from "@components/title/title_component"
import ExperiencieComponent from "./components/experiencie_component"
import Experiencies from './data/experiencies.json';
import { Experience } from './interfaces/interfaces'

export default function ExperienceSection () {
    const experiences: Experience[] = Experiencies

    return (
        <div>
            <TitleComponent title={'Experiencia Laboral'}></TitleComponent>
            <hr className="opacity-10 mb-4"/>
            {
                experiences.map((exp) => <ExperiencieComponent experiencie={exp}></ExperiencieComponent>)
            }
        </div>
    )
}