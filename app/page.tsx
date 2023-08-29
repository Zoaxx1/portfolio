import NavBarComponent from "@components/navbar/navbar_component";
import ProfileSection from "@sections/profile/profile_section";
import TechnologiesSection from "@sections/technologies/technologies_section";
import ExperienceSection from "@sections/experiences/experiencies_section";
import EducationSection from "@sections/education/education_section";
import ContactSection from "@sections/contact/contact_section";


export default function Home() {
  return (
    <main className='font-custom bg-gray-900 w-screen h-full'>
      <NavBarComponent></NavBarComponent>
      <div className="px-48 py-6 grid grid-cols-auto gap-16">
        <ProfileSection></ProfileSection>
        <ContactSection></ContactSection>
        <TechnologiesSection></TechnologiesSection>
        <ExperienceSection></ExperienceSection>
        <div>
          <div id='education'></div>
          <EducationSection></EducationSection>
        </div>
      </div>
    </main>
  )
}
