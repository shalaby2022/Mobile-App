import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class About extends React.Component {
    
    componentDidMount()
    {
        AsyncStorage.setItem("SingKey", 'true')
    }

    render() {
        const { navigation } = this.props
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Header navigation={navigation} />
                    <View style={styles.views} >
                        <View style={{ flexShrink: 1 }}>
                            <Text style={styles.header}>Welcome to News</Text>
                            <Text style={styles.data}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eaque sit fuga ad velit animi magni quis ullam dolor, cumque pariatur, aliquam saepe voluptates nobis harum,Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eaque sit fuga ad velit animi magni quis mollitia quas est! Sapiente quas tempora distinctio sequi nesciunt. Neque sequi unde sunt impedit deserunt nam, ex in et. Voluptatem, aspernatur placeat eos dicta possimus voluptates perspiciatis ducimus error architecto! Laboriosam aperiam ipsa, autem enim a ab quidem odit accusamus id beatae numquam, voluptatibus facere tempora perspiciatis. Quae id in, libero ad possimus velit rem aut architecto quas quasi deleniti at, assumenda, nostrum accusamus maiores? Dignissimos optio non iure, officia aliquid tenetur quas placeat!</Text>
                        </View>
                    </View>
                    <Footer navigation={navigation} />
                </View>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    views: {
        flexDirection: "column",
        backgroundColor: "#fff",
        padding: 8,
        borderRadius: 10,
        flex: 1
    },
    img: {
        width: '100%',
        padding: 40,
        height: 200,
        borderRadius: 10,
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 10,
        textAlign: "center",
        paddingVertical: 20,
        textTransform: 'uppercase'
    },
    data: {
        fontSize: 18,
        marginLeft: 10,
        color: '#777',
        fontWeight: 'bold'
    }
})