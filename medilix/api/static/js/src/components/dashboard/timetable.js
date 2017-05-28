/**
 * Created by faradj on 4/19/17.
 */
import React from 'react';

export default class Timetable extends React.Component {

    render () {
        const events = this.props.children[0];
        const calendar = this.props.children[1];
        const modalWindow = this.props.children[2];

        return (
            <div className="content bg-white">
                {modalWindow}
                <div className="row items-push">
                    <div className="col-md-4 col-md-push-8 col-lg-2 col-lg-push-10">
                        {events}
                    </div>
                    <div className="col-md-8 col-md-pull-4 col-lg-10 col-lg-pull-2">
                        {calendar}
                    </div>
                </div>
            </div>
        )
    }
}