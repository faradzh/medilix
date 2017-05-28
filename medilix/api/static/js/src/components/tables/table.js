/**
 * Created by faradj on 5/23/17.
 */
import React from 'react';

export default class Table extends React.Component {
    render () {
        const { header, children } = this.props;
        return (
            <div className="table-responsive">
                <table className="table table-striped table-vcenter">
                    {header}
                    <tbody>
                        {children}
                    </tbody>
                </table>
            </div>
        )
    }
}