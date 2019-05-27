import React from 'react';
import { render } from 'react-dom';




export default class SideBar extends React.Component {

    constructor() {
        super();


    }



    render() {
        return (

<div class="col-md-3 left_col">
    <div class="left_col scroll-view">
        <div class="navbar nav_title" style={{ border: '0' }}>
            <a href="HomeAdmin" class="site_title"><i class="fa fa-paw"></i> <span>Administrateur!</span></a>
        </div>
        <div class="clearfix"></div>

        <div class="profile clearfix">
            <div class="profile_pic">
                <img src="production/images/img.jpg" alt="..." class="img-circle profile_img" />
            </div>
            <div class="profile_info">
                <span>Bienvenu,</span>
                <h2>Nasr</h2>
            </div>
        </div>

        <br />

        <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
            <div class="menu_section">
                <h3>Général</h3>
                <ul class="nav side-menu">
                    <li>
                        <a><i class="fa fa-home"></i> Accueil <span class="fa fa-chevron-down"></span></a>
                        <ul class="nav child_menu">
                            <li><a href="HomeAdmin">Page d'accueil</a></li>
                        </ul>
                    </li>
                    <li>
                        <a><i class="fa fa-edit"></i> Les produits <span class="fa fa-chevron-down"></span></a>
                        <ul class="nav child_menu">
                            <li><a href="AddProduct">Ajouter Produits</a></li>
                            <li><a href="ListProduct">Liste des Produits</a></li>
                        </ul>
                    </li>
                    <li>
                                    <a><i class="fa fa-edit"></i> Les Catégories <span class="fa fa-chevron-down"></span></a>
                                    <ul class="nav child_menu">
                                        <li><a href="Categorie">Ajouter Catégorie</a></li>
                                    </ul>
                   </li>
                    <li>
                        <a><i class="fa fa-desktop"></i> UI Elements <span class="fa fa-chevron-down"></span></a>
                        <ul class="nav child_menu">
                            <li><a href="general_elements.html">General Elements</a></li>
                            <li><a href="media_gallery.html">Media Gallery</a></li>
                            <li><a href="icons.html">Icons</a></li>
                            <li><a href="glyphicons.html">Glyphicons</a></li>
                            <li><a href="widgets.html">Widgets</a></li>
                            <li><a href="invoice.html">Invoice</a></li>
                            <li><a href="inbox.html">Inbox</a></li>
                        </ul>
                    </li>
                    <li>
                        <a><i class="fa fa-table"></i> Tables <span class="fa fa-chevron-down"></span></a>
                        <ul class="nav child_menu">
                            <li><a href="tables.html">Tables</a></li>
                            <li><a href="tables_dynamic.html">Table Dynamic</a></li>
                        </ul>
                    </li>
                    <li>
                        <a><i class="fa fa-bar-chart-o"></i> Data Presentation <span class="fa fa-chevron-down"></span></a>
                        <ul class="nav child_menu">
                            <li><a href="chartjs.html">Chart JS</a></li>
                        </ul>
                    </li>

                </ul>
            </div>
            <div class="menu_section">
                <h3>Live On</h3>
                <ul class="nav side-menu">
                    <li>
                        <a><i class="fa fa-bug"></i> Additional Pages <span class="fa fa-chevron-down"></span></a>
                        <ul class="nav child_menu">
                            <li><a href="e_commerce.html">E-commerce</a></li>
                            <li><a href="projects.html">Projects</a></li>
                            <li><a href="contacts.html">Contacts</a></li>
                            <li><a href="profile.html">Profile</a></li>
                        </ul>
                    </li>
                    <li>
                        <a><i class="fa fa-windows"></i> Extras <span class="fa fa-chevron-down"></span></a>
                        <ul class="nav child_menu">
                            <li><a href="page_404.html">404 Error</a></li>
                            <li><a href="plain_page.html">Plain Page</a></li>
                        </ul>
                    </li>

                </ul>
            </div>
        </div>

        <div class="sidebar-footer hidden-small">
            <a data-toggle="tooltip" data-placement="top" title="Settings">
                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="Lock">
                <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
                <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
            </a>
        </div>

    </div>
            </div>
        );
    }

}