import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div>

            <footer className="bg-light py-3">
                <div className="container">
                    <p className="text-center">&copy; 2023 Jane's Blog. All rights reserved.</p>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Terms of Use</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
            </footer>


        </div>
    )
}

export default Footer