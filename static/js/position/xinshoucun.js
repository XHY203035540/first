// 下邳
let centerText = '返回新手村'; //中心必须有‘返回’字样，用来标识是否是中心
// 注意：TLRDC的顺序能变，野怪群中的特殊人物（非群人物）最多只能有2个，因为群人物至少出现2个，加起来不能超4个
// roles的每个对象的name索引于nameToRole文件,level是等级，相同的名字不同地名可能等级不同
let positions = {
	state: '新手村', //所属州
	thisMap: 'xinshoucun', //此js文件名
	mapImg: 'map_new',
	text: centerText,
	tImg: 't_img1', //title的图片
	img: 'site_m1',
	XY: ['40%', '28%'],
	T: {
		text: '出村去下邳',
		map: 'xiapi', //跨州
		tImg: 't_img16',
		img: 'site_m16'
	},
	L: {
		text: '村西荒山',
		tImg: 't_img7',
		img: 'site_m7',
		XY: ['35%', '28%'],
		renwus: [{
			name: '小偷',
			roles: [{
				name: '小偷',
				level: 3
			}]
		}],
		T: {
			text: '左慈山屋',
			tImg: 't_img15',
			img: 'site_m15',
			XY: ['35%', '25%'],
			renwus: [{
				name: '草寇',
				roles: [{
					name: '草寇',
					level: 3
				}]
			}, {
				name: '强盗喽啰',
				roles: [{
					name: '强盗',
					level: 5
				}, {
					name: '歌姬',
					level: 8
				}]
			}],
			T: {
				text: '山北密林',
				tImg: 't_img3',
				img: 'site_m3',
				XY: ['35%', '20%'],
				renwus: [{
					name: '侍卫',
					roles: [{
						name: '侍卫',
						level: 9
					}]
				}],
				T: {
					text: '芒砀山',
					tImg: 't_img6',
					img: 'site_m6',
					XY: ['35%', '17%'],
					renwus: [{
						name: '山贼',
						roles: [{
							name: '山贼',
							level: 5
						}]
					}, {
						name: '左营亲兵',
						roles: [{
							name: '亲兵',
							level: 7
						}, {
							name: '治军校尉',
							level: 11
						}]
					}, {
						name: '右营亲兵',
						roles: [{
							name: '亲兵',
							level: 7
						}, {
							name: '助军校尉',
							level: 12
						}]
					}]
				}
			}
		},
		L: {
			text: '山西洞窟',
			tImg: 't_img13',
			img: 'site_m13',
			XY: ['30%', '28%'],
			renwus: [{
				name: '强盗喽啰',
				roles: [{
					name: '强盗',
					level: 5
				}, {
					name: '歌姬',
					level: 8
				}]
			}, {
				name: '山贼',
				roles: [{
					name: '山贼',
					level: 5
				}]
			}],
			L: {
				text: '洞穴一层',
				tImg: 't_img13',
				img: 'site_m13',
				XY: ['20%', '28%'],
				renwus: [{
					name: '打手',
					roles: [{
						name: '打手',
						level: 10
					}, {
						name: '道姑',
						level: 8
					}]
				}, {
					name: '打手',
					roles: [{
						name: '打手',
						level: 11
					}]
				}],
				D: {
					text: '洞穴二层',
					tImg: 't_img13',
					img: 'site_m13',
					XY: ['20%', '32%'],
					renwus: [{
						name: '流氓',
						roles: [{
							name: '流氓',
							level: 11
						}, {
							name: '舞者',
							level: 8
						}]
					}, {
						name: '打手',
						roles: [{
							name: '打手',
							level: 10
						}, {
							name: '道姑',
							level: 8
						}]
					}],
					D: {
						text: '洞穴三层',
						tImg: 't_img13',
						img: 'site_m13',
						XY: ['20%', '35%'],
						renwus: [{
							name: '流氓',
							roles: [{
								name: '流氓',
								level: 11
							}, {
								name: '舞者',
								level: 8
							}]
						}, {
							name: '流寇',
							roles: [{
								name: '流氓',
								level: 11
							}, {
								name: '打手头目',
								level: 12
							}, {
								name: '大流氓',
								level: 15
							}]
						}],
						D: {
							text: '洞穴四层',
							tImg: 't_img13',
							img: 'site_m13',
							XY: ['20%', '40%'],
							renwus: [{
								name: '逃兵',
								roles: [{
									name: '逃兵',
									level: 14
								}]
							}, {
								name: '兵匪',
								roles: [{
									name: '恶霸',
									level: 14
								}, {
									name: '逃兵',
									level: 14
								}, {
									name: '大流氓',
									level: 15
								}]
							}],
							D: {
								text: '洞穴五层',
								tImg: 't_img13',
								img: 'site_m13',
								XY: ['20%', '40%'],
								renwus: [{
									name: '黄巾贼',
									roles: [{
										name: '黄巾贼',
										level: 16
									}]
								}, {
									name: '黄巾军',
									roles: [{
										name: '黄巾军',
										level: 19
									}, {
										name: '黄巾军官',
										level: 20
									}]
								}],
								R: {
									text: '洞穴暗府',
									tImg: 't_img13',
									img: 'site_m13',
									XY: ['25%', '42%'],
									renwus: [{
										name: '黄巾残恶',
										roles: [{
											name: '黄巾贼',
											level: 16
										}, {
											name: '黄巾军',
											level: 19
										}, {
											name: '黄巾军官',
											level: 20
										}]
									}]
								}
							}
						}
					}
				}
			}
		},
		D: {
			text: '山寨大门',
			tImg: 't_img15',
			img: 'site_m15',
			XY: ['35%', '35%'],
			renwus: [{
				name: '山贼',
				roles: [{
					name: '山贼',
					level: 6
				}]
			}, {
				name: '巨斧手',
				roles: [{
					name: '巨斧手',
					level: 6
				}]
			}, {
				name: '逃兵',
				roles: [{
					name: '逃兵',
					level: 6
				}]
			}],
			D: {
				text: '巨斧手寨',
				tImg: 't_img15',
				img: 'site_m15',
				XY: ['35%', '38%'],
				renwus: [{
					name: '巨斧手',
					roles: [{
						name: '巨斧手',
						level: 6
					}]
				}],
				R: {
					text: '奴隶牢房',
					tImg: 't_img15',
					img: 'site_m15',
					XY: ['38%', '38%'],
					D: {
						text: '巨斧大堂',
						tImg: 't_img15',
						img: 'site_m15',
						XY: ['38%', '40%'],
						renwus: [{
							name: '巨斧侍卫',
							roles: [{
								name: '巨斧手',
								level: 6
							}]
						}]
					}
				}
			},
		}
	},
	R: {
		text: '村东竹林',
		tImg: 't_img5',
		img: 'site_m5',
		XY: ['45%', '28%'],
		renwus: [{
			name: '小偷',
			roles: [{
				name: '小偷',
				level: 3
			}]
		}],
		T: {
			text: '村北山林',
			tImg: 't_img3',
			img: 'site_m3',
			XY: ['45%', '30%'],
			renwus: [{
				name: '小偷',
				roles: [{
					name: '小偷',
					level: 3
				}]
			}],
			T: {
				text: '翠竹山庄',
				tImg: 't_img5',
				img: 'site_m5',
				XY: ['45%', '27%'],
				renwus: [{
					name: '盗贼',
					roles: [{
						name: '盗贼',
						level: 4
					}, {
						name: '盗贼头目',
						level: 6
					}, {
						name: '女贼',
						level: 6
					}]
				}],
				T: {
					text: '翠竹山谷',
					tImg: 't_img6',
					img: 'site_m6',
					XY: ['45%', '24%'],
					renwus: [{
						name: '山贼',
						roles: [{
							name: '山贼',
							level: 6
						}]
					}, {
						name: '恶奴',
						roles: [{
							name: '恶奴',
							level: 4
						}]
					}]
				}
			}
		},
		D: {
			text: '废弃矿场',
			tImg: 't_img6',
			img: 'site_m6',
			XY: ['45%', '35%'],
			renwus: [{
				name: '小偷',
				roles: [{
					name: '小偷',
					level: 3
				}]
			}, {
				name: '盗贼',
				roles: [{
					name: '盗贼',
					level: 4
				}, {
					name: '盗贼头目',
					level: 6
				}, {
					name: '女贼',
					level: 6
				}]
			}, {
				name: '草寇',
				roles: [{
					name: '草寇',
					level: 3
				}]
			}],
			R: {
				text: '南疆山谷',
				tImg: 't_img6',
				img: 'site_m6',
				XY: ['50%', '35%'],
				renwus: [{
					name: '盗贼',
					roles: [{
						name: '盗贼',
						level: 4
					}, {
						name: '盗贼头目',
						level: 6
					}, {
						name: '女贼',
						level: 6
					}]
				}, {
					name: '女贼',
					roles: [{
						name: '女贼',
						level: 4
					}]
				}]
			},
			D: {
				text: '南疆沼泽',
				tImg: 't_img9',
				img: 'site_m9',
				XY: ['45%', '45%'],
				renwus: [{
					name: '盗贼',
					roles: [{
						name: '盗贼',
						level: 4
					}, {
						name: '盗贼头目',
						level: 6
					}, {
						name: '女贼',
						level: 6
					}]
				}, {
					name: '强盗喽啰',
					roles: [{
						name: '强盗',
						level: 5
					}, {
						name: '歌姬',
						level: 8
					}]
				}, {
					name: '逃兵',
					roles: [{
						name: '逃兵',
						level: 14
					}]
				}]
			}
		}
	},
	D: {
		text: '村南草原',
		tImg: 't_img8',
		img: 'site_m8',
		XY: ['40%', '40%'],
		renwus: [{
			name: '盗贼',
			roles: [{
				name: '盗贼',
				level: 4
			}, {
				name: '盗贼头目',
				level: 6
			}, {
				name: '女贼',
				level: 6
			}]
		}, {
			name: '小偷',
			roles: [{
				name: '小偷',
				level: 3
			}]
		}],
		D: {
			text: '荒蛮野林',
			tImg: 't_img3',
			img: 'site_m3',
			XY: ['40%', '45%'],
			renwus: [{
				name: '草寇',
				roles: [{
					name: '草寇',
					level: 3
				}]
			}, {
				name: '恶徒',
				roles: [{
					name: '恶徒',
					level: 5
				}]
			}],
			D: {
				text: '山贼据点',
				tImg: 't_img7',
				img: 'site_m7',
				XY: ['40%', '50%'],
				renwus: [{
					name: '盗贼',
					roles: [{
						name: '盗贼',
						level: 4
					}]
				}, {
					name: '山贼',
					roles: [{
						name: '山贼',
						level: 5
					}]
				}, {
					name: '强盗',
					roles: [{
						name: '强盗',
						level: 7
					}, {
						name: '强盗头目',
						level: 8
					}]
				}]
			}
		}
	}
}
positions.D.R = positions.R.D;
module.exports = positions
