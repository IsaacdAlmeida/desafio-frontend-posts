import React, { useState, useEffect } from 'react';
import { getPosts } from '../../services/apiPostsHelper';
import PostCard from '../../components/postCard/PostCard';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const allPosts = async () => {
      const response = await getPosts();
      setPosts(response);
    };

    allPosts();
  }, []);

  return (
    <div>
      {
        posts.map((item) => (
          <PostCard
            key={item.id}
            userId={item.userId}
            postId={item.id}
            title={item.title}
            body={item.body}
          />
        ))
      }
    </div>
  );
}

export default Home;
