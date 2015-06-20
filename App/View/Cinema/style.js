
var React = require('react-native');
var {
    StyleSheet,
    } = React;



var styles = StyleSheet.create({
    container: {
        flex : 1
    },
    loadingWrap : {
        flexDirection : "row",
        alignItems: 'center'
    },
    center : {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    color : {
        color : "red"
    },
    movieRow : {
        flexDirection : "row",
        padding : 10,
        paddingBottom : 12,
        borderBottomWidth : 1,
        borderBottomColor : '#d6d6d6',

        //设置外层高度才能使得 column元素 垂直居中
        height : 110,
        alignItems : "flex-end"

    },

    movieLeft : {
        flex : 1
    },



    movieRight : {

    }


});


module.exports = styles;