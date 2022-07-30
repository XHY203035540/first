import {
	ckeckAndRefreshToken
} from "@/static/js/common/globalFunction.js"
// 拦截器，监听路由跳转，如果没登录，不允许任何非登录界面
export default function() {
	console.log("初始化拦截器");
	let types = ["navigateTo", "redirectTo", "switchTab", "reLaunch"];
	// 监听api跳转
	types.forEach(item => {
		uni.addInterceptor(item, {
			invoke(event) {
				// 如果能登录或在登录页面
				// token的过期时间
				let url = event.url.split("?")[0];
				let expired = uni.getStorageSync('uni_id_token_expired');
				let token = uni.getStorageSync('uni_id_token');
				let ok = (token && expired > (Date.now())) || url == "/pages/login/login";
				if (!ok) {
					console.log("api拦截：无效token");
					event.url = '/pages/login/login';
					setTimeout(() => {
						uni.showModal({
							content: '登录状态失效，请重新登录',
							showCancel: false,
						});
					});
				} else {
					// token能用，如果即将过期就更新
					ckeckAndRefreshToken();
				}
			}
		})
	});
	// 监听url地址跳转
	let expired1 = uni.getStorageSync('uni_id_token_expired');
	let token1 = uni.getStorageSync('uni_id_token');
	let ok1 = token1 && expired1 > (Date.now());
	if (!ok1) {
		console.log("url拦截：无效token");
		// setTimeout(() => {
		uni.redirectTo({
			url: '/pages/login/login',
		})
		// });
	} else {
		ckeckAndRefreshToken();
	}
}
