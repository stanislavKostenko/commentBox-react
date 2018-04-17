import * as React from 'react';
import './Input.Component.scss';

import { KeyboardEvent } from 'react';

interface InputProps {
    placeholder: string;
    value: string;
    onInput: (enteredText: string) => void;
}

interface  InputState {
    enteredText: string;
}
export class InputComponent extends React.Component<InputProps, InputState> {
    constructor(props: InputProps) {
        super(props);
        this.onInputHandler = this.onInputHandler.bind(this);
    }

    onInputHandler(event: KeyboardEvent<any>) {
        const newText = event.currentTarget.value;
        this.props.onInput(newText);
    }

    render() {
        const {value, placeholder} = this.props;
        return(
            <input
                type="text"
                className="form__input"
                placeholder={placeholder}
                value={value}
                onInput={this.onInputHandler}
            />
        );
    }
}