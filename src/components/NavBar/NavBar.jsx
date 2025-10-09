import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"


const NavBar = () => {
    return (
        <>
            <header>
                <nav id="storeNavbar" className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">

                        <Link to="/" ><h1 className="navbar-brand">Sprout House</h1></Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{ justifyContent: 'space-around' }}>
                                <NavLink to="/categoria/100g"><li className="nav-link ">100g</li></NavLink>
                                <NavLink to="/categoria/130g"><li className="nav-link " >130g</li></NavLink>
                                <NavLink to="/categoria/150g"><li className="nav-link " >150g</li></NavLink>
                            <CartWidget />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar