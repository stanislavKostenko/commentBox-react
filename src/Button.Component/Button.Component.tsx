import * as React from 'react';
import './Button.Component.scss';

interface ButtonProps {
    title: string;
}
export class ButtonComponent extends React.Component<ButtonProps> {
    render() {
        return(
            <button className="form__btn">
                {this.props.title}
            </button>
        );
    }
}