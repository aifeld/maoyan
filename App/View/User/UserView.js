
var React = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    ActivityIndicatorIOS,
    TouchableHighlight
    } = React;



var cmStyles = require("../Common/CommonStyles");
var styles = require("./style");

var UserView = React.createClass({

    _handleBackButtonPress: function() {
        this.props.navigator.pop();
    },

    _handleNextButtonPress: function(nextRoute) {
        this.props.navigator.push(nextRoute);
    },

    getInitialState: function() {
        return {
            isLoading : true
        };
    },

    //首次渲染之后
    componentDidMount : function(){

    },


    render : function(){

        return (

                <View>
                    <Text>222</Text>
                </View>


        );

    }
});



module.exports = UserView;
