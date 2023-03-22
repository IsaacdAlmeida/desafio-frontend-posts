import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../services/apiPostsHelper';
import { setPosts } from '../../redux/reducers/postSlice';
import PostCard from '../../components/postCard/PostCard';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const allPosts = async () => {
      const response = await getPosts();
      dispatch(setPosts(response));
    };

    allPosts();
  }, []);

  const { posts } = useSelector((state) => state.postSlice);

  // Fiz a substituição do uso do context, poderia ter utilizado o useState,
  // mas vou precisar utilizar o array contendo todos os posts em outros lugares,
  // poderia ter feito as requisições para a API em cada lugar,
  // mas achei preferível utilizar o redux pra armazenar as informações de estado,
  // dessa forma eu só faço a requisição para API nessa página
  // e o estado ficará salvo de forma global.

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
