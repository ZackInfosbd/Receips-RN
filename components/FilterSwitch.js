import React from 'react';
import { View, Text, Switch } from 'react-native';
import colors from '../constants/colors';

const FilterSwitch = (props) => {
  return (
    <View style={props.style}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: colors.primary }}
        thumbColor={colors.primary}
        value={props.value}
        onValueChange={props.onChange}
      />
    </View>
  );
};

export default FilterSwitch;
