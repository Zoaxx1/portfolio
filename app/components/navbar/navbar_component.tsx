import React from 'react';

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

  return (
    <nav className="fixed left-0 top-0 bottom-0 w-100 flex flex-col items-start pl-2 pt-6">
      <button className={ `${stylesButtons.default} ${stylesButtons.selected}` }>Perfil</button>
      <button className={ `${stylesButtons.default} ${stylesButtons.unselected}` }>Contacto</button>
      <button className={ `${stylesButtons.default} ${stylesButtons.unselected}` }>Habilidades</button>
      <button className={ `${stylesButtons.default} ${stylesButtons.unselected}` }>Experiencia</button>
      <button className={ `${stylesButtons.default} ${stylesButtons.unselected}` }>Educación</button>
      {false && <button className={ `${stylesButtons.default} ${stylesButtons.unselected}` }>Proyectos</button>}
      {false && <button className={ `${stylesButtons.default} ${stylesButtons.unselected}` }>Hobbies</button>}
    </nav>
  );
};
