import React from "react";

export default class Filter extends React.Component {
    render () {
        return (
            <div className="container">
                <div className="portfolioFilter title-text">
                    <a href="#" data-filter="*" className="current"><i className="mcare-flaticon-medical38"></i>All Doctors</a>
                    <a href="#" data-filter=".video"><i className="mcare-flaticon-healthy3"></i>Pathology</a>
                    <a href="#" data-filter=".photography"><i className="mcare-flaticon-medical28"></i>Cardiac</a>
                    <a href="#" data-filter=".design"><i className="mcare-flaticon-science29"></i>Orthopedic</a>
                    <a href="#" data-filter=".branding"><i className="mcare-flaticon-first21"></i>Pediatric</a>
                </div>
            </div>
        )
    }
}