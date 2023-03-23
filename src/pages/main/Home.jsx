import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../services/apiPostsHelper';
import { setPosts } from '../../redux/reducers/postSlice';
import { setUsers } from '../../redux/reducers/usersSlice';
import PostCard from '../../components/postCard/PostCard';
import { getUsers } from '../../services/apiUserHelper';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const mainPost = async () => {
      const response = await getPosts();
      dispatch(setPosts(response));

      const users = await getUsers();
      dispatch(setUsers(users));
    };

    mainPost();
  }, []);

  const { posts } = useSelector((state) => state.postSlice);
  const { arrayOfUsers } = useSelector((state) => state.usersSlice);

  // Fiz a substituição do uso do context, poderia ter utilizado o useState,
  // mas vou precisar utilizar o array contendo todos os posts em outros lugares,
  // poderia ter feito as requisições para a API em cada lugar,
  // mas achei preferível utilizar o redux pra armazenar as informações de estado,
  // dessa forma eu só faço a requisição para API nessa página
  // e o estado ficará salvo de forma global.

  return (
    <div>
      {
        posts.map((item) => {
          const postAuthor = arrayOfUsers.find((author) => author.id === item.userId);

          return (
            <PostCard
              key={item.id}
              userName={postAuthor.name}
              postId={item.id}
              title={item.title}
              body={item.body}
            />
          );
        })
      }
    </div>
  );
}

export default Home;
