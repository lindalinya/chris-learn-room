const util = {
	name: 'Clearlove',
	sayHello: function () {
		const hello = 'Hello I am Lindalin';
		console.log(hello);
	}
}

// exports 是指向module.exports的一个快捷方式
module.exports = util
// 或者
exports.name = util.name;
exports.sayHello = util.sayHello;

console.log("util.js");