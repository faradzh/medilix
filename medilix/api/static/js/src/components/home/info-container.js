import React from "react";
import IconBox from "./icon-box";

export default class InfoContainer extends React.Component {
    render () {
        const column1 = this.props.data.column1;
        const column2 = this.props.data.column2;
        const column3 = this.props.data.column3;

        return (
            <div>
                <section className="mcare-text-ibox1-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className="mcare-text-ibox1 first-info-ibox">
                                    <h1 className="mcare-main-title"><span>{column1.title1}</span><br/>{column1.title2}</h1>
                                    <p className="main-content ibox1-content text-content">
                                        {column1.content}
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <div className="mcare-text-ibox1">
                                    <h3><i className="mcare-flaticon-hospital32"/><span
                                            className="content-os">{column2.title1}</span><br/>{column2.title2}</h3>
                                    <p className="main-content ibox1-content text-content">
                                        {column2.content}
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <div className="mcare-text-ibox1">
                                    <h3><i className="mcare-flaticon-injection"/><span
                                            className="content-os">{column3.title1}</span><br/>{column3.title2}</h3>
                                    <p className="main-content ibox1-content text-content">
                                        {column3.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mcare-text-ibox2-wrap ss-style-triangles sep-section">
                    <div className="container">
                        <div className="row">
                            <IconBox icon={'mcare-flaticon-nurse4'} title={'Квалифицированные доктора'} content={''} />
                            <IconBox icon={'mcare-flaticon-lifeline5'} title={'Современное оборудование'} content={''} />
                            <IconBox icon={'mcare-flaticon-nurse4'} title={'Квалифицированные доктора'} content={''} />
                            <IconBox icon={'mcare-flaticon-nurse4'} title={'Квалифицированные доктора'} content={''} />
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}