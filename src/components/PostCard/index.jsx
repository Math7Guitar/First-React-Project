/* eslint-disable react/react-in-jsx-scope */
import './styles.css';
import P from 'prop-types';

export const PostCard = ({ post }) => (
    <div className="post">
      <img src={post.photo} alt={post.title}/>
      <div className="post-content">
        <h2 className="post-title">{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
);

PostCard.propTypes = {
  post: P.object.isRequired
}
