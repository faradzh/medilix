/**
 * Created by faradj on 6/3/17.
 */
import React from 'react';
import EducationRow from './educationRow';

export default class Education extends React.Component {
    render () {
        let educationRows = [];

        const education = this.props.data;
        
         if (education){
            education.forEach((edu, index) => {
                educationRows.push(
                    <EducationRow id={edu.id}
                                  key={index}
                                  changeData={this.props.changeData}
                                  data={edu}
                                  display={this.props.display}/>);
            });
         }
         return this.props.display ?
             <div>
                 {educationRows}
                 {
                    <div className="row">
                        <div id="edu-buttons">
                            {
                                education.length > 1 ? <button onClick={this.props.removeRow} className="btn btn-danger push-5-r push-5" type="button">
                                    <i className="fa fa-times"/> Delete
                                </button> : null
                            }
                            <button onClick={this.props.addRow} className="btn btn-success push-5-r push-5" type="button">
                                    <i className="fa fa-plus"/> Add
                            </button>
                        </div>
                    </div>
                 }
             </div> : null
    }
}