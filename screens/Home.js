import { useEffect, useState } from 'react';
import { View, ActivityIndicator, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Card from '../common/Card';
import Header from '../common/Header';
import Footer from '../common/Footer';

export default Home = ({ navigation }) => {

    const [data, SetData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        return fetch("https://mockend.com/HosamZewain/test/posts")
            .then((res) => res.json())
            .then((json) => {
                SetData(json),
                    setIsLoading(false)
            }
            )
            .catch(err => `error is ${err}`)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ccc' }}>
            <View style={{ flex: 1 }}>
                <Header navigation={navigation} />
                <ScrollView style={{ padding: 10 }}>
                    {isLoading
                        ?
                        <ActivityIndicator size="large" color="#0000ff" />
                        :
                        data.map((item) => {
                            return <Card navigation={navigation} body={item.body} key={item.id} title={item.title} img={item.image} />
                        })
                    }
                </ScrollView>
            </View>
            <Footer navigation={navigation} />
        </SafeAreaView>
    );
}


