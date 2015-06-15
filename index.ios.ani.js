'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    LayoutAnimation,
    Text,
    TouchableHighlight,
    View,
    } = React;

var WebViewApp = React.createClass({

    getInitialState: function() {
        return {boxOpen:false}
    },

    _onPress: function() {
        console.log('starting animation');
        // Animation.startAnimation(this.refs['this'], 800, 0, 'easeInOutQuad', {scaleXY: [5, 5]});
        LayoutAnimation.configureNext(animations.layout.easeInEaseOut);
        this.setState({boxOpen:!this.state.boxOpen})
    },

    render: function() {
        var box =  this.state.boxOpen === true ?
            <View ref='this' style={styles.boxOpen}/> :
            <View ref='this' style={styles.boxClosed}/>

        return (

            <TouchableHighlight style={styles.container} onPress={this._onPress}>
                <View>
                    <Text style={styles.text}>
                        Click here to start animation!
                    </Text>
                    {box}
                </View>
            </TouchableHighlight>

        );
    }
});

var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        top:200,
        width: 200,
        height: 200,
    },
    text: {
        fontSize: 16,
    },
    boxClosed:{
        backgroundColor:'red',
        width: 50,
        height: 50,
    },
    boxOpen:{
        backgroundColor:'red',
        width: 550,
        height: 550,
    }
});


var animations = {
    layout: {
        spring: {
            duration: 0.75,
            create: {
                duration: 0.3,
                type: LayoutAnimation.Types.easeInEaseOut,
                property: LayoutAnimation.Properties.opacity,
            },
            update: {
                type: LayoutAnimation.Types.spring,
                springDamping: 0.4,
            },
        },
        easeInEaseOut: {
            duration: 0.3,
            create: {
                type: LayoutAnimation.Types.easeInEaseOut,
                property: LayoutAnimation.Properties.scaleXY,
            },
            update: {
                delay: 0.1,
                type: LayoutAnimation.Types.easeInEaseOut,
            },
        },
    },
};

AppRegistry.registerComponent('maoyan', () => WebViewApp);