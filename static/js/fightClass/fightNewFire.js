export default class newFire {
	burning() {
		this.style.visibility = 'visible';
		let itv = setInterval(() => {
			let x = this.fireStyle.backgroundPositionX;
			if (parseFloat(x) >= 100) {
				clearInterval(itv);
				this.style.visibility = 'hidden';
				this.fireStyle.backgroundPositionX = '0%';
				return;
			}
			this.fireStyle.backgroundPositionX = `${parseFloat(x) + 100 / 4}%`;
		}, 60);
	}
	constructor(position) {
		this.fireStyle = {
			backgroundPositionX: '0%'
		};
		this.style = {
			visibility: 'hidden',
			left: position.left,
			top: position.top,
		}; //到时候直接在move函数里赋值
		this.burning();
	}
}
