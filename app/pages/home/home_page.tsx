import ProfileSection from "@sections/profile/profile_section"
import TechnologiesSection from "@sections/technologies/technologies_section"
import ExperienceSection from "@sections/experiences/experiencies_section"
import EducationSection from "@sections/education/education_section"

export default function HomePage () {
    return (
        <div className='grid grid-cols-auto gap-16'>
            <ProfileSection></ProfileSection>
            <TechnologiesSection></TechnologiesSection>
            <ExperienceSection></ExperienceSection>
            <EducationSection></EducationSection>
        </div>
    )
}