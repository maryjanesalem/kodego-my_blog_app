
const Login = () => {
    return (
        <div>
            <div className="card text-white bg-primary mb-3">
                <div className="card-body">
                    <h4 className="card-title text-center mt-2">Login</h4>
                    <p className="card-text">
                        <div class="form-group">
                            <fieldset className="login-field">
                                <label class="form-label mt-4" for="username">Username:</label>
                                <input class="form-control" id="username" type="text" placeholder="Username" />
                                <label class="form-label mt-4" for="password">Password:</label>
                                <input class="form-control" id="password" type="text" placeholder="Password" />
                                <div className="loginbuttons mb-2">
                                    <button type="button" class="btn btn-secondary btn-login">Login</button>
                                    <button type="button" class="btn btn-outline-secondary bg-light btn-signup">Sign-up</button>
                                </div>
                            </fieldset>
                        </div>

                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login