import '../css/styles.scss'

const Contact = () => {
    return (
        <main class="container my-5">
            <h2 class="text-center mb-3">Contact Us</h2>
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <form>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" aria-describedby="nameHelp" />
                            <br/>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                            <br />
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea class="form-control" id="message" rows="3"></textarea>
                        </div>
                        <br />
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </main>

    )
}

export default Contact