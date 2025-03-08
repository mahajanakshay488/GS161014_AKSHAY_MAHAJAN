import { NavLink } from 'react-router';
import { navLinks } from '../../utilities/constants';

export default function Sidenav() {
  return (
    <nav className='h-full pt-4 bg-white w-[200px] fixed'>

      {
        navLinks.map((element) => (
          <NavLink
          key={element.path} 
          to={element.path}
          className={({isActive})=>(`flex justify-start items-center p-2 py-3 ${isActive && 'bg-gray-200'}`)}
        >

          <span className="material-symbols-outlined text-2xl">
            {element.icon}
          </span>

          <h4 className='text-lg font-medium ml-2'>{element.title}</h4>

        </NavLink>
        ))
      } 
    </nav>
  )
}
