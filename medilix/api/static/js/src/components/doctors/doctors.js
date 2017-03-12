import React from 'react';
import Breadcrumbs from '../common/breadcrumbs';
import Filter from './filter';
import Doctor from './doctor';

export default class Doctors extends React.Component {
    render () {
        return (
            <div>
                <Breadcrumbs />

                <section className="mcare-depart-wrap">
                    <h2 className="mcare-h2">Medilix <span>Departments</span></h2>

                    <Filter />

                    <div className="container">
                        <div className="portfolioContainer parent-container-port doctors-page2">
                            <Doctor />
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}