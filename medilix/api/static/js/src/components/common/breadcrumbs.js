import React from "react";

export default class Breadcrumbs extends React.Component {
    render () {
        return (
            <section className="mcare-inner-header">
                <div className="container">
                    <div className="row">
                        <h1>
                            Doctors Two
                        </h1>
                        <div className="crumbs">
                            <span><a href="index-2.html">Home</a></span>
                            <span><a href="index-2.html">Pages</a></span>
                            <span className="current-page">Doctors Four Coloumn</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}