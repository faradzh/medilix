import React from 'react';

export default class Doctor extends React.Component {
    render () {
        const profileImg = require('../../../../images/dt1.jpg');
        return (
            <div className="work branding three-grid">
                <div className="meet-doc-box second-eff">
                    <div className="meet-img-wrap">
                        <img src={'/static/js/dist/' + profileImg} className="img-responsive" alt="meet-doctors" />
                        <div className="doc-info-part">
                            <a href="single-doc.html"><p className="text-content"><i className="fa fa-link"/></p></a>
                        </div>
                    </div>
                    <div className="doc-main-info">
                        <h4>Dr. Robert Napper</h4>
                        <span className="doc-role">Family Physician</span>
                        <p className="text-content">Lorem ipsum dolor sit amet, adipiscing elit. Maecenas neque diam, luctus at laoreet.</p>
                        <ul className="meet-doc-social">
                            <li><a href="#"><i className="fa fa-facebook meetdoc-social-icon"/></a></li>
                            <li><a href="#"><i className="fa fa-twitter meetdoc-social-icon"/></a></li>
                            <li><a href="#"><i className="fa fa-linkedin meetdoc-social-icon"/></a></li>
                            <li><a href="#"><i className="fa fa-google-plus meetdoc-social-icon"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}