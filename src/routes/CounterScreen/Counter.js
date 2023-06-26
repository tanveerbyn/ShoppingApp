import React, {useContext} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CounterContext from '../../Store/CounterContext';
import AppHeader from '../../common/Headers/AppHeader';
import {windowWidth} from '../../common/commonFunctions/commonFunctions';
import AppFonts from '../../assets/fonts/AppFonts';

const Counter = () => {
  return (
    <View style={styles.container}>
      <AppHeader title="Counter" isBack={true} />
      <CounterContext.Consumer>
        {({count, increment, decrement}) => (
          <View style={styles.innerContainer}>
           <TouchableOpacity onPress={decrement} style={styles.CounterBTN}>
              <Text style={styles.textCounterBtn}>-</Text>
            </TouchableOpacity>
            <Text style={[styles.textCounterBtn, {marginHorizontal: 20}]}>
              Counter: {count}
            </Text>
             <TouchableOpacity onPress={increment} style={styles.CounterBTN}>
              <Text style={styles.textCounterBtn}>+</Text>
            </TouchableOpacity>
            
          </View>
        )}
      </CounterContext.Consumer>
    </View>
  );
};

export default Counter;
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  textCounterBtn: {
    fontSize: windowWidth / 13,
    color: 'black',
    fontFamily: AppFonts.PoppinsSemiBoldFont,
  },
  CounterBTN: {borderWidth: 1, borderRadius: 5, padding: 10},
  innerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    flex: 1,
  },
});
