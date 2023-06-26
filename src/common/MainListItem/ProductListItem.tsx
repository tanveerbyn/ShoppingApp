import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppFonts from '../../assets/fonts/AppFonts';
import {windowWidth} from '../commonFunctions/commonFunctions';
import FastImage from 'react-native-fast-image';
import {ProductListItemObj} from './ListItemInterface';

function ProductListItem({item}: ProductListItemObj) {
  return (
    <View style={styles.container}>
      <FastImage
        source={{uri: item?.thumbnail}}
        style={styles.Thumb}
        resizeMode="cover"
      />
      <View style={styles.RightContainer}>
        <View>
          <Text style={styles.BrandText}>• {item?.brand}</Text>
          <Text style={styles.TitleText}>{item?.title}</Text>
          <Text style={styles.descText} numberOfLines={3}>
            {item?.description}
          </Text>
        </View>
        <Text style={styles.priceText}>₹{item?.price}</Text>
      </View>
    </View>
  );
}
export default ProductListItem;
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 10,
    marginHorizontal: 15,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  Thumb: {
    height: 100,
    width: 100,
    borderRadius: 10,
    borderWidth: 0.4,
    borderColor: 'gray',
  },
  RightContainer: {
    flexDirection: 'column',
    marginStart: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  BrandText: {
    fontFamily: AppFonts.PoppinsRegularFont,
    fontSize: windowWidth / 35,
    color: 'gray',
  },
  TitleText: {
    fontFamily: AppFonts.PoppinsSemiBoldFont,
    fontSize: windowWidth / 30,
    color: 'black',
  },
  descText: {
    fontFamily: AppFonts.PoppinsRegularFont,
    fontSize: windowWidth / 33,
    color: 'black',
  },
  priceText: {
    fontFamily: AppFonts.PoppinsRegularFont,
    fontSize: windowWidth / 35,
    color: 'black',
  },
});
