import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from './Navbar';

// imported images, icons & svg
import logo from '../assets/logo.png';
import user from '../assets/user.svg';
import { MdMenu,MdClose } from 'react-icons/md'
import { RiShoppingCart2Line } from 'react-icons/ri';
import { ShopContext } from '../context/ShopContext';


const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false);
    const toggleMenu = () => setMenuOpened(!menuOpened);
    const { getTotalCartItems } = useContext(ShopContext);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0 ) {

                // Close the menu if open when scrolling occur
                if(menuOpened){
                    setMenuOpened(false);
                }
            }
        };
        window.addEventListener("scroll", handleScroll);

        // clean up the eventListen
        return() => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [menuOpened]); //Dependency array ensures that effect runs 

  return (
    <header className='max-padd-container w-full z-50'>
        <div className='flexBetween py-3 '>
            {/* logo */}
            <Link to={'/'} className='flex items-center gap-x-2'>
                <img src={logo} alt="logoImg" height={31} width={31} />
                <span className='bold-24 hidden xs:flex'>Merchandise</span>
            </Link>

            {/* Navbar & button*/}
            <div className='flexCenter gap-x-4'>

                {/* Desktop Navbar */}
                <div>
                    <Navbar containerStyles={"hidden xl:flex gap-x-5 xl:gap-x-10 medium-16 rounded-full px-2 py-1"}/>
                </div>

                {/* Mobile Navbar */}
                <div>
                    <Navbar containerStyles={ `${menuOpened ? "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3x1 shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 z-50" : "flex items-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3x1 shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 z-50 -right-[100%]"} `}/>
                </div>

                {/* buttons */}
                <div className='flexBetween gap-x-3 sm:gap-x-2 bold-16'>
                    {!menuOpened ? (
                        <MdMenu className='xl:hidden cursor-pointer text-3xl hover:text-secondary' onClick={toggleMenu} />
                    ) : (
                        <MdClose className='xl:hidden cursor-pointer text-3xl hover:text-secondary' onClick={toggleMenu} />
                    )}
                         
                    <div className='flexBetween sm:gap-x-6'>
                        <NavLink to={'/cart-page'} className={'flex'}>
                            <RiShoppingCart2Line className='p-2 h-10 w-10 hover:text-secondary'/>
                            <span className='relative flexCenter w-5 h-5 rounded-full bg-secondary text-primary medium-14 -top-2 right-3'>{getTotalCartItems()}</span>
                        </NavLink>

                        <NavLink to={'/login'} className={"btn-secondary flexCenter gap-x-2 medium-16 rounded-x1"}>
                            <img src={user} alt="" height={19} width={19} />
                            Login
                        </NavLink>
                    </div>
                </div>  
            </div>

        </div>
    </header>
  )
}

export default Header