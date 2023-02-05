import { Link } from "react-router-dom";
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-light py-3">
      <div className="container">

        <ul className="nav justify-content-center mb-4">
          <li className="nav-item">
            <Link className="nav-link" to="/">
            <FaFacebook className="fs-3 icon" />
              Facebook
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
            <FaInstagram className="fs-3 icon" />
              Instagram
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
            <FaTwitter className="fs-3 icon" />
              Twitter
            </Link>
          </li>
        </ul>

        <p className="text-center  lato-font">
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
