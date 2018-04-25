import React, {Component} from "react";
import css from './Modal.css';
import Aux from '../../../hoc/VirtualComponent/VirtualComponent'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {
    
    componentWillUpdate(){
        console.log("modal - component will update");
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.purchasing !== this.props.purchasing
    }

    render() {
        return (
            <Aux>
                <Backdrop 
                    show = {this.props.purchasing} 
                    onClickBackdrop = {this.props.onClickBackdrop} />
                <div 
                    className = {css.Modal}
                    style = {{
                        transform: this.props.purchasing ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.purchasing ? '1' : '0',
                    }}
                    >
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal