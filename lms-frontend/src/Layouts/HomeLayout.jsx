import {AiFillCloseCircle} from "react-icons/ai"
import {FiMenu} from "react-icons/fi"
import {Link} from "react-router-dom"

import Footer from "../Components/footer.jsx";

function HomeLayout({children}) {
    function changeWidth() {
        const drawerSide=document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width="auto";

    }
    function hideDrawer() {
        const element=document.getElementsByClassName("drawer-toggle")
        element[0].checked=false
        const drawerSide=document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width="0";
    }
  return (
    <div className="min-h-[85vh]">
        <div className="drawer absolute z-50 w-fit left-0">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            <label htmlFor="my-drawer" className="cursor-pointer relative">
            <FiMenu 
                onClick={changeWidth}
                size={30} 
                className="font-bold text-white m-4"
            />
            </label>
            </div>
            <div className="drawer-side w-0">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <li className="absolute right-2 w-fit z-50">
                        <button className="hideDrawer" onClick={hideDrawer}>
                            <AiFillCloseCircle size={30}/>
                        </button>
                </li>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/courses">
                        All Courses
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About Us
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        Contact Us
                    </Link>
                </li>
                </ul>
                </div>
        </div>

        {children}

        <Footer/>

    </div>
  )
}

export default HomeLayout