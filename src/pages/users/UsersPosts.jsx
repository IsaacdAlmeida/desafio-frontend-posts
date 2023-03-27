import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, VStack, useColorModeValue } from '@chakra-ui/react';
import { setPosts } from '../../redux/reducers/postSlice';
import Header from '../../components/header/Header';
import PostCard from '../../components/postCard/PostCard';
import Loading from '../../components/loading/Loading';
import Footer from '../../components/footer/Footer';
import { getPosts } from '../../services/apiPostsHelper';

function UsersPosts() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { posts } = useSelector((state) => state.postSlice);

  useEffect(() => {
    const mainPost = async () => {
      const response = await getPosts();
      dispatch(setPosts(response));
    };

    mainPost();
  }, []);

  const postsFiltered = posts.filter((item) => item.userId === (+id));

  return (
    <>
      <Header />
      <div>
        {postsFiltered.length === 0
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
                  postsFiltered.map((item) => (
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
      <Footer />
    </>
  );
}

export default UsersPosts;
