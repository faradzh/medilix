/**
 * Created by faradj on 5/23/17.
 */
import React from 'react';
import Table from '../tables/table';
import Header from '../tables/header';

export default class Appointments extends React.Component {
    render () {
        const headers = this.props.headers;
        return (
            <div className="content">
                <div className="block-content">
                    <Table header={<Header headers={headers}/>}>
                    </Table>
                </div>
            </div>
        )
    }
}