
var React = require('react-native');
var {
    Text,
    View,
    Image,
    ListView,
    ActivityIndicatorIOS,
    TouchableHighlight
    } = React;



var MaoYanService = require("../../Network/API");
var styles = require("./style");

var cmStyles = require("../Common/CommonStyles");

var MovieDetailView = React.createClass({

    statics : {
        title : "电影详情",
        star : "iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAMAAABhTZc9AAAAA3NCSVQICAjb4U/gAAAAwFBMVEX////////39/fm5ubMzMz////MzMz////39/fW1tbMzMz////u7u7MzMz////W1tbMzMz////39/fu7u7W1tbMzMz////39/fm5ube3t7W1tb////39/fm5ubW1tbMzMz////39/fW1tb////39/fu7u7m5ubW1tbMzMz////39/fm5ubW1tbMzMz////39/fm5ubW1tb39/fu7u7m5ube3t7W1tbMzMzu7u7m5ube3t7MzMzm5ube3t7W1tbMzMwIhLnMAAAAQHRSTlMAERERESIiMzMzM0RERFVVVWZmZmZmd3d3d3eIiIiIiJmZmaqqqqqqqru7u7u7zMzMzN3d3d3d3e7u7u7/////fI2EKAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAAAAXdEVYdENyZWF0aW9uIFRpbWUAMjAxMy41LjMw+xWdhAAAAQ9JREFUKJF90n1fgyAQB3CvYpaUjWr2QLW1tcoyXVabGuD7f1cBWuO26P5Sv5/fASdB4NZeFPxT49U+eHHQqpfQq09KynPij0q5oJ7eJip84UhHhfCFbVR4wkc2qvUDhQfDs9vHbNl2Uc1NNr06Pti1OGqVLdmj0A/2Q0Z0j503A7/Wu6772Kxw2DiwrnJm14dT+QdXKev2DhfbXKXJz8HgZovzZP07yMMG5zx0Dk0+kZYTPM4lChcMz/oL6XuMNFJYcXak0Lp1gv7TuNOyqLseHOmr0SrljM0Nywm6fCslq3zGQoDwZKH9mbraNmXKqW0H9LqWBdJLzmPS7xNIPL9D0wDqTg5Ciu/Wxj3sX78BTyNQugMo+Y4AAAAASUVORK5CYII=",
        star_active : "iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAMAAABhTZc9AAAAA3NCSVQICAjb4U/gAAABC1BMVEX/////////5cb/2Kv/vGr/tVr/slX/////tVr/slX/////9Of/wXr/tVr/slX/////5cb/slX/////wHP/tVr/////9+7/3bP/tVr/////9+7/9Of/16b/x4T/vGr/rlL/////6Mz/tVr/////79z/0Zv/t2T/tVr/rlL/////7df/4Lr/3bP/z5T/tVr/rlL/////9Of/6Mz/t2T/tVr/rlL/////+vT/9+7/7df/4Lr/0Zv/z5T/7df/6Mz/1J//yYn/vGr/tVr/slX/rlL/4Lr/3bP/0Zv/z5T/zIv/yYn/x4T/xHz/vGr/t2T/slX/xHz/w3b/wHP/vGr/t2T/tVr/slX/rlL/q0zqDZdaAAAAWXRSTlMAERERERERIiIiMzMzMzNERERVVVVmZmZmd3d3d3d3d4iIiJmZmZmZmaqqqqqqqqq7u7u7u7vMzMzMzMzM3d3d3d3d3d3u7u7u7u7u7u7u7v///////////3vjtXcAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAAAF3RFWHRDcmVhdGlvbiBUaW1lADIwMTMuNS4zMPsVnYQAAAExSURBVCiRfdJnW8MgEADg4EKjLRpFG2c0rqrVaOuoNY66Vx3Ngf//lxggeeT6NPKNvLnjOM5x7DVScv5Z23fjpBDHpKy5hXogJczTAixLKUSLFYYKgKQguKwQoMX6FnZsNFnoFzxlEOAaBY/OVNb2G7dpRUahU99cnp4Y1LjyI/XSmCSKhf5Qp2mOgbaSLDDJWO13PHXCZCdPqdBwui5DfT6Zsy3nhyo3tZNF28wPjxHPL0Y3ehSeT/y/56A1zF+ngWtdmt7YCnGI29m2g6HJca8FqvncQ1rCeoVjKxLpi4/eaUu36zNuvupWfAdIG6l276OA872uyhKi4fsQ8HRW5S4h7uxFmvrQ1mH5Hkc+0+kIW32DI3v2hpaCwKNZnYR6u+uoG5TZnSMuw7PVM4fZ9heSvG6qHGIXWgAAAABJRU5ErkJggg=="
    },

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
        this._loadData(this.props.movie.id);
    },

    _renderTop : function(){

        var movie = this.props.movie;
        var moveCats = movie.cat.split(",");


        return (
            <View style={[cmStyles.pd_lr_15,cmStyles.pd_tm_15,styles.dt_top]}>


                <View style={[styles.dt_top_content]}>

                    <Image source={{uri : movie.img}} style={styles.movieImage}  />
                    <View style={styles.movieDetail}>

                        <View >
                            {/*电影名称*/}
                            <View style={cmStyles.fx_row}>
                                <Text style={[{marginRight : 3}]}>
                                    {movie.nm}
                                </Text>

                                <View style={cmStyles.movieTypeWrap}>
                                    <Text style={cmStyles.movieTag}>
                                        {movie['3d'] ? ("3D") : null}
                                        &nbsp;
                                        {movie.imax ? ("IMAX") : null}
                                    </Text>
                                </View>
                            </View>


                            {/*星级评分*/}
                            <View style={[cmStyles.fx_row,{marginTop : 5, marginBottom :5}]}>
                                <Image  style={[cmStyles.star_style]}  source={{uri:"data:image/png;base64,"+MovieDetailView.star,isStatic: true}} />
                                <Image  style={cmStyles.star_style}  source={{uri:"data:image/png;base64,"+MovieDetailView.star,isStatic: true}} />
                                <Image  style={cmStyles.star_style}  source={{uri:"data:image/png;base64,"+MovieDetailView.star,isStatic: true}} />
                            </View>


                            {/* 电影标签 */}
                            <View   style={[cmStyles.fx_row, {marginBottom : 5}]}>

                                {
                                    moveCats.map(function(object,i){
                                        return  (<Text style={[cmStyles.movieClass]}>
                                            {object}
                                        </Text>)
                                    })
                                }
                            </View>

                            {/* 电影地区 */}
                            <View style={[cmStyles.fx_column]}>

                                <View style={[cmStyles.fx_row]}>
                                    <Text style={styles.movie_base_message}>
                                        <Text>地区:&nbsp;&nbsp;</Text>
                                        <Text>美国</Text>
                                    </Text>
                                </View>

                                <View style={[cmStyles.fx_row]}>
                                    <Text style={styles.movie_base_message}>
                                        <Text>片长:&nbsp;&nbsp;</Text>
                                        <Text>163min</Text>
                                    </Text>
                                </View>

                                <View style={[cmStyles.fx_row]}>
                                    <Text style={styles.movie_base_message}>
                                        <Text>片长:&nbsp;&nbsp;</Text>
                                        <Text>163min</Text>
                                    </Text>
                                </View>

                            </View>

                        </View>


                    </View>
                </View>


                <View style={[cmStyles.mt15]}>
                    <TouchableHighlight  underlayColor="#e48a00" style={[cmStyles.btn,cmStyles.comCenter,cmStyles.btn_red,cmStyles.btn_block]}>
                        <Text style={cmStyles.btn_red_text}>立即购票</Text>
                    </TouchableHighlight>
                </View>

            </View>
        )

    },

    _renderMiddle : function(){

        return (

            <View style={[cmStyles.pd_lr_15,styles.dt_center]}>


            </View>

        )

    },

    _renderComments : function(){
        return (
            <View style={[cmStyles.pd_lr_15,styles.dt_bottom]}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    >
                </ListView>

            </View>

        );
    },

    _loadData : function(movieId){
        MaoYanService.getMovieDetail(movieId)
            .then((res) => {

                console.log("数据拉成功");

                console.log(res.data);

                var hcmts = res.data.CommentResponseModel.hcmts;

                this.setState({
                    dataSource : this.state.dataSource.cloneWithRows(hcmts),
                    isLoading : false
                });

            })
            .catch((ex) =>{
                alert(ex);
            })
            .done();
    },

    _renderRow : function(rowData,sectionID,rowID){

        var comment = rowData;

        return (
            <View style={styles.movieDetailList}>
                <View style={[cmStyles.fx_row,styles.movieDetailListTop]}>
                    <Text style={{marginRight : 4}}>{comment.nick}</Text>
                    {/*星级评分*/}
                    <View style={[cmStyles.fx_row]}>
                        <Image  style={[cmStyles.star_style]}  source={{uri:"data:image/png;base64,"+MovieDetailView.star,isStatic: true}} />
                        <Image  style={cmStyles.star_style}  source={{uri:"data:image/png;base64,"+MovieDetailView.star,isStatic: true}} />
                        <Image  style={cmStyles.star_style}  source={{uri:"data:image/png;base64,"+MovieDetailView.star,isStatic: true}} />
                    </View>
                </View>

                <Text style={styles.movieDetailListMiddle}>
                    {comment.content}
                </Text>

                <View style={[cmStyles.fx_row,styles.movieDetailListBottom]}>
                    <Text style={cmStyles.fx}>{comment.time}</Text>
                    <Text>{comment.reply}回复</Text>
                </View>
            </View>

        );

    },

    render : function(){

        var renderTop = this._renderTop();
        var renderMiddle = this._renderMiddle();
        var renderComments = this._renderComments();

        return (
            <View style={cmStyles.container}>

                {renderTop}

                {renderMiddle}

                {renderComments}
            </View>

        );

    }
});



module.exports = MovieDetailView;
