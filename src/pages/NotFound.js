import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <div className="container pt-5">

                <h1 className="text-center mt-5 text-primary">Page not found</h1>
                <p className="text-center"><em>The requested URL was not found on this server</em></p>
                <div className="text-center mt-5">
                    <img src="./img/platter.jpg" width={800}></img>
                </div>
                <div className="text-center mt-5">
                    <Link to="/" className="btn btn-primary mx-2">GO HOME</Link>
                    <Link to="/contact" className="btn btn-secondary mx-2">CONTACT US</Link>
                </div>

            </div>
        </>
    )
}

export default NotFound