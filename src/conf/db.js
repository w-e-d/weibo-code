/**
 * @description 存储配置
 * @author	李宇航
 */

 const { isPrd } = require('../utils/env')

let REDIS_CONF = {
	host: '127.0.0.1',
	port: 6379
}

module.exports = {
	REDIS_CONF
}