import React, { useState } from 'react';
import { View, ScrollView, PanResponder, TouchableOpacity, Text, TextInput } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import AntDesign from "react-native-vector-icons/AntDesign"
import Foundation from "react-native-vector-icons/Foundation"
import styles from './HomeStyle';

const LoanCircularProgressBar = ({ size = 200, strokeWidth = 10 }) => {
  const minValue = 0;
  const maxValue = 10000;

  const [progress, setProgress] = useState(minValue);
  const [inputValue, setInputValue] = useState(`${minValue}`);
  const [flag, setFlag] = useState(true)

  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      setFlag(true)
      const x = Math.floor(gestureState.moveX - size / 2);
      const y = Math.floor(gestureState.moveY - size / 2);
      const angle = Math.atan2(y, x) + Math.PI / 2;
      let beforeDecimal = ((angle + Math.PI / 2) / (2 * Math.PI)) * 100;
      let newProgress = Math.floor(beforeDecimal);
      if (newProgress < 0) {
        newProgress += 100;
      }

      if (newProgress > 100) {
        newProgress -= 100;
      }

      const valueRange = maxValue - minValue;
      setProgress((valueRange * newProgress) / 100 + minValue);
      setInputValue(`${(valueRange * newProgress) / 100 + minValue}`);
    },
  });

  const handleInputChange = (text) => {
    // setFlag(false)
    let value = parseInt(text, 10);
    if (isNaN(value)) {
      value = minValue;
    } else if (value > maxValue) {
      value = maxValue;
    }
    setProgress(value);
    setInputValue(`${value}`);
  };
  const handleFocus = () => {
    setFlag(false)
  };

  const changeFunction = () => {
    setFlag(!flag)
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <AntDesign name={"left"} color={'#714FFF'} size={18} />
        <Text style={styles.headerText}>Loan Amount</Text>
      </View>
      <View style={styles.lineContainer} />
      <View style={styles.firstTextContainer}>
        <Foundation name={"info"} size={20} color={"#3F8CFF"} />
        <Text style={styles.firstText}>
          Your loan amount may be split and transferred to your bank account and the hospital’s bank account.
        </Text>
      </View>

      <Text style={styles.requireAmount}>
        Select the required loan amount
      </Text>
      <View style={styles.eligibleContainer}>
        <Text style={styles.eligibleText}>
          You’re Eligible for a loan of up to </Text>
        <Text style={styles.eligibleAmountText}>₹2,00,000</Text>
      </View>

      <View style={styles.circularContainer}>
        <Svg width={size} height={size}>
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#714FFF" // border color
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={(100 - (progress - minValue) / (maxValue - minValue) * 100) / 100 * circumference}
            fill="white"
            {...panResponder.panHandlers}
          />
        </Svg>
        <View style={[styles.input, { marginTop: -size / 2 + strokeWidth / 2 }]}>
          {flag ? (
            <TouchableOpacity onPress={() => changeFunction()} style={{}}>
              <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: "700", color: 'black' }}>₹{inputValue}</Text>
            </TouchableOpacity>
          ) :

            <TextInput
              style={[{ width: radius * 2, textAlign: 'center', fontSize: 22, fontWeight: "700", color: 'black' }]}
              value={flag ? `Rs${inputValue}` : inputValue}
              onChangeText={handleInputChange}
              onFocus={handleFocus}

              keyboardType="numeric"
              maxLength={String(maxValue).length}
            />

          }
        </View>
      </View>


      <View style={styles.submitContainer}>
        {inputValue >= 5000 ? (
          <TouchableOpacity style={[styles.submitButton, { backgroundColor: '#714FFF', }]}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        ) :
          <TouchableOpacity style={[styles.submitButton, { backgroundColor: '#eeeee8', }]}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        }
      </View>

    </View>
  );
};



export default LoanCircularProgressBar;
