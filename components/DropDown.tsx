import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Colors, Shadow } from '../constants/values';

const DropDown = (props: any) => {
  const [show, setShow] = useState(false);

  return (
    <View>
      {show && (
        <View style={styles.options}>
          {props.options.map((option: string, index: number) => (
            <TouchableOpacity key={index} onPress={() => {
              props.onOptionChange(option);
              setShow(false);
            }}>
              <Text style={(index === props.options.length - 1) ? styles.option : styles.optionWithBorder}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <TouchableOpacity style={styles.dropdown} activeOpacity={1} onPress={()=>setShow(!show)}>
        <Text style={styles.dropdownText}>{props.option}</Text>
        <Image style={styles.dropdownIcon} source={require('../assets/img/dropdown.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderRadius: 10,
    ...Shadow,
  },
  dropdownIcon: {
    marginRight: 16,
  },
  dropdownText: {
    flex: 1,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    padding: 16,
  },
  options: {
    position: 'absolute',
    top: -100,
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    backgroundColor: Colors.background,
  },
  option: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  optionWithBorder: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
  }
});

export default DropDown;