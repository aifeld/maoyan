
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


var MaoYanService = require("../../Network/API");

var cmStyles = require("../Common/CommonStyles");
var styles = require("./style");


var CinemaView = React.createClass({

    _handleBackButtonPress: function() {
        this.props.navigator.pop();
    },

    _handleNextButtonPress: function(nextRoute) {
        this.props.navigator.push(nextRoute);
    },

    getInitialState: function() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows([]),
            isLoading : true
        };
    },

    //首次渲染之后
    componentDidMount : function(){

    },


    _renderLoading : function(){
        return(
            <View style={styles.center}>
                <View style={styles.loadingWrap}>
                    <ActivityIndicatorIOS
                        animating={this.state.isLoading}
                        size='small'/>
                    <Text style={{marginLeft : 15}}>
                        加载电影中...
                    </Text>

                </View>
            </View>

        );
    },

    _renderMovie : function(){
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow ={this._renderRow.bind(this)}
                    >
                </ListView>
            </View>

        );

    },


    //渲染listview 每一行
    _renderRow : function(rowData,sectionID,rowID){
        //console.log("render row ");




        return (
            <View style={styles.movieRow}>
            </View>

        );
    },
    render : function(){

        //if(this.state.isLoading){
        //    return this._renderLoading();
        //}
        //else{
        //    return this._renderMovie();
        //}

        return (

            <View></View>
        )

    }
});


module.exports = CinemaView;
