
import React  from "react";
import {Container} from "reactstrap"
import { NavLink } from "react-router-dom";
import '../../styles/header.css'

const navLinks=[
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  
  {
    path: "/contact",
    display: "Contact",
  },
]
const Header = () => {
  return <header className="header">

  {/* ========== main navigation =========== */}
  <div className="main__navbar">
        <Container className="d-flex align-content-center flex-wrap" > 
          <div className="d-flex justify-content-start  me-3 logob1" >
                <i class="ri-car-line ri-1x"></i>
                <h3 className="logob">ATIK Transportation </h3>  
          </div>

          <div className="navigation__wrapper d-flex align-items-center ">     
            <div className="navigation"  >
              <div className="menu">
             
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>  
                 
          
          </div>          
        </Container>
      </div>
  </header>
}

export default Header

