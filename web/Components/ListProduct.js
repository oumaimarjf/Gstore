import React from 'react';
import Authenticate from './authentication.js';
import { render } from 'react-dom';
import SideBar from '../Components/SideBar.js';
import NavBar from '../Components/NavBar.js';


export default class ListProduct extends React.Component {
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
                                        <h3>Les produits </h3>
                                    </div>
                                </div>

                                <div class="clearfix"></div>

                                <div class="row">
                                    <div class="col-md-12 col-sm-12 col-xs-12">
                                        <div class="x_panel">
                                            <div class="x_title">
                                                <h2>Liste des produits</h2>
                                                <div class="clearfix"></div>
                                            </div>

                                            <div class="row">
                                                <div class="panel panel-primary filterable">
                                                    <div class="panel-heading">
                                                        <h3 class="panel-title">Produits</h3>
                                                        <div class="pull-right">
                                                            <button class="btn btn-default btn-xs btn-filter"><span class="glyphicon glyphicon-filter"></span> Filter</button>
                                                        </div>
                                                    </div>
                                                    <table class="table">
                                                        <thead>
                                                            <tr class="filters">
                                                                <th><input type="text" class="form-control" placeholder="Id" disabled /></th>
                                                                <th><input type="text" class="form-control" placeholder="Image" disabled /></th>
                                                                <th><input type="text" class="form-control" placeholder="Libelle" disabled /></th>
                                                                <th><input type="text" class="form-control" placeholder="Description" disabled /></th>
                                                                <th><input type="text" class="form-control" placeholder="Date" disabled /></th>
                                                                <th><input type="text" class="form-control" placeholder="Editeur" disabled /></th>
                                                                <th><input type="text" class="form-control" placeholder="Developpeur" disabled /></th>
                                                                <th><input type="text" class="form-control" placeholder="Prix" disabled /></th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>-</td>
                                                                <td>Mark</td>
                                                                <td>ah</td>
                                                                <td>no</td>
                                                                <td>bi</td>
                                                                <td>fa</td>
                                                                <td>cc</td>
                                                                <td>
                                                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                                                                </td>
                                                                <td>
                                                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-trash"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>-</td>
                                                                <td>Mark</td>
                                                                <td>ah</td>
                                                                <td>no</td>
                                                                <td>bi</td>
                                                                <td>fa</td>
                                                                <td>cc</td>
                                                                <td>
                                                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                                                                </td>
                                                                <td>
                                                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-trash"></i></a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>-</td>
                                                                <td>Mark</td>
                                                                <td>ah</td>
                                                                <td>no</td>
                                                                <td>bi</td>
                                                                <td>fa</td>
                                                                <td>cc</td>
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

                        <footer>
                            <div class="pull-right">
                                Gentelella - Bootstrap Admin Template by <a href="https://colorlib.com">Colorlib</a>
                            </div>
                            <div class="clearfix"></div>
                        </footer>

                    </div>
                    </div>
                    </div>
            </body>

            );
    }
}
