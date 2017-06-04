/**
 * Created by faradj on 5/2/17.
 */
import React from 'react';

export default class Title extends React.Component {
    render () {
        const { src, path } = this.props;
        const { fullname, specialization } = this.props;
        return (
            <div className="bg-image">
                <div className="block-content bg-primary-op text-center overflow-hidden">
                    <div className="push-30-t push animated fadeInDown">
                        <img className="img-avatar img-avatar96 img-avatar-thumb" src={path + src } alt=""/>
                    </div>
                    <div className="push-30 animated fadeInUp">
                        <h2 className="h4 font-w600 text-white push-5">{fullname}</h2>
                        <h3 className="h5 text-white-op">{specialization}</h3>
                    </div>
                </div>
            </div>
        )
    }
}