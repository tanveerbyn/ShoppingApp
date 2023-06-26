import React, {useCallback, useLayoutEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import AppHeader from '../../common/Headers/AppHeader';
import axios from 'axios';
import ListHeader from '../../common/Headers/ListHeader';
import NewsListItem from '../../common/MainListItem/ProductListItem';
import {
  ProductListItemObj,
  ProductObj,
} from '../../common/MainListItem/ListItemInterface';
import NodataFoundComponent from '../../common/Components/NodataFound';
import AppFonts from '../../assets/fonts/AppFonts';
import {windowWidth} from '../../common/commonFunctions/commonFunctions';

function Home({navigation}: any) {
  const [ProductsList, setProductsList] = useState([]);
  const [isWaiting, setisWaiting] = useState(true);
  useLayoutEffect(() => {
    callApi();
  }, []);

  const renderItem = useCallback(
    (rowData: ProductListItemObj) => <NewsListItem {...rowData} />,
    [],
  );

  const keyExtractor = useCallback((item: ProductObj) => item.id, []);

  function callApi() {
    setisWaiting(true);
    axios
      .get('https://dummyjson.com/products')
      .then(response => {
        setisWaiting(false);
        if (response?.status === 200) {
          setProductsList(response?.data?.products);
        } else {
          Alert.alert(response?.statusText);
        }
      })
      .catch(error => {
        setisWaiting(false);
        console.log('error', error);
      });
  }
  return (
    <View style={styles.container}>
      <AppHeader title="Shopping App" isBack={false} />
      <View style={{flex: 1}}>
        {isWaiting ? (
          <ActivityIndicator color={'black'} style={styles.waitIndicator} />
        ) : ProductsList?.length > 0 ? (
          <View style={styles.innerContainer}>
            <ListHeader Label={'Recommended For You'} />
            <FlatList
              data={ProductsList}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
            />
          </View>
        ) : (
          <NodataFoundComponent retry={()=> {callApi()}}/>
        )}
      </View>
      <Button
        title="Go to Counter"
        onPress={() => {
          navigation.navigate('Counter');
        }}
        color="#000000"
      />
    </View>
  );
}
export default Home;
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  waitIndicator: {flex: 1, alignSelf: 'center'},
  NodataFound: {
    fontFamily: AppFonts.PoppinsRegularFont,
    fontSize: windowWidth / 25,
    color: 'black',
  },
  innerContainer: {flex: 1},
});
