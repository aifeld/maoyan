
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
        borderBottomColor : '#d6d6d6'

    },
    movieLeft : {

    },
    movieMiddle : {
        flex : 1,
        paddingLeft : 4,
        flexDirection : "column"
    },

    movieImage : {
        width : 61,
        height : 84
    },
    movieTitle : {
        flexDirection : "row",
        marginTop : 4,
        alignItems: 'center'

    },
    movieTitleContent : {
        fontSize : 16,
        marginRight : 4
    },

    movieTag : {
        fontSize : 11,
        textAlign : "center",
        color : "#fff"
    },
    movieTypeWrap : {
        paddingLeft  : 4,
        paddingRight : 4,
        backgroundColor : '#2895db',
        borderRadius : 3,
        marginRight : 4
    },

    movieHotWrap : {
        paddingLeft  : 4,
        paddingRight : 4,
        backgroundColor : '#ff9400',
        borderRadius : 3,
        marginRight : 4
    },
    movieDesc : {
        color : "#666",
        fontSize : 14,
        marginTop : 7
    },

    movieRight : {
        flexDirection : "column",
        backgroundColor : "red",
        justifyContent : "center"

    },

    test : {
    },
    movieScore : {
    },

    ct : {
        backgroundColor : '#2895db'

    },
    movieBtn : {
        borderWidth : 1,
        borderColor : "#e54847",
        borderRadius : 4,
        paddingTop : 4,
        paddingBottom :4,
        paddingLeft : 17,
        paddingRight : 17,
        textAlign :"center"

    },

    movieBtnText : {
        color : "#e54847",
        fontSize : 13
    }

});

module.exports = styles;