/**
 * Created by faradj on 5/31/17.
 */
import React from 'react';
import Form from '../../components/forms/form';

export default class PrescriptionBlock extends React.Component {
    render () {
        return (
            <div className="col-lg-6">
                <div className="block">
                    <div className="block-header">
                    </div>
                    <div className="block-content block-content-narrow">
                        <Form className="form-horizontal">
                            <div className="form-group">
                                <label className="col-md-5 control-label" for="medicine">Препарат</label>
                                <div className="col-md-7">
                                    <input className="form-control" type="text" id="medicine" name="medicine" placeholder="Название препарата"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-5 control-label" for="dosage">Дозировка</label>
                                <div className="col-md-7">
                                    <input className="form-control" type="text" id="dosage" name="dosage" placeholder="Дозировка"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-5 control-label" for="duration">Продолжительность</label>
                                <div className="col-md-7">
                                    <input className="form-control" type="text" id="duration" name="duration" placeholder="..дней"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-5 control-label" for="dosage">Комментарий</label>
                                <div className="col-md-7">
                                    <input className="form-control" type="text" id="comments" name="comments" placeholder="Особенности применения"/>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}