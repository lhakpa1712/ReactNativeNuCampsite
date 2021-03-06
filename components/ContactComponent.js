import React, { Component } from 'react';
import {Card} from 'react-native-elements';
import {ScrollView,Text} from 'react-native';


export default class Contact extends Component {
    static navigationOptions ={
        title: 'Contact Us'
    };
    render() {
        return (
            <ScrollView> 
                <Card
                    title='Contact Information'
                    wrapperStyle={{margin:20}}
                >
                     <Text style={{marginBottom: 10}}>
                            1 Nucamp Way
                            Seattle, WA 98001
                            U.S.A.
                    </Text>
                    <Text style={{marginBottom: 10}}>
                        Phone: 1-206-555-1234
                    </Text>
                    <Text style={{marginBottom: 10}}>
                        Email: campsites@nucamp.co
                    </Text>
                </Card>
            </ScrollView>
        )
    }
}
