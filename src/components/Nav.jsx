import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    
    const [theme, setTheme] = useState('');

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        localStorage.setItem('theme', theme || currentTheme);

        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);

    }, [theme]);

    const handleToggle = (e) => {
        if(e.target.checked){
            setTheme('synthwave');
        }else {
            setTheme('light');
        }
    }

    return (
         <div className="navbar bg-base-100 px-5 lg:px-14 fixed top-0 shadow-xl w-full z-10">
         <div className="flex-1">
             <Link
                 to='/'
                 className='gap-0 text-secondary normal-case text-xl md:text-3xl font-semibold'
             >
                 Byte<span className='text-primary'>Blaze</span>
             </Link>
         </div>
         <div className="flex-none">
             <ul className="menu menu-horizontal px-1 *:px-2 *:md:px-3 *:md:text-lg *:font-semibold">
                 <NavLink to="/">Home</NavLink>
                 <NavLink to="/blogs">Blogs</NavLink>
                 <NavLink to="/bookmarks">Bookmarks</NavLink>
             </ul>
             <label onChange={handleToggle} className="cursor-pointer grid place-items-center">
                 <input 
                 type="checkbox" 
                 className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                 <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                 <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
             </label>
         </div>
     </div>
    );
};

export default Nav;