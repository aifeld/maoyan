/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    NavigatorIOS,
    ListView,
    View,
    } = React;



var IndexView = require("./App/View/Index/IndexView");


var maoyan = React.createClass({

    //定义类的静态方法
    statics : {



    },

    //组件挂载之前
    getInitialState : function(){
        console.log("组件挂载.... 之前 getInitialState");
        return {
            "api" : "没有"
        }
    },
    //初始化渲染之后
    componentDidMount : function(){
        console.log("init 渲染 之后 componentDidMount");
        //this.loadData();
    },

    //初始化渲染之前
    componentWillMount : function(){
        console.log("init 渲染 之前 componentWillMount")
    },

    //在组件接收到新的 props 的时候调用
    componentWillReceiveProps : function(){
        console.log("componentWillReceiveProps...");
    },

    //在接收到新的 props 或者 state，将要渲染之前调用
    shouldComponentUpdate : function(){
        console.log("shouldComponentUpdate...");

        return true;
    },

    //在接收到新的 props 或者 state 之前立刻调用
    componentWillUpdate : function(){
        console.log("componentWillUpdate...");
    },

    //在组件的更新已经同步到 DOM 中之后立刻被调用
    componentDidUpdate : function(){
        console.log("componentDidUpdate...")
    },


    //组件移除
    componentWillUnmount : function(){
        console.log("remove component...")
    },

    //默认props
    getDefaultProps: function() {
        return {
            value: 'test',
            test : "123"
        };
    },

    render: function() {
        console.log("render....");
        var api = this.state.api;

        return (
            <View style={styles.container}>
                <NavigatorIOS style={styles.nav}
                              initialRoute={{
              component : IndexView,
              title : "首页",
              passProps : {test : "111"},
              rightButtonTitle: '加载'
            }}

                    />
            </View>
        );
    }
});




var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    nav : {
        flex : 1
    }

});

AppRegistry.registerComponent('maoyan', () => maoyan);
