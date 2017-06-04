/**
 * Created by faradj on 5/31/17.
 */
import React from 'react';
import Exam from './exam';

export default class Examination extends React.Component {

    render () {
        console.log("LastData", this.props.data);
        const examinationRows = [];
        if (this.props.data){
            this.props.data.forEach((analysis) => {
                examinationRows.push(<Exam key={analysis.id} id={analysis.id} fill={this.props.fill} data={analysis}/>);
            });
        }

        return (
            <div className="form-group">
                <div>
                    <button onClick={this.props.addExaminationRow} className="btn btn-warning push-15-t push-15-l push-10-b" type="button">
                        <i className="fa fa-plus"/> Назначить обследование
                    </button>
                    {
                        this.props.data.length > 0 ?
                            <button onClick={this.props.removeExaminationRow} className="btn btn-danger push-15-t push-5-l" type="button">
                                <i className="fa fa-times"/> Удалить
                            </button> : null
                    }
                    {
                        examinationRows
                    }
                </div>
            </div>
        )
    }
}