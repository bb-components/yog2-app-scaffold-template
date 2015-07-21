/**
 * @file   [file]
 * @author [author]
 */

'use strict';

var yog = require('yog2-kernel');
var {{-upper-file_name-}}Model = yog.require('{{-_namespace-}}/model{{-page_name-}}.js');

/**
 * {{-page_name-}} 处理器
 * @param  {[type]}   req
 * @param  {[type]}   res
 * @param  {Function} next
 * @return {[type]}
 */
module.exports = function (req, res, next) {
    // 实例化页面数据层
    var {{-file_name-}}Model = new {{-upper-file_name-}}Model(yog.ralPromise);
    {{-file_name-}}Model.query({
        data: {}
    }).then(function (data) {
        // 添加数据额外处理
        return data;
    }).then(function (data) {
        // 数据获取完成，渲染页面
        res.render('{{-_namespace-}}/page{{-page_name-}}.tpl', data);
    }).catch(next); // 失败则调用next返回500错误
};
