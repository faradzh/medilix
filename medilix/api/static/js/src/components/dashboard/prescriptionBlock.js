/**
 * Created by faradj on 5/31/17.
 */
import React from 'react';
import Form from '../../components/forms/form';

export default class PrescriptionBlock extends React.Component {

    render () {
        const fill = this.props.fill;
        const id = this.props.id;
        const data = this.props.data;
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
                                    <input className="form-control" value={data.medicine} onChange={fill} type="text" id="medicine" name={`medicine-${id}`} placeholder="Название препарата"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-5 control-label" for="dosage">Дозировка</label>
                                <div className="col-md-7">
                                    <input className="form-control" value={data.dosage} onChange={fill} type="text" id="dosage" name={`dosage-${id}`} placeholder="..за разовый прием"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-5 control-label" for="dosage">Кратность</label>
                                <div className="col-md-7">
                                    <input className="form-control" value={data.timing} onChange={fill} type="text" id="timing" name={`timing-${id}`} placeholder="Сколько раз в сутки"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-5 control-label" for="duration">Продолжительность</label>
                                <div className="col-md-7">
                                    <input className="form-control" value={data.duration} onChange={fill} type="text" id="duration" name={`duration-${id}`} placeholder="..дней"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-5 control-label" for="duration">Лимит</label>
                                <div className="col-md-7">
                                    <input className="form-control" value={data.limit} onChange={fill} type="text" id="limit" name={`limit-${id}`} placeholder="Максимальная кратность"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-5 control-label" for="dosage">Комментарий</label>
                                <div className="col-md-7">
                                    <input className="form-control"  value={data.comments} onChange={fill} type="text" id="comments" name={`comments-${id}`} placeholder="Особые указания"/>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}