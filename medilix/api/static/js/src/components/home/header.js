import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
    
    componentDidMount(){
        const morphSearch = document.getElementById( 'morphsearch' ),
           	  input = morphSearch.querySelector( 'input.morphsearch-input' ),
	          ctrlClose = morphSearch.querySelector( 'span.morphsearch-close' );
        let isOpen = false;
        let isAnimating = false;
        
        // show/hide search area
        const toggleSearch = function(evt) {

            // return if open and the input gets focused
            if( evt.type.toLowerCase() === 'focus' && isOpen ) return false;

            var offsets = morphsearch.getBoundingClientRect();

            if( isOpen ) {

                classie.remove( morphSearch, 'open' );


                // trick to hide input text once the search overlay closes

                // todo: hardcoded times, should be done after transition ends

                if( input.value !== '' ) {

                    setTimeout(function() {

                        classie.add( morphSearch, 'hideInput' );

                        setTimeout(function() {

                            classie.remove( morphSearch, 'hideInput' );

                            input.value = '';

                        }, 300 );

                    }, 500);

                }
                input.blur();
            }
            else {
                classie.add( morphSearch, 'open' );
            }
            isOpen = !isOpen;

        };

    // events

    input.addEventListener( 'focus', toggleSearch );

    ctrlClose.addEventListener( 'click', toggleSearch );

    // esc key closes search overlay

    // keyboard navigation events

    document.addEventListener( 'keydown', function( ev ) {

        var keyCode = ev.keyCode || ev.which;

        if( keyCode === 27 && isOpen ) {

            toggleSearch(ev);

        }

    } );

    /***** for demo purposes only: don't allow to submit the form *****/

    morphSearch.querySelector( 'button[type="submit"]' ).addEventListener( 'click', function(ev) { ev.preventDefault(); } );
    }
    
    render () {
        return(
            <header id="headerstic" className="clearfix">
                <div className="mcare-header-bg">

                    <div className="mcare-topbar-info no-pad">
                        <div className="container">

                            <div className="top-bar-txt no-pad pull-left">
                                <span className="top-info-email"><a href="#"><i className="ion-email top-info-icon"></i>contact@meditreat.com</a></span>
                            </div>
                            <div className="top-bar-txt no-pad pull-left">
                                <span className="top-info-contact"><i className="ion-android-call top-info-icon"></i>+1 (888) 000-0000</span>
                            </div>

                            <div className="col-lg-6 col-md-6 pull-right no-pad">

                                <div className="top-info-appoint top-bar-txt pull-right morph-button morph-button-modal morph-button-modal-1 morph-button-fixed"
                                     data-toggle="modal" data-target="#app-modal">
                                    <button type="button" className="button button--winona">
                                        <span><i className="ion-ios-briefcase top-info-icon"></i>Get An Appointment</span>
                                        <span><i className="ion-ios-briefcase top-info-icon"></i>Click Here</span>
                                    </button>
                                </div>

                                <div className="social-wrap-head no-pad pull-right">
                                    <ul>
                                        <li><a href="#">
                                            <i className="fa fa-facebook head-social-icon on-reg" id="face-head1"
                                               data-original-title="" title=""></i>
                                        </a></li>
                                        <li><a href="#"><i className="fa fa-twitter head-social-icon" id="tweet-head1"
                                                           data-original-title="" title=""></i></a></li>
                                        <li><a href="#"><i className="fa fa-pinterest-p head-social-icon" id="gplus-head1"
                                                           data-original-title="" title=""></i></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus head-social-icon" id="link-head1"
                                                           data-original-title="" title=""></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="panel-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 col-xs-12">
                                    <span className="top-info-email"><a href="#"><i className="ion-email top-info-icon"></i>contact@meditreat.com</a></span>
                                </div>
                                <div className="col-sm-6 col-xs-12">
                                    <span className="top-info-contact"><i className="ion-android-call top-info-icon"></i>+1 (888) 000-0000</span>
                                </div>
                                <div className="col-sm-6 col-xs-12">
                                    <ul className="social-top-info">
                                        <li><a href="#"><i className="fa fa-facebook head-social-icon on-reg" id="face-head2"
                                                           data-original-title="" title=""></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter head-social-icon" id="tweet-head2"
                                                           data-original-title="" title=""></i></a></li>
                                        <li><a href="#"><i className="fa fa-pinterest-p head-social-icon" id="gplus-head2"
                                                           data-original-title="" title=""></i></a></li>
                                        <li><a href="#"><i className="fa fa-google-plus head-social-icon" id="link-head2"
                                                           data-original-title="" title=""></i></a></li>
                                    </ul>
                                </div>

                                <div className="col-sm-6 col-xs-12">
                                    <div className="top-info-appoint top-bar-txt pull-right morph-button2 morph-button-modal morph-button-modal-1 morph-button-fixed"
                                         data-toggle="modal" data-target="#app-modal">
                                        <button type="button" className="button"><i className="ion-ios-briefcase top-info-icon"></i>Get
                                            An Appointment
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="flip"></div>
                    <div className="top-nav-wrap">
                        <div className="container overflow-visible">
                            <div className="row">
                                <nav className="navbar navbar-default" role="navigation">

                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                                data-target="#bs-example-navbar-collapse-1">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>

                                        <div className="column res-men-col">
                                            <div id="dl-menu" className="dl-menuwrapper">
                                                <button className="dl-trigger">Open Menu</button>
                                                <ul className="dl-menu">
                                                    <li>
                                                        <a href="index-2.html">Home</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">About Us</a>
                                                        <ul className="dl-submenu">
                                                            <li><a href="about-us.html">About us 1</a></li>
                                                            <li><a href="about-us2.html">About us 2</a></li>
                                                            <li><a href="about-us3.html">About us 3</a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#">Features</a>
                                                        <ul className="dl-submenu">
                                                            <li>
                                                                <a href="#">Blog</a>
                                                                <ul className="dl-submenu">
                                                                    <li><a href="blog-classNameic.html">Blog Classic</a></li>
                                                                    <li><a href="blog-3col.html">Blog 3 Cols</a></li>
                                                                    <li><a href="blog-4col.html">Blog 4 Cols</a></li>
                                                                    <li><a href="blog-3col-mas.html">Blog 3 Cols Masonry</a>
                                                                    </li>
                                                                    <li><a href="blog-2col-mas-side-left.html">Blog Masonry
                                                                        Left Sidebar </a></li>
                                                                    <li><a href="blog-2col-mas-side-right.html">Blog Masonry
                                                                        Right Sidebar</a></li>
                                                                    <li><a href="blog-2colp-side-left.html">Blog Left
                                                                        Sidebar</a></li>
                                                                    <li><a href="blog-2colp-side-right.html">Blog Right
                                                                        Sidebar</a></li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="#">Header / Footer</a>
                                                                <ul className="dl-submenu">
                                                                    <li><a href="index-2.html">Side Slide Area</a></li>
                                                                    <li><a href="index-2.html">Cool Mega Menu</a></li>
                                                                    <li><a href="index-2.html">Appointment Popup</a></li>
                                                                    <li><a href="index-2.html">Full page Search</a></li>
                                                                    <li><a href="index-2.html">Logo Caorousel</a></li>
                                                                    <li><a href="index-2.html">Small Footer</a></li>
                                                                    <li><a href="index-2.html">Mega Footer</a></li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="#">Main Featues</a>
                                                                <ul className="dl-submenu">
                                                                    <li><a href="el-team.html">Doctors Team</a></li>
                                                                    <li><a href="el-iconbox.html">Icon Boxes</a></li>
                                                                    <li><a href="el-postbox.html">Post Box Carousel</a></li>
                                                                    <li><a href="our-clinic1.html">Special Clinic Page1</a>
                                                                    </li>
                                                                    <li><a href="our-clinic2.html">Special Clinic Page2</a>
                                                                    </li>
                                                                    <li><a href="timetable.html">Time Table</a></li>
                                                                    <li><a href="services1.html">Responsive Carousel
                                                                        Gallery</a></li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="#">Galleries</a>
                                                                <ul className="dl-submenu">
                                                                    <li><a href="gallery-info-2col.html">Gallery Info 2
                                                                        Cols</a></li>
                                                                    <li><a href="gallery-info-3col.html">Gallery Info 3
                                                                        Cols</a></li>
                                                                    <li><a href="gallery-filter.html">Gallery Filter</a>
                                                                    </li>
                                                                    <li><a href="gallery-filter-2col.html">Gallery Filter 2
                                                                        Cols</a></li>
                                                                    <li><a href="gallery-carousel.html">Gallery Carousel</a>
                                                                    </li>
                                                                    <li><a href="gallery-compare.html">Gallery Compare</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="#">Testimonials</a>

                                                                <ul className="dl-submenu">

                                                                    <li><a tabIndex="-1" href="testimonial-carousel.html">Testimonial
                                                                        Carousel</a></li>

                                                                    <li><a tabIndex="-1" href="testimonial1-single.html">Testimonial
                                                                        1 Single</a></li>

                                                                    <li><a tabIndex="-1" href="testimonial1-grid.html">Testimonial
                                                                        1 grid</a></li>

                                                                    <li><a tabIndex="-1" href="testimonial2-single.html">Testimonial
                                                                        2 Single</a></li>

                                                                    <li><a tabIndex="-1" href="testimonial2-grid.html">Testimonial
                                                                        2 grid</a></li>

                                                                    <li><a tabIndex="-1"
                                                                           href="testimonial-slide-creative.html">Testimonial
                                                                        Creative</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#">Shortcodes</a>
                                                        <ul className="dl-submenu">
                                                            <li>
                                                                <a href="#">Shortcodes 1</a>
                                                                <ul className="dl-submenu">
                                                                    <li><a href="sc-tabs.html"><i
                                                                            className="fa fa-folder-open"></i>Tabs</a></li>
                                                                    <li><a href="sc-accordion.html"><i
                                                                            className="fa fa-bars"></i>Accordions</a></li>
                                                                    <li><a href="sc-carousel.html"><i
                                                                            className="fa fa-arrows-h"></i>Carousel slider</a>
                                                                    </li>
                                                                    <li><a href="sc-media.html"><i
                                                                            className="fa fa-picture-o"></i>Media</a></li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="#">Shortcodes 2</a>
                                                                <ul className="dl-submenu">
                                                                    <li><a href="sc-counter.html"><i
                                                                            className="fa fa-sort-numeric-asc"></i>Counters</a>
                                                                    </li>
                                                                    <li><a href="sc-progress.html"><i
                                                                            className="fa fa-tasks"></i>Progress Bar</a></li>
                                                                    <li><a href="sc-msgbox.html"><i
                                                                            className="fa fa-comments-o"></i>Message Box</a>
                                                                    </li>
                                                                    <li><a href="sc-tooltip.html"><i
                                                                            className="fa fa-exclamation"></i>Tooltip</a></li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="#">Grid</a>
                                                                <ul className="dl-submenu">
                                                                    <li><a href="sc-headings.html"><i
                                                                            className="fa fa-header"></i>Headings</a></li>
                                                                    <li><a href="sc-quotes.html"><i
                                                                            className="fa fa-quote-left"></i>Quotes</a></li>
                                                                    <li><a href="sc-list.html"><i className="fa fa-list-ol"></i>Lists</a>
                                                                    </li>
                                                                    <li><a href="sc-dropcaps-highlights.html"><i
                                                                            className="fa fa-info-circle"></i>Dropcaps</a></li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="#">Typography</a>
                                                                <ul className="dl-submenu">
                                                                    <li><a href="sc-coloumns.html"><i className="fa fa-th"></i>columns</a>
                                                                    </li>
                                                                    <li><a href="sc-table.html"><i className="fa fa-table"></i>Tables</a>
                                                                    </li>
                                                                    <li><a href="sc-buttons.html"><i
                                                                            className="fa fa-square"></i>Buttons</a></li>
                                                                    <li><a href="sc-calltoaction.html"><i
                                                                            className="fa fa-thumbs-o-up"></i>Call To Action</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#">Pages</a>
                                                        <ul className="dl-submenu">
                                                            <li>
                                                                <a href="#">Doctors</a>
                                                                <ul className="dl-submenu">
                                                                    <li><a tabIndex="-1" href="doctors1.html">Doctors 1</a>
                                                                    </li>
                                                                    <li><a tabIndex="-1" href="doctors2.html">Doctors 2</a>
                                                                    </li>
                                                                    <li><a tabIndex="-1" href="single-doc.html">Single
                                                                        Doctor</a></li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="#">Services</a>
                                                                <ul className="dl-submenu">
                                                                    <li><a tabIndex="-1" href="services1.html">Services
                                                                        1</a></li>
                                                                    <li><a tabIndex="-1" href="services2.html">Services
                                                                        2</a></li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="#">FAQ</a>
                                                                <ul className="dl-submenu">
                                                                    <li><a tabIndex="-1" href="faq.html">FAQ</a></li>
                                                                    <li><a tabIndex="-1" href="faq-2grid.html">FAQ 2 COL</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <a href="#">Error</a>
                                                                <ul className="dl-submenu">
                                                                    <li><a tabIndex="-1" href="404.html">404- Page1</a></li>
                                                                    <li><a tabIndex="-1" href="404-2.html">404- Page2</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#">Contact Us</a>
                                                        <ul className="dl-submenu">
                                                            <li><a href="Contact1.html">Contact Us 1</a></li>
                                                            <li><a href="contact2.html">Contact Us 2</a></li>
                                                            <li><a href="contact3.html">Contact Us 3</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <a href="index-2.html">
                                            <div className="logo">
                                                <img src="images/logo.png" alt="logo" className="img-responsive"></img>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="side-menu">
                                        <a id="showRight">
                                            <i className="ion-ios-paperplane menu-button open-button"/>
                                        </a>
                                    </div>
                                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                                        <div id="morphsearch" className="morphsearch hide-in-small">
                                            <form className="morphsearch-form">
                                                <input className="morphsearch-input" type="search" placeholder="Search..."/><i
                                                    className="ion-ios-search-strong"></i>
                                                <button className="morphsearch-submit" type="submit">Search</button>
                                            </form>
                                            <span className="morphsearch-close"></span>
                                        </div>
                                        <div className="overlay disable-hover noscroll"></div>
                                        <ul className="nav navbar-nav navbar-right title-text top-nav">
                                            <li className="active"><Link to={'/app'}><i className="ion-ios-home-outline"/>Home</Link>
                                            </li>
                                            <li className=""><Link to={'/app/doctors'}><i className="ion-ios-person-outline"/>Doctors</Link>
                                            </li>
                                            <li className="dropdown mega-dropdown">
                                                <a href="blog-3colp.html" className="dropdown-toggle" data-toggle="dropdown"><i
                                                        className="ion-ios-paperplane-outline"></i>Features</a>
                                                <ul className="dropdown-menu mega-dropdown-menu feature-dropdown">
                                                    <li className="col-sm-3">
                                                        <h4 className="dropdown-header"><i className="mcare-flaticon-medical38"></i>Blogs
                                                        </h4>
                                                        <ul className="menu-items" role="menu">
                                                            <li><a href="blog-classNameic.html">Blog Classic</a></li>
                                                            <li><a href="blog-3col.html">Blog 3 Cols</a></li>
                                                            <li><a href="blog-4col.html">Blog 4 Cols</a></li>
                                                            <li><a href="blog-3col-mas.html">Blog 3 Cols Masonry</a></li>
                                                            <li><a href="blog-2col-mas-side-left.html">Blog Masonry Left
                                                                Sidebar </a></li>
                                                            <li><a href="blog-2col-mas-side-right.html">Blog Masonry Right
                                                                Sidebar</a></li>
                                                            <li><a href="blog-2colp-side-left.html">Blog Left Sidebar</a>
                                                            </li>
                                                            <li><a href="blog-2colp-side-right.html">Blog Right Sidebar</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="col-sm-3">
                                                        <h4 className="dropdown-header"><i className="mcare-flaticon-medical38"></i>Header
                                                            / footer</h4>
                                                        <ul className="menu-items" role="menu">
                                                            <li><a href="index-2.html">Side Slide Area</a></li>
                                                            <li><a href="index-2.html">Cool Mega Menu</a></li>
                                                            <li><a href="index-2.html">Appointment Popup</a></li>
                                                            <li><a href="index-2.html">Full page Search</a></li>
                                                            <li><a href="index-2.html">Logo Caorousel</a></li>
                                                            <li><a href="index-2.html">Small Footer</a></li>
                                                            <li><a href="index-2.html">Mega Footer</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="col-sm-3">
                                                        <h4 className="dropdown-header"><i className="mcare-flaticon-medical38"></i>Main
                                                            Fatures</h4>
                                                        <ul className="menu-items" role="menu">
                                                            <li><a href="el-team.html">Doctors Team</a></li>
                                                            <li><a href="el-iconbox.html">Icon Boxes</a></li>
                                                            <li><a href="el-postbox.html">Post Box Carousel</a></li>
                                                            <li><a href="our-clinic1.html">Special Clinic Page1</a></li>
                                                            <li><a href="our-clinic2.html">Special Clinic Page2</a></li>
                                                            <li><a href="timetable.html">Time Table</a></li>
                                                            <li><a href="services2.html">Responsive Carousel Gallery</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="col-sm-3">
                                                        <h4 className="dropdown-header"><i className="mcare-flaticon-medical38"></i>Galleries
                                                        </h4>
                                                        <ul className="menu-items" role="menu">
                                                            <li><a href="gallery-info-2col.html">Gallery Info 2 Cols</a>
                                                            </li>
                                                            <li><a href="gallery-info-3col.html">Gallery Info 3 Cols</a>
                                                            </li>
                                                            <li><a href="gallery-filter.html">Gallery Filter</a></li>
                                                            <li><a href="gallery-filter-2col.html">Gallery Filter 2 Cols</a>
                                                            </li>
                                                            <li><a href="gallery-carousel.html">Gallery Carousel</a></li>
                                                            <li><a href="gallery-compare.html">Gallery Compare</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown mega-dropdown">
                                                <a href="blog-3colp.html" className="dropdown-toggle" data-toggle="dropdown"><i
                                                        className="ion-ios-color-wand-outline"></i>Shortcodes</a>
                                                <ul className="dropdown-menu mega-dropdown-menu short-code-menu-back">
                                                    <li className="col-sm-3">
                                                        <h4 className="dropdown-header"><i className="mcare-flaticon-medical38"></i>Shortcodes
                                                            - 1</h4>
                                                        <ul className="menu-items-utility" role="menu">
                                                            <li><a href="sc-tabs.html"><i className="fa fa-folder-open"></i>Tabs</a>
                                                            </li>
                                                            <li><a href="sc-accordion.html"><i className="fa fa-bars"></i>Accordions</a>
                                                            </li>
                                                            <li><a href="sc-carousel.html"><i className="fa fa-arrows-h"></i>Carousel
                                                                slider</a></li>
                                                            <li><a href="sc-media.html"><i className="fa fa-picture-o"></i>Media</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="col-sm-3">
                                                        <h4 className="dropdown-header"><i className="mcare-flaticon-medical38"></i>Shortcodes
                                                            - 2</h4>
                                                        <ul className="menu-items-utility" role="menu">
                                                            <li><a href="sc-counter.html"><i
                                                                    className="fa fa-sort-numeric-asc"></i>Counters</a></li>
                                                            <li><a href="sc-progress.html"><i className="fa fa-tasks"></i>Progress
                                                                Bar</a></li>
                                                            <li><a href="sc-msgbox.html"><i className="fa fa-comments-o"></i>Message
                                                                Box</a></li>
                                                            <li><a href="sc-tooltip.html"><i className="fa fa-exclamation"></i>Tooltip</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="col-sm-3">
                                                        <h4 className="dropdown-header"><i className="mcare-flaticon-medical38"></i>Grid
                                                        </h4>
                                                        <ul className="menu-items-utility" role="menu">
                                                            <li><a href="sc-headings.html"><i className="fa fa-header"></i>Headings</a>
                                                            </li>
                                                            <li><a href="sc-quotes.html"><i className="fa fa-quote-left"></i>Quotes</a>
                                                            </li>
                                                            <li><a href="sc-list.html"><i
                                                                    className="fa fa-list-ol"></i>Lists</a></li>
                                                            <li><a href="sc-dropcaps-highlights.html"><i
                                                                    className="fa fa-info-circle"></i>Dropcaps</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="col-sm-3">
                                                        <h4 className="dropdown-header"><i className="mcare-flaticon-medical38"></i>Typography
                                                        </h4>
                                                        <ul className="menu-items-utility" role="menu">
                                                            <li><a href="sc-coloumns.html"><i
                                                                    className="fa fa-th"></i>columns</a></li>
                                                            <li><a href="sc-table.html"><i
                                                                    className="fa fa-table"></i>Tables</a></li>
                                                            <li><a href="sc-buttons.html"><i className="fa fa-square"></i>Buttons</a>
                                                            </li>
                                                            <li><a href="sc-calltoaction.html"><i
                                                                    className="fa fa-thumbs-o-up"></i>Call To Action</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i
                                                        className="ion-ios-box-outline"></i>Pages</a>
                                                <ul className="dropdown-menu single-drop">
                                                    <li className="dropdown"><a href="doctors1.html" tabIndex="-1">Doctors</a>
                                                        <ul className="dropdown-menu inner-dropdown">
                                                            <li><a tabIndex="-1" href="doctors1.html">Doctors 1</a></li>
                                                            <li><a tabIndex="-1" href="doctors2.html">Doctors 2</a></li>
                                                            <li><a tabIndex="-1" href="single-doc.html">Single Doctor</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown"><a href="testimonial-carousel.html" tabIndex="-1">Testimonials</a>
                                                        <ul className="dropdown-menu inner-dropdown">
                                                            <li><a tabIndex="-1" href="testimonial-carousel.html">Testimonial
                                                                Carousel</a></li>
                                                            <li><a tabIndex="-1" href="testimonial1-single.html">Testimonial
                                                                1 Single</a></li>
                                                            <li><a tabIndex="-1" href="testimonial1-grid.html">Testimonial 1
                                                                grid</a></li>
                                                            <li><a tabIndex="-1" href="testimonial2-single.html">Testimonial
                                                                2 Single</a></li>
                                                            <li><a tabIndex="-1" href="testimonial2-grid.html">Testimonial 2
                                                                grid</a></li>
                                                            <li><a tabIndex="-1" href="testimonial-slide-creative.html">Testimonial
                                                                Creative</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown"><a href="services1.html" tabIndex="-1">Services</a>
                                                        <ul className="dropdown-menu inner-dropdown">
                                                            <li><a tabIndex="-1" href="services1.html">Services 1</a></li>
                                                            <li><a tabIndex="-1" href="services2.html">Services 2</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown"><a href="faq.html" tabIndex="-1">FAQ's</a>
                                                        <ul className="dropdown-menu inner-dropdown">
                                                            <li><a tabIndex="-1" href="faq.html">FAQ</a></li>
                                                            <li><a tabIndex="-1" href="faq-2grid.html">FAQ 2 COL</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown"><a href="404.html" tabIndex="-1">Error Page</a>
                                                        <ul className="dropdown-menu inner-dropdown">
                                                            <li><a tabIndex="-1" href="404.html">404- Page1</a></li>
                                                            <li><a tabIndex="-1" href="404-2.html">404- Page2</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="search-page.html">Search Page</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown mega-dropdown">
                                                <a href="blog-3colp.html" className="dropdown-toggle" data-toggle="dropdown"><i
                                                        className="ion-ios-location-outline"></i>Contact</a>
                                                <ul className="dropdown-menu mega-dropdown-menu contact-menu-top">
                                                    <li className="col-sm-3">
                                                        <div className="meg-menu-box main-bloc clearfix">
                                                            <h4 className="dropdown-header"><i
                                                                    className="mcare-flaticon-medical38"></i>Contact Pages</h4>
                                                            <ul className="meg-page-links">
                                                                <li><a href="Contact1.html">Contact Us 1</a></li>
                                                                <li><a href="contact2.html">Contact Us 2</a></li>
                                                                <li><a href="contact3.html">Contact Us 3</a></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="col-sm-9 no-pad">
                                                        <div className="meg-menu-box map-menu-box main-bloc clearfix">
                                                            <div className="top-menu-map clearfix">
                                                                <div className="home_gmap3"><img src="images/map1.jpg"
                                                                                             className="img-responsive" alt=""></img>
                                                                </div>
                                                                <div className="meg-menu-box contact-menu-box main-bloc clearfix">
                                                                    <ul className="contact-menu-address">
                                                                        <li><i className="ion-location"></i><span>Block no 56, New South Wales, Australia</span>
                                                                        </li>
                                                                        <li><i className="ion-android-call"></i><span
                                                                                className="num-font">(123) 4560-789</span></li>
                                                                        <li><i className="ion-paper-airplane"></i><a
                                                                                href="mailto:contact@meditreat.com">contact@meditreat.com</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}