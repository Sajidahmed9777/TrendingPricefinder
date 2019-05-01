import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
} from 'react-native';

export default class Trending extends Component {
    render() {

        return (
            <ScrollView style={{flex:1, flexDirection:'column', backgroundColor: 'dodgerblue',}}>
                <Text style={styles.title}>
                    Trending Products
                </Text>
                <View style={styles.card}>
                    <Text style={styles.bodyText}>Galaxy S5</Text>
                    <Text style={styles.price}>
                        Price
                    </Text>
                    <Image
                        style={styles.recommended}
                        source={require("../assets/GS5.png")}
                    />
                </View>
                <View style={styles.card}>
                    <Text style={styles.bodyText}>Galaxy S7</Text>
                    <Image
                        style={styles.recommended}
                        source={require("../assets/GS5.png")}
                    />
                </View>
                <View style={styles.card}>
                    <Text style={styles.bodyText}>Galaxy S9</Text>
                    <Image
                        style={styles.recommended}
                        source={require("../assets/GS5.png")}
                    />
                </View>               
                <View style={styles.card}>
                    <Text style={styles.bodyText}>Galaxy S10</Text>
                    <Image
                        style={styles.recommended}
                        source={require("../assets/GS5.png")}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight:'bold',
        color: 'white',
        margin: 25,
        width: 300,
        textAlign: 'center',
        opacity: 0.9,
    },
    bodyText:{
        fontSize: 20,
        marginLeft: 100,
        marginTop: 50,
        width: 200,
        color: 'steelblue',
        fontWeight: 'bold',
        textAlign: 'right',
    },
    card:{
        backgroundColor: 'white',
        margin: 20,
        borderRadius: 10,
        height: 200,   
    },
    recommended:{
        width:100,
        height: 140,
        marginTop: -70,
        
    },
    price:{
        fontSize: 20,
        marginLeft: 100,
        width: 200,
        color: 'steelblue',
        fontWeight: 'bold',
        textAlign: 'right',
    }
});