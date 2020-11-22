/**
 * @description 环境变量
 * @author	lyh
 */

const ENV = process.env.NODE_ENV

module.exports = {
	isDev: ENV === 'dev',
	notDev: ENV !== 'dev',
	isPrd: ENV === 'production',
	notPrd: ENV !== 'production'
}