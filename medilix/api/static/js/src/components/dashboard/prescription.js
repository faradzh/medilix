/**
 * Created by faradj on 5/31/17.
 */
import React from 'react';
import Block from '../../components/dashboard/prescriptionBlock';

export default class Prescription extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            numOfBlocks: 0
        }
    }

    addBlock = () => {
        this.setState({numOfBlocks: this.state.numOfBlocks += 1})
    };

    removeBlock = () => {
        if (this.state.numOfBlocks > 0){
            this.setState({numOfBlocks: this.state.numOfBlocks -= 1})
        }
    };

    render () {
        const blocks = [];
        for (let i=0; i<this.state.numOfBlocks; i++){
            blocks.push(<Block />)
        }
        return (
            <div>
                <div className="row">
                    <div className="prescription-btns">
                        <button onClick={this.addBlock} className="btn btn-info push-15-t push-20-l push-10-b" type="button">
                            <i className="fa fa-plus"/> Добавить назначение
                        </button>
                        {
                            this.state.numOfBlocks > 0 ?
                                <button onClick={this.removeBlock} className="btn btn-danger push-15-t push-5-l" type="button">
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