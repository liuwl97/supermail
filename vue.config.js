module.exports = {
	//第一行代码：会将这里的配置公共的配置做一些合并
	configureWebpack:{
		resolve:{
			alias:{
				"assets" : "@/assets",
				"components" : "@/components",
				"common" : "@/common",
				"network" : "@/network",
				"views" : "@/views",
			}
		}
	}
}