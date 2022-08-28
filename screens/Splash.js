import * as React from 'react';
import { StyleSheet, View, Image ,ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Splash extends React.Component {

    MoveToHome = ()=> {
        AsyncStorage.getItem('SingKey').then(value=> {
            if(value) {
                setTimeout(() => {
                    this.props.navigation.navigate("Home"),10000
                })
            }
            else {
                setTimeout(() => {
                    this.props.navigation.navigate("About"),10000
                })
            }
        })
    }

    render() {
        return (
            <View style={styles.views}>
                <Image
                    style={{borderRadius: 10}}
                    source={require('../images/download.jpg')}
                />
                <ActivityIndicator size="large" color="#0000ff" />
                {this.MoveToHome()}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    views: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: '20'
    },

})