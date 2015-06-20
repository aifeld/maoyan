var React = require('react-native');
var {
    StyleSheet,
    } = React;


var styles = StyleSheet.create({
    container: {
        flex: 1

    },
    loadingWrap: {
        flexDirection: "row",
        alignItems: 'center'
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    color: {
        color: "red"
    },
    movieRow: {
        flexDirection: "row",
        padding: 10,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#d6d6d6',

        //设置外层高度才能使得 column元素 垂直居中
        height: 110

    },
    movieLeft: {},
    movieMiddle: {
        flex: 1,
        paddingLeft: 4,
        flexDirection: "column"

    },
    movieRight: {
        flexDirection: "column",
        justifyContent: 'flex-end',
        alignItems: "flex-end"
        //backgroundColor : "red"
    },


    movieImage: {
        width: 61,
        height: 84
    },
    movieTitle: {
        flexDirection: "row",
        marginTop: 4,
        alignItems: 'center'
    },
    movieTitleContent: {
        fontSize: 16,
        marginRight: 4
    },

    movieDesc: {
        color: "#666",
        fontSize: 14,
        marginTop: 7
    },


    movieScore: {
        marginTop: 4,
        color: "#ff9a00"
    },

    movieOpera: {},
    movieBtn: {
        borderWidth: 1,
        borderColor: "#e54847",
        borderRadius: 4,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: "center"
    },

    movieBtnText: {
        color: "#e54847",
        fontSize: 13
    },

    //轮播部分
    wrapper: {},

    slider : {
        flex: 1,
        backgroundColor: 'transparent'
    },

    sliderImage : {
        flex : 1
    },
    //轮播按钮
    sliderButton: {
        bottom: 10
    },
    sliderButtonDot: {
        backgroundColor: 'rgba(0,0,0,.2)',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    sliderButtonDotActive: {
        backgroundColor: '#fff',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    }

});


module.exports = styles;