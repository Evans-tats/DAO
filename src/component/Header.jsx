import { VscAccount } from "react-icons/vsc";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Header = () => {
    const [theme, setTheme] = useState(localStorage.theme)
    const themeColor = theme == 'dark' ? 'light' : 'dark'
    const darken = theme === 'dark' ? true : false

    useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove(themeColor)
        root.classList.add(theme)
        localStorage.setItem('theme', theme)
    }, [themeColor,theme])

    const toggleLight =() => {
        const root = window.document.documentElement
        root.classList.remove(themeColor)
        root.classList.add(theme)
        localStorage.setItem('theme',theme)
        setTheme(themeColor)
    }


  return (
    <div className="sticky top-0 z-50 dark:text-blue-500">
        <nav className="navbar navbar-expand-lg shadow-md 
        bg-white justify-between w-full flex items-center dark:bg-[#212936]
        p-2"
        >
            <div
                className="px-6 w-full flex flex-wrap items-center justify-between"
            >
                <div className="grow flex justify-between items-center p-2">
                    <Link to='/' className="flex justify-between items-center">
                        <VscAccount size={25} />
                        <span className="invisible md:visible px-3">DAO</span>
                    </Link>
                    <div className="flex items-center justify-start">
                        
                        <MdDarkMode onClick={toggleLight} className='cursor-pointer' size={25}/>

                        <button className="flex justify-center item cente rounded-xl px-3 leading-tight font-medium shadow-md
                        hover:shadow-lg">
                            Connect Wallet
                        </button>

                    </div>
                </div>

            </div>
        </nav>
    </div>
  )
}

export default Header