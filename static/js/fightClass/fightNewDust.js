export default class newDust {
	move(position, distance, isFaceToLeft = true) {
		if (!isFaceToLeft) {
			this.style.transform = 'rotateY(180deg)';
		} else {
			this.style.transform = ''
		}
		let defLeft = position.left;
		this.style.left = position.left;
		this.style.top = position.top;
		this.dustStyle.visibility = 'visible';
		let itv = setInterval(() => {
			let x = this.dustStyle.backgroundPositionX;
			if (parseFloat(x) >= 100) {
				clearInterval(itv);
				this.dustStyle.visibility = 'hidden';
				this.dustStyle.backgroundPositionX = '0%';
				return;
			}
			// 总计耗时450毫秒
			this.dustStyle.backgroundPositionX = `${parseFloat(x) + 100 / 3}%`;
		}, 150);
		let dir = this.style.transform ? -1 : 1;
		// 450毫秒内这个itv也得执行完也就是每次变化distance/（450/20）
		let tickLeft = parseInt(parseInt(distance) / 22.5);
		let CItv = setInterval(() => {
			if (Math.abs(parseInt(this.style.left) - parseInt(defLeft)) >= parseInt(distance)) {
				clearInterval(CItv)
			} else {
				this.style.left = `${parseInt(this.style.left)+tickLeft*dir}rpx`
			}
		}, 20);
	}
	constructor() {
		this.dustStyle = {
			visibility: 'hidden',
			left: '0rpx',
			top: '0rpx',
			width: '80rpx',
			height: '40rpx',
			backgroundPositionX: '0%'
		};
		this.style = {
			left: '',
			top: '',
			transform: ''
		}; //到时候直接在move函数里赋值
	}
}
