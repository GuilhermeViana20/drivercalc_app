import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Icon } from 'react-native-elements';

const data = [
    {
        title: 'Saldo',
        value: 'R$ 105,92',
        background: '#A2A2FF',
    },
    {
        title: 'Km/Rodados',
        value: '35km',
        background: '#75DDD1',
    },
    {
        title: 'Abastecer',
        value: 'R$ 30,00',
        background: '#FB9876',
    },
    {
        title: 'Tempo/Rodado',
        value: '3h',
        background: '#FFC87C',
    },
    {
        title: 'Uber',
        value: 'R$ 24,92',
        background: '#A2A2FF',
    },
    {
        title: 'Comida',
        value: 'R$ 30,00',
        background: '#75DDD1',
    },
];

const Home = () => {
    const [chosenDate, setChosenDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || chosenDate;
        setShowDatePicker(false);
        setChosenDate(currentDate);
    };

    const formattedDateBR = chosenDate.toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });

    const formattedDateUS = chosenDate.toISOString().split('T')[0];

    const search = () => {
        console.log(formattedDateUS)
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', paddingHorizontal: 25, paddingVertical: 20 }}>
                <Text style={styles.dateText} onPress={() => setShowDatePicker(true)}>
                    {formattedDateBR}
                </Text>
                {showDatePicker && (
                    <DateTimePicker
                        value={chosenDate}
                        mode="date"
                        display="spinner"
                        locale="pt-BR"
                        onChange={handleDateChange}
                    />
                )}
                <TouchableOpacity style={styles.button} onPress={() => search()}>
                    <Text style={styles.textSearch}>Buscar</Text>
                    <Icon
                        style={styles.icon}
                        name='search-outline'
                        type='ionicon'
                        color='#FFFFFF'
                    />
                </TouchableOpacity>
            </View>
            
            {data.map((item, index) => (
                <View key={index} style={[ styles.card, { backgroundColor: item.background, }]}>
                    <Text style={styles.value}>{item.value}</Text>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        paddingVertical: 30,
        borderRadius: 16,
    },
    value: {       
        color: '#212121',
        fontWeight: 'bold',
        fontSize: 20,
    },
    title: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 14,
    },
    dateText: {
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        width: '60%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginRight: 15
    },
    textSearch: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#9956F6',
        padding: 10,
        paddingVertical: 8,
        borderRadius: 14,
        width: '35%',
        flexDirection: 'row',
        gap: 15
    },
});

export default Home;