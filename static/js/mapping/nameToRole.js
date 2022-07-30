// 这个js是野怪的id(只用于此map的id,当招降存入数据库中时会有真正的这个role的id)对应属性的map
// ['xx'(id), {}(属性)]，用全游戏的唯一野怪name对应初值
let nameToRoleMap = new Map([
	['打手', {
		upRate: [0.58, 0.78],
		hpRate: [65, 75],
		mpRate: [0, 0],
		powerRate: [80, 100],
		speedRate: [11, 16],
		occupation: 'ws',
		images: ['h_151', 'b_151', 'f_151']
	}],
	['道姑', {
		upRate: [0.62, 0.82],
		hpRate: [88, 98],
		mpRate: [88, 98],
		powerRate: [35, 45],
		speedRate: [22, 32],
		occupation: 'yr',
		images: ['n3n_h', 'n3n_b', 'n3n_f']
	}]
])
export default nameToRoleMap
