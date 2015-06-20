/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var NavigationBar = require('react-native-navbar');
var {
    AppRegistry,
    StyleSheet,
    Text,
    NavigatorIOS,
    TabBarIOS,
    SegmentedControlIOS,
    Navigator,
    TouchableOpacity,
    View,
    } = React;


var styles = StyleSheet.create({
    navigator: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    customButton: {
        width: 24,
        height: 24,
        left: 10,
        bottom: 5
    }
});

var prevImage = 'http://cdn.flaticon.com/png/256/34097.png';
var nextImage = 'http://cdn.flaticon.com/png/256/64410.png';
var titleUri = 'https://pbs.twimg.com/profile_images/2643489197/2533a80926d7c8fc8c37eaa6becffe68_normal.png';

/**
 * Custom `Prev` button component
 */
class CustomPrev extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={() => alert('prev') }>
                <React.Image
                    source={{uri: prevImage}}
                    style={styles.customButton}
                    />
            </TouchableOpacity>
        );
    }
}

/**
 * Custom `Next` button component
 */
class CustomNext extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={() => alert('next') }>
                <React.Image
                    source={{uri: nextImage}}
                    style={{width: 24, height: 24, right: 10, bottom: 5}}
                    />
            </TouchableOpacity>
        );
    }
}

/**
 * Content component
 * Would be shown under navbar
 */
class Content extends React.Component {
    render() {
        var am = ['One', 'Two', 'Three'];
        return (
            <View style={{flex : 1}}>

                <SegmentedControlIOS
                    values={am}
                    selectedIndex={1}
                    onChange={this._onChange}
                    onValueChange={this._onValueChange}
                    />
            </View>
        );
    }
}

/**
 * Custom `Title` component
 */


var CustomTitle = React.createClass({
    getInitialState: function () {

        return {
            values: ['One', 'Two', 'Three'],
            value: 'Not selected',
            selectedIndex: undefined
        };
    },
    _onChange: function (event) {
        React.AlertIOS.alert(JSON.stringify(event.nativeEvent));
        console.log(event);//debug console log here
        this.setState({
            selectedIndex: event.nativeEvent.selectedSegmentIndex
        });
    },

    _onValueChange: function (value) {
        this.setState({
            value: value
        });
    },

    render: function () {
        var am = ['One', 'Two', 'Three'];
        return (
            <View style={{width:100}}>

                <SegmentedControlIOS
                    tintColor="red"
                    values={am}
                    selectedIndex={1}
                    onChange={this._onChange}
                    onValueChange={this._onValueChange}
                    />
            </View>
        );
    }

});


/**
 * Main component
 */
class CustomElements extends React.Component {


    renderScene(route, navigator) {
        var Component = route.component;
        var navBar = route.navigationBar;

        if (navBar) {
            navBar = React.addons.cloneWithProps(navBar, {navigator, route});
        }

        return (
            <View style={styles.navigator}>
                {navBar}
                <Component navigator={navigator} route={route}/>
            </View>
        );
    }

    render() {
        return (
            <Navigator
                style={styles.navigator}
                renderScene={this.renderScene}
                initialRoute={{
                         component: Content,
                         navigationBar: <NavigationBar
                         backgroundColor="#000"
                         customTitle={<CustomTitle/>}
                         customPrev={<CustomPrev/>}
                         customNext={<CustomNext/>}
                    />
        }}
                />
        );
    }
}


AppRegistry.registerComponent('maoyan', () => CustomElements);