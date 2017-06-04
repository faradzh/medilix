/**
 * Created by faradj on 5/2/17.
 */
import React from 'react';

export default class ProfileStats extends React.Component {
    render () {
        const { recommendedNumber, experienceNumber, patientsNumber, ratingNumber } = this.props;
        return this.props.display ?
        (
            <div className="block-content text-center">
                <div className="row items-push text-uppercase">
                    <div className="col-xs-6 col-sm-3">
                        <div className="font-w700 text-gray-darker animated fadeIn">Рекомендуют</div>
                        <a className="h2 font-w300 text-primary animated flipInX" href="javascript:void(0)">{recommendedNumber}</a>
                    </div>
                    <div className="col-xs-6 col-sm-3">
                        <div className="font-w700 text-gray-darker animated fadeIn">Опыт работы</div>
                        <a className="h2 font-w300 text-primary animated flipInX" href="javascript:void(0)">{experienceNumber}</a>
                    </div>
                    <div className="col-xs-6 col-sm-3">
                        <div className="font-w700 text-gray-darker animated fadeIn">Пациенты</div>
                        <a className="h2 font-w300 text-primary animated flipInX" href="javascript:void(0)">{patientsNumber}</a>
                    </div>
                    <div className="col-xs-6 col-sm-3">
                        <div className="font-w700 text-gray-darker animated fadeIn">{ratingNumber}</div>
                        <div className="text-warning push-10-t animated flipInX">
                            <i className="fa fa-star"/>
                            <i className="fa fa-star"/>
                            <i className="fa fa-star"/>
                            <i className="fa fa-star"/>
                            <i className="fa fa-star"/>
                        </div>
                    </div>
                </div>
            </div>
        ) : null;
    }
}

ProfileStats.defaultProps = {
    display: true
};