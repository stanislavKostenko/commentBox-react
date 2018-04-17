import * as React from 'react';
import './Form.component.scss';

import { InputComponent } from '../Form_Input.Component/Input.Component';
import { TextareaComponent } from '../Textarea.Component/Textarea.Component';
import { ButtonComponent } from '../Button.Component/Button.Component';
import { Comment, UnixTimeStamp } from '../Comments.Component/Comments.Component';
import { FormEvent } from 'react';
import { guid } from '../helpers/helpers';
interface CommentsFormProps {
    onSubmit: (comment: Comment) => void;
}

interface CommentsFormState {
    author: string;
    text: string;
    date: UnixTimeStamp;
}

const defaultState = {
    author: '',
    text: '',
    date: '',
};

export class FormComponent extends React.Component<CommentsFormProps, CommentsFormState> {
    constructor(props: CommentsFormProps) {
        super(props);
        this.state = defaultState;
        this.onSubmit = this.onSubmit.bind(this);
        this.authorChanged = this.authorChanged.bind(this);
        this.textChanged = this.textChanged.bind(this);
    }

    onSubmit(event: FormEvent <any>) {
        event.preventDefault();
        const today = new Date();
        const date = today.toLocaleTimeString() + ' ' + today.toLocaleDateString();
        const id = guid();
        const newComment = {...this.state, date, id};
        console.log(newComment);
        this.props.onSubmit(newComment);
        this.resetState();
    }

    authorChanged(author: string) {
        this.setState((state: CommentsFormState) => {
            return {...state, author};
        });
    }

    textChanged(text: string) {
        this.setState((state: CommentsFormState) => {
            return {...state, text};
        });
    }
    render() {
        const {author, text} = this.state;
        return(
            <form className="form-wrapper" onSubmit={this.onSubmit}>
                <InputComponent
                    onInput={this.authorChanged}
                    placeholder="Enter your name"
                    value={author}
                />
                <TextareaComponent
                    value={text}
                    placeholder="Enter your text"
                    onTextArea={this.textChanged}
                />
                <ButtonComponent title="Add comment" />
            </form>
        );
    }

    private resetState() {
        this.setState(() => {
            return defaultState;
        });
    }
}