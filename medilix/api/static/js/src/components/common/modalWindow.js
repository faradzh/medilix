/**
 * Created by faradj on 4/18/17.
 */
import React from 'react';

export default class ModalWindow extends React.Component {
    
    render () {
        const header = this.props.header;
        const content = this.props.children;
        const buttons = this.props.buttons;
        return (
            <div className="modal fade in" id="modal-fadein" tabIndex="-1" role="dialog" aria-hidden="true" style={{display: 'none'}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="block block-themed block-transparent remove-margin-b">
                            <div className="block-header bg-primary-dark">
                                <ul className="block-options">
                                    <li>
                                        <button type="button" data-dismiss="modal">
                                            <i className="si si-close"/>
                                        </button>
                                    </li>
                                </ul>
                                <h3 className="block-title">{header}</h3>
                            </div>
                            <div className="block-content">
                                {content}
                            </div>
                        </div>
                        <div className="modal-footer">
                            {buttons}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}