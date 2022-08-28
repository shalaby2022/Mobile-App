import * as React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



export default class Info extends React.Component {
    render() {
        const { navigation } = this.props
        const { keycard,title,body,img} = this.props.route.params
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Header navigation={navigation} />
                    <View style={styles.views} key={keycard}>
                        <Image
                            style={styles.img}
                            source={{uri:img}}
                        />
                        <View style={{ flexShrink: 1 }}>
                            <Text style={styles.header}>{title}</Text>
                            <Text style={styles.data}>{body}</Text>
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
        padding:40,
        height: 200,
        borderRadius: 10,
    },
    header: {
        fontSize: 19,
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