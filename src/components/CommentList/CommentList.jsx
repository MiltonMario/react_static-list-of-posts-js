import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    {comments.map(commentItem => (
      <CommentInfo key={commentItem.id} comment={commentItem} />
    ))}
  </div>
);
