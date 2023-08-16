import ProfileComponent from "@/app/components/profile/profile_component"
import TechnologiesComponent from "@/app/components/technologies/technologies_component"

export default function HomePage () {
    return (
        <div className='grid grid-cols-auto gap-16'>
            <ProfileComponent></ProfileComponent>
            <TechnologiesComponent></TechnologiesComponent>
        </div>
    )
}