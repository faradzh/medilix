/**
 * Created by faradj on 5/11/17.
 */
import React from 'react';

export default class Events extends React.Component {

    dragStartHandler = (event) => {
        event.dataTransfer.setData("text/plain", event.target.innerText);
    };

    render () {
        const events = this.props.events;
        const colors = [
            {
                id: 1,
                value: '#fac5a5'
            },
            {
                id: 2,
                value: 'green'
            }
        ];
        return (
            <div>
                <form className="js-form-add-event push-30" onSubmit={this.props.onSubmit}>
                    <div className="input-group">
                        <input className="js-add-event form-control" onChange={this.props.onChange} type="text" placeholder="Add event.."/>
                        <div className="input-group-btn">
                            <button className="btn btn-default" type="submit"><i className="fa fa-plus"/></button>
                        </div>
                    </div>
                </form>

                <ul className="js-events list list-events">
                    {
                        events.map((event) => {
                            let index = Math.floor(Math.random() * colors.length);
                            return <li className="ui-draggable ui-draggable-handle" onDragStart={this.dragStartHandler} draggable='true' style={{backgroundColor: colors[index].value}}>{event}</li>;
                        })
                    }
                </ul>
                <div className="text-center text-muted">
                    <small><em><i className="fa fa-arrows"/> Drag and drop events on the calendar</em></small>
                </div>
            </div>
        )
    }
}