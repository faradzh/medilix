/**
 * Created by faradj on 5/31/17.
 */
import React from 'react';
import Block from '../../components/dashboard/prescriptionBlock';

export default class Prescription extends React.Component {

    render () {
        const data = this.props.data;
        const dataLength = data ? data.length : 0;
        const blocks = [];
        if (data){
           data.forEach((item) => {
                blocks.push(<Block data={item} key={item.id} id={item.id} fill={this.props.fillPrescription}/>)
            });
        }
        console.log("Objects")
        return (
            <div>
                <div className="row">
                    <div className="prescription-btns">
                        <button onClick={this.props.addPrescriptionRow} className="btn btn-info push-15-t push-20-l push-10-b" type="button">
                            <i className="fa fa-plus"/> Добавить назначение
                        </button>
                        {
                            dataLength > 0 ?
                                <button onClick={this.props.removePrescriptionRow} className="btn btn-danger push-15-t push-5-l" type="button">
                                    <i className="fa fa-times"/> Удалить
                                </button> : null
                        }
                    </div>
                </div>
                <div className="row">
                    {blocks}
                </div>
            </div>

        )
    }
}