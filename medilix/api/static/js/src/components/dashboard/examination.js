/**
 * Created by faradj on 5/31/17.
 */
import React from 'react';
import Exam from './exam';

export default class Examination extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            numOfRows: 0
        }
    }

    addRow = () => {
        this.setState({numOfRows: this.state.numOfRows += 1})
    };

    removeRow = () => {
        if (this.state.numOfRows > 0){
            this.setState({numOfRows: this.state.numOfRows -= 1})
        }
    };

    render () {
        const examinationRows = [];
        for (let i=0; i<this.state.numOfRows; i++){
            examinationRows.push(<Exam />);
        }
        return (
            <div className="form-group">
                <div>
                    <button onClick={this.addRow} className="btn btn-warning push-15-t push-15-l push-10-b" type="button">
                        <i className="fa fa-plus"/> Назначить обследование
                    </button>
                    {
                        this.state.numOfRows > 0 ?
                            <button onClick={this.removeRow} className="btn btn-danger push-15-t push-5-l" type="button">
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