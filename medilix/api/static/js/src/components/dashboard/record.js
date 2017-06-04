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

export default class Record extends React.Component {
    render () {
        const data = this.props.data;
        console.log("InnerData", data);
        const examinations = data ? data.examinations : [];
        const prescription = data ? data.prescription : [];
        return (
            <Form onSubmit={''}>
                    <div className="block">
                        <div className="block-content tab-content">
                                <FormGroup>
                                    <TextareaField display={true}
                                                   value={data.complaints}
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
                                            value={data.provDiagnosis}
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
                            <Examination fill={this.props.fillExamination}
                                         data={examinations}
                                         addExaminationRow={this.props.addExaminationRow}
                                         removeExaminationRow={this.props.removeExaminationRow}/>
                            <FormGroup>
                              <InputField display={true}
                                            value={data.finalDiagnosis}
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
                            <Prescription data={prescription}
                                          fillPrescription={''}
                                          addPrescriptionRow={this.props.addPrescriptionRow}
                                          removePrescriptionRow={this.props.removePrescriptionRow}/>
                        </div>
                    </div>
            </Form>
        )
    }
}

