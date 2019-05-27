import React from 'react';
import Authenticate from './authentication.js';
import { render } from 'react-dom';
import SideBar from '../Components/SideBar.js';
import NavBar from '../Components/NavBar.js';


export default class Categorie extends React.Component {
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
                                        <h3>Catégorie</h3>
                                    </div>
                                </div>

                                <div class="clearfix"></div>

                                <div class="row">
                                    <div class="col-md-12 col-sm-12 col-xs-12">
                                        <div class="x_panel">
                                            <div class="x_title">
                                                <h2>Ajouter Catégorie</h2>
                                                <ul class="nav navbar-right panel_toolbox">
                                                    <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                                                    </li>
                                                </ul>
                                                <div class="clearfix"></div>
                                            </div>
                                            <div class="x_content">

                                                <div class="item form-group">
                                                    <label class="control-label col-md-3 col-sm-3 col-xs-12" for="name">Libelle <span class="required">*</span>
                                                    </label>
                                                    <div class="col-md-6 col-sm-6 col-xs-12">
                                                        <input id="name" class="form-control col-md-7 col-xs-12" data-validate-length-range="6" data-validate-words="2" name="name" placeholder="Libelle" required="required" type="text" />
                                                    </div>
                                                </div>
                                                <br /><br />
                                                <div class="form-group">
                                                    <div class="col-md-6 col-md-offset-3">
                                                        <button type="submit" class="btn btn-primary">Annuler</button>
                                                        <button id="send" type="submit" class="btn btn-success">Ajouter</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-12 col-sm-12 col-xs-12">
                                        <div class="x_panel">
                                            <div class="x_title">
                                                <h2>Liste des catégories</h2>
                                                <ul class="nav navbar-right panel_toolbox">
                                                    <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
                                                </ul>
                                                <div class="clearfix"></div>
                                            </div>

                                            <div class="row">
                                                <div class="panel panel-primary filterable">
                                                    <div class="panel-heading">
                                                        <h3 class="panel-title">Catégories</h3>
                                                        <div class="pull-right">
                                                            <button class="btn btn-default btn-xs btn-filter"><span class="glyphicon glyphicon-filter"></span> Filter</button>
                                                        </div>
                                                    </div>
                                                    <table class="table">
                                                        <thead>
                                                            <tr class="filters">
                                                                <th><input type="text" class="form-control" placeholder="Id" disabled /></th>
                                                                <th><input type="text" class="form-control" placeholder="Libelle" disabled /></th>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Mark</td>
                                                                <td>
                                                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                                                                </td>
                                                                <td>
                                                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-trash"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>Jacob</td>
                                                                <td>
                                                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                                                                </td>
                                                                <td>
                                                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-trash"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>Larry</td>
                                                                <td>
                                                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                                                                </td>
                                                                <td>
                                                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-trash"></i></a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
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
