import React , {Component} from 'react'
import {Text, StyleSheet, TouchableOpacity, Image, View} from 'react-native'

export default class VaccinationScreen extends Component{
    render(){
        return(
            <View>
                <View styles={styles.header}>
                    <TouchableOpacity style={styles.menu}><Image source="../assets/Menubar"/></TouchableOpacity>
                    <Text style={styles.headerText}>Vaccination</Text>
                </View>
                <View>
                    <Image source=""/>
                    <Text style={styles.mainInfo}>
                        Vaccines in:
                    </Text>
                    <Text style={styles.mainInfo}> 
                        India:
                        Covishield
                    </Text>
                    <Text style={styles.mainInfo}> 
                        Russia:
                        Sputnik
                    </Text>
                    <Text style={styles.mainInfo}> 
                        United States Of America:
                        Spikevax
                        Pfizer
                        Janssen
                        Moderna
                    </Text>
                    <Text style={styles.mainInfo}>
                        China:
                        Sinopharm
                        Sinovac
                    </Text>
                    <Text>
                        Note-*All these vaccines have been approved by WHO*
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
    },
    note:{
        fontWeight: 400,
        color: "rgb(125,125,125)"
    }
})