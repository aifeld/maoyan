
var React = require('react-native');
var {
    StyleSheet,
    } = React;


var styles = StyleSheet.create({
    container: {
        flex : 1,
        paddingTop: 65
    },

    dt_top : {
        //backgroundColor : "#CCC"
    },

    movie_base_message : {
        fontSize : 12,
        color : "#666"
    },

    dt_center : {

    },

    dt_bottom : {

    },

    dt_top_content  : {
        flexDirection : "row"
    },

    getTicket : {

    },

    movieImage : {
        width : 106,
        height : 154
    }
    ,
    movieDetail :{
        flex : 1,
        paddingLeft: 15
    },
    movieDetailList : {
        paddingTop : 15,
        paddingBottom : 15,
        borderBottomWidth : 1,
        borderBottomColor : '#d6d6d6'
    },

    movieDetailListTop : {

    },

    movieDetailListMiddle : {
        marginTop : 10
    },
    movieDetailListBottom : {
        marginTop : 10
    }


});


module.exports = styles;