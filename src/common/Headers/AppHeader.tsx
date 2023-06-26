import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import FastImage from 'react-native-fast-image';
import AppFonts from '../../assets/fonts/AppFonts';
import {windowWidth} from '../commonFunctions/commonFunctions';
import {useNavigation} from '@react-navigation/native';
type HeaderProp = {
  title: string;
  isBack: boolean;
};
function AppHeader({title, isBack}: HeaderProp) {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <View style={styles.headerView}>
        {isBack ? (
          <TouchableOpacity onPress={() => navigate.goBack()}>
            <Text style={styles.text}>←</Text>
          </TouchableOpacity>
        ) : (
          <FastImage
            source={require('../../assets/images/burgermenu.png')}
            style={styles.imageStyle}
          />
        )}
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      {!isBack && (
        <FastImage
          source={require('../../assets/images/notification.png')}
          style={styles.imageStyle}
        />
      )}
    </View>
  );
}
export default AppHeader;

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontFamily: AppFonts.PoppinsRegularFont,
    margin: 10,
    color: Colors.black,
  },
  headerView: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },

  imageStyle: {height: 25, width: 25},
  text: {fontSize: windowWidth / 16, color: 'black'},
});
