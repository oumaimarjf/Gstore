import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import index from '../index.js';
import HomeConnected from '../HomeConnected.js';
import HomeAdmin from '../HomeAdmin.js';
import LoginAdmin from '../LoginAdmin.js';
import SideBar from '../SideBar.js';
import NavBar from '../NavBar.js';
import AddProduct from '../AddProduct.js';
import Categorie from '../Categorie.js';
import ListProduct from '../ListProduct.js';




const Routes = (props) => (
    <Router  {...props} >

        <div>
            <Route exact path="/" name="index" component={index} />
            <Route exact path="/SideBar" name="SideBar" component={SideBar} />
            <Route exact path="/NavBar" name="NavBar" component={NavBar} />
            <Route exact path="/HomeConnected" name="HomeConnected" component={HomeConnected} />
            <Route exact path="/HomeAdmin" name="HomeAdmin" component={HomeAdmin} />
            <Route exact path="/AddProduct" name="AddProduct" component={AddProduct} />
            <Route exact path="/Categorie" name="Categorie" component={Categorie} />
            <Route exact path="/ListProduct" name="ListProduct" component={ListProduct} />
            <Route exact path="/LoginAdmin" name="LoginAdmin" component={LoginAdmin} />

        </div>

    </Router>

);

export default Routes;