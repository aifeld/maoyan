/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var { View, Text, SegmentedControlIOS, StyleSheet, AppRegistry, } = React;

var SampleApp = React.createClass({
    getInitialState(){
        return {
            values:['One','Two','Three'],
            value:'Not selected',
            selectedIndex:undefined
        };
    },

    render(){
        return(
            <View>
                <Text style={styles.text}>
                    Value:{this.state.value}
                </Text>
                <Text style={styles.text}>
                    Index:{this.state.selectedIndex}
                </Text>
                <SegmentedControlIOS
                    values={this.state.values}
                    selectedIndex={this.state.selectedIndex}
                    onChange={this._onChange}
                    onValueChange={this._onValueChange}
                    />
            </View>
        );
    },
    _onChange(event){
        React.AlertIOS.alert(JSON.stringify(event.nativeEvent));
        console.log(event);//debug console log here
        this.setState({
            selectedIndex:event.nativeEvent.selectedSegmentIndex
        });
    },
    _onValueChange(value){
        this.setState({
            value:value
        });
    }
});

var styles = StyleSheet.create({

});

AppRegistry.registerComponent('maoyan', () => SampleApp);