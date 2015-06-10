'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    ScrollView,
    Text,
    View,
    } = React;

var maoyan = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>


                <View style={{flexDirection: 'column', flex : 1, backgroundColor:"red", padding: 20}}>

                    <View style={{flex: 1, flexDirection:'column',  alignItems : "flex-start",  justifyContent : "center", padding: 15, backgroundColor:"blue"}}>
                        <View style={{ backgroundColor:"yellow"}}>
                            <View >
                                <Text>
                                    111111111
                                </Text>
                            </View>


                            <View >
                                <Text>
                                    33333333
                                </Text>

                            </View>


                        </View>

                    </View>

                </View>



            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop : 20

    }
});




AppRegistry.registerComponent('maoyan', () => maoyan);
