import * as React from 'react';
import './Textarea.Component.scss';
import { KeyboardEvent } from 'react';

interface TextareaProps {
    placeholder: string;
    value: string;
    onTextArea: (enteredText: string) => void;
}

interface TextAreaState {
    enteredText: string;
}
export class TextareaComponent extends React.Component<TextareaProps, TextAreaState> {
    constructor(props: TextareaProps) {
        super(props);
        this.onTextAreaHandler = this.onTextAreaHandler.bind(this);
    }

    onTextAreaHandler(event: KeyboardEvent<any>) {
        const newText = event.currentTarget.value;
        this.props.onTextArea(newText);
    }

    render() {
        return(
            <textarea
                name="comments-field"
                className="form__textarea"
                placeholder={this.props.placeholder}
                value={this.props.value}
                onInput={this.onTextAreaHandler}
            />
        );
    }
}