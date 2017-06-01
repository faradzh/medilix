/**
 * Created by faradj on 5/31/17.
 */
import React from 'react';
import Form from '../../components/forms/form';
import FormGroup from '../../components/dashboard/profile/formGroup';
import TextareaField from '../../components/dashboard/profile/textAreaField';
import InputField from '../../components/dashboard/profile/inputField';
import Examination from '../../components/dashboard/examination';
import Prescription from '../../components/dashboard/prescription';

export default class Blank extends React.Component {
    render () {
        return (
            <Form onSubmit={''}>
                    <div className="block">
                        <div className="block-content tab-content">
                                <FormGroup>
                                    <TextareaField display={true}
                                                   value={''}
                                                   columnClassName="col-xs-12" htmlFor="complaints"
                                                   textareaClassName="form-control input-lg"
                                                   onChange={''}
                                                   textareaId="complaints"
                                                   textareaName="complaints"
                                                   textareaRows="6"
                                                   textareaPlaceholder="">
                                        Жалобы
                                    </TextareaField>
                                </FormGroup>
                            <FormGroup>
                                <InputField display={true}
                                            value={''}
                                            columnClassName="col-xs-12"
                                            htmlFor="provDiagnosis"
                                            inputClassName="form-control input-lg"
                                            inputType="text"
                                            onChange={''}
                                            inputId="provDiagnosis"
                                            inputName="provDiagnosis"
                                            inputPlaceholder="Введите начальный диагноз..">
                                    Изначальный диагноз
                                </InputField>
                            </FormGroup>
                            <Examination />
                            <FormGroup>
                                <InputField display={true}
                                            value={''}
                                            columnClassName="col-xs-12"
                                            htmlFor="finalDiagnosis"
                                            inputClassName="form-control input-lg"
                                            inputType="text"
                                            onChange={''}
                                            inputId="finalDiagnosis"
                                            inputName="finalDiagnosis"
                                            inputPlaceholder="Введите финальный диагноз..">
                                    Конечный диагноз
                                </InputField>
                            </FormGroup>
                            <Prescription />
                            <div className="row">
                                <div className="complete-blank-btns">
                                    <button onClick={this.addBlock} className="btn btn-primary push-15-t push-20-l push-10-b" type="button">
                                        <i className="fa fa-save"/> Сохранить
                                    </button>
                                    <button onClick={this.addBlock} className="btn btn-success push-15-t push-20-l push-10-b" type="button">
                                        <i className="fa fa-thumbs-up"/> Завершить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
            </Form>
        )
    }
}