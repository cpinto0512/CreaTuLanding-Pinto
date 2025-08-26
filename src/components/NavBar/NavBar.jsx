import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <h1>Sprout House</h1>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
                            <a className="nav-link">Frutos secos</a>
                            <a className="nav-link" >Bebidas</a>
                            <a className="nav-link" >Otros productos</a>
                        </div>
                        <CartWidget />
                    </div>
                </nav>
            </header>

        </>
    )
}

export default NavBar