import { CommentList } from '../CommentList/CommentList';
import { NoCommentInfo } from '../CommentInfo/CommentInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

export const PostInfo = ({ post, comments }) => {
  const rawComments = comments ?? post.comments ?? [];

  const postComments = comments
    ? rawComments.filter(comment => comment.postId === post.id)
    : rawComments;

  return (
    <article className="PostInfo">
      <h3 className="PostInfo__title">{post.title}</h3>

      <p>
        Posted by <UserInfo user={post.user} />
      </p>

      <p className="PostInfo__body">{post.body}</p>

      {postComments.length > 0 ? (
        <CommentList comments={postComments} />
      ) : (
        <NoCommentInfo />
      )}
    </article>
  );
};
