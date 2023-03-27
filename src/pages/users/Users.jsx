import React, { useEffect } from 'react';
import { Grid, VStack, useColorModeValue } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../../redux/reducers/usersSlice';
import Loading from '../../components/loading/Loading';
import Header from '../../components/header/Header';
import UserInfosCard from '../../components/cards/UserInfosCard';
import Footer from '../../components/footer/Footer';
import { getUsers } from '../../services/apiUserHelper';

function Users() {
  const dispatch = useDispatch();
  const { arrayOfUsers } = useSelector((state) => state.usersSlice);

  useEffect(() => {
    const mainPost = async () => {
      const users = await getUsers();
      dispatch(setUsers(users));
    };

    mainPost();
  }, []);

  return (
    <>
      <Header />
      <div>
        {arrayOfUsers.length === 0
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
                  arrayOfUsers.map((item) => (
                    <UserInfosCard
                      key={item.id}
                      authorImage={item.id}
                      authorName={item.name}
                      userName={item.userName}
                      catchPhrase={item.company.catchPhrase}
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

export default Users;
