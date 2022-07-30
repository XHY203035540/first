// 这个文件用来存储需要展示数据的信息，比如杂物装备药品
// 必有属性：name、describe,pic，选有属性：price、addition
let medicine = [{
	name: '跌打药',
	describe: '散瘀消肿,强筋健骨，可迅速补充气血。',
	pic: 'i_1',
	price: 50,
	addition: '气血值+500'
}, {
	name: '止血药',
	describe: '止血化瘀,消肿止痛，迅速补充气血。',
	pic: 'i_2',
	price: 60,
	addition: '气血值+1000'
}, {
	name: '金创药',
	describe: '化脓散淤,伤口清毒，可助气血迅速恢复。',
	pic: 'i_3',
	price: 70,
	addition: '气血值+1500'
}, {
	name: '麻沸散',
	describe: '令人麻醉,不畏疼痛，可迅速补充气血。',
	pic: 'i_4',
	price: 80,
	addition: '气血值+2000'
}, {
	name: '酥合散',
	describe: '止痛补虚,理气解毒，可迅速补充气血。',
	pic: 'i_5',
	price: 200,
	addition: '气血值+3000'
}, {
	name: '断续膏',
	describe: '化淤止痛,断骨再生,可迅速补充气血。',
	pic: 'i_6',
	price: 300,
	addition: '气血值+4500'
}, {
	name: '三黄丸',
	describe: '有洁热解毒之效,可迅速补充气血。',
	pic: 'i_7',
	price: 400,
	addition: '气血值+6000'
}, {
	name: '百花丸',
	describe: '集百花之蜜制成,提神醒脑，可讯速补充气血.',
	pic: 'i_8',
	price: 600,
	addition: '气血值+9000'
}, {
	name: '熊胆丸',
	describe: '洁热解毒,强筋健骨，可迅速补充气血。',
	pic: 'i_9',
	price: 800,
	addition: '气血值+12000'
}, {
	name: '首乌丸',
	describe: '有补虚解毒的功效,可迅速补充气血。',
	pic: 'i_10',
	price: 900,
	addition: '气血值+15000'
}, {
	name: '雪参丸',
	describe: '服用后可强身健体,补虚提神,迅速补充气血.',
	pic: 'i_11',
	price: 1000,
	addition: '气血值+20000'
}, {
	name: '小还丹',
	describe: '服此药后,丹田热气升起,精力弥漫，可助气血迅速恢复。',
	pic: 'i_12',
	price: 300,
	addition: '气血值+25%'
}, {
	name: '大还丹',
	describe: '能令人起死回生,有疗治一切内、外伤及增加气血之效。',
	pic: 'i_13',
	price: 450,
	addition: '气血值+40%'
}, {
	name: '护命丹',
	describe: '除百病,益气血，有百毒不侵之功。',
	pic: 'i_14',
	price: 600,
	addition: '气血值+55%'
}, {
	name: '回天丹',
	describe: '稀世珍宝,服用后,可迅速恢复气血。',
	pic: 'i_15',
	price: 800,
	addition: '气血值+70%'
}, {
	name: '九转丹',
	describe: '疗伤圣药,世间罕有，服后,气血可完全恢复,获得重生?',
	pic: 'i_16',
	price: 1000,
	addition: '气血值+100%'
}, {
	name: '回春汤',
	describe: '祛风活血,理气补虚，可助精力迅速恢复。',
	pic: 'i_17',
	price: 50,
	addition: '精力值+500'
}, {
	name: '花蜜酒',
	describe: '唇齿留香,生律止渴，服用可助精力迅速恢复。',
	pic: 'i_18',
	price: 60,
	addition: '精力值+1000'
}, {
	name: '清泉酒',
	describe: '口感甘甜,沁人心脾,服用后可迅速恢复精力。',
	pic: 'i_19',
	price: 70,
	addition: '精力值+1500'
}, {
	name: '菖蒲酒',
	describe: '甜而不腻,辣而不呛,有清头明目、轻身坚骨之功。乃恢复精力之佳酿。',
	pic: 'i_20',
	price: 80,
	addition: '精力值+2000'
}, {
	name: '苦艾酒',
	describe: '芳香浓郁，口感清淡，可助精力迅速恢复。',
	pic: 'i_21',
	price: 200,
	addition: '精力值+3000'
}, {
	name: '花雕酒',
	describe: '馥郁芬芳,甘香醇厚，实为恢复精力之佳酿。',
	pic: 'i_22',
	price: 300,
	addition: '精力值+4500'
}, {
	name: '杜康酒',
	describe: '曹操赋诗:“慨当以康,忧思难忘;何以解忧?惟有杜事“',
	pic: 'i_23',
	price: 400,
	addition: '精力值+6000'
}, {
	name: '虎骨酒',
	describe: '去风定痛,强筋健骨，服后可助精力迅速恢复。',
	pic: 'i_24',
	price: 600,
	addition: '精力值+9000'
}, {
	name: '雄黄酒',
	describe: '经脉大通,祛邪扶正，可迅速恢复精力。',
	pic: 'i_25',
	price: 800,
	addition: '精力值+12000'
}, {
	name: '强生酒',
	describe: '强身健体,补虚壮骨,服后可迅速提升自身精力值。',
	pic: 'i_26',
	price: 900,
	addition: '精力值+15000'
}, {
	name: '万古酒',
	describe: '依大禹时期的秘方配制，为补充精力之圣品。',
	pic: 'i_27',
	price: 1000,
	addition: '精力值+20000'
}, {
	name: '芸香露',
	describe: '香气浓烈,提神清脑,可迅速恢复两成精力。',
	pic: 'i_28',
	price: 300,
	addition: '精力值+25%'
}, {
	name: '红莲露',
	describe: '红莲夜开,汲月之华，道家圣药,可迅速恢复四成精力。',
	pic: 'i_29',
	price: 450,
	addition: '精力值+40%'
}, {
	name: '镇魂露',
	describe: '压惊安神,收魂摄魄,可迅速恢复五成精力。',
	pic: 'i_30 ',
	price: 600,
	addition: '精力值 + 55 % '
}, {
	name: '玄冰露',
	describe: '溶千年玄冰之精,有安魂固魄之效,可迅速恢复七成精力。',
	pic: 'i_31',
	price: 800,
	addition: '精力值+70%'
}, {
	name: '龙涎露',
	describe: '疗伤圣药,服后可迅速恢复十成精力,获得重生。',
	pic: 'i_32',
	price: 1000,
	addition: '精力值+100%'
}, ]
export default medicine