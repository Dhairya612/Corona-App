import React , {Component} from 'react'
import {Text, StyleSheet, TouchableOpacity, Image, View} from 'react-native'

export default class Govt extends Component{
    render(){
        return(
            <View>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.menu}><Image source="../assets/Menubar"/></TouchableOpacity>
                    <Text style={styles.headerText}>Government Schemes</Text>
                </View>
                <View>
                    <Text style={styles.mainInfo}>The government announced a string of measures, including a pension for dependents of those having lost their lives due to COVID-19, among other benefits for the families who lost their earning members to the pandemic.

Besides family pensions, insurance benefits under the Employees' Deposit-Linked Insurance (EDLI) scheme have been enhanced and liberalised. Prime Minister Narendra Modi said these steps will help mitigate financial difficulties faced by these families.

Modi said his government stands in solidarity with these families.

To help these families live a life of dignity and maintain a good standard of living, the benefit of the Employee State Insurance Corporation (ESIC) pension scheme for employment-related death cases is being extended to even those who have died due to Covid, the PMO said in a statement.

Dependent family members of such persons will be entitled to the benefit of pension equivalent to 90 per cent of the average daily wage drawn by the worker as per the existing norms.

This benefit will be available retrospectively with effect from March 24 2020 and for all such cases till March 24, 2022. The enhancement of insurance benefits under the EDLI scheme will in particular help the families of employees who have lost their lives due to the pandemic, the PMO said.

The amount of maximum insurance benefit has been increased from Rs 6 lakh to Rs 7 lakh, and the provision of minimum insurance benefit of Rs 2.5 lakh has been restored and will apply retrospectively from February 15, 2020 for the next three years.

To benefit families of contractual and casual workers, the condition of continuous employment in only one establishment has been liberalised, with the benefit being made available to families of even those employees who may have changed jobs in the last 12 months preceding his death, it said.</Text>
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