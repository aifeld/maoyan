
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

var MaoYanService = require("../Network/API");
var styles = require("./style");


var IndexView = React.createClass({

    //_handleBackButtonPress: function() {
    //    this.props.navigator.pop();
    //},
    //_handleNextButtonPress: function() {
    //    this.props.navigator.push(nextRoute);
    //},

    getInitialState: function() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows([]),
            isLoading : true
        };
    },

    //首次渲染之后
    componentDidMount : function(){
        this._loadData();

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

    //加载数据
    _loadData : function(){
        MaoYanService.getMovieList()
            .then((res) => {

                console.log("数据拉成功");
                var api = res.data.movies;

                this.setState({
                    dataSource : this.state.dataSource.cloneWithRows(api),
                    isLoading : false
                });

            })
            .catch((ex) =>{
                alert(ex);
            })
            .done();

    },
    //渲染listview 每一行
    _renderRow : function(rowData,sectionID,rowID){
        //console.log("render row ");

        var movie = rowData;


        return (
                <View style={styles.movieRow}>
                    <View style={styles.movieLeft}>
                        <Image source={{uri:movie.img}}   style={styles.movieImage }  />
                    </View>


                    <View style={styles.movieMiddle}>
                        <View style={styles.movieTitle}>

                            <Text style={styles.movieTitleContent}>
                                {movie.nm}
                            </Text>

                            <View style={styles.movieTypeWrap}>
                                <Text style={styles.movieTag}>
                                    {movie['3d'] ? ("3D") : null}
                                        &nbsp;
                                    {movie.imax ? ("IMAX") : null}
                                </Text>
                            </View>

                            <View style={styles.movieHotWrap}>
                                <Text style={styles.movieTag}>
                                    {movie.late  ? ("新"): null }
                                </Text>

                            </View>

                        </View>

                        <Text style={styles.movieDesc}>
                            {movie.scm}
                        </Text>
                        <Text style={styles.movieDesc}>
                            {movie.cnms}家影院上映{movie.snum}场
                        </Text>

                    </View>

                    {/* 底部 */}
                    <View style={styles.movieRight}>

                        {/*


                         */}
                        <View style={styles.movieScore}>
                            <Text >9.1分</Text>
                        </View>
                        <View style={styles.test}>
                            <Text>11</Text>
                        </View>

                        <View style={styles.ct}>
                            <TouchableHighlight style={styles.movieBtn} underlayColor="#e54847">
                                <Text style={styles.movieBtnText}>购票</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>

        );
    },

    render : function(){

        if(this.state.isLoading){
            return this._renderLoading();
        }
        else{
            return this._renderMovie();
        }

    }
});



module.exports = IndexView;
