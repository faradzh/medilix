/**
 * Created by faradj on 5/11/17.
 */
import React from 'react';
const imageSrc1 = require('../../../../images/dashboard/profile/chopa.jpg');
const imageSrc2 = require('../../../../images/dashboard/profile/eddi.jpg');
const imageSrc3 = require('../../../../images/dashboard/profile/saga.jpg');
const path = '/static/js/dist/';

export default class Testimonials extends React.Component {
    render () {
        return (
            <div className="bg-image">
                <div className="bg-primary-dark-op">
                    <section className="content content-full content-boxed">
                        <div className="row items-push-2x push-50-t text-center">
                            <div className="col-sm-4 visibility-hidden" data-toggle="appear" data-offset="-150">
                                <img className="img-avatar img-avatar-thumb" src={path + imageSrc1} alt=""/>
                                <div className="text-warning push-10-t push-15">
                                    <i className="fa fa-fw fa-star"/>
                                    <i className="fa fa-fw fa-star"/>
                                    <i className="fa fa-fw fa-star"/>
                                    <i className="fa fa-fw fa-star"/>
                                    <i className="fa fa-fw fa-star"/>
                                </div>
                                <div className="h4 text-white-op push-5">Отличный сервис, наконец дождались! Срочно советую всем воспользоваться!</div>
                                <div className="h6 text-gray">- Чолпон Абдыжапарова</div>
                            </div>
                            <div className="col-sm-4 visibility-hidden" data-toggle="appear" data-offset="-150" data-timeout="150">
                                <img className="img-avatar img-avatar-thumb" src={path + imageSrc2} alt=""/>
                                <div className="text-warning push-10-t push-15">
                                    <i className="fa fa-fw fa-star"/>
                                    <i className="fa fa-fw fa-star"/>
                                    <i className="fa fa-fw fa-star"/>
                                    <i className="fa fa-fw fa-star"/>
                                    <i className="fa fa-fw fa-star"/>
                                </div>
                                <div className="h4 text-white-op push-5">Замечательный функционал! Надеюсь на большую базу данных врачей.</div>
                                <div className="h6 text-gray">- Элдияр Таалайбек</div>
                            </div>
                            <div className="col-sm-4 visibility-hidden" data-toggle="appear" data-offset="-150" data-timeout="300">
                                <img className="img-avatar img-avatar-thumb" src={path + imageSrc3} alt=""/>
                                <div className="text-warning push-10-t push-15">
                                    <i className="fa fa-fw fa-star"/>
                                    <i className="fa fa-fw fa-star"/>
                                    <i className="fa fa-fw fa-star"/>
                                    <i className="fa fa-fw fa-star"/>
                                    <i className="fa fa-fw fa-star"/>
                                </div>
                                <div className="h4 text-white-op push-5">Для меня, как для стоматолога - незаменимый инструмент!</div>
                                <div className="h6 text-gray">- Сагынбек Махаматкул уулу</div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}