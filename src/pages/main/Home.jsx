import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, VStack } from '@chakra-ui/react';
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

  return (
    <VStack spacing={4}>
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gap={4}
        width="100%"
        maxWidth="1200px"
        margin="0 auto"
      >
        {
          posts.map((item) => (
            <PostCard
              key={item.id}
              postId={item.id}
              title={item.title}
              body={item.body}
            />
          ))
        }
      </Grid>
    </VStack>
  );
}

export default Home;
