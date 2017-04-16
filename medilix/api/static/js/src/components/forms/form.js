/**
 * Created by faradj on 3/14/17.
 */
import React from 'react';

export default class Form extends React.Component {
    render (){
        const { children } = this.props;
        return (
           <form {...this.props}>
               {children}
           </form>
        )
    }
}

Form.propTypes = {
    id: React.PropTypes.string,
    className: React.PropTypes.string
};

Form.defaultProps = {
    method: 'post'
};