import * as React from 'react';
import './CommentsListItem.Component.scss';
import { Comment } from '../Comments.Component/Comments.Component';

interface CommentsListItemComponentProps {
    comment: Comment;
    deleteItem: (id: string) => void;
}

export class CommentsListItemComponent extends React.Component<CommentsListItemComponentProps> {
    render() {
        const {author, text, date, id} = this.props.comment;
        return(
            <li className="comments-list__item">
                <span className="comments-list__item__name">
                    {author}
                </span>
                <p className="comments-list__item__text">
                    {text}
                </p>
                <span className="comments-list__item__date">
                    {date}
                </span>
                <i
                    className="fa fa-times comments-list__item__delete"
                    aria-hidden="true"
                    onClick={() => {
                        this.props.deleteItem(id);
                    }}
                />
                <i className="fa fa-pencil comments-list__item__refactor" aria-hidden="true" />
            </li>
        );
    }
}