/**
 * @file   [file]
 * @author [author]
 */

'use strict';

var yog = require('yog2-kernel');
var {{-upper-file_name-}}Model = yog.require('{{-_namespace-}}/model{{-api_name-}}.js');

/**
 * {{-api_name-}} 处理器
 * @param  {[type]}   req
 * @param  {[type]}   res
 * @param  {Function} next
 * @return {[type]}
 */
module.exports = function (req, res, next) {
    // 实例化API请求数据层
    var {{-file_name-}}Model = new {{-upper-file_name-}}Model(yog.ralPromise);
    {{-file_name-}}Model.query({
        data: {}
    }).then(function (data) {
        // 添加数据额外处理
        return data;
    }).then(res.json.bind(res)).catch(next); // 请求成功则以JSON形式返回数据，失败则调用next返回500错误
};
