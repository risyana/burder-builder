import React from "react";
import css from './Modal.css';
import Aux from '../../../hoc/VirtualComponent'
import Backdrop from '../Backdrop/Backdrop'

const Modal = (props) => {
    return (
        <Aux>
            <Backdrop show = {props.purchasing} onClickBackdrop = {props.onClickBackdrop} />
            <div 
                className = {css.Modal}
                style = {{
                    transform : props.purchasing ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity : props.purchasing ? '1' : '0',
                }}
                >
                {props.children}
            </div>
        </Aux>
    )
}

export default Modal