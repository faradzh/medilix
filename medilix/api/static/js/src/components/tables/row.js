/**
 * Created by faradj on 5/13/17.
 */
import React from 'react';
import RowCell from './rowCell';

export default class NotificationRow extends React.Component {
    render () {
        const cells = this.props.cells;
        return (
            <tr>
                <RowCell className={cells.img.className}>
                    <img className="img-avatar img-avatar48" src={cells.img.label} alt=""/>
                </RowCell>
                <RowCell className={cells.fullname.className}>
                    {cells.fullname.label}
                </RowCell>
                {
                    cells.complaints ?
                        <RowCell className={cells.complaints.className}>
                            {cells.complaints.label}
                        </RowCell> : null
                }
                <RowCell className={cells.hospital.className}>
                    {cells.hospital.label}
                </RowCell>
                <RowCell className={cells.date.className}>
                    {cells.date.label}
                </RowCell>
                <RowCell className={cells.date.className}>
                    <span className="label label-warning">{cells.status.label}</span>
                </RowCell>
                {
                    cells.actions ?
                    <td className={cells.actions.className}>
                        <div className="btn-group">
                            {cells.actions.label.map((action) => {
                                return <button className="btn btn-xs btn-default" type="button" data-toggle="tooltip" title="" data-original-title={action.label}>
                                            <i id={this.props.id} onClick={action.handler} className={action.icon}/>
                                       </button>
                            })}
                        </div>
                    </td> : null
                }
            </tr>
        )
    }
}