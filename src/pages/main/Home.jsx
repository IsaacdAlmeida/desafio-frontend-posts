import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, VStack, useColorModeValue } from '@chakra-ui/react';
import { getPosts } from '../../services/apiPostsHelper';
import { setPosts } from '../../redux/reducers/postSlice';
import { setUsers } from '../../redux/reducers/usersSlice';
import Loading from '../../components/loading/Loading';
import Header from '../../components/header/Header';
import PostCard from '../../components/postCard/PostCard';
import { getUsers } from '../../services/apiUserHelper';

function Home() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const mainPost = async () => {
      setLoading(true);
      const response = await getPosts();
      dispatch(setPosts(response));

      const users = await getUsers();
      dispatch(setUsers(users));
      setLoading(false);
    };

    mainPost();
  }, []);

  const { posts } = useSelector((state) => state.postSlice);

  return (
    <>
      <Header />
      <div>
        {loading
          ? <Loading />
          : (
            <VStack spacing={4} pt="3" bg={useColorModeValue('gray.100', 'blackAlpha.100')}>
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
                      postImage={`https://picsum.photos/id/${item.id}/400/400`}
                      postId={item.id}
                      title={item.title}
                      body={item.body}
                    />
                  ))
                }
              </Grid>
            </VStack>
          )}
      </div>
    </>
  );
}

export default Home;
