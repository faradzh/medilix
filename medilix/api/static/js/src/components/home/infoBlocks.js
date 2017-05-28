/**
 * Created by faradj on 5/11/17.
 */
import React from 'react';

export default class InfoBlocks extends React.Component {
    render () {
        return (
            <div className="bg-white">
                <section className="content content-boxed">
                    <div className="row items-push-3x push-50-t nice-copy">
                        <div className="col-sm-4">
                            <div className="text-center push-30">
                                <span className="item item-2x item-circle border">
                                    <i className="fa fa-money"/>
                                </span>
                            </div>
                            <h3 className="h5 font-w600 text-uppercase text-center push-10">Наш сервис бесплатен для пациентов</h3>
                            <p className="text-center">Мы работаем без скрытых наценок и комиссий. Вы платите только клинике за предоставленные вам услуги.</p>
                        </div>
                        <div className="col-sm-4">
                            <div className="text-center push">
                                <span className="item item-2x item-circle border">
                                    <i className="fa fa-user-secret"/>
                                </span>
                            </div>
                            <h3 className="h5 font-w600 text-uppercase text-center push-10">Ваши данные в полной безопасности</h3>
                            <p className="text-center">Мы гарантируем Вам конфиденциальность Ваших данных. Ваша персональная информация используется только для записи.</p>
                        </div>
                        <div className="col-sm-4">
                            <div className="text-center push">
                                <span className="item item-2x item-circle border">
                                    <i className="si si-clock"/>
                                </span>
                            </div>
                            <h3 className="h5 font-w600 text-uppercase text-center push-10">Сохраните свое время</h3>
                            <p className="text-center">С помощью нашего сервиса вы сможете найти нужного врача и записаться на прием не потравтив лишнего времени на бесполезные консультации и стояния в очередях.</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}