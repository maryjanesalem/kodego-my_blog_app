import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light py-3">
      <div className="container">


        <ul className="nav justify-content-center mb-4">
          <li className="nav-item">
            <Link className="nav-link" to="/">
            <i class="fab fa-facebook-f mr-2"></i>
              Facebook
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Instagram
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Twitter
            </Link>
          </li>
        </ul>

        <p className="text-center">
          &copy; 2023 Jane's Blog. All rights reserved.
        </p>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Terms of Use
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
