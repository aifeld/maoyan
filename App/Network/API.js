/**
 * 猫眼数据服务
 */

var BaseUrl = require("../config").apiUrl;


var  json =  function(response) {
    return response.json();
}

var status = function(response) {
    //成功200
    if (response.status >= 200 && response.status < 300) {
        return response
    }

    //出现错误404 500
    throw new Error(response.statusText)
}


var MaoYanService   = {

    //查出首页电影列表
    getMovieList : function(type){

        return fetch(BaseUrl+"/movie/list.json?type=hot&offset=0&limit=1000")
                    .then(status)
                    .then(json);
    },
    //查出电影详情
    getMovieDetail : function(movieId){
        return  fetch(BaseUrl+"/movie/list.json?type=hot&offset=0&limit=1000")
                    .then(status)
                    .then(json);;
    }


}






module.exports = MaoYanService;
