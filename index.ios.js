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



var IndexView = require("./App/View/Index/IndexView");


var maoyan = React.createClass({

    //定义类的静态方法
    statics : {

    },

    //组件挂载之前
    getInitialState : function(){
        console.log("组件挂载.... 之前 getInitialState");
        return {
            selectedTab : "tabMovie"
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

    //render: function() {
    //    console.log("render....");
    //    var api = this.state.api;
    //
    //    return (
    //        <View style={styles.container}>
    //            <NavigatorIOS style={styles.nav}
    //                          initialRoute={{
    //          component : IndexView,
    //          title : "首页",
    //          passProps : {test : "111"},
    //          rightButtonTitle: '加载'
    //        }}
    //
    //                />
    //        </View>
    //    );
    //}

    _renderContent: function(color: string, pageText: string) {
        //return (
        //    <View style={[styles.tabContent, {backgroundColor: color}]}>
        //        <Text style={styles.tabText}>{pageText}</Text>
        //        <Text style={styles.tabText}>{this.state.presses} re-renders of the More tab</Text>
        //    </View>
        //);

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

    },
    render: function() {
        console.log("render....");

        return (

          <TabBarIOS>
              <TabBarIOS.Item
                      title="电影"
                      iconName="history"
                      selectedIconName="history"
                    badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
                    selected={this.state.selectedTab === 'tabMovie'}
                    onPress = {()=> this.setState({selectedTab : "tabMovie",notifCount: this.state.notifCount + 1})}
                  >
                  {this._renderContent('#414A8C', '电影')}
              </TabBarIOS.Item>

              <TabBarIOS.Item
                  systemIcon="bookmarks"
                  title="影院"
                  badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
                  selected={this.state.selectedTab === 'tabCinema'}
                  onPress = {()=> this.setState({selectedTab : "tabCinema",notifCount: this.state.notifCount + 1})}
                  >
                  {this._renderContent('#414A8C', '影院')}
              </TabBarIOS.Item>

              <TabBarIOS.Item
                  systemIcon="history"
                  title="发现"
                  badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
                  selected={this.state.selectedTab === 'tabDiscover'}
                  onPress = {()=> this.setState({selectedTab : "tabDiscover",notifCount: this.state.notifCount + 1})}
                  >
                  {this._renderContent('#414A8C', '发现')}
              </TabBarIOS.Item>

          </TabBarIOS>

        );
    }
});




var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    nav : {
        flex : 1
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
