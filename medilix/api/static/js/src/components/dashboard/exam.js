/**
 * Created by faradj on 5/31/17.
 */
import React from 'react';
import FormGroup from '../../components/dashboard/profile/formGroup';
import TextareaField from '../../components/dashboard/profile/textAreaField';

export default class Exam extends React.Component {
    render () {
        return (
            <FormGroup>
                <TextareaField display={true}
                               value={this.props.data.content}
                               columnClassName="col-xs-6" htmlFor="exam"
                               textareaClassName="form-control input-lg"
                               onChange={this.props.fill}
                               textareaId="exam"
                               textareaName={`content-${this.props.id}`}
                               textareaRows="5"
                               textareaPlaceholder="">
                    Анализы/Обследование
                </TextareaField>
                <TextareaField display={true}
                               value={this.props.data.results}
                               columnClassName="col-xs-6" htmlFor="examResults"
                               textareaClassName="form-control input-lg"
                               onChange={this.props.fill}
                               textareaId="examResults"
                               textareaName={`results-${this.props.id}`}
                               textareaRows="5"
                               textareaPlaceholder="">
                    Результаты
                </TextareaField>
            </FormGroup>
        )
    }
}