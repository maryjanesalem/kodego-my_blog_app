import '../css/styles.scss'

const Contact = () => {
    return (
        <main className="container my-5 contact">
            <h2 className="text-center mb-3">Contact Me</h2>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <form>
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" className="form-control" id="name" aria-describedby="nameHelp" />
                            <br/>
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                            <br />
                        </div>
                        <div className="form-group">
                            <label for="message">Message</label>
                            <textarea className="form-control" id="message" rows="3"></textarea>
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </main>

    )
}

export default Contact