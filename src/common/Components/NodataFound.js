import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppFonts from '../../assets/fonts/AppFonts';
import {windowWidth} from '../commonFunctions/commonFunctions';

export default function NodataFoundComponent() {
  return (
    <View style={styles.waitIndicator}>
      <Text style={styles.NodataFound}>No Data Found</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  waitIndicator: {flex: 1, alignSelf: 'center', justifyContent: 'center'},
  NodataFound: {
    fontFamily: AppFonts.PoppinsRegularFont,
    fontSize: windowWidth / 25,
    color: 'black',
  },
});
