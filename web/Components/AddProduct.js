import React from 'react';
import Authenticate from './authentication.js';
import { render } from 'react-dom';
import SideBar from '../Components/SideBar.js';
import NavBar from '../Components/NavBar.js';


export default class AddProduct extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        var response = Authenticate();
        if (!response) {
            window.location = '/';
        }

    }

    logout() {
        sessionStorage.clear();
        window.location = '/';

    }
    render() {


        return (
            <body class="nav-md">
                <div class="container body">
                    <div class="main_container">
                        <SideBar />
                        <NavBar />
                        <div class="right_col" role="main">
                            <div class="">
                                <div class="page-title">
                                    <div class="title_left">
                                        <h3>Form Wizards</h3>
                                    </div>

                                    <div class="title_right">
                                        <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Search for..." />
                                                <span class="input-group-btn">
                                                    <button class="btn btn-default" type="button">Go!</button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="clearfix"></div>

                                <div class="row">

                                    <div class="col-md-12 col-sm-12 col-xs-12">
                                        <div class="x_panel">
                                            <div class="x_title">
                                                <h2>Form Wizards <small>Sessions</small></h2>
                                                <ul class="nav navbar-right panel_toolbox">
                                                    <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                                                    </li>
                                                    <li class="dropdown">
                                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                                                        <ul class="dropdown-menu" role="menu">
                                                            <li><a href="#">Settings 1</a>
                                                            </li>
                                                            <li><a href="#">Settings 2</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><a class="close-link"><i class="fa fa-close"></i></a>
                                                    </li>
                                                </ul>
                                                <div class="clearfix"></div>
                                            </div>
                                            <div class="x_content">



                                                <form class="form-horizontal form-label-left">

                                                    <div class="form-group">
                                                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">Libelle <span class="required">*</span>
                                                        </label>
                                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                                            <input type="text" id="first-name" required="required" class="form-control col-md-7 col-xs-12" />
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="last-name">Description <span class="required">*</span>
                                                        </label>
                                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                                            <textarea class="form-control" rows="3" placeholder=""></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="middle-name" class="control-label col-md-3 col-sm-3 col-xs-12">Editeur</label>
                                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                                            <input id="middle-name" class="form-control col-md-7 col-xs-12" type="text" name="middle-name" />
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="middle-name" class="control-label col-md-3 col-sm-3 col-xs-12">Developpeur</label>
                                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                                            <input id="middle-name" class="form-control col-md-7 col-xs-12" type="text" name="middle-name" />
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="middle-name" class="control-label col-md-3 col-sm-3 col-xs-12">Prix</label>
                                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                                            <input id="middle-name" class="form-control col-md-7 col-xs-12" type="text" name="middle-name" />
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="control-label col-md-3 col-sm-3 col-xs-12">Date de parrution <span class="required">*</span>
                                                        </label>
                                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                                            <div class='input-group date' id='myDatepicker2'>
                                                                <input type='text' class="form-control" />
                                                                <span class="input-group-addon">
                                                                    <span class="glyphicon glyphicon-calendar"></span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="control-label col-md-3 col-sm-3 col-xs-12">Catégorie</label>
                                                        <div class="col-md-6 col-sm-6 col-xs-12">
                                                            <select class="select2_single form-control" tabindex="-1">
                                                                <option></option>
                                                                <option value="AK">Alaska</option>
                                                                <option value="HI">Hawaii</option>
                                                                <option value="CA">California</option>
                                                                <option value="NV">Nevada</option>
                                                                <option value="OR">Oregon</option>
                                                                <option value="WA">Washington</option>
                                                                <option value="AZ">Arizona</option>
                                                                <option value="CO">Colorado</option>
                                                                <option value="ID">Idaho</option>
                                                                <option value="MT">Montana</option>
                                                                <option value="NE">Nebraska</option>
                                                                <option value="NM">New Mexico</option>
                                                                <option value="ND">North Dakota</option>
                                                                <option value="UT">Utah</option>
                                                                <option value="WY">Wyoming</option>
                                                                <option value="AR">Arkansas</option>
                                                                <option value="IL">Illinois</option>
                                                                <option value="IA">Iowa</option>
                                                                <option value="KS">Kansas</option>
                                                                <option value="KY">Kentucky</option>
                                                                <option value="LA">Louisiana</option>
                                                                <option value="MN">Minnesota</option>
                                                                <option value="MS">Mississippi</option>
                                                                <option value="MO">Missouri</option>
                                                                <option value="OK">Oklahoma</option>
                                                                <option value="SD">South Dakota</option>
                                                                <option value="TX">Texas</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                        
                                                        <div class="form-group">
                                                                <label  class="control-label col-md-3 col-sm-3 col-xs-12">Image</label>
                                                            <div class="col-md-6 col-sm-6 col-xs-12">
                                                                <input class="form-control col-md-7 col-xs-12" type="file" />
                                                                </div>
                                                            
                                                        </div>
                                                    


                                                    <div class="ln_solid"></div>
                                                    <div class="form-group">
                                                        <div class="col-md-6 col-md-offset-3">
                                                            <button type="submit" class="btn btn-primary">Cancel</button>
                                                            <button id="send" type="submit" class="btn btn-success">Submit</button>
                                                        </div>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <footer>
                            <div class="pull-right">
                                Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>
                            </div>
                            <div class="clearfix"></div>
                        </footer>

                    </div>
                </div>

            </body>
                );
    }
}
