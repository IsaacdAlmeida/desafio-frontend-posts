import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostComments } from '../../services/apiPostsHelper';
import PostSection from '../../components/postSection/PostSection';
import CommentSection from '../../components/commentSection/CommentSection';

function PostDetails() {
  const { id } = useParams();
  const { posts } = useSelector((state) => state.postSlice);

  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const postSection = async () => {
      const allComments = await getPostComments(id);
      setComments(allComments);

      setPost(posts.filter((item) => item.id === (+id)));
    };

    postSection();
  }, []);

  return (
    <div>
      <div>
        {
          post.map((item) => (
            <PostSection
              key={item.id}
              title={item.title}
              body={item.body}
            />
          ))
        }
      </div>
      <div>
        {
          comments.map((item) => (
            <CommentSection
              key={item.id}
              name={item.name}
              body={item.body}
            />
          ))
        }
      </div>
    </div>
  );
}

export default PostDetails;
