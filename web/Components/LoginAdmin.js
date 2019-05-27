import React from 'react';
import ReactDOM from 'react-dom';


export default class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', login: '', password: '', nom: '', prenom: '', user: '', pwd: '', AuthStart: false, response: '' };

        this.loginhandleChange = this.loginhandleChange.bind(this);
        this.passwordhandleChange = this.passwordhandleChange.bind(this);
        this.nomhandleChange = this.nomhandleChange.bind(this);
        this.prenomhandleChange = this.prenomhandleChange.bind(this);
        this.userhandleChange = this.userhandleChange.bind(this);
        this.pwdhandleChange = this.pwdhandleChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);

    }


    loginhandleChange(event) {
        this.setState({ login: event.target.value });
    }
    passwordhandleChange(event) {
        this.setState({ password: event.target.value });
    }
    nomhandleChange(event) {
        this.setState({ nom: event.target.value });
    }
    prenomhandleChange(event) {
        this.setState({ prenom: event.target.value });
    }
    userhandleChange(event) {
        this.setState({ user: event.target.value });
    }
    pwdhandleChange(event) {
        this.setState({ pwd: event.target.value });
    }


    handleSubmit(event) {
        this.setState({ AuthStart: true });
        this.setState({ response: '' });
        // GET the admin's informations from the form 
        var Accountbody = {
            login: this.state.login,
            password: this.state.password
        };

        fetch('http://localhost:1337/loginAdmin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify(Accountbody)

        }).then((response) => {
            return response.json();
            // Get the response of the current request
        }).then((data) => {
            // If data is wrong
            if (data.success != null) {
                this.setState({ AuthStart: false });
                this.setState({ response: data.message });
            } else {
                // Save data to sessionStorage
                sessionStorage.setItem('TokenKey', data.token);
                window.location = '/HomeAdmin';

            }
        })
        event.preventDefault();
    }
    handleSubmit2(event) {
        this.setState({ response: '' });
        var inscriptionform = {
            nom: this.state.nom,
            prenom: this.state.prenom,
            user: this.state.user,
            pwd: this.state.pwd

        };
        console.log(inscriptionform);



        fetch('http://localhost:1337/AddAdmin', {

            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify(inscriptionform)
        })
        alert("Admin est bien ajouté");
        this.setState({
            nom: '',
            prenom: '',
            user: '',
            pwd: ''
        });
        event.preventDefault();
    }

    render() {
        const ExpiredSessionMsg = this.props.ExpiredSessionMsg;
        const AuthStart = this.state.AuthStart;
        var progress = null;
        if (AuthStart) {
            progress = <div>

            </div>
        }

        return (
            <body class="login">
                <div>
                    <a class="hiddenanchor" id="signup"></a>
                    <a class="hiddenanchor" id="signin"></a>

                    <div class="login_wrapper">
                        <div class="animate form login_form">
                            <section class="login_content">
                                <form onSubmit={this.handleSubmit}>
                                    <h1>Login Form</h1>
                                    <div>
                                        <input type="text" class="form-control" placeholder="Username" name="login" value={this.state.login} onChange={this.loginhandleChange} required />
                                    </div>
                                    <div>
                                        <input type="password" class="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.passwordhandleChange} required />
                                    </div>
                                    <div>
                                        <input type="submit" class="btn btn-default submit" value="Log in"/>
                                        <div className="">
                                            <span className="">{this.state.response}</span>
                                            {progress}
                                        </div>
                                     
                                    </div>

                                    <div class="clearfix"></div>

                                    <div class="separator">
                                        <p class="change_link">New to site?
                  <a href="#signup" class="to_register"> Create Account </a>
                                        </p>

                                        <div class="clearfix"></div>
                                        <br />

                                        <div>
                                            <h1><i class="fa fa-paw"></i> Gentelella Alela!</h1>
                                            <p>©2016 All Rights Reserved. Gentelella Alela! is a Bootstrap 3 template. Privacy and Terms</p>
                                        </div>
                                    </div>
                                </form>
                            </section>
                        </div>

                        <div id="register" class="animate form registration_form">
                            <section class="login_content">
                                <form id="form2" onSubmit={this.handleSubmit2}>
                                    <h1>Create Account</h1>
                                    <div>
                                        <input type="text" value={this.state.nom} onChange={this.nomhandleChange} name="nom" class="form-control" placeholder="Last name" required />
                                    </div>
                                    <div>
                                        <input type="text" value={this.state.prenom} onChange={this.prenomhandleChange} name="prenom" class="form-control" placeholder="First name" required />
                                    </div>
                                    <div>
                                        <input type="text" value={this.state.user} onChange={this.userhandleChange} name="user" class="form-control" placeholder="Username" required />
                                    </div>
                                    <div>
                                        <input type="password" value={this.state.pwd} onChange={this.pwdhandleChange} name="pwd" class="form-control" placeholder="Password" required />
                                    </div>
                                    <div>
                                        <input type="submit" class="btn btn-default submit" value="Register" />
                                    </div>

                                    <div class="clearfix"></div>

                                    <div class="separator">
                                        <p class="change_link">Already a member ?
                  <a href="#signin" class="to_register"> Log in </a>
                                        </p>

                                        <div class="clearfix"></div>
                                        <br />

                                        <div>
                                            <h1><i class="fa fa-paw"></i> Gentelella Alela!</h1>
                                            <p>©2016 All Rights Reserved. Gentelella Alela! is a Bootstrap 3 template. Privacy and Terms</p>
                                        </div>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </body>
        );
    }
}