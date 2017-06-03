/**
 * Created by faradj on 5/11/17.
 */
import React from 'react';
import { Link } from 'react-router';
import ProfileHeader from '../dashboard/profileHeader';
import ProfileStats from '../dashboard/profile/profileStats';
import Tabs from '../dashboard/tabs';
import ModalWindow from '../common/modalWindow';
import FormGroup from '../dashboard/profile/formGroup';
import TextareaField from '../dashboard/profile/textAreaField';
import InputField from '../dashboard/profile/inputField';
import RadioButtonGroup from '../forms/radioButtonGroup';

const backgroundImageSrc = require('../../../../images/dashboard/profile/medical-biology.jpg');
const profileImageSrc = require('../../../../images/dashboard/profile/kasimbekov.jpg');
const path = '/static/js/dist/';

export default class DoctorProfile extends React.Component {
    notEmpty = (object) => {
        return Object.keys(object).length != 0
    };

    showModal = () => {
        $('#modal-fadein').modal('toggle');
    };

    render () {
        const data = this.props.data;
        const education = this.notEmpty(data) ? data.education : '';
        const hospitals = this.notEmpty(data) ? data.hospitals : '';
        let educationInfo = [];
        if (education){
            educationInfo = education.map((eduObj) => {
                return <li key={eduObj.id}>{`${eduObj.dateFrom} - ${eduObj.dateTo}: ${eduObj.entity} in ${eduObj.address}.`}</li>
            });
        }
        let modalButtons = [];
        if (this.props.feedback != undefined){
            modalButtons = [
                <button key='1'
                        className="btn btn-sm btn-primary"
                        onClick={this.props.submitFeedback.bind(this, this.props.params)}
                        type="button"
                        data-dismiss="modal">
                    <i className="fa fa-check"/> Отправить
                </button>
            ];
        }
        else{
            modalButtons = [];
        }
        const recommendationButtons = [{id: 'yes', text: 'Да'}, {id: 'no', text: 'Нет'}];

        const hospitalsInfo = [];
        if (hospitals){
            hospitals.forEach((hospital, i) => {
                hospitalsInfo.push(<li key={i}>{hospital.label}</li>)
            });
        }
        return (
            <div className="content content-boxed">
                <ProfileHeader backgroundImageSrc={backgroundImageSrc}
                               profileImageSrc={profileImageSrc}
                               path={path}
                               data={data} />
                
                <ProfileStats recommendedNumber={30}
                              experienceNumber={data.experience}
                              patientsNumber={40}
                              ratingNumber={4.8}/>
                <div className="row">
                    <div className="col-sm-5 col-sm-push-7 col-lg-4 col-lg-push-8">
                        <div class="block">
                            <div className="block-header bg-gray-lighter">
                                <ul className="block-options">
                                    <li>
                                        <button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo"><i className="si si-refresh"/></button>
                                    </li>
                                </ul>
                                <h3 className="block-title"><i className="fa fa-fw fa-pencil"/> Топ отзывы</h3>
                            </div>
                            <div className="block-content">
                                <ul className="list list-simple">
                                    <li>
                                        <div className="push-5 clearfix">
                                            <div className="text-warning pull-right">
                                                <i className="fa fa-star"/>
                                                <i className="fa fa-star"/>
                                                <i className="fa fa-star"/>
                                                <i className="fa fa-star"/>
                                                <i className="fa fa-star"/>
                                            </div>
                                            <a className="font-w600" href="base_pages_profile.html">Eric Lawson</a>
                                            <span className="text-muted">(5/5)</span>
                                        </div>
                                        <div className="font-s13">Flawless design execution! I'm really impressed with the product, it really helped me build my app so fast! Thank you!</div>
                                    </li>
                                    <li>
                                        <div className="push-5 clearfix">
                                            <div className="text-warning pull-right">
                                                <i className="fa fa-star"/>
                                                <i className="fa fa-star"/>
                                                <i className="fa fa-star"/>
                                                <i className="fa fa-star"/>
                                                <i className="fa fa-star"/>
                                            </div>
                                            <a className="font-w600" href="base_pages_profile.html">Joshua Munoz</a>
                                            <span className="text-muted">(5/5)</span>
                                        </div>
                                        <div className="font-s13">Great value for money and awesome support! Would buy again and again! Thanks!</div>
                                    </li>
                                    <li>
                                        <div className="push-5 clearfix">
                                            <div className="text-warning pull-right">
                                                <i className="fa fa-star"/>
                                                <i className="fa fa-star"/>
                                                <i className="fa fa-star"/>
                                                <i className="fa fa-star"/>
                                                <i className="fa fa-star"/>
                                            </div>
                                            <a className="font-w600" href="base_pages_profile.html">Sara Holland</a>
                                            <span className="text-muted">(5/5)</span>
                                        </div>
                                        <div className="font-s13">Working great in all my devices, quality and quantity in a great package! Thank you!</div>
                                    </li>
                                </ul>
                                <div className="text-center push">
                                    <small><a href="javascript:void(0)">Read More..</a></small>
                                </div>
                            </div>
                        </div>

                        <div className="block block-opt-refresh-icon6">
                            <div className="block-header">
                            </div>
                            <div className="block-content">

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-7 col-sm-pull-5 col-lg-8 col-lg-pull-4">

                        <Tabs tabs={this.props.profileTabs}>
                            <div className="block block-opt-refresh-icon6">
                                <div className="block-header">
                                    <ul className="block-options">
                                        <li>
                                            <button type="button" data-toggle="block-option" data-action="fullscreen_toggle">
                                                <i className="si si-size-fullscreen"/>
                                            </button>
                                        </li>
                                        <li>
                                            <button type="button" data-toggle="block-option" data-action="refresh_toggle" data-action-mode="demo">
                                                <i className="si si-refresh"/></button>
                                        </li>
                                    </ul>
                                    <h3 className="block-title"><i className="fa fa-newspaper-o"/> Личная информация</h3>
                                </div>
                                <div className="block-content">
                                    <div className="block block-transparent pull-r-l">
                                        <div className="block-header bg-gray-lighter">

                                            <div className="form-group">
                                                <div className="col-sm-4">
                                                    <label className="col-xs-12" htmlFor="blocks-username">Возраст</label>
                                                    <div className="col-xs-12">
                                                        {data.age}
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <label className="col-xs-12" htmlFor="blocks-username">Почта</label>
                                                    <div className="col-xs-12">
                                                        {data.email}
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <label className="col-xs-12" htmlFor="blocks-username">Мобильный</label>
                                                    <div className="col-xs-12">
                                                        {data.phoneNumber}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="block-header">
                                    <h3 className="block-title"><i className="fa fa-address-book-o"/> Биография</h3>
                                </div>
                                <div className="block-content">
                                    <div className="block block-transparent pull-r-l">
                                        <div className="block-header bg-gray-lighter">
                                            <p>{data.bio}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="block-header">
                                    <h3 className="block-title"><i className="glyphicon glyphicon-education"/> Образование</h3>
                                </div>
                                <div className="block-content">
                                    <div className="block block-transparent pull-r-l">
                                        <div className="block-header bg-gray-lighter">
                                            <ul>{educationInfo}</ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="block-header">
                                    <h3 className="block-title"><i className="glyphicon glyphicon-education"/> Больницы</h3>
                                </div>
                                <div className="block-content">
                                    <div className="block block-transparent pull-r-l">
                                        <div className="block-header bg-gray-lighter">
                                            <ul>{hospitalsInfo}</ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="block">
                                <div className="block-content">
                                    <div className="row">
                                        <div className="col-sm-7">
                                            <ul className="list list-simple">
                                                <li>
                                                    <div className="push-5 clearfix">
                                                        <a className="font-w600" href="base_pages_profile.html">Eric Lawson</a><br/>
                                                        <i className="fa fa-thumbs-o-up"/> Рекомендует
                                                    </div>
                                                    <div className="font-s13">Flawless design execution! I'm really impressed with the product, it really helped me build my app so fast! Thank you!</div>
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
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                </div>
                                            </div>
                                            <div className="row text-warning">
                                                <div className="col-xs-7">
                                                    <span style={{paddingRight: '15px', color: '#646464'}}>
                                                        <em class="text-muted"><strong>Квалификация </strong></em>
                                                    </span>
                                                </div>
                                                <div className="col-xs-5">
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                </div>
                                            </div>
                                            <div className="row text-warning">
                                                <div className="col-xs-7">
                                                    <span style={{paddingRight: '15px', color: '#646464'}}>
                                                        <em class="text-muted"><strong>Цена-качество </strong></em>
                                                    </span>
                                                </div>
                                                <div className="col-xs-5">
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                    <i className="fa fa-star"/>
                                                </div>
                                            </div>
                                            <br />
                                        </div>
                                    </div>
                                    {
                                        this.props.feedbackPermission ?
                                            <div className="text-center push">
                                                <small><a onClick={this.showModal} href="javascript:void(0)">Оставить отзыв</a></small>
                                            </div> : ''
                                    }
                                </div>
                            </div>
                        </Tabs>
                    </div>
                </div>
                {this.props.feedback != undefined ? <ModalWindow header="Заполните форму" buttons={modalButtons}>
                   <div className="row">
                        <FormGroup>
                            <TextareaField onChange={this.props.setFeedback}
                                           value={this.props.feedback.content}
                                           display={true}
                                           columnClassName="col-xs-12"
                                           htmlFor="feedback"
                                           textareaClassName="form-control input-lg"
                                           textareaId="feedback"
                                           textareaName="content"
                                           textareaRows="8"
                                           textareaPlaceholder="Оставьте свой отзыв о данном враче..">
                                Отзыв
                            </TextareaField>
                        </FormGroup>
                   </div>
                   <div className="row">
                        <div className="col-sm-4">
                            <FormGroup>
                                <InputField onChange={this.props.setFeedback}
                                            value={this.props.feedback.attentiveness}
                                            columnClassName="col-xs-12"
                                            htmlFor="attentiveness"
                                            inputClassName="form-control input-lg"
                                            inputType="text"
                                            inputId="attentiveness"
                                            inputName="attentiveness"
                                            inputPlaceholder="От 0 до 5">
                                    Внимательность
                                </InputField>
                            </FormGroup>
                        </div>
                       <div className="col-sm-4">
                            <FormGroup>
                                <InputField onChange={this.props.setFeedback}
                                            value={this.props.feedback.qualification}
                                            columnClassName="col-xs-12"
                                            htmlFor="qualification"
                                            inputClassName="form-control input-lg"
                                            inputType="text"
                                            inputId="qualification"
                                            inputName="qualification"
                                            inputPlaceholder="От 0 до 5">
                                    Квалификация
                                </InputField>
                            </FormGroup>
                        </div>
                       <div className="col-sm-4">
                            <FormGroup>
                                <InputField onChange={this.props.setFeedback}
                                            value={this.props.feedback.qualityToPrice}
                                            columnClassName="col-xs-12"
                                            htmlFor="qualityToPrice"
                                            inputClassName="form-control input-lg"
                                            inputType="text"
                                            inputId="qualityToPrice"
                                            inputName="qualityToPrice"
                                            inputPlaceholder="От 0 до 5">
                                    Цена-качество
                                </InputField>
                            </FormGroup>
                        </div>
                   </div>
                    <div className="row">
                        <FormGroup>
                            <RadioButtonGroup onChange={this.props.setFeedback}
                                              buttons={recommendationButtons}
                                              columnClassName="col-xs-12"
                                              mainLabelClassName="col-xs-12"
                                              mainLabelText="Рекомендуете ли вы данного врача другим?"
                                              name="recommendation"
                                              defaultValue={''} />
                        </FormGroup>
                    </div>
                </ModalWindow>  : '' }
            </div>
        )
    }
}