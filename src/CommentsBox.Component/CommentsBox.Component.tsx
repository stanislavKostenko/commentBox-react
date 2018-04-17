import * as React from 'react';

import { FormComponent } from '../Form.Component/Form.Component';
import { Comment } from '../Comments.Component/Comments.Component';
import { CommentsComponent } from '../Comments.Component/Comments.Component';

interface CommentBoxState {
    comments: Array<Comment>;
}

interface CommentBoxProps {}

export class CommentsBoxComponent extends React.Component<CommentBoxProps, CommentBoxState> {
    constructor(props: CommentBoxProps) {
        super(props);
        this.state = {
            comments: [

            ]
        };
        this.addComment = this.addComment.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
    }

    addComment(comment: Comment) {
        this.setState((state) => {
            const comments = state.comments.concat(comment);
            return {...state, comments};
        });
    }

    deleteComment(id: string) {
        this.setState((state) => {
            const comments = state.comments.filter((comment: Comment) => {
                return comment.id !== id;
            });
            return {...state, comments};
        });
    }

    render() {
        return(
            <div className="comment-box">
                <FormComponent onSubmit={this.addComment} />
                <CommentsComponent comments={this.state.comments} onDelete={this.deleteComment}/>
            </div>
        );
    }
}