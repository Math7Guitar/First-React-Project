/* eslint-disable react/react-in-jsx-scope */
import { PostCard } from '../PostCard';
import './styles.css';
import P from 'prop-types';

export const Posts = ({ posts = []}) => (
  <div className="posts">
    {posts.map(post => (
      <PostCard key={post.id} post={post}/>
    ))}
  </div>
)

Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      post: P.object.isRequired
    })
  ),
}
