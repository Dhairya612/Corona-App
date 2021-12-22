import React , {Component} from 'react'
import {Text, StyleSheet, TouchableOpacity, Image, View} from 'react-native'

export default class HomeScreen extends Component{
    render(){
        return(
            <View>
                <View style={styles.header}>
            <TouchableOpacity style={styles.menu}><Image source="../assets/Menubar.png"/></TouchableOpacity>
            <Text style={styles.headerText}>Corona App</Text>
            </View>
            <View>
            <Image source="../assets/Covid.jpg"/>
        </View>
        <View>
            <Text style={styles.mainInfo}>
            Coronaviruses are a large family of viruses that cause 
            illness ranging from the common cold to more severe diseases.
            A novel coronavirus is a new strain that has not been 
            previously identified in humans. The new virus was subsequently 
            named the “COVID-19 virus”.
            </Text>
        </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: 'blue',
        height: 150,
        width: 1000
    },
    menu:{
        backgroundColor: 'black',
        height: 75,
        width:75
    },
    headerText:{
        fontWeight: 'bold',
        color: 'black'
    },
    mainInfo:{
        fontWeight: 600,
        color: 'black'
    }
})