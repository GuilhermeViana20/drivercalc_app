import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Icon } from 'react-native-elements';


const Add = () => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
            title="Go to Details... again"
            onPress={() => navigation.navigate('Details')}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    
});

export default Add;