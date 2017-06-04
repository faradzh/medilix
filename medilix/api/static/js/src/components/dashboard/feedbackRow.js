/**
 * Created by faradj on 6/4/17.
 */
import React from 'react';

export default class FeedbackRow extends React.Component {

    render () {
        console.log("FeedbackData", this.props.data);
        const { fullname, content, attentiveness, qualification, qualityToPrice, recommendation } = this.props.data;
        const attentivenessStars = [];
        const qualificationStars = [];
        const qualityToPriceStars = [];
        for (let i=0; i<parseInt(attentiveness); i++){
            attentivenessStars.push(<i className="fa fa-star"/>);
        }
        for (let i=0; i<parseInt(qualification); i++){
            qualificationStars.push(<i className="fa fa-star"/>);
        }
        for (let i=0; i<parseInt(qualityToPrice); i++){
            qualityToPriceStars.push(<i className="fa fa-star"/>);
        }
        return (
            <div className="row">
                <div className="col-sm-7">
                    <ul className="list list-simple">
                        <li>
                            <div className="push-5 clearfix">
                                <a className="font-w600" href="base_pages_profile.html">{fullname}</a><br/>
                                { recommendation ? <span><i className="fa fa-thumbs-o-up"/> Рекомендует </span> : <span><i className="fa fa-thumbs-o-down"/> Не рекомендует</span> }

                            </div>
                            <div className="font-s13">{content}</div>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-5">
                    <div className="row text-warning">
                        <div className="col-xs-7">
                            <span style={{paddingRight: '15px', color: '#646464'}}>
                                <em class="text-muted"><strong>Внимательность </strong></em>
                            </span>
                        </div>
                        <div className="col-xs-5">
                            {attentivenessStars}
                        </div>
                    </div>
                    <div className="row text-warning">
                        <div className="col-xs-7">
                            <span style={{paddingRight: '15px', color: '#646464'}}>
                                <em class="text-muted"><strong>Квалификация </strong></em>
                            </span>
                        </div>
                        <div className="col-xs-5">
                            {qualificationStars}
                        </div>
                    </div>
                    <div className="row text-warning">
                        <div className="col-xs-7">
                            <span style={{paddingRight: '15px', color: '#646464'}}>
                                <em class="text-muted"><strong>Цена-качество </strong></em>
                            </span>
                        </div>
                        <div className="col-xs-5">
                            {qualityToPriceStars}
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        )
    }
}