import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid d-flex align-items-center justify-content-center bg-dark" style={{minHeight:"100vh", fontFamily: "optima"}}>
        <div className="card w-50">
          <div className="card-body">
            <div className="container">
              <div className="row">
              <div className="offset-md-2"></div>
                <div className="col-md-4 d-flex align-items-center">
                  <img src="https://files.slack.com/files-pri/T2SVC7RB3-F0123HXL2LS/gigl_logo_unicolor.png" alt="" className="img-fluid"/>
                </div>
                <div className="col-md-4 d-flex align-items-center">
                  <h3>Gigl</h3>
                </div>
                <div className="offset-md-2"></div>
              </div>
            </div>
            <h5 className="card-title text-center">Login to your Account</h5>
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="john.doe@gmail.com"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="••••••••"
                />
              </div>
              <div className="text-center">
                <button className="btn btn-block btn-outline-secondary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
    );
  }
}

export default Login;
