'use client'

import React, { useEffect, useState } from 'react';

interface Button {
  name: string,
  idElement: string
}

interface StylesNavBarButtons {
  default: string,
  unselected: string,
  selected: string
}

const stylesButtons: StylesNavBarButtons = {
  default: 'mb-4 text-start pl-1 pr-2 py-1',
  unselected: 'bg-cyan-800 text-cyan-500 w-32',
  selected: 'bg-cyan-600 text-cyan-200 font-bold w-36'
}

export default function NavbarComponent () {
  const [activeButton, setActiveButton] = useState<number>()

  // add Projects and Hobbies
  const buttons: Button[] = [{
    name: 'Perfil',
    idElement: 'profile'
  },
  {
    name: 'Contacto',
    idElement: 'contact'
  },
  {
    name: 'Habilidades',
    idElement: 'skills'
  },
  {
    name: 'Experiencia',
    idElement: 'experiencie'
  },
  {
    name: 'Educación',
    idElement: 'education'
  },
  {
    name: 'Proyectos',
    idElement: 'projects'
  }];

  const setStyle = (index: number): string=> {
    return index === activeButton ? stylesButtons.selected : stylesButtons.unselected;
  }

  const scrollUser = (i:number, idElement: string): void => {
    setActiveButton(i);
    const element = document.getElementById(idElement);
    if(element){
      setTimeout(() => {
        element.scrollIntoView({behavior: 'instant'});
      }, 0)
    }
  }

  useEffect(()=>{
    const handleScroll = () => {
      let activeButtonIndex = -1;
      ['profile', 'contact', 'skills', 'experiencie', 'education'].forEach((idElement, i) => {
        const element = document.getElementById(idElement);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            activeButtonIndex = i;
          }
        }
      });
      if (activeButtonIndex !== -1) {
        setActiveButton(activeButtonIndex);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[]);

  return (
    <nav className="fixed left-0 top-0 bottom-0 w-100 flex flex-col items-start pl-2 pt-6">
      { buttons.map(({name, idElement}, i) => (
        <button
        key={idElement}
        className={ `${stylesButtons.default} ${setStyle(i)}` }
        onClick={() => scrollUser(i, idElement)}>
          {name}
        </button>)) }
    </nav>
  );
};
