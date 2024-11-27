// LoginPage.js
import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
  };

  return ( 
      <body class="bg-gradiesnt-primary">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
              <div class="card o-hidden border-0 shadow-lg my-5">
                <div class="card-body p-0">
                  <div class="row">
                    <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                    <div class="col-lg-6">
                      <div class="p-5">
                        <div class="text-center">
                          <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                        </div>
                        <form class="user" action="/dashboard" method="get">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control form-control-user"
                              id="exampleInputEmail"
                              aria-describedby="emailHelp"
                              placeholder="Student ID eg. 2024PUFCEBADX17193"
                            ></input>
                          </div>
                          <div class="form-group">
                            <input
                              type="password"
                              class="form-control form-control-user"
                              id="exampleInputPassword"
                              placeholder="Password"
                            ></input>
                          </div>
                          <Link to="/dashboard">
                            <a class="btn btn-primary btn-user btn-block">
                              Login
                            </a>
                          </Link>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body> 
  );
};

export default LoginPage;
