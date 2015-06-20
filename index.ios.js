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
    TabBarIOS,
    View,
    } = React;


var MovieView = require("./App/View/Movie/MovieIndexView");
var CinemaView = require("./App/View/Cinema/CinemaView");
var DiscoverView = require("./App/View/Discover/DiscoverView");
var UserView   = require("./App/View/User/UserView");

var Icon = require('Ionicons');


var maoyan = React.createClass({

    //定义类的静态方法
    statics: {},

    //组件挂载之前
    getInitialState: function () {
        console.log("组件挂载.... 之前 getInitialState");
        return {
            selectedTab: "tabMovie"
        }
    },
    //初始化渲染之后
    componentDidMount: function () {
        console.log("init 渲染 之后 componentDidMount");
        //this.loadData();
    },

    //初始化渲染之前
    componentWillMount: function () {
        console.log("init 渲染 之前 componentWillMount")
    },

    //在组件接收到新的 props 的时候调用
    componentWillReceiveProps: function () {
        console.log("componentWillReceiveProps...");
    },

    //在接收到新的 props 或者 state，将要渲染之前调用
    shouldComponentUpdate: function () {
        console.log("shouldComponentUpdate...");

        return true;
    },

    //在接收到新的 props 或者 state 之前立刻调用
    componentWillUpdate: function () {
        console.log("componentWillUpdate...");
    },

    //在组件的更新已经同步到 DOM 中之后立刻被调用
    componentDidUpdate: function () {
        console.log("componentDidUpdate...")
    },


    //组件移除
    componentWillUnmount: function () {
        console.log("remove component...")
    },

    //默认props
    getDefaultProps: function () {
        return {
            value: 'test',
            test: "123"
        };
    },

    _renderContent: function (tabName:string, tabType:string) {

        var componentView;

        switch (tabType){
            case  "tabMovie" :
                componentView = MovieView;
                break;
            case  "tabCinema" :
                componentView = CinemaView;
                break;
            case  "tabDiscover" :
                componentView = DiscoverView;
                break;
            default :
                componentView = UserView;
                break;
        }

        return (
            <View style={styles.container}>

                <NavigatorIOS
                    barTintColor='#e54847'
                    titleTextColor='#fff'
                    tintColor='#fff'
                    style={styles.nav}
                    initialRoute={{
                            rightButtonIcon : require('image!search'),
                            leftButtonTitle :    "西安",
                            component : componentView,
                            title : tabName,
                            passProps : {test : "111"}
                    }}
                    />
            </View>
        );

    },
    render: function () {
        console.log("render....");

        return (
            <TabBarIOS
                tintColor="#e54847"
                barTintColor="#fff">
                <Icon.TabBarItem
                    title="电影"
                    iconName="ios-film-outline"
                    selectedIconName="ios-film"
                    selected={this.state.selectedTab === 'tabMovie'}
                    onPress={() => {
                    this.setState({
                      selectedTab: 'tabMovie'
                    });
          }}>
                    {this._renderContent('电影', 'tabMovie')}
                </Icon.TabBarItem>
                <Icon.TabBarItem
                    title="影院"
                    iconName="ios-home-outline"
                    selectedIconName="ios-home"
                    selected={this.state.selectedTab === 'tabCinema'}
                    onPress={() => {
            this.setState({
              selectedTab: 'tabCinema'
            });
          }}>
                    {this._renderContent('影院', 'tabCinema')}
                </Icon.TabBarItem>
                <Icon.TabBarItem
                    title="发现"
                    iconName="ios-ionic-outline"
                    selectedIconName="ionic"
                    selected={this.state.selectedTab === 'tabDiscover'}
                    onPress={() => {
            this.setState({
              selectedTab: 'tabDiscover'
            });
          }}>
                    {this._renderContent('发现', 'tabDiscover')}
                </Icon.TabBarItem>
                <Icon.TabBarItem
                    title="我的"
                    iconName="ios-person-outline"
                    selectedIconName="ios-person"
                    selected={this.state.selectedTab === 'tabMe'}
                    onPress={() => {
                    this.setState({
                      selectedTab: 'tabMe'
                    });
          }}>
                    {this._renderContent('我的', 'tabMe')}
                </Icon.TabBarItem>
            </TabBarIOS>
        );
    }
});


var styles = StyleSheet.create({
    container: {
        flex: 1
    },

    nav: {
        flex: 1
    },

    tabContent: {
        flex: 1,
        alignItems: 'center'
    },
    tabText: {
        color: 'white',
        margin: 50
    }

});


AppRegistry.registerComponent('maoyan', () => maoyan);