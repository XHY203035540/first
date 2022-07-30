// 下邳
let centerText = '返回许昌'; //中心必须有‘返回’字样，用来标识是否是中心
// 注意：TLRDC能变，野怪群中的特殊人物（非群人物）最多只能有2个，因为群人物至少出现2个，加起来不能超4个
// roles的每个对象的name索引于nameToRole文件,level是等级，相同的名字不同地名可能等级不同
let positions = {
	state: '豫州', //所属州
	thisMap: 'xuchang', //此js文件名
	mapImg: 'map_43',
	text: centerText,
	tImg: 't_img16', //title的图片
	img: 'site_m16',
	XY: ['45%', '35%'],
	D: {
		text: '许昌郊外',
		tImg: 't_img4',
		img: 'site_m4',
		XY: ['45%', '40%'],
		renwus: [{
			name: '流氓',
			roles: [{
				name: '流氓',
				level: 12
			}, {
				name: '舞者',
				level: 8
			}]
		}, {
			name: '逃兵',
			roles: [{
				name: '逃兵',
				level: 15
			}]
		}, {
			name: '乡勇',
			roles: [{
				name: '乡勇',
				level: 15
			}]
		}, {
			name: '地痞',
			roles: [{
				name: '地痞',
				level: 25
			}]
		}],
		L: {
			text: '许昌西郊',
			tImg: 't_img4',
			img: 'site_m4',
			XY: ['40%', '40%'],
			renwus: [{
				name: '步兵',
				roles: [{
					name: '士兵',
					level: 16
				}, {
					name: '军官',
					level: 18
				}, {
					name: '将官',
					level: 20
				}, {
					name: '李典',
					level: 26
				}]
			}, {
				name: '卫兵',
				roles: [{
					name: '兵长',
					level: 18
				}, {
					name: '军官',
					level: 18
				}, {
					name: '将官',
					level: 20
				}]
			}, {
				name: '街匪',
				roles: [{
					name: '街匪',
					level: 30
				}]
			}],
			T: {
				text: '长社',
				tImg: 't_img4',
				img: 'site_m4',
				XY: ['40%', '35%'],
				renwus: [{
					name: '步兵',
					roles: [{
						name: '士兵',
						level: 16
					}, {
						name: '军官',
						level: 18
					}, {
						name: '将官',
						level: 20
					}, {
						name: '李典',
						level: 26
					}]
				}, {
					name: '卫兵',
					roles: [{
						name: '兵长',
						level: 18
					}, {
						name: '军官',
						level: 18
					}, {
						name: '将官',
						level: 20
					}]
				}, {
					name: '贪官',
					roles: [{
						name: '贪官',
						level: 30
					}]
				}, {
					name: '假道学',
					roles: [{
						name: '假道学',
						level: 35
					}]
				}],
				T: {
					text: '中牟',
					tImg: 't_img4',
					img: 'site_m4',
					XY: ['40%', '35%'],
					renwus: [{
						name: '巡逻兵',
						roles: [{
							name: '士兵',
							level: 14
						}, {
							name: '军官',
							level: 18
						}]
					}, {
						name: '治安兵',
						roles: [{
							name: '士兵',
							level: 16
						}, {
							name: '兵长',
							level: 18
						}]
					}, {
						name: '污吏',
						roles: [{
							name: '污吏',
							level: 35
						}]
					}, {
						name: '酷吏',
						roles: [{
							name: '酷吏',
							level: 35
						}]
					}],
					T: {
						text: '官渡',
						tImg: 't_img4',
						img: 'site_m4',
						map: 'luoyang'
					}
				}
			},
			L: {
				text: '许昌兵站',
				tImg: 't_img15',
				img: 'site_m15',
				XY: ['35%', '40%'],
				renwus: [{
					name: '弓箭兵',
					roles: [{
						name: '士兵',
						level: 16
					}, {
						name: '军官',
						level: 18
					}, {
						name: '将官',
						level: 20
					}, {
						name: '曹性',
						level: 23
					}]
				}, {
					name: '长矛兵',
					roles: [{
						name: '士兵',
						level: 14
					}, {
						name: '兵长',
						level: 18
					}, {
						name: '侯成',
						level: 23
					}]
				}, {
					name: '大刀兵',
					roles: [{
						name: '士兵',
						level: 14
					}, {
						name: '兵长',
						level: 18
					}, {
						name: '将官',
						level: 23
					}, {
						name: '宋宪',
						level: 23
					}]
				}, {
					name: '护卫兵',
					roles: [{
						name: '士兵',
						level: 16
					}, {
						name: '军官',
						level: 20
					}, {
						name: '将官',
						level: 23
					}, {
						name: '臧霸',
						level: 24
					}]
				}],
				L: {
					text: '宝石矿洞',
					tImg: 't_img13',
					img: 'site_m13',
					XY: ['30%', '40%']
				},
				D: {
					text: '嵩山',
					tImg: 't_img7',
					img: 'site_m7',
					XY: ['35%', '45%'],
					renwus: [{
						name: '巡逻卫',
						roles: [{
							name: '士兵',
							level: 14
						}, {
							name: '兵长',
							level: 18
						}, {
							name: '军官',
							level: 23
						}]
					}, {
						name: '边界卫兵',
						roles: [{
							name: '士兵',
							level: 16
						}, {
							name: '兵长',
							level: 18
						}, {
							name: '军官',
							level: 20
						}, {
							name: '将官',
							level: 23
						}]
					}],
					D: {
						text: '五级宝藏',
						tImg: 't_img12',
						img: 'site_m12',
						XY: ['35%', '50%']
					}
				}
			},
			D: {
				text: '颖川',
				tImg: 't_img4',
				img: 'site_m4',
				XY: ['40%', '45%'],
				renwus: [{
					name: '步兵',
					roles: [{
						name: '士兵',
						level: 14
					}, {
						name: '兵长',
						level: 18
					}, {
						name: '军官',
						level: 23
					}]
				}, {
					name: '卫兵',
					roles: [{
						name: '士兵',
						level: 14
					}, {
						name: '兵长',
						level: 18
					}, {
						name: '军官',
						level: 23
					}]
				}, {
					name: '路霸',
					roles: [{
						name: '路霸',
						level: 35
					}]
				}]
			}
		},
		R: {
			text: '陈',
			tImg: 't_img4',
			img: 'site_m4',
			XY: ['50%', '40%'],
			renwus: [{
				name: '大刀兵',
				roles: [{
					name: '士兵',
					level: 14
				}, {
					name: '兵长',
					level: 18
				}, {
					name: '军官',
					level: 23
				}]
			}, {
				name: '护卫兵',
				roles: [{
					name: '士兵',
					level: 14
				}, {
					name: '兵长',
					level: 18
				}, {
					name: '军官',
					level: 23
				}]
			}, {
				name: '贪官',
				roles: [{
					name: '贪官',
					level: 30
				}]
			}],
			R: {
				text: '谯郡',
				tImg: 't_img4',
				img: 'site_m4',
				XY: ['55%', '40%'],
				renwus: [{
					name: '卫兵',
					roles: [{
						name: '士兵',
						level: 14
					}, {
						name: '兵长',
						level: 18
					}, {
						name: '军官',
						level: 23
					}]
				}, {
					name: '边界卫兵',
					roles: [{
						name: '士兵',
						level: 14
					}, {
						name: '兵长',
						level: 18
					}, {
						name: '军官',
						level: 23
					}]
				}, {
					name: '酸丁',
					roles: [{
						name: '酸丁',
						level: 30
					}]
				}],
				T: {
					text: '二级宝藏',
					tImg: 't_img12',
					img: 'site_m12',
					XY: ['55%', '35%']
				},
				D: {
					text: '南顿',
					tImg: 't_img4',
					img: 'site_m4',
					XY: ['55%', '45%'],
					renwus: [{
						name: '杂兵',
						roles: [{
							name: '士兵',
							level: 14
						}, {
							name: '兵长',
							level: 18
						}, {
							name: '军官',
							level: 23
						}]
					}, {
						name: '弓箭兵',
						roles: [{
							name: '士兵',
							level: 14
						}, {
							name: '兵长',
							level: 18
						}, {
							name: '军官',
							level: 23
						}]
					}, {
						name: '腐儒',
						roles: [{
							name: '腐儒',
							level: 25
						}]
					}],
					L: {
						text: '蔡县',
						tImg: 't_img4',
						img: 'site_m4',
						XY: ['50%', '45%'],
						renwus: [{
							name: '民兵',
							roles: [{
								name: '民兵',
								level: 14
							}, {
								name: '兵长',
								level: 20
							}]
						}, {
							name: '乡勇',
							roles: [{
								name: '乡勇',
								level: 15
							}]
						}, {
							name: '护卫兵',
							roles: [{
								name: '士兵',
								level: 14
							}, {
								name: '兵长',
								level: 18
							}, {
								name: '军官',
								level: 23
							}]
						}, {
							name: '虎豹骑',
							roles: [{
								name: '虎豹骑',
								level: 25
							}]
						}],
						D: {
							text: '汝南北郊',
							tImg: 't_img4',
							img: 'site_m4',
							XY: ['50%', '50%'],
							renwus: [{
								name: '卫兵',
								roles: [{
									name: '士兵',
									level: 14
								}, {
									name: '兵长',
									level: 18
								}, {
									name: '军官',
									level: 23
								}]
							}, {
								name: '士兵',
								roles: [{
									name: '士兵',
									level: 14
								}, {
									name: '兵长',
									level: 18
								}, {
									name: '军官',
									level: 23
								}]
							}, {
								name: '乡绅',
								roles: [{
									name: '乡绅',
									level: 30
								}]
							}],
							D: {
								text: '汝南郊外',
								tImg: 't_img4',
								img: 'site_m4',
								XY: ['50%', '55%'],
								renwus: [{
									name: '打手',
									roles: [{
										name: '打手',
										level: 12
									}, {
										name: '道姑',
										level: 8
									}]
								}, {
									name: '流氓',
									roles: [{
										name: '流氓',
										level: 12
									}, {
										name: '舞者',
										level: 8
									}]
								}, {
									name: '逃兵',
									roles: [{
										name: '逃兵',
										level: 15
									}]
								}, ],
								R: {
									text: '汝南',
									tImg: 't_img16',
									img: 'site_m16',
									XY: ['55%', '55%']
								},
								D: {
									text: '汝南南卡',
									tImg: 't_img14',
									img: 'site_m14',
									XY: ['50%', '60%'],
									renwus: [{
										name: '弓箭兵',
										roles: [{
											name: '士兵',
											level: 14
										}, {
											name: '兵长',
											level: 18
										}, {
											name: '军官',
											level: 23
										}]
									}, {
										name: '卫兵',
										roles: [{
											name: '士兵',
											level: 16
										}, {
											name: '兵长',
											level: 18
										}, {
											name: '军官',
											level: 20
										}, {
											name: '将官',
											level: 23
										}]
									}],
									L: {
										text: '光州',
										tImg: 't_img3',
										img: 'site_m3',
										XY: ['45%', '60%'],
										renwus: [{
											name: '长矛兵',
											roles: [{
												name: '士兵',
												level: 14
											}, {
												name: '兵长',
												level: 18
											}, {
												name: '侯成',
												level: 23
											}]
										}, {
											name: '大刀兵',
											roles: [{
												name: '士兵',
												level: 16
											}, {
												name: '兵长',
												level: 18
											}, {
												name: '军官',
												level: 20
											}, {
												name: '将官',
												level: 23
											}]
										}],
										D: {
											text: '平春',
											tImg: 't_img4',
											img: 'site_m4',
											XY: ['45%', '65%'],
											renwus: [{
												name: '士兵',
												roles: [{
													name: '士兵',
													level: 14
												}, {
													name: '兵长',
													level: 18
												}, {
													name: '军官',
													level: 23
												}]
											}, {
												name: '边界卫兵',
												roles: [{
													name: '士兵',
													level: 16
												}, {
													name: '兵长',
													level: 18
												}, {
													name: '军官',
													level: 20
												}, {
													name: '将官',
													level: 23
												}]
											}],
											D: {
												text: '四级宝藏',
												tImg: 't_img12',
												img: 'site_m12',
												XY: ['45%', '70%']
											}
										}
									}
								}
							}
						}
					}
				}
			}
		},
		D: {
			text: '颖阳',
			tImg: 't_img4',
			img: 'site_m4',
			XY: ['45%', '45%'],
			renwus: [{
				name: '杂兵',
				roles: [{
					name: '士兵',
					level: 14
				}, {
					name: '兵长',
					level: 18
				}, {
					name: '军官',
					level: 23
				}]
			}, {
				name: '士兵',
				roles: [{
					name: '士兵',
					level: 14
				}, {
					name: '兵长',
					level: 18
				}, {
					name: '军官',
					level: 23
				}]
			}, {
				name: '屯田兵',
				roles: [{
					name: '屯田兵',
					level: 25
				}]
			}],
			D: {
				text: '叛军一营',
				tImg: 't_img15',
				img: 'site_m15',
				XY: ['45%', '50%'],
				renwus: [{
					name: '叛军喽啰',
					roles: [{
						name: '逃兵',
						level: 42
					}]
				}, {
					name: '叛军杂兵',
					roles: [{
						name: '逃兵',
						level: 41
					}, {
						name: '杂兵',
						level: 42
					}, {
						name: '宋宪',
						level: 47
					}]
				}, {
					name: '叛军恶徒',
					roles: [{
						name: '叛军恶徒',
						level: 42
					}]
				}],
				D: {
					text: '叛军二营',
					tImg: 't_img15',
					img: 'site_m15',
					XY: ['45%', '55%'],
					renwus: [{
						name: '叛军喽啰',
						roles: [{
							name: '逃兵',
							level: 42
						}]
					}, {
						name: '叛军杂兵',
						roles: [{
							name: '逃兵',
							level: 41
						}, {
							name: '杂兵',
							level: 42
						}, {
							name: '宋宪',
							level: 47
						}]
					}, {
						name: '道士',
						roles: [{
							name: '道士',
							level: 45
						}]
					}, {
						name: '老道',
						roles: [{
							name: '老道',
							level: 45
						}]
					}],
					D: {
						text: '叛军三营',
						tImg: 't_img15',
						img: 'site_m15',
						XY: ['45%', '60%'],
						renwus: [{
							name: '叛军喽啰',
							roles: [{
								name: '逃兵',
								level: 42
							}]
						}, {
							name: '叛军杂兵',
							roles: [{
								name: '逃兵',
								level: 41
							}, {
								name: '杂兵',
								level: 42
							}, {
								name: '宋宪',
								level: 47
							}]
						}, {
							name: '术士',
							roles: [{
								name: '术士',
								level: 45
							}]
						}, {
							name: '妖人',
							roles: [{
								name: '妖人',
								level: 45
							}]
						}],
						D: {
							text: '叛军四营',
							tImg: 't_img15',
							img: 'site_m15',
							XY: ['45%', '65%'],
							renwus: [{
								name: '叛军士兵',
								roles: [{
									name: '逃兵',
									level: 42
								}]
							}, {
								name: '叛军主力',
								roles: [{
									name: '逃兵',
									level: 41
								}, {
									name: '杂兵',
									level: 42
								}, {
									name: '宋宪',
									level: 47
								}]
							}, {
								name: '恶僧',
								roles: [{
									name: '恶僧',
									level: 50
								}]
							}, {
								name: '头陀',
								roles: [{
									name: '头陀',
									level: 50
								}]
							}],
							D: {
								text: '叛军五营',
								tImg: 't_img15',
								img: 'site_m15',
								XY: ['45%', '70%'],
								renwus: [{
									name: '叛军头目',
									roles: [{
										name: '逃兵',
										level: 42
									}]
								}, {
									name: '叛军首领',
									roles: [{
										name: '逃兵',
										level: 41
									}, {
										name: '杂兵',
										level: 42
									}, {
										name: '宋宪',
										level: 47
									}]
								}, {
									name: '僵尸',
									roles: [{
										name: '僵尸',
										level: 50
									}]
								}, {
									name: '游魂',
									roles: [{
										name: '游魂',
										level: 50
									}]
								}]
							}
						}
					}
				}
			}
		}
	}
}
positions.D.D.L = positions.D.L.D;
positions.D.R.D = positions.D.R.R.D.L;
module.exports = positions
