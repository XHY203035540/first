export default class newMiss {
	miss(isRight = true) {
		// isRight：未中字样是否在右边
		if (isRight) {
			this.style.left = "400rpx";
		} else {
			this.style.left = "-40rpx";
		}
		this.style.visibility = 'visible';
		let tickTop = 6;
		let itv = setInterval(() => {
			this.style.top = `${parseInt(this.style.top)+tickTop}rpx`;
			if (tickTop > 1) {
				tickTop--;
			}
		}, 30)
		setTimeout(() => {
			this.style.visibility = "hidden";
			setTimeout(() => {
				this.style.visibility = "visible";
			}, 50);
		}, 100);
		setTimeout(() => {
			clearInterval(itv);
			setTimeout(() => {
				this.style.visibility = 'hidden';
				this.style.top = '200rpx'
			}, 500)
		}, 500)
	}
	constructor() {
		this.style = {
			visibility: 'hidden',
			top: '200rpx',
			left: '-40rpx',
			width: '74rpx',
			height: '38rpx',
		}
	}
}
