import * as React from 'react';
import './Comments.Component.scss';

import { CommentsListItemComponent } from '../CommentsListItem.Component/CommentsListItem.Component';

export type UnixTimeStamp = string;

export interface Comment {
    author: string;
    text: string;
    date: UnixTimeStamp;
    id: string;
}

interface CommentsListProps {
    comments: Array<Comment>;
    onDelete: (id: string) => void;
}
export class CommentsComponent extends React.Component<CommentsListProps> {

    constructor(props: CommentsListProps) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(id: string) {
        this.props.onDelete(id);
    }

    render() {
        const listItems = this.props.comments.map((comment: Comment, index: number) => {
            return <CommentsListItemComponent comment={comment} key={index} deleteItem={this.deleteItem}/>;
        });
        return (
            <ul className="comments-list">
                {listItems}
            </ul>
        );
    }
}