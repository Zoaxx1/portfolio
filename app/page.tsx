import NavBarComponent from "@components/navbar/navbar_component";
import HomePage from "@pages/home/home_page";

export default function Home() {
  return (
    <main className='font-custom bg-gray-900 w-screen h-full'>
      <NavBarComponent></NavBarComponent>
      <div className="px-48 py-6">
          <HomePage></HomePage>
      </div>
    </main>
  )
}
