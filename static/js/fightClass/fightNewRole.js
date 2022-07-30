export default class NewRole {
    beTrapped() {
        if (!this.isAlive) {
            return
        }
        clearInterval(this.shakeItv);
        this.beTrappedStyle.visibility = 'visible';
        let itv = setInterval(() => {
            let x = this.beTrappedStyle.backgroundPositionX;
            if (parseFloat(x) >= 100) {
                clearInterval(itv);
                this.beTrappedStyle.visibility = 'hidden';
                this.beTrappedStyle.backgroundPositionX = '0%';
                return;
            }
            this.beTrappedStyle.backgroundPositionX = `${parseFloat(x) + 100 / 6}%`;
        }, 50);
    }
    eyeFlash() {
        clearInterval(this.shakeItv);
        this.eyeStyle.visibility = 'visible';
        let itv = setInterval(() => {
            let x = this.eyeStyle.backgroundPositionX;
            if (x == '100%') {
                clearInterval(itv);
                this.eyeStyle.visibility = 'hidden';
                this.eyeStyle.backgroundPositionX = '0%';
                return;
            }
            this.eyeStyle.backgroundPositionX = `${parseInt(x) + 20}%`;
        }, 50);
    }
    reset(isNeedClearItv = true) {
        if (!this.isAlive) {
            // 用是否在抖动判定当前是否已经处于reset状态
            return
        }
        //重置人物函数
        let visi = this.bodyStyle.visibility; // 不赋值可见性
        this.headStyle = {
            left: '0rpx',
            top: '0rpx'
        };
        this.bodyStyle = JSON.parse(JSON.stringify(this.bodyDefStyle));
        this.footStyle = JSON.parse(JSON.stringify(this.footDefStyle));
        this.headStyle.visibility = visi;
        this.bodyStyle.visibility = visi;
        this.footStyle.visibility = visi;
        this.footMode = 'left';
        this.bodyMode = 'left';
        if (isNeedClearItv) {
            clearInterval(this.shakeItv);
        }
        // 单纯只是立定：立定时候body美观一点
        let offBodyTop = this.occupation == 'yr' ? -4 : this.occupation == 'wr' ? -4 : 0;
        this.bodyStyle.top = `${parseInt(this.bodyDefStyle.top) + offBodyTop}rpx`;
    }
    shake() {
        if (!this.isAlive) {
            return
        }
        clearInterval(this.shakeItv);
        this.shakeItv = setInterval(() => {
            if (this.bodyStyle.top == this.bodyDefStyle.top) {
                this.bodyStyle.top = `${parseInt(this.bodyDefStyle.top) - 4}rpx`;
            } else {
                this.bodyStyle.top = this.bodyDefStyle.top;
            }
        }, this.tikeTime);
    }
    move() {
        if (!this.isAlive) {
            return
        }
        // 移动函数
        // 停止抖动
        clearInterval(this.shakeItv)
        if (this.occupation == 'yr') {
            return;
        }
        this.footMode = 'right';
        // 身子是不变的
        this.bodyMode = 'left';
        this.bodyStyle = JSON.parse(JSON.stringify(this.bodyDefStyle));
        //
        let offFootLeft = this.occupation == 'wr' ? 16 : 0;
        let offFootWidth = this.occupation == 'wr' ? -12 : 0;
        this.footStyle.left = `${2 + offFootLeft}rpx`;
        this.footStyle.width = `${62 + offFootWidth}rpx`;
    }
    moveStraight(isToLeft = true, distance, speed = 30) {
        // 每30rpx花费20mm
        setTimeout(() => {
            this.move();
            let dir = isToLeft ? -1 : 1;
            let defLeft = parseInt(this.style.left);
            let itv = setInterval(() => {
                if (Math.abs(parseInt(this.style.left) - defLeft) >= distance) {
                    this.reset(false);
                    this.shake();
                    clearInterval(itv)
                    this.style.left = `${defLeft + distance * dir}rpx`;
                    return
                }
                this.style.left = `${parseInt(this.style.left) + speed * dir}rpx`;
            }, 20);
        })
    }
    async thrust(isSheMing = false, isNeedReset = true) {
        if (!this.isAlive) {
            return
        }
        // 攻击动作函数
        // 停止抖动
        clearInterval(this.shakeItv)
            //
        this.bodyMode = 'right';
        this.footMode = 'right';
        //
        let offBodyWidth = this.occupation == 'yr' ? -6 : this.occupation == 'wr' ? -6 : 0;
        let offBodyLeft = this.occupation == 'yr' ? 6 : this.occupation == 'wr' ? 10 : 0;
        let offBodyTop = this.occupation == 'yr' ? -2 : 0;
        let offFootLeft = this.occupation == 'yr' ? 31 : this.occupation == 'wr' ? 24 : 0;
        let offFootWidth = this.occupation == 'yr' ? -6 : this.occupation == 'wr' ? -8 : 0;
        this.bodyStyle.width = `${130 + offBodyWidth}rpx`;
        this.bodyStyle.left = `${4 + offBodyLeft}rpx`;
        this.bodyStyle.top = `${64+offBodyTop}rpx`;
        this.footStyle.left = `${-14 + offFootLeft}rpx`;
        this.footStyle.width = `${62 + offFootWidth}rpx`;
        let time = 300;
        if (!(this.occupation == 'yr')) {
            this.outBlood();
        } else {
            this.bodyStyle.top = '47rpx';
        }
        if (isSheMing) {
            time = 800;
        }
        if (isNeedReset) {
            setTimeout(() => {
                this.reset();
            }, time);
        }
    }
    async beSheMing() {
        if (!this.isAlive) {
            return
        }
        clearInterval(this.shakeItv);
        this.beSheMingStyle.visibility = 'visible';
        setTimeout(() => {
            this.beSheMingStyle.visibility = 'hidden';
            setTimeout(() => {
                this.beSheMingStyle.visibility = 'visible';
                this.beSheMingStyle.width = `${parseInt(this.beSheMingStyle.width) * 2}rpx`;
                this.beSheMingStyle.left = '-138rpx';
                setTimeout(() => {
                    this.beSheMingStyle.left = '-260rpx';
                    setTimeout(() => {
                        this.outBlood();
                        // 最后需要归位
                        this.beSheMingStyle.visibility = 'hidden';
                        this.beSheMingStyle.left = '62rpx';
                        this.beSheMingStyle.width = '200rpx';
                        this.injured0();
                    }, 50);
                }, 50);
            }, 50);
        }, 50);
    }
    injured0() {
        if (!this.isAlive) {
            return
        }
        // 被伤害时的后突动作0
        clearInterval(this.shakeItv)
        this.headStyle.left = '4rpx';
        this.bodyStyle.left = `${parseInt(this.bodyDefStyle.left) - 8}rpx`;
    }
    injured1() {
        if (!this.isAlive) {
            return
        }
        // 被伤害时的后突动作1，用于排山倒海的第二个受伤动作
        clearInterval(this.shakeItv)
        this.headStyle.left = '-4rpx';
        this.bodyStyle = JSON.parse(JSON.stringify(this.bodyDefStyle));
    }
    injured2(isHuFeng = false) {
        if (!this.isAlive) {
            return
        }
        // 被伤害时的后突动作2，用于被妖火燎原的动作
        clearInterval(this.shakeItv)
        this.headStyle.left = '-12rpx';
        this.bodyStyle.left = `${parseInt(this.bodyDefStyle.left) - 6}rpx`;
        if (!isHuFeng) {
            // 如果不是呼风唤雨就归位（呼风唤雨要连续变位所以不用归位）
            setTimeout(() => {
                this.headStyle.left = '0rpx';
                this.bodyStyle.left = this.bodyDefStyle.left;
            }, 2500);
        }
    }
    injured3() {
        if (!this.isAlive) {
            return
        }
        // 被伤害时的后突动作3，用于被呼风唤雨的另一个动作
        clearInterval(this.shakeItv);
        this.headStyle.left = '4rpx';
        this.footStyle.left = `${parseInt(this.footDefStyle.left) - 6}rpx`;
        setTimeout(() => {
            this.headStyle.left = '0rpx';
            this.footStyle.left = this.footDefStyle.left;
        }, 1600);
    }
    bePai() {
        if (!this.isAlive) {
            return
        }
        let num = 0;
        let itv = setInterval(() => {
            if (num % 2) {
                this.outBlood(true);
            }
            this[`injured${num++ % 2}`]();
        }, 100);
        setTimeout(() => {
            clearInterval(itv);
            setTimeout(() => {
                this.reset();
            }, 1000);
        }, 1000);
    }
    gain() {
        clearInterval(this.shakeItv);
        this.gainFlashStyle.visibility = 'visible';
        let itv = setInterval(() => {
            let x = this.gainFlashStyle.backgroundPositionX;
            if (parseFloat(x) >= 100) {
                clearInterval(itv);
                this.gainFlashStyle.visibility = 'hidden';
                this.gainFlashStyle.backgroundPositionX = '0%';
                return;
            }
            this.gainFlashStyle.backgroundPositionX = `${parseFloat(x) + 100 / 7}%`;
        }, 50);
    }
    beHui() {
        if (!this.isAlive) {
            return
        }
        this.gainFlashStyle.left = '-34rpx';
        this.gain();
        setTimeout(() => {
            this.leiStyle.visibility = 'visible';
            this.setLeiNum(3);
            clearInterval(this.huiItv);
            this.huiItv = setInterval(() => {
                if (this.leiStyle.backgroundPositionX == '0%') {
                    this.leiStyle.backgroundPositionX = '100%';
                } else {
                    this.leiStyle.backgroundPositionX = '0%';
                }
            }, 80);
        }, 250);
        setTimeout(() => {
            this.gainFlashStyle.left = '0rpx';
        }, 400);
    }
    setLeiNum(num) {
        clearInterval(this.shakeItv);
        this.leiNumStyle.backgroundPositionX = `${4.76 * num}%`;
        console.log(this.nikename + '被setlei了', this.leiNumStyle.backgroundPositionX);
        this.leiNumStyle.visibility = 'visible';
        if (this.style.transform) {
            // 如果发现人物是翻转的，数字也翻转来抵消，字体不能翻转
            this.leiNumStyle.transform = 'rotateY(180deg)';
        }
    }
    async outBlood(isHead = false) {
        if (!this.isAlive) {
            return
        }
        let dir = 1;
        if (isHead) {
            // 是否是被排山倒海的从头出来的血，否则就是舍命和被舍命的血（一个位置）
            this.bloodStyle.top = '0rpx';
            this.bloodStyle.transform = '';
            this.bloodStyle.left = '50rpx';
            dir = -1;
        }
        this.bloodStyle.visibility = 'visible';
        setTimeout(() => {
            this.bloodStyle.backgroundPositionX = '100%';
            this.bloodStyle.left = `${parseInt(this.bloodStyle.left) - 20 * dir}rpx`;
            setTimeout(() => {
                this.bloodStyle.top = '30rpx';
                this.bloodStyle.visibility = 'hidden';
                this.bloodStyle.backgroundPositionX = '0%';
                this.bloodStyle.left = '-40rpx';
                this.bloodStyle.transform = 'rotateY(180deg)';
            }, 50)
        }, 50)
    }
    beLiPi() {
        if (!this.isAlive) {
            return
        }
        clearInterval(this.shakeItv);
        this.beLiPiStyle.visibility = 'visible';
        let itv = setInterval(() => {
            let x = this.beLiPiStyle.backgroundPositionX;
            if (parseFloat(x) >= 100) {
                clearInterval(itv);
                this.beLiPiStyle.visibility = 'hidden';
                this.beLiPiStyle.backgroundPositionX = '0%';
                return;
            }
            this.beLiPiStyle.backgroundPositionX = `${parseFloat(x) + 100 / 4}%`;
        }, 100);
    }
    async beWuLei() {
        if (!this.isAlive) {
            return
        }
        this.injured0();
        this.simpleLei();
        setTimeout(() => {
            this.injured1();
            this.simpleLei(52, -42);
            setTimeout(() => {
                this.injured0();
                this.simpleLei(-48, -82);
                setTimeout(() => {
                    this.injured1();
                    this.simpleLei(44, -130);
                    setTimeout(() => {
                        this.injured0();
                        this.simpleLei(-48, -82);
                        setTimeout(() => {
                            this.reset();
                        }, 700)
                    }, 250)
                }, 550)
            }, 250)
        }, 500)
    }
    simpleLei(left = -10, top = -90) {
        if (!this.isAlive) {
            return
        }
        // 单次落雷,默认落中间
        this.beWuLeiStyle.left = `${left}rpx`;
        this.beWuLeiStyle.top = `${top}rpx`;
        this.beWuLeiStyle.visibility = 'visible';
        let itv = setInterval(() => {
            let x = this.beWuLeiStyle.backgroundPositionX;
            if (parseFloat(x) >= 100) {
                clearInterval(itv);
                this.beWuLeiStyle.visibility = 'hidden';
                this.beWuLeiStyle.backgroundPositionX = '0%';
                return;
            }
            this.beWuLeiStyle.backgroundPositionX = `${parseFloat(x) + 100 / 3}%`;
        }, 50);
    }
    beHuFeng() {
        if (!this.isAlive) {
            return
        }
        this.injured2(true);
        setTimeout(() => {
            this.injured3();
            setTimeout(() => {
                this.reset();
            }, 800);
        }, 600);
    }
    deleteSkill(textIndex) {
        // 尝试去删除，删除了则返回index以便于外面的$delete动态重绘
        let index = this.skillTextStyle.findIndex(item => {
            return item.textIndex == textIndex;
        });
        if (index != -1) {
            clearInterval(this.skillTextStyle[index].itv);
            this.skillTextStyle.splice(index, 1)
                // 少了一个位置补齐
            this.skillTextCStyle.left = `${parseInt(this.skillTextCStyle.left) + 58}rpx`;
        }
    }
    changeHP(hp, mp = 0, removeLei = false) {
        let addPercent = hp <= 0 ? 0 : 11;
        if ((!this.isAlive && !addPercent) || (!this.isAlive && !this.isLord)) {
            return
        }
        this.numberCStyle.visibility = 'visible';
        // updateHpMp会返回isAlive如果死了就返回false
        let deadId = false;
        let defDead = this.isAlive;
        if (!this.updateHpMp(hp, mp)) {
            // 如果死了
            this.dead(removeLei);
            deadId = this.id;
        } else {
            if (defDead != this.isAlive) {
                this.reBorn();
            }
        }
        hp = String(hp);
        let rotateDir = -1;
        let addL = 0;
        if (this.style.transform) {
            // 如果发现人物是翻转的，大盒子也翻转来抵消，数字不能翻转
            this.numberCStyle.transform = 'rotateY(180deg)';
            rotateDir = 1;
            addL = 70;
        }
        this.numberCStyle.left = `${parseInt(12*(hp.length-1) * rotateDir+addL)}rpx`;
        for (let i = 0; i < hp.length; i++) {
            let aNum = parseInt(hp[i]);
            let isNann = isNaN(aNum);
            if (isNann) {
                aNum = 10;
            }
            let aNumStyle = {
                top: `${i * 12}rpx`,
                left: `${i * 30}rpx`,
                width: '43rpx',
                height: '100%',
                backgroundPositionX: `${(aNum+addPercent) * 4.76}%`
            };
            this.numberStyle.push(aNumStyle);
            let itv = setInterval(() => {
                try {
                    if (parseInt(this.numberStyle[i].top) <= -12) {
                        clearInterval(itv);
                        setTimeout(() => {
                            try {
                                this.numberStyle[i].top =
                                    `${parseInt(this.numberStyle[i].top) + 12}rpx`;
                            } catch (e) {}
                        }, 50);
                        if (i == this.numberStyle.length - 1) {
                            setTimeout(() => {
                                // 最后数字格式化
                                this.numberCStyle.visibility = 'hidden';
                                this.numberStyle = [];
                            }, 500);
                        }
                    } else {
                        this.numberStyle[i].top = `${parseInt(this.numberStyle[i].top) - 12}rpx`;
                    }
                } catch (e) {}
            }, 50);
        }
        return deadId;
    }
    doAllTextItv() {
        if (!this.isAlive) {
            return
        }
        for (let t of this.skillTextStyle) {
            let time = 60
            let dir = 1;
            let ran = parseInt(Math.random() * time)
            setTimeout(() => {
                t.itv = setInterval(() => {
                    if (parseInt(t.style.marginTop) > 10) {
                        dir = -1;
                    } else if (parseInt(t.style.marginTop) < 0) {
                        dir = 1;
                    }
                    t.style.marginTop = `${parseInt(t.style.marginTop) + 4 * dir}rpx`;
                }, time);
            }, ran)
        }
    }
    setSkillText(textIndex) {
        if (!this.isAlive) {
            return
        }
        // textIndex对应字体图片的顺序：0封1围2攻3乱
        // 特殊情况处理//////////
        let inc = this.skillTextStyle.some(item => {
            return item.textIndex == textIndex;
        });
        // 封、乱不破坏围更合理// 如果包含了这个字就退出,这个得放在破坏围操作以后
        if (inc) {
            return;
        }
        // ///////////
        let skillTextStyleLen = this.skillTextStyle.length;
        let newText = {
            marginTop: '0rpx',
            width: '58rpx',
            height: '66rpx',
            backgroundPositionX: `${textIndex * (100 / 7)}%`
        };
        if (this.style.transform) {
            // 如果发现人物是翻转的，字体也翻转来抵消，字体不能翻转
            newText.transform = 'rotateY(180deg)';
        }
        let dir = 1;
        this.skillTextCStyle.left = `${parseInt(this.skillTextCStyle.left) - 58}rpx`;
        this.skillTextStyle.unshift({
            itv: null,
            textIndex,
            style: newText
        });
    }
    recruit() {
        if (!this.isAlive) {
            return
        }
        // 招降
        clearInterval(this.shakeItv);
        this.chatStyle.visibility = 'visible';
        let itv = setInterval(() => {
            let x = this.chatStyle.backgroundPositionX;
            if (parseFloat(x) >= 100) {
                clearInterval(itv);
                this.chatStyle.visibility = 'hidden';
                this.chatStyle.backgroundPositionX = '0%';
                return;
            }
            this.chatStyle.backgroundPositionX = `${parseFloat(x) + 100 / 5}%`;
        }, 200);
    }
    dead(removeLei = false) {
        this.isAlive = false;
        // 死了以后的一些处理
        this.headStyle.visibility = 'hidden';
        this.bodyStyle.visibility = 'hidden';
        this.footStyle.visibility = 'hidden';
        this.skillTextStyle = []; //技能字体清除
        // 毁天灭地地雷去除
        if (removeLei) {
            clearInterval(this.huiItv);
            this.leiStyle.visibility = 'hidden';
            this.hasDone = false;
        }
        //
        clearInterval(this.shakeItv);
        this.deadFlashStyle.visibility = 'visible';
        this.graveStyle.visibility = 'visible';
        let itv = setInterval(() => {
            let x = this.deadFlashStyle.backgroundPositionX;
            if (parseFloat(x) >= 100) {
                clearInterval(itv);
                this.deadFlashStyle.visibility = 'hidden';
                this.deadFlashStyle.backgroundPositionX = '0%';
                return;
            }
            this.deadFlashStyle.backgroundPositionX = `${parseFloat(x) + 100 / 9}%`;
        }, 50);
    }
    reBorn() {
        this.graveStyle.visibility = 'hidden';
        this.headStyle.visibility = 'visible';
        this.bodyStyle.visibility = 'visible';
        this.footStyle.visibility = 'visible';
        this.reset();
        this.shake();
    }
    miss() {
        if (!this.isAlive) {
            return
        }
        this.missStyle.visibility = 'visible'
        let itv = setInterval(() => {
            this.missStyle.top = `${parseInt(this.missStyle.top)-3}rpx`
        }, 50)
        setTimeout(() => {
            clearInterval(itv);
            setTimeout(() => {
                this.missStyle.visibility = 'hidden';
                this.missStyle.top = '-36rpx'
            }, 500)
        }, 100)
    }
    showArrow(isShake = true) {
        this.arrowStyle.visibility = 'visible';
        if (isShake) {
            this.arrowItv = setInterval(() => {
                if (parseInt(this.arrowStyle.left) >= 80) {
                    this.arrowStyle.left = '70rpx';
                } else {
                    this.arrowStyle.left = `${parseInt(this.arrowStyle.left)+3}rpx`
                }
            }, 80)
        }
    }
    hiddenArrow() {
        this.arrowStyle.visibility = 'hidden';
        clearInterval(this.arrowItv);
    }
    updateHpMp(hp = 0, mp = 0, maxhp = this.maxhp, maxmp = this.maxmp) {
        this.hp = this.hp + hp > maxhp ? maxhp : this.hp + hp;
        if (this.hp <= 0) {
            this.isAlive = false;
            this.hp = 0;
        } else {
            this.isAlive = true;
        }
        this.maxhp = maxhp;
        this.mp = this.mp + mp > maxmp ? maxmp : this.mp + mp;
        if (this.mp < 0) {
            this.mp = 0;
        }
        this.maxmp = maxmp;
        this.hpStyle.width = `${parseInt((this.hp/maxhp)*100)}%`;
        this.mpStyle.width = `${parseInt((this.mp/maxmp)*100)}%`;
        return this.isAlive
    }
    constructor(roleInfor, table, isLord, occupation, images, position, isUsTeam) {
        this.table = table; //在数据库中的表名，通过table+id方式就可以防止不同数据库中人物重key值
        this.isYin = false; //是否是使用了暗度陈仓影藏了版面
        //
        // 
        this.hasDone = false;
        this.skills = roleInfor.skills;
        this.level = roleInfor.level;
        this.speed = roleInfor.speed;
        this.hp = roleInfor.hp;
        this.maxhp = roleInfor.maxhp;
        this.mp = roleInfor.mp;
        this.maxmp = roleInfor.maxmp;
        this.hpStyle = {
            height: '40%',
            borderBottom: 'solid 4rpx #E7DEBE',
            backgroundColor: '#E30B0C'
        }
        this.mpStyle = {
            height: '40%',
            backgroundColor: '#0802C1'
        }
        this.hpStyle.width = `${parseInt((roleInfor.hp/roleInfor.maxhp)*100)}%`;
        this.mpStyle.width = `${parseInt((roleInfor.mp/roleInfor.maxmp)*100)}%`;
        this.hpMpStyle = {
            visibility: 'visible',
            zIndex: '50',
            top: '-30rpx',
            left: '-8rpx',
            width: '88rpx',
            height: '22rpx',
            border: 'solid 4rpx #E7DEBE',
            backgroundColor: 'black',
            transform: ''
        }
        this.arrowItv = null;
        this.arrowStyle = {
            visibility: 'hidden',
            top: '50rpx',
            left: '70rpx',
            width: '30rpx',
            height: '30rpx'
        }
        this.missStyle = {
            visibility: 'hidden',
            top: '-36rpx',
            left: '0rpx',
            width: '74rpx',
            height: '38rpx',
            transform: ''
        }
        this.graveType = isLord ? 1 : 2; //主将和副将坟不同1主将2副将或其他
        this.isLord = isLord; //是否是主公
        this.graveStyle = {
            visibility: 'hidden',
            top: '80rpx',
            left: '-24rpx',
            width: '120rpx',
            height: '60rpx'
        };
        this.deadFlashStyle = {
            visibility: 'hidden',
            top: '0rpx',
            left: '-26rpx',
            width: '134rpx',
            height: '140rpx',
            backgroundPositionX: '0%'
        };
        this.chatStyle = {
            visibility: 'hidden',
            top: '-14rpx',
            left: '76rpx',
            width: '94rpx',
            height: '58rpx',
            backgroundPositionX: '0%'
        };
        this.skillTextStyle = [];
        this.skillTextCStyle = {
            // skillTextStyle的容器
            visibility: 'hidden',
            top: '6rpx',
            left: '0rpx',
            height: '100rpx'
        };
        //
        this.numberStyle = [];
        this.numberCStyle = {
            // numberCStyle的容器
            visibility: 'hidden',
            top: '-50rpx',
            left: '0rpx',
            height: '38rpx'
        };
        this.beWuLeiStyle = {
            visibility: 'hidden',
            top: '-90rpx',
            left: '-10rpx',
            width: '118rpx',
            height: '220rpx',
            backgroundPositionX: '0%'
        };
        this.beLiPiStyle = {
            visibility: 'hidden',
            top: '10rpx',
            left: '-14rpx',
            width: '100rpx',
            height: '120rpx',
            backgroundPositionX: '0%'
        };
        this.bloodStyle = {
            visibility: 'hidden',
            top: '30rpx',
            left: '-40rpx',
            width: '76rpx',
            height: '76rpx',
            backgroundPositionX: '0%',
            transform: 'rotateY(180deg)'
        };
        this.leiNumStyle = {
            visibility: 'hidden',
            top: '62rpx',
            left: '-46rpx',
            width: '43rpx',
            height: '34rpx',
            backgroundPositionX: '0%'
        };
        this.huiItv = null; //毁天灭地炸弹的itv
        this.leiStyle = {
            visibility: 'hidden',
            top: '80rpx',
            left: '-16rpx',
            width: '32rpx',
            height: '42rpx',
            backgroundPositionX: '0%'
        };
        this.gainFlashStyle = {
            visibility: 'hidden',
            top: '-36rpx',
            left: '0rpx',
            width: '90rpx',
            height: '172rpx',
            backgroundPositionX: '0%'
        };
        this.beSheMingStyle = {
            visibility: 'hidden',
            top: '66rpx',
            left: '62rpx',
            width: '200rpx',
            height: '2rpx',
            backgroundColor: '#F6F5F6'
        };
        this.beTrappedStyle = {
            visibility: 'hidden',
            top: '-36rpx',
            left: '-18rpx',
            width: '120rpx',
            height: '172rpx',
            backgroundPositionX: '0%'
        };
        this.eyeStyle = {
            visibility: 'hidden',
            top: '-52rpx',
            left: '-76rpx',
            width: '218rpx',
            height: '224rpx',
            backgroundPositionX: '0%'
        };
        //
        this.isAlive = true;
        this.nikename = roleInfor.nikename;
        this.occupation = occupation;
        this.id = roleInfor.id;
        this.style = {
            zIndex: 10,
            left: position.left,
            top: position.top,
            height: '126rpx',
            width: '80rpx',
        };
        this.canTap = false; //默认不能被点击
        this.isUsTeam = isUsTeam; //是否是玩家队伍
        if (isUsTeam) {
            // 如果人物是我队
            this.style.transform = 'rotateY(180deg)';
            this.missStyle.transform = 'rotateY(180deg)';
            this.hpMpStyle.transform = 'rotateY(180deg)';
        } else {
            this.style.transform = '';
        }
        // head
        this.headImg = images[0];
        this.headStyle = {
            visibility: 'visible',
            left: '0rpx',
            top: '0rpx'
        };
        // body
        this.bodyImg = images[1];
        this.bodyMode = 'left';
        this.offBodyTop = this.occupation == 'yr' ? -12 : this.occupation == 'wr' ? 0 : 0;
        this.offBodyLeft = this.occupation == 'yr' ? 14 : this.occupation == 'wr' ? 14 : 0;
        this.offBodyWidth = this.occupation == 'yr' ? 34 : this.occupation == 'wr' ? 2 : 0;
        this.bodyStyle = {
            visibility: 'visible',
            top: `${64 + this.offBodyTop}rpx`,
            left: `${-8 + this.offBodyLeft}rpx`,
            width: `${72 + this.offBodyWidth}rpx`,
            height: '52rpx'
        };
        this.bodyDefStyle = JSON.parse(JSON.stringify(this.bodyStyle)); //储存站立状态的bodystyle
        this.tikeTime = this.occupation == 'yr' ? 500 : this.occupation == 'wr' ? 450 : 350;
        setTimeout(() => {
                this.shake();
            }, 500)
            // foot
        this.footImg = images[2];
        this.footMode = 'left';
        this.offFootTop = this.occupation == 'yr' ? -2 : 0;
        this.offFootLeft = this.occupation == 'yr' ? 8 : this.occupation == 'wr' ? 10 : 0;
        this.offFootWidth = this.occupation == 'yr' ? -12 : this.occupation == 'wr' ? -18 : 0;
        this.offFootHeight = this.occupation == 'yr' ? -6 : this.occupation == 'wr' ? -4 : 0;
        this.footStyle = {
            visibility: 'visible',
            top: `${88 + this.offFootTop}rpx`,
            left: `${8 + this.offFootLeft}rpx`,
            width: `${62 + this.offFootWidth}rpx`,
            height: `${36 + this.offFootHeight}rpx`
        };
        this.footDefStyle = JSON.parse(JSON.stringify(this.footStyle)); //储存站立状态的footstyle
        if (this.hp <= 0) {
            this.hpMpStyle.visibility = 'hidden';
            this.dead();
        }
    }
}