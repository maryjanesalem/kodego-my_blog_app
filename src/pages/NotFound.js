

const NotFound = () => {
    return (
        <>
            <div className="container pt-5">

                <h1 className="text-center mt-5">Page not found</h1>
                <p className="text-center"><em>The requested URL was not found on this server</em></p>
                <div className="text-center mt-5">
                    <img src="./img/error.jpg" width={800}></img>
                </div>
                <div className="text-center mt-5">
                    <button type="button" class="btn btn-primary mx-2">GO HOME</button>
                    <button type="button" class="btn btn-secondary mx-2">CONTACT US</button>
                </div>

            </div>
        </>
    )
}

export default NotFound