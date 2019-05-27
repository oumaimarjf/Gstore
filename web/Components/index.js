import React from 'react';
import ReactDOM from 'react-dom';


export default class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '', login: '', password: '', user: '', pwd: '', nom: '', prenom: '', tel: '', adresse: '', cin: '', AuthStart: false, response: '' };

        this.nomhandleChange = this.nomhandleChange.bind(this);
        this.prenomhandleChange = this.prenomhandleChange.bind(this);
        this.telhandleChange = this.telhandleChange.bind(this);
        this.adressehandleChange = this.adressehandleChange.bind(this);
        this.cinhandleChange = this.cinhandleChange.bind(this);
        this.loginhandleChange = this.loginhandleChange.bind(this);
        this.passwordhandleChange = this.passwordhandleChange.bind(this);
        this.userhandleChange = this.userhandleChange.bind(this);
        this.pwdhandleChange = this.pwdhandleChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
    }

    nomhandleChange(event) {
        this.setState({ nom: event.target.value });
    }
    prenomhandleChange(event) {
        this.setState({ prenom: event.target.value });
    }
    telhandleChange(event) {
        this.setState({ tel: event.target.value });
    }
    adressehandleChange(event) {
        this.setState({ adresse: event.target.value });
    }
    cinhandleChange(event) {
        this.setState({ cin: event.target.value });
    }
    loginhandleChange(event) {
        this.setState({ login: event.target.value });
    }
    passwordhandleChange(event) {
        this.setState({ password: event.target.value });
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
        
        fetch('http://localhost:1337/login', {
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
                window.location = '/HomeConnected';

            }
        })
        event.preventDefault();
    }
    handleSubmit2(event) {
        this.setState({ response: '' });
        var inscriptionform = {
            nom: this.state.nom,
            prenom: this.state.prenom,
            tel: this.state.tel,
            adresse: this.state.adresse,
            cin: this.state.cin,
            user: this.state.user,
            pwd: this.state.pwd

        };
        console.log(inscriptionform);



        fetch('http://localhost:1337/AddClient', {

            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify(inscriptionform)
        })
        alert("Client est bien ajouté");
        this.setState({
            nom: '',
            prenom: '',
            tel: '',
            adresse: '',
            cin: '',
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
            <body class="body">
                <div id="site-content">
                    <div class="site-header">
                        <div class="containers">
                            <a href="index.html" id="branding">
                                <img src="images/logo.png" alt="" class="logo" />
                                <div class="logo-text">
                                    <h1 class="site-title">IntellCap</h1>
                                    <small class="site-description">Tagline goes here</small>
                                </div>
                            </a>
                            <div class="right-section pull-right">
                                <a href="cart.html" class="cart"><i class="icon-cart"></i> 0 items in cart</a>
                                <a href="#" class="login-button cart">Login/Register</a>
                                <a href="LoginAdmin">Espace Admin</a>
                            </div>

                            <div class="main-navigation">
                                <button class="toggle-menu"><i class="fa fa-bars"></i></button>
                                <ul class="menu">
                                    <li class="menu-item home current-menu-item"><a href="index.html"><i class="icon-home"></i></a></li>
                                    <li class="menu-item"><a href="products.html">Accessories</a></li>
                                    <li class="menu-item"><a href="products.html">Promotions</a></li>
                                    <li class="menu-item"><a href="products.html">PC</a></li>

                                </ul>

                                <div class="search-form">
                                    <label><img src="images/icon-search.png" /></label>
                                    <input type="text" placeholder="Search..." />
                                </div>
                                <div class="mobile-navigation"></div>
                            </div>
                        </div>
                    </div>
                    <div class="home-slider">
                        <ul class="slides">
                            <li data-bg-image="dummy/sonic.gif">
                                <div class="containers">
                                    <div class="slide-content">
                                        <h2 class="slide-title">Kill Zone 3</h2>
                                        <small class="slide-subtitle">$190.00</small>

                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>

                                        <a href="cart.html" class="boutton">Add to cart</a>
                                    </div>
                                    <img src="dummy/sonic.jpg" class="slide-image" />
                                </div>
                            </li>
                            <li data-bg-image="dummy/slide-2.gif">
                                <div class="containers">
                                    <div class="slide-content">
                                        <h2 class="slide-title">Call of Duty</h2>
                                        <small class="slide-subtitle">$190.00</small>

                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>

                                        <a href="cart.html" class="boutton">Add to cart</a>
                                    </div>
                                    <img src="dummy/call-of-duty.jpg" class="slide-image" />
                                </div>
                            </li>
                            <li data-bg-image="dummy/justcause.gif">
                                <div class="containers">
                                    <div class="slide-content">
                                        <h2 class="slide-title">Just Cause</h2>
                                        <small class="slide-subtitle">$190.00</small>

                                        <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>

                                        <a href="cart.html" class="boutton">Add to cart</a>
                                    </div>
                                    <img src="dummy/justcause.jpg" class="slide-image" />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <main class="main-content">
                        <div class="containers">
                            <div class="page">
                                <section>
                                    <header>
                                        <h2 class="section-title">New Products</h2>
                                        <a href="#" class="all">Show All</a>
                                    </header>
                                    <div class="product-list">
                                        <div class="product">
                                            <div class="inner-product">
                                                <div class="figure-image">
                                                    <a href="single.html"><img src="dummy/game-1.jpg" alt="Game 1" /></a>
                                                </div>
                                                <h3 class="product-title"><a href="#">Alpha Protocol</a></h3>
                                                <small class="price">$19.00</small>
                                                <p>Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor...</p>
                                                <a href="cart.html" class="boutton">Add to cart</a>
                                                <a href="#" class="boutton muted">Read Details</a>
                                            </div>
                                        </div>
                                        <div class="product">
                                            <div class="inner-product">
                                                <div class="figure-image">
                                                    <a href="single.html"><img src="dummy/game-2.jpg" alt="Game 2" /></a>
                                                </div>
                                                <h3 class="product-title"><a href="#">Grand Theft Auto V</a></h3>
                                                <small class="price">$19.00</small>
                                                <p>Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor...</p>
                                                <a href="cart.html" class="boutton">Add to cart</a>
                                                <a href="#" class="boutton muted">Read Details</a>
                                            </div>
                                        </div>
                                        <div class="product">
                                            <div class="inner-product">
                                                <div class="figure-image">
                                                    <a href="single.html"><img src="dummy/game-3.jpg" alt="Game 3" /></a>
                                                </div>
                                                <h3 class="product-title"><a href="#">Need for Speed rivals</a></h3>
                                                <small class="price">$19.00</small>
                                                <p>Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor...</p>
                                                <a href="cart.html" class="boutton">Add to cart</a>
                                                <a href="#" class="boutton muted">Read Details</a>
                                            </div>
                                        </div>
                                        <div class="product">
                                            <div class="inner-product">
                                                <div class="figure-image">
                                                    <a href="single.html"><img src="dummy/game-4.jpg" alt="Game 4" /></a>
                                                </div>
                                                <h3 class="product-title"><a href="#">Big game hunter</a></h3>
                                                <small class="price">$19.00</small>
                                                <p>Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor...</p>
                                                <a href="cart.html" class="boutton">Add to cart</a>
                                                <a href="#" class="boutton muted">Read Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <header>
                                        <h2 class="section-title">promotion</h2>
                                        <a href="#" class="all">Show All</a>
                                    </header>
                                    <div class="product-list">

                                        <div class="product">
                                            <div class="inner-product">
                                                <div class="figure-image">
                                                    <a href="single.html"><img src="dummy/game-5.jpg" alt="Game 1" /></a>
                                                </div>
                                                <h3 class="product-title"><a href="#">Watch Dogs</a></h3>
                                                <small class="price">$19.00</small>
                                                <p>Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor...</p>
                                                <a href="cart.html" class="boutton">Add to cart</a>
                                                <a href="#" class="boutton muted">Read Details</a>
                                            </div>
                                        </div>


                                        <div class="product">
                                            <div class="inner-product">
                                                <div class="figure-image">
                                                    <a href="single.html"><img src="dummy/game-6.jpg" alt="Game 2" /></a>
                                                </div>
                                                <h3 class="product-title"><a href="#">Mortal Kombat X</a></h3>
                                                <small class="price">$19.00</small>
                                                <p>Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor...</p>
                                                <a href="cart.html" class="boutton">Add to cart</a>
                                                <a href="#" class="boutton muted">Read Details</a>
                                            </div>
                                        </div>


                                        <div class="product">
                                            <div class="inner-product">
                                                <div class="figure-image">
                                                    <a href="single.html"><img src="dummy/game-7.jpg" alt="Game 3" /></a>
                                                </div>
                                                <h3 class="product-title"><a href="#">Metal Gear Solid V</a></h3>
                                                <small class="price">$19.00</small>
                                                <p>Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor...</p>
                                                <a href="cart.html" class="boutton">Add to cart</a>
                                                <a href="#" class="boutton muted">Read Details</a>
                                            </div>
                                        </div>


                                        <div class="product">
                                            <div class="inner-product">
                                                <div class="figure-image">
                                                    <a href="single.html"><img src="dummy/game-8.jpg" alt="Game 4" /></a>
                                                </div>
                                                <h3 class="product-title"><a href="#">Nascar '14</a></h3>
                                                <small class="price">$19.00</small>
                                                <p>Lorem ipsum dolor sit consectetur adipiscing elit do eiusmod tempor...</p>
                                                <a href="cart.html" class="boutton">Add to cart</a>
                                                <a href="#" class="boutton muted">Read Details</a>
                                            </div>
                                        </div>

                                    </div>
                                </section>
                            </div>
                        </div>
                    </main>
                    <div class="site-footer">
                        <div class="containers">
                            <div class="row">
                                <div class="col-md-2">
                                    <div class="widget">
                                        <h3 class="widget-title">Information</h3>
                                        <ul class="no-bullet">
                                            <li><a href="#">Site map</a></li>
                                            <li><a href="#">About us</a></li>
                                            <li><a href="#">FAQ</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="widget">
                                        <h3 class="widget-title">Consumer Service</h3>
                                        <ul class="no-bullet">
                                            <li><a href="#">Secure</a></li>
                                            <li><a href="#">Shipping &amp; Returns</a></li>
                                            <li><a href="#">Shipping</a></li>
                                            <li><a href="#">Orders &amp; Returns</a></li>
                                            <li><a href="#">Group Sales</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="widget">
                                        <h3 class="widget-title">My Account</h3>
                                        <ul class="no-bullet">
                                            <li><a href="#">Login/Register</a></li>
                                            <li><a href="#">Settings</a></li>
                                            <li><a href="#">Cart</a></li>
                                            <li><a href="#">Order Tracking</a></li>
                                            <li><a href="#">Logout</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="widget">
                                        <h3 class="widget-title">Join our newsletter</h3>
                                        <form action="#" class="newsletter-form">
                                            <input type="text" placeholder="Enter your email..." />
                                            <input type="submit" value="Subsribe" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="colophon">
                                <div class="copy">Copyright 2014 Company name. Designed by Themezy. All rights reserved.</div>
                                <div class="social-links square">
                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                    <a href="#"><i class="fa fa-google-plus"></i></a>
                                    <a href="#"><i class="fa fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="overlay"></div>
                <div class="auth-popup popup">
                    <a href="#" class="close"><i class="fa fa-times"></i></a>
                    <div class="row">
                        <div class="col-md-6">
                            <h2 class="section-title">Login</h2>
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" name="login" value={this.state.login} onChange={this.loginhandleChange} placeholder="Username" required />
                                <input type="password" name="password" value={this.state.password} onChange={this.passwordhandleChange} placeholder="Password" required />
                                <input type="submit" value="Submit"></input>
                                <div className="">
                                    <span className="">{this.state.response}</span>
                                    {progress}
                                </div>
                            </form>
                        </div>
                        <div class="col-md-6">
                            <h2 class="section-title">Create an account</h2>
                            <form id="form2" onSubmit={this.handleSubmit2}>
                                <input type="text" value={this.state.nom} onChange={this.nomhandleChange} name="nom" placeholder="Last name" required />
                                <input type="text" value={this.state.prenom} onChange={this.prenomhandleChange} name="prenom" placeholder="First name" required />
                                <input type="text" value={this.state.tel} onChange={this.telhandleChange} name="tel" placeholder="Phone Number" required />
                                <input type="text" value={this.state.adresse} onChange={this.adressehandleChange} name="adresse" placeholder="address" required />
                                <input type="text" value={this.state.cin} onChange={this.cinhandleChange} name="cin" placeholder="Cin" required />
                                <input type="text" value={this.state.user} onChange={this.userhandleChange} name="user" placeholder="Username" required />
                                <input type="password" value={this.state.pwd} onChange={this.pwdhandleChange} name="pwd" placeholder="Password" required />
                                <input type="submit" value="Register"></input>
                            </form>

                        </div>
                    </div>
                </div>

            </body>                    
                                                                                                                                                                                                            
                                    );
                                         }
                                 }
