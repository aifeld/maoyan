
var React = require('react-native');
var Swiper = require('react-native-swiper');
var TimerMixin = require('react-timer-mixin');
var RCTRefreshControl = require('RCTRefreshControl');

var {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    ActivityIndicatorIOS,
    TouchableHighlight,
    ScrollView,
    } = React;


var SCROLLVIEW = 'ScrollView';


var MaoYanService = require("../../Network/API");
var MovieDetailView = require("../MovieDetail/MovieDetailView");




var cmStyles = require("../Common/CommonStyles");
var styles = require("./style");



var MovieIndexView = React.createClass({
    mixins: [TimerMixin],

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
        this._loadData();
        RCTRefreshControl.configure({
            node: this.refs['LIST_VIEW_REF'],
            tintColor: '#e54847',
            activityIndicatorViewColor: '#e54847'
        }, () => {
            this._loadData();

        });

    },

    //组件渲染之前
    componentWillMount : function(){


    },

    //同步组件
    componentDidUpdate: function () {
        console.log("componentDidUpdate...");


    },

    //购票
    _getTicket : function(data){
        this._handleNextButtonPress({
            title: MovieDetailView.title,
            component: MovieDetailView,
            backButtonTitle: '返回',
            passProps : {
                movie : data
            }
        });
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

    _renderTopSlider : function(){

        return (
            <Swiper   activeDot={<View style={styles.sliderButtonDotActive} />}
                      dot={<View style={styles.sliderButtonDot}/>}
                      paginationStyle={styles.sliderButton}
                      height={100}
                      autoplay={false}  autoplayTimeout={3} showsButtons={false}  style={styles.wrapper} >

                <View style={styles.slider} >

                    <Image style={styles.sliderImage} source={{uri: 'http://c.hiphotos.baidu.com/image/w%3D310/sign=0dff10a81c30e924cfa49a307c096e66/7acb0a46f21fbe096194ceb468600c338644ad43.jpg'}} />
                </View>
                <View style={styles.slider}
                     >
                    <Image style={styles.sliderImage} source={{uri: 'http://c.hiphotos.baidu.com/image/w%3D310/sign=0dff10a81c30e924cfa49a307c096e66/7acb0a46f21fbe096194ceb468600c338644ad43.jpg'}} />
                </View>
                <View style={styles.slider}
                      >
                    <Image style={styles.sliderImage} source={{uri: 'http://c.hiphotos.baidu.com/image/w%3D310/sign=0dff10a81c30e924cfa49a307c096e66/7acb0a46f21fbe096194ceb468600c338644ad43.jpg'}} />
                </View>

            </Swiper>
        );

    },

    _renderMovie : function(){
        return (
            <View style={styles.container}>

                <ScrollView ref='LIST_VIEW_REF'
                            automaticallyAdjustContentInsets={false}
                            style={{top: 64}} >

                    {this._renderTopSlider()}
                    <ListView automaticallyAdjustContentInsets={false} scrollEnabled={false}
                        dataSource={this.state.dataSource}
                        renderRow ={this._renderRow.bind(this)}
                        >
                    </ListView>

                </ScrollView>
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

                this.setTimeout(() => {
                    RCTRefreshControl.endRefreshing(this.refs['LIST_VIEW_REF']);
                }, 1000);

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

        var movieTag;
        var movieNewTag


        if(movie.imax || movie['3d']){
            movieTag =(
                <View style={cmStyles.movieTypeWrap}>
                    <Text style={cmStyles.movieTag}>
                        {movie['3d'] ? ("3D") : null}
                        &nbsp;
                        {movie.imax ? ("IMAX") : null}
                    </Text>
                </View>
            );
        }
        if(movie.late){
            movieNewTag = (<View style={cmStyles.movieHotWrap}>
                            <Text style={cmStyles.movieTag}>
                                {movie.late  ? ("新"): null }
                            </Text>
                            </View>);
        }

        return (
            <TouchableHighlight     underlayColor="#e5e5e5"  onPress={ () =>  this._getTicket(movie) }>
                <View style={styles.movieRow}  >
                    <View style={styles.movieLeft}>
                        <Image source={{uri:movie.img}}   style={styles.movieImage }  />
                    </View>

                    <View style={styles.movieMiddle}>
                        <View style={styles.movieTitle}>
                            <Text   style={styles.movieTitleContent}>
                                {movie.nm}
                            </Text>
                            {movieTag}
                            {movieNewTag}

                        </View>

                        <Text numberOfLines={1} style={styles.movieDesc}>
                            {movie.scm}
                        </Text>
                        <Text numberOfLines={1} style={styles.movieDesc}>
                            今天{movie.cnms}家影院上映{movie.snum}场
                        </Text>

                    </View>

                    {/* 底部 */}
                    <View style={styles.movieRight}>

                        <Text style={styles.movieScore}>9.1分</Text>

                        <View style={{flex : 1}}></View>

                        <View style={styles.movieOpera} >
                            <TouchableHighlight  onPress={ () =>  this._getTicket(movie) }
                                                 style={[cmStyles.btn_outline,cmStyles.btn_outline_red]} underlayColor="#e54847">
                                <Text style={cmStyles.btn_outline_red_text}>购票</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                 </TouchableHighlight>

        );
    },

    render : function(){

        //if(this.state.isLoading){
        //    return this._renderLoading();
        //}
        //else{
        //    return this._renderMovie();
        //}

        return this._renderMovie();



    }
});


module.exports = MovieIndexView;
