
const Login = () => {
    return (
        <div className="login">
            <div className="card text-white bg-primary mb-4">
                <div className="card-body">
                    <h4 className="card-title text-center mt-3">Login</h4>
                    <div className="card-text">
                        <div className="form-group">
                            <fieldset className="login-field">
                                <label className="form-label mt-3" htmlFor="username">Username:</label>
                                <input className="form-control" id="username" type="text" placeholder="Username" />
                                <label className="form-label mt-4" htmlFor="password">Password:</label>
                                <input className="form-control" id="password" type="text" placeholder="Password" />
                                <div className="loginbuttons mb-2">
                                    <button type="button" className="btn btn-secondary btn-login">Login</button>
                                    <button type="button" className="btn btn-outline-secondary bg-light btn-signup">Sign-up</button>
                                </div>
                            </fieldset>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login