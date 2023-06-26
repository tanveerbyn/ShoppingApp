import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppFonts from '../../assets/fonts/AppFonts';
type ListHeader = {
  Label: string;
};
function ListHeader({Label}: ListHeader) {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{Label}</Text>
    </View>
  );
}
export default ListHeader;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  labelText: {
    fontFamily: AppFonts.PoppinsSemiBoldFont,
    color: 'black',
  },
});
