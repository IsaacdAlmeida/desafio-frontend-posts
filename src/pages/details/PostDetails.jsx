import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostComments } from '../../services/apiPostsHelper';
import Loading from '../../components/loading/Loading';
import PostSection from '../../components/postSection/PostSection';
import CommentSection from '../../components/commentSection/CommentSection';

function PostDetails() {
  const { id } = useParams();
  const { posts } = useSelector((state) => state.postSlice);
  const { arrayOfUsers } = useSelector((state) => state.usersSlice);

  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const postSection = async () => {
      setLoading(true);
      const allComments = await getPostComments(id);
      setComments(allComments);

      setPost(posts.filter((item) => item.id === (+id)));
      setLoading(false);
    };

    postSection();
  }, []);

  return (
    <div>
      {loading
        ? <Loading />
        : (
          <div>
            <div>
              {
                post.map((item) => {
                  const postAuthor = arrayOfUsers.find((author) => author.id === item.userId);

                  return (
                    <PostSection
                      key={item.id}
                      title={item.title}
                      body={item.body}
                      postAuthor={postAuthor.name}
                    />
                  );
                })
              }
            </div>
            <div>
              {
                comments.map((item) => (
                  <CommentSection
                    key={item.id}
                    name={item.name}
                    body={item.body}
                    email={item.email}
                    authorImage={item.id}
                  />
                ))
              }
            </div>
          </div>
        )}
    </div>
  );
}

export default PostDetails;
