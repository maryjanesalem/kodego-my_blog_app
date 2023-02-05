import { Link } from 'react-router-dom'
import '../css/styles.scss'

const Header = () => {
    return (
        <header className="container-fluid header-top">

            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src='./svg/cupcake_outlined.svg' width={45} className="mx-2 my-3"></img>
                        <span className='blog-title'><strong><em>Jane's Blog</em></strong></span>
                        </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 monserrat-font">
                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/categories">Categories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <form className="d-flex monserrat-font" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-secondary " type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className='drip-art'>

            </div>

        </header>
    )
}

export default Header