import ProfileSection from "@sections/profile/profile_section"
import TechnologiesSection from "@sections/technologies/technologies_section"

export default function HomePage () {
    return (
        <div className='grid grid-cols-auto gap-16'>
            <ProfileSection></ProfileSection>
            <TechnologiesSection></TechnologiesSection>
        </div>
    )
}