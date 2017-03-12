import React from "react";

export default class IconBox extends React.Component {
    render () {
        const icon = this.props.icon;
        const title = this.props.title;
        const content = this.props.content;

        return (
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="pic pic-3d">
                    <div className="mcare-text-ibox2 border-effect">
                        <div className="">
                            <div className="ibox2-icon">
                                <i className={icon}/>
                                <span className="back-icon"><i className={icon}/></span>
                            </div>
                            <h4>{title}</h4>
                            <p className="main-content ibox2-content text-content">
                                {content}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}