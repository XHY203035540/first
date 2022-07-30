export default class NewHorse {
	gain() {
		this.gainFlashStyle1.visibility = 'visible';
		this.gainFlashStyle2.visibility = 'visible';
		let itv = setInterval(() => {
			let x = this.gainFlashStyle1.backgroundPositionX;
			if (parseFloat(x) >= 100) {
				clearInterval(itv);
				this.gainFlashStyle1.visibility = 'hidden';
				this.gainFlashStyle1.backgroundPositionX = '0%';
				return;
			}
			this.gainFlashStyle1.backgroundPositionX = `${parseFloat(x) + 100 / 7}%`;
		}, 50);
		setTimeout(() => {
			let itv2 = setInterval(() => {
				let x = this.gainFlashStyle2.backgroundPositionX;
				if (parseFloat(x) >= 100) {
					clearInterval(itv2);
					this.gainFlashStyle2.visibility = 'hidden';
					this.gainFlashStyle2.backgroundPositionX = '0%';
					return;
				}
				this.gainFlashStyle2.backgroundPositionX = `${parseFloat(x) + 100 / 7}%`;
			}, 50);
		}, 50);
	}
	constructor(nameIndex, id, isUsTeam = true) {
		this.isUsTeam = isUsTeam;
		this.horseStyle = {
			left: '0rpx',
			top: '0rpx',
			width: '172rpx',
			height: '172rpx'
		};
		// nameIndex是马图片的数字有1-9
		this.gainFlashStyle1 = {
			visibility: 'hidden',
			top: '0rpx',
			left: '8rpx',
			width: '90rpx',
			height: '172rpx',
			backgroundPositionX: '0%'
		};
		this.gainFlashStyle2 = {
			visibility: 'hidden',
			top: '0rpx',
			left: '80rpx',
			width: '90rpx',
			height: '172rpx',
			backgroundPositionX: '0%'
		};
		this.id = id;
		this.nameIndex = nameIndex;
		this.style = {
			left: isUsTeam ? '572rpx' : '250rpx',
			top: '112rpx'
		};
		if (!isUsTeam) {
			this.style.transform = 'rotateY(180deg)';
		}
		setTimeout(() => {
			this.gain(); //第一次光
			this.gainItv = setInterval(() => {
				this.gain();
			}, 10000);
		}, parseInt(Math.random() * 4000));
	}
}
