import React , {Component} from 'react'
import {Text, StyleSheet, TouchableOpacity, Image, View} from 'react-native'


export default class PrecautionScreen extends Component{
    render(){
        return(
    <View>
        <View style={styles.header}>
            <TouchableOpacity style={styles.menu}><Image source="../assets/Menubar"/></TouchableOpacity>
            <Text style={styles.headerText}>Precaution</Text>
        </View>
        <View>
            <Image source=""/>
            <Text style={styles.mainInfo}>To prevent the spread of COVID-19:</Text>
            <Text style={styles.mainInfo}>
            1.Maintain a safe distance from others (at least 1 metre), even if they don’t appear to be sick.
            2.Wear a mask in public, especially indoors or when physical distancing is not possible.
            3.Choose open, well-ventilated spaces over closed ones. Open a window if indoors.
            4.Clean your hands often. Use soap and water, or an alcohol-based hand rub.
            5.Get vaccinated when it’s your turn. Follow local guidance about vaccination.
            6.Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.
            7.Stay home if you feel unwell.
            8.If you have a fever, cough and difficulty breathing, seek medical attention.
            9.Call in advance so your healthcare provider can direct you to the right health facility. 
            10.This protects you, and prevents the spread of viruses and other infections.
            </Text>
            <Text>
                Masks
            </Text>
            <Text>
            Properly fitted masks can help prevent the spread of the virus from the person wearing the mask to others.
            Masks alone do not protect against COVID-19, and should be combined with physical distancing and hand hygiene.
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