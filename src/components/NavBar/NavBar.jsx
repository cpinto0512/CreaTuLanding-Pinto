import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">

                        <Link to="/"><h1 className="navbar-brand">Sprout House</h1></Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{ justifyContent: 'space-around' }}>
                                <NavLink to="/categoria/Cat1"><li className="nav-link">Cat 1</li></NavLink>
                                <NavLink to="/categoria/Cat2"><li className="nav-link" >Cat 2</li></NavLink>
                                <NavLink to="/categoria/Cat3"><li className="nav-link" >Cat 3</li></NavLink>
                            <CartWidget />
                        </div>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default NavBar