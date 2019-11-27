import React from "react";
import { StyleSheet, Text, View } from 'react-native';


export default class Splash extends React.Component{
    render(){
        return (
        <View style={styles.container}>
            <Image 
            source={require('./assets/stadium.jpg')}/>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})