/**
 * @file   {{-upper-file_name-}}
 * @author [author]
 */

'use strict';

var yog = require('yog2-kernel');

/**
 * {{-page_name-}} 数据层
 * @param {[type]} ral [用于执行后端请求的RAL实例，必须为Promise接口]
 */
function {{-upper-file_name-}}Model(ral) {
    this.ral = ral;
}

/**
 * 查询接口
 * @param  {[type]} params 请求参数
 * @return {[type]}        返回RAL结果
 */
{{-upper-file_name-}}Model.prototype.query = function (params) {
    return this.ral('{{-ral_name-}}', params);
};

module.exports = {{-upper-file_name-}}Model;
