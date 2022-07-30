// 下邳
let centerText = '返回下邳';
// 注意：TLRDC的顺序不能变（可以变了，渲染时候自己调一下了），野怪群中的特殊人物（非群人物）最多只能有3个，因为群人物至少出现1个，加起来不能超4个
// roles的每个对象的name索引于nameToRole文件,level是等级，相同的名字不同地名可能等级不同
// 宝藏、战场、返回，字样决定是否可以点击设施
let positions = {
	state: '徐州', //所属州
	thisMap: 'xiapi', //此js文件名
	mapImg: 'map_23',
	text: centerText,
	tImg: 't_img16', //title的图片
	img: 'ss_m_8',
	XY: ['65%', '35%'],
	L: {
		text: '下邳郊外',
		tImg: 't_img4',
		img: 'site_m4',
		XY: ['50%', '35%'],
		renwus: [{
			name: '打手',
			roles: [{
				name: '打手',
				level: 9
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
			}],
		}, {
			name: '逃兵',
			roles: [{
				name: '逃兵',
				level: 15
			}],
		}, {
			name: '士兵',
			roles: [{
				name: '士兵',
				level: 16
			}],
		}],
		T: {
			text: '下邳北关',
			tImg: 't_img2',
			img: 'site_m2',
			XY: ['50%', '30%'],
			renwus: [{
				name: '流氓',
				roles: [{
					name: '流氓',
					level: 12
				}, {
					name: '舞者',
					level: 8
				}],
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
					level: 18
				}],
			}, {
				name: '长矛兵',
				roles: [{
					name: '士兵',
					level: 16
				}, {
					name: '兵长',
					level: 18
				}, {
					name: '侯成',
					level: 22
				}],
			}],
			T: {
				text: '东海',
				tImg: 't_img17',
				img: 'site_m17',
				XY: ['48%', '25%'],
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
						level: 18
					}],
				}, {
					name: '海盗',
					roles: [{
						name: '海盗',
						level: 25
					}],
				}, {
					name: '杂兵',
					roles: [{
						name: '杂兵',
						level: 25
					}],
				}],
				T: {
					text: '东武',
					tImg: 't_img4',
					img: 'site_m4',
					XY: ['45%', '15%'],
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
							level: 18
						}, {
							name: '将官',
							level: 20
						}],
					}, {
						name: '大刀兵',
						roles: [{
							name: '士兵',
							level: 16
						}, {
							name: '将官',
							level: 20
						}, {
							name: '宋宪',
							level: 23
						}],
					}],
					L: {
						text: '琅琊',
						tImg: 't_img4',
						img: 'site_m4',
						XY: ['38%', '10%'],
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
							}],
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
							}],
						}]
					}
				}
			},
			L: {
				text: '一级宝藏',
				tImg: 't_img12',
				img: 'site_m12',
				XY: ['40%', '30%'],
				D: {
					text: '泗水',
					tImg: 't_img4',
					img: 'site_m4',
					XY: ['32%', '35%'],
					renwus: [{
						name: '弓箭步群',
						roles: [{
							name: '士兵',
							level: 16
						}, {
							name: '将官',
							level: 20
						}, {
							name: '曹性',
							level: 22
						}],
					}, {
						name: '巡逻卫兵',
						roles: [{
							name: '士兵',
							level: 16
						}, {
							name: '兵长',
							level: 18
						}],
					}, {
						name: '青州兵群',
						roles: [{
							name: '青州兵',
							level: 14
						}],
					}],
					L: {
						text: '彭城',
						tImg: 't_img2',
						img: 'site_m2',
						XY: ['15%', '35%'],
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
								level: 22
							}]
						}, {
							name: '长矛兵',
							roles: [{
								name: '士兵',
								level: 16
							}, {
								name: '兵长',
								level: 18
							}, {
								name: '侯成',
								level: 22
							}]
						}],
						T: {
							text: '小沛东关',
							tImg: 't_img2',
							img: 'site_m2',
							XY: ['20%', '30%'],
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
									level: 18
								}]
							}, {
								name: '大刀兵',
								roles: [{
									name: '士兵',
									level: 16
								}, {
									name: '将官',
									level: 20
								}, {
									name: '宋宪',
									level: 23
								}]
							}],
							L: {
								text: '小沛郊外',
								tImg: 't_img4',
								img: 'site_m4',
								XY: ['7%', '32%'],
								renwus: [{
									name: '乡勇',
									roles: [{
										name: '乡勇',
										level: 16
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
										level: 18
									}]
								}],
								T: {
									text: '小沛',
									tImg: 't_img16',
									img: 'site_m16',
									XY: ['10%', '30%']
								},
								L: {
									text: '小沛西关',
									tImg: 't_img6',
									img: 'site_m6',
									XY: ['0%', '30%'],
									renwus: [{
										name: '逃兵',
										roles: [{
											name: '逃兵',
											level: 15
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
											level: 18
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
									}],
									L: {
										text: '九里山',
										tImg: 't_img7',
										img: 'site_m7',
										XY: ['-2%', '30%'],
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
										}, {
											name: '山贼',
											roles: [{
												name: '山贼',
												level: 21
											}]
										}],
										L: {
											text: '黄巾贼一寨',
											tImg: 't_img15',
											img: 'site_m15',
											XY: ['-2%', '28%'],
											renwus: [{
												name: '黄巾贼',
												roles: [{
													name: '黄巾贼',
													level: 20
												}]
											}, {
												name: '黄巾军',
												roles: [{
													name: '黄巾军',
													level: 22
												}]
											}],
											T: {
												text: '黄巾贼二寨',
												tImg: 't_img15',
												img: 'site_m15',
												XY: ['-2%', '28%'],
												renwus: [{
													name: '黄巾贼',
													roles: [{
														name: '黄巾贼',
														level: 24
													}]
												}, {
													name: '黄巾军',
													roles: [{
														name: '黄巾军',
														level: 26
													}]
												}],
												T: {
													text: '黄巾贼三寨',
													tImg: 't_img15',
													img: 'site_m15',
													XY: ['-2%', '28%'],
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
															level: 30
														}, {
															name: '黄巾军官',
															level: 32
														}]
													}],
													T: {
														text: '黄巾贼四寨',
														tImg: 't_img15',
														img: 'site_m15',
														XY: ['-2%', '28%'],
														renwus: [{
															name: '黄巾贼',
															roles: [{
																name: '黄巾贼',
																level: 16
															}, {
																name: '黄巾军官',
																level: 17
															}]
														}, {
															name: '黄巾军官',
															roles: [{
																name: '黄巾军官',
																level: 17
															}]
														}],
														T: {
															text: '黄巾贼五寨',
															tImg: 't_img15',
															img: 'site_m15',
															XY: ['-2%', '28%'],
															renwus: [{
																name: '黄巾军官',
																roles: [{
																	name: '黄巾军官',
																	level: 18
																}]
															}, {
																name: '黄巾将官',
																roles: [{
																	name: '黄巾将官',
																	level: 40
																}]
															}]
														}
													}
												}
											}
										}
									},
									D: {
										text: '萧县',
										tImg: 't_img4',
										img: 'site_m4',
										XY: ['2%', '37%'],
										renwus: [{
											name: '兵匪',
											roles: [{
												name: '逃兵',
												level: 14
											}, {
												name: '大流氓',
												level: 15
											}, {
												name: '恶霸',
												level: 16
											}]
										}, {
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
										}, {
											name: '山贼',
											roles: [{
												name: '山贼',
												level: 24
											}]
										}],
										L: {
											text: '祁乡',
											tImg: 't_img4',
											img: 'site_m4',
											XY: ['0%', '37%'],
											renwus: [{
												name: '逃兵',
												roles: [{
													name: '逃兵',
													level: 15
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
													level: 18
												}]
											}, {
												name: '边界卫兵',
												roles: [{
													name: '士兵',
													level: 16
												}, {
													name: '兵长',
													level: 17
												}, {
													name: '军官',
													level: 18
												}, {
													name: '将官',
													level: 20
												}]
											}],
											L: {
												text: '定陶',
												tImg: 't_img4',
												img: 'site_m4',
												map: 'chenliu'
											}
										},
										D: {
											text: '细阳',
											tImg: 't_img4',
											img: 'site_m4',
											map: 'shouchun'
										}
									}
								}
							}
						},
						L: {
							text: '小沛南关',
							tImg: 't_img4',
							img: 'site_m4',
							XY: ['5%', '35%'],
							renwus: [{
								name: '乡勇',
								roles: [{
									name: '乡勇',
									level: 16
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
									level: 18
								}]
							}]
						},
						D: {
							text: '彭城南郊',
							tImg: 't_img4',
							img: 'site_m4',
							XY: ['15%', '40%'],
							renwus: [{
								name: '民兵',
								roles: [{
									name: '民兵',
									level: 16
								}, {
									name: '兵长',
									level: 20
								}]
							}, {
								name: '乡勇',
								roles: [{
									name: '乡勇',
									level: 16
								}]
							}],
							D: {
								text: '徐州兵站',
								tImg: 't_img15',
								img: 'site_m15',
								XY: ['17%', '60%'],
								renwus: [{
									name: '巡逻卫兵',
									roles: [{
										name: '士兵',
										level: 16
									}, {
										name: '兵长',
										level: 18
									}]
								}, {
									name: '边界卫兵',
									roles: [{
										name: '士兵',
										level: 16
									}, {
										name: '军官',
										level: 18
									}, {
										name: '将官',
										level: 20
									}]
								}]
							}
						}
					}
				}
			}
		},
		L: {
			text: '下邳西关',
			tImg: 't_img2',
			img: 'site_m2',
			XY: ['45%', '35%'],
			renwus: [{
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
				}],
			}, {
				name: '士兵',
				roles: [{
					name: '士兵',
					level: 15
				}],
			}, {
				name: '长矛兵',
				roles: [{
					name: '士兵',
					level: 16
				}],
			}],
			D: {
				text: '灵璧',
				tImg: 't_img15',
				img: 'site_m15',
				XY: ['35%', '45%'],
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
						level: 18
					}]
				}, {
					name: '恶人',
					roles: [{
						name: '流氓',
						level: 11
					}, {
						name: '打手',
						level: 13
					}, {
						name: '恶霸',
						level: 16
					}]
				}, {
					name: '巡逻卫兵',
					roles: [{
						name: '士兵',
						level: 15
					}, {
						name: '兵长',
						level: 18
					}]
				}],
				R: {
					text: '淮阴',
					tImg: 't_img4',
					img: 'site_m4',
					XY: ['50%', '45%'],
					renwus: [{
						name: '乡勇',
						roles: [{
							name: '乡勇',
							level: 16
						}]
					}, {
						name: '杂兵',
						roles: [{
							name: '杂兵',
							level: 17
						}]
					}],
					D: {
						text: '淮安',
						tImg: 't_img4',
						img: 'site_m4',
						XY: ['60%', '55%'],
						renwus: [{
							name: '护卫兵',
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
								name: '臧霸',
								level: 24
							}]
						}, {
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
						}],
						L: {
							text: '洪泽湖',
							tImg: 't_img9',
							img: 'site_m9',
							XY: ['52%', '57%'],
							renwus: [{
								name: '兵匪',
								roles: [{
									name: '逃兵',
									level: 14
								}, {
									name: '大流氓',
									level: 15
								}, {
									name: '恶霸',
									level: 16
								}]
							}, {
								name: '流寇',
								roles: [{
									name: '流氓',
									level: 13
								}, {
									name: '逃兵',
									level: 15
								}, {
									name: '强盗头目',
									level: 15
								}]
							}, {
								name: '恶霸',
								roles: [{
									name: '大流氓',
									level: 14
								}, {
									name: '打手头目',
									level: 15
								}, {
									name: '恶霸',
									level: 30
								}]
							}],
							L: {
								text: '临淮',
								tImg: 't_img4',
								img: 'site_m4',
								XY: ['35%', '57%'],
								renwus: [{
									name: '巡逻卫兵',
									roles: [{
										name: '士兵',
										level: 16
									}, {
										name: '兵长',
										level: 18
									}]
								}, {
									name: '边界卫兵',
									roles: [{
										name: '士兵',
										level: 16
									}, {
										name: '兵长',
										level: 17
									}, {
										name: '军官',
										level: 18
									}, {
										name: '将官',
										level: 20
									}]
								}, {
									name: '袁遗卫队',
									roles: [{
										name: '士兵',
										level: 35
									}, {
										name: '袁遗',
										level: 35
									}]
								}],
								L: {
									text: '成德',
									map: 'shouchun', //跨州
									tImg: 't_img4',
									img: 'site_m4',
								}
							}
						},
						R: {
							text: '广陵',
							tImg: 't_img4',
							img: 'site_m4',
							XY: ['65%', '55%'],
							renwus: [{
								name: '巡逻卫兵',
								roles: [{
									name: '士兵',
									level: 16
								}, {
									name: '兵长',
									level: 18
								}]
							}, {
								name: '边界卫兵',
								roles: [{
									name: '士兵',
									level: 16
								}, {
									name: '兵长',
									level: 17
								}, {
									name: '军官',
									level: 18
								}, {
									name: '将官',
									level: 20
								}]
							}]
						}
					}
				}
			}
		}
	},
	D: {
		text: '去往新手村',
		map: 'xinshoucun', //跨州
		tImg: 't_img1',
		img: 'site_m1'
	}
}
positions.L.T.L.D.L.L.T = positions.L.T.L.D.L.T.L; //小沛郊外有两条路可以走
positions.L.L.L = positions.L.T.L.D; //泗水有两条路可以去
module.exports = positions
