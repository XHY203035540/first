// 延迟函数
let mySetTimeout = function(time, fun) {
	return new Promise((resolve) => {
		setTimeout(() => {
			try {
				resolve(fun());
			} catch (e) {
				resolve();
			}
		}, time)
	})
}
// 验证token若(将)过期则保存 
let ckeckAndRefreshToken = function() {
	// 也就是是否存在token（云函数会自动追加uni.getStorageSync('uni_id_token')的值，
	// 前提是你set过才能追加）以及验证它
	// 如果不存在token我人为写了code为403，如果过期等也会返回非0的code
	let expired = uni.getStorageSync('uni_id_token_expired');
	let token = uni.getStorageSync('uni_id_token');
	let minute = 10;
	if (token && expired < Date.now() + (minute * 60 * 1000)) {
		console.log("token在规定时间", minute, "分钟内要过期了");
		// 如果token在十分钟内将要过期
		uniCloud.callFunction({
			name: "MY-USERFUNCTION",
			data: {
				action: 'checkToken'
			}
		}).then(res => {
			// 如果为0表示验证成功
			if (res.result.token) {
				// 有token说明将要过期自动返回一个新token需要在拦截器中存起来
				// 储存userinfor
				uni.setStorageSync('userInfor', res.result.userInfor);
				// 储存token
				uni.setStorageSync('uni_id_token', res.result.token);
				uni.setStorageSync('uni_id_token_expired', res.result.tokenExpired);
				console.log("更新token了现在的有效期为", new Date(res.result.tokenExpired).toString());
			} else {
				console.log("token暂不用更新");
			}
		});
	}
}
export {
	mySetTimeout,
	ckeckAndRefreshToken
}
