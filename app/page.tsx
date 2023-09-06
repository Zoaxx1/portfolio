import NavBarComponent from "@components/navbar/navbarComponent";
import ProfileSection from "@sections/profile/profilesSection";
import TechnologiesSection from "@sections/technologies/technologiesSection";
import ExperienceSection from "@sections/experiences/experienciesSection";
import EducationSection from "@sections/education/educationSection";
import ContactSection from "@sections/contact/contactSection";
import ProjectSection from "@sections/projects/projectsSection";

export default function Home() {
  return (
    <main className='font-custom bg-gray-900 w-screen h-full'>
      <NavBarComponent></NavBarComponent>
      <div className="px-48 py-6 grid grid-cols-auto gap-16">
        <ProfileSection></ProfileSection>
        <ContactSection></ContactSection>
        <TechnologiesSection></TechnologiesSection>
        <ExperienceSection></ExperienceSection>
        <EducationSection></EducationSection>
        <div>
          <div id='projects'></div>
          <ProjectSection></ProjectSection>
        </div>
        
      </div>
    </main>
  )
}
