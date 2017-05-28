/**
 * Created by faradj on 5/3/17.
 */
import React from "react";

const isFunction = (node) => { return node.type instanceof Function};

class FormGroup extends React.Component {
    _shouldDisplay = () => {
        const children = this.props.children;
        const child = children instanceof Array ? children[0] : children;
        if (child.props.display) {
            return true;
        }
        return this.traverseChildren(child);
    };

    traverseChildren = (child) => {
        let hasChildFunction = false;
        if (isFunction(child)){
            hasChildFunction = true;
        }
        if (!hasChildFunction){
            const nextChild = child.props.children instanceof Array ? child.props.children[1] : child.props.children;
            hasChildFunction = this.traverseChildren(nextChild);
        }
        return hasChildFunction;
    };

    render() {
       return this._shouldDisplay() ? (
            <div className={this.props.className}>
                {this.props.children}
            </div>
       ) : null;
    }
}
FormGroup.defaultProps = {
    className: 'form-group'
};
export default FormGroup;