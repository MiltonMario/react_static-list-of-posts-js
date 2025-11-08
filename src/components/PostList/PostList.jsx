import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

export const PostList = ({ posts, comments }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} comments={comments} />
    ))}
  </div>
);
