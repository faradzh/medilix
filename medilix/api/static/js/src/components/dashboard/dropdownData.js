/**
 * Created by faradj on 6/4/17.
 */
import React from 'react';

export default class DropdownData extends React.Component {
    render () {
        const data = this.props.data;
        return (
            <tr>
                <td className="text-center"/>
                <td className="font-w600 text-success">{data.content}</td>
                <td className="font-w600 text-success">{data.results}</td>
            </tr>
        )
    }
}