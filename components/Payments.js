import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { SIZES } from '../constants';

import PaymentCard from './PaymentCard';

function Payments(){
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, height: SIZES.height + SIZES.height * 0.3 }}>
            <PaymentCard
                icon={() => <AntDesign name="arrowup" size={26} />}
                type="Sent"
                description="Sending Payment to Clients"
                amount="$150"
            />
            <PaymentCard
                icon={() => <AntDesign name="arrowdown" size={26} />}
                type="Receive"
                description="Receiving Salary from company"
                amount="$250"
            />
            <PaymentCard
                icon={() => <Feather name="dollar-sign" size={26} />}
                type="Loan"
                description="Loan for the car"
                amount="$400"
            />
            <View style={{ height: 100 }} />
        </ScrollView>
    )
}

export default Payments;