import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';

import { COLORS, FONTS, images, SIZES } from '../constants';

function Transactions({ navigation }) {
    const tabs = [
        { text: "All" },
        { text: "Income" },
        { text: "Expense" }
    ]

    const [selectedTab, setSelectedTab] = useState("All");

    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack() }
                >
                    <Entypo name="chevron-thin-left" size={24} color="black" />
                </TouchableOpacity>
                <AntDesign name="search1" size={24} color="black" />
            </View>
            <View style={styles.headerTitle}>
                <Text style={styles.headerText}>Recent Transactions</Text>
                <TouchableOpacity>
                    <Text style={{ ...FONTS.body4, color: COLORS.lightGray }}>See all</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginLeft: 20, marginTop: 15 }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={tabs}
                    keyExtractor={item => `${item.text}`}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                style={{
                                    width: 100,
                                    height: 30,
                                    backgroundColor: selectedTab === item.text ? COLORS.blue : COLORS.white,
                                    borderRadius: 15,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: 15
                                }}
                                onPress={() => setSelectedTab(item.text)}
                            >
                                <Text style={{ ...FONTS.body4, color: selectedTab === item.text ? COLORS.white : COLORS.black }}>{item.text}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>

            <View style={[styles.headerTitle, { marginTop: 15 }]}>
                <Text style={{ ...FONTS.h2, color: COLORS.blue }}>Today</Text>
            </View>

            <View style={[styles.headerTitle, { marginTop: 15 }]}>
                <View style={[styles.paymentCard, styles.shadow]}>
                    <View style={styles.iconContainer}>
                        <Octicons name="mail-read" size={32} color={COLORS.blue} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={{ ...FONTS.h3, color: COLORS.black }}>Payment</Text>
                        <Text numberOfLines={2} style={{ ...FONTS.body5, color: COLORS.lightGray }}>Payment from Andrea</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={{ ...FONTS.h4, color: COLORS.blue }}>$30.00</Text>
                    </View>
                </View>
            </View>

            <View style={styles.imageContainer}>
                <View style={{ borderWidth: 2, borderColor: COLORS.lightGray, borderRadius: 100, padding: 15 }}>
                    <View style={{ borderWidth: 20, borderColor: COLORS.transparentBlue, borderRadius: 100 }}>
                        <View style={{ borderColor: COLORS.transparentGray, borderWidth: 20, borderRadius: 100, }}>
                            <View style={{ borderColor: COLORS.blue, borderWidth: 5, borderRadius: 100 }}>
                                <View style={{ padding: 5, backgroundColor: COLORS.white, borderRadius: 100 }}>
                                    <Image source={images.user} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View>
                <TouchableOpacity
                    style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}
                >
                    <View style={styles.seeDetailsButton}>
                        <Text style={{ color: COLORS.white, ...FONTS.h3}}>See Details</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15
    },
    headerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 2
    },
    headerText: {
        ...FONTS.h2,
        color: COLORS.blue
    },
    paymentCard: {
        width: SIZES.width - SIZES.width * 0.1,
        height: 80,
        backgroundColor: COLORS.white,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    iconContainer: {
        flex: 1,
        marginLeft: 20
    },
    textContainer: {
        flex: 4,
    },
    priceContainer: {
        flex: 1,
        marginTop: 20
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.30,
        shadowRadius: 3,

        elevation: 6,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },
    seeDetailsButton: {
        width: SIZES.width - SIZES.width * 0.1,
        height: 50,
        backgroundColor: COLORS.blue,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }

})

export default Transactions