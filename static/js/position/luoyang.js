// 下邳
let centerText = '返回洛阳';
// 注意：TLRDC的顺序不能变（可以变了，渲染时候自己调一下了），野怪群中的特殊人物（非群人物）最多只能有3个，因为群人物至少出现1个，加起来不能超4个
// roles的每个对象的name索引于nameToRole文件,level是等级，相同的名字不同地名可能等级不同
// 宝藏、战场、返回，字样决定是否可以点击设施
let positions = {
	state: '司隶区', //所属州
	thisMap: 'luoyang', //此js文件名
	mapImg: 'map_46',
	text: centerText,
	tImg: 't_img16', //title的图片
	img: 'ss_m_8',
	XY: ['45%', '40%'],
	R: {
		text: '洛阳郊外',
		tImg: 't_img4',
		img: 'site_m4',
		XY: ['50%', '40%'],
		renwus: [{
			name: '流氓',
			roles: [{
				name: '流氓',
				level: 14
			}, {
				name: '舞者',
				level: 8
			}]
		}, {
			name: '逃兵',
			roles: [{
				name: '逃兵',
				level: 14
			}]
		}, {
			name: '乡勇',
			roles: [{
				name: '乡勇',
				level: 16
			}]
		}],
		T: {
			text: '汜水关',
			tImg: 't_img2',
			img: 'site_m2',
			XY: ['50%', '35%'],
			renwus: [{
				name: '羽林军',
				roles: [{
					name: '羽林军',
					level: 67
				}, {
					name: '士兵',
					level: 60
				}]
			}, {
				name: '羽林军',
				roles: [{
					name: '羽林军',
					level: 77
				}]
			}, {
				name: '巡逻兵',
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
			}, {
				name: '治安兵',
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
			}, ],
			L: {
				text: '虎牢关',
				tImg: 't_img2',
				img: 'site_m2',
				XY: ['45%', '35%'],
				renwus: [{
					name: '青州兵',
					roles: [{
						name: '青州兵',
						level: 60
					}]
				}, {
					name: '青州兵',
					roles: [{
						name: '青州兵',
						level: 62
					}]
				}, {
					name: '羽林军',
					roles: [{
						name: '羽林军',
						level: 64
					}]
				}, {
					name: '羽林军',
					roles: [{
						name: '羽林军',
						level: 63
					}]
				}],
				T: {
					text: '河内郊外',
					tImg: 't_img4',
					img: 'site_m4',
					XY: ['45%', '30%'],
					renwus: [{
						name: '流氓',
						roles: [{
							name: '流氓',
							level: 14
						}, {
							name: '舞者',
							level: 8
						}]
					}, {
						name: '逃兵',
						roles: [{
							name: '逃兵',
							level: 14
						}]
					}, {
						name: '民兵',
						roles: [{
							name: '民兵',
							level: 16
						}]
					}],
					T: {
						text: '河内',
						tImg: 't_img16',
						img: 'site_m16',
						XY: ['45%', '28%']
					},
					L: {
						text: '箕关',
						tImg: 't_img2',
						img: 'site_m2',
						XY: ['40%', '30%'],
						renwus: [{
							name: '精锐兵',
							roles: [{
								name: '精锐兵',
								level: 43
							}]
						}, {
							name: '精锐兵',
							roles: [{
								name: '精锐兵',
								level: 45
							}]
						}, {
							name: '羽林军',
							roles: [{
								name: '羽林军',
								level: 80
							}]
						}, {
							name: '羽林军',
							roles: [{
								name: '羽林军',
								level: 86
							}]
						}, ],
						T: {
							text: '河东',
							tImg: 't_img4',
							img: 'site_m4',
							XY: ['35%', '25%'],
							renwus: [{
								name: '黄巾将官',
								roles: [{
									name: '黄巾将官',
									level: 42
								}]
							}, {
								name: '精锐兵',
								roles: [{
									name: '精锐兵',
									level: 41
								}]
							}],
							T: {
								text: '游龙一关',
								tImg: 't_img15',
								img: 'site_m15',
								XY: ['30%', '20%'],
								renwus: [{
									name: '西凉铁骑',
									roles: [{
										name: '西凉铁骑',
										level: 105
									}]
								}, {
									name: '西凉铁骑',
									roles: [{
										name: '西凉铁骑',
										level: 105
									}]
								}, {
									name: '西凉铁骑',
									roles: [{
										name: '西凉铁骑',
										level: 106
									}]
								}, {
									name: '西凉铁骑',
									roles: [{
										name: '西凉铁骑',
										level: 107
									}]
								}],
								T: {
									text: '游龙二关',
									tImg: 't_img15',
									img: 'site_m15',
									XY: ['25%', '15%'],
									renwus: [{
										name: '西凉铁骑',
										roles: [{
											name: '西凉铁骑',
											level: 107
										}]
									}, {
										name: '西凉铁骑',
										roles: [{
											name: '西凉铁骑',
											level: 108
										}]
									}, {
										name: '西凉铁骑',
										roles: [{
											name: '西凉铁骑',
											level: 109
										}]
									}, {
										name: '西凉铁骑',
										roles: [{
											name: '西凉铁骑',
											level: 110
										}]
									}],
									T: {
										text: '游龙三关',
										tImg: 't_img15',
										img: 'site_m15',
										XY: ['20%', '14%'],
										renwus: [{
											name: '西凉铁骑',
											roles: [{
												name: '西凉铁骑',
												level: 111
											}]
										}, {
											name: '西凉铁骑',
											roles: [{
												name: '西凉铁骑',
												level: 112
											}]
										}, {
											name: '龙飞卫',
											roles: [{
												name: '龙飞卫',
												level: 100
											}]
										}, {
											name: '龙飞卫',
											roles: [{
												name: '龙飞卫',
												level: 90
											}]
										}],
										T: {
											text: '游龙领',
											tImg: 't_img15',
											img: 'site_m15',
											XY: ['18%', '13%'],
											renwus: [{
												name: '西凉铁骑',
												roles: [{
													name: '西凉铁骑',
													level: 113
												}]
											}, {
												name: '西凉铁骑',
												roles: [{
													name: '西凉铁骑',
													level: 114
												}]
											}, {
												name: '西凉铁骑',
												roles: [{
													name: '西凉铁骑',
													level: 115
												}]
											}, {
												name: '西凉铁骑',
												roles: [{
													name: '西凉铁骑',
													level: 116
												}]
											}]
										}
									}
								}
							}
						},
						D: {
							text: '首阳山',
							tImg: 't_img7',
							img: 'site_m7',
							XY: ['40%', '35%'],
							renwus: [{
								name: '逃兵',
								roles: [{
									name: '逃兵',
									level: 43
								}]
							}, {
								name: '杂兵',
								roles: [{
									name: '杂兵',
									level: 45
								}]
							}, {
								name: '士兵',
								roles: [{
									name: '士兵',
									level: 48
								}]
							}],
							D: {
								text: '潼关',
								tImg: 't_img2',
								img: 'site_m2',
								XY: ['40%', '45%'],
								renwus: [{
									name: '羽林军',
									roles: [{
										name: '羽林军',
										level: 83
									}]
								}, {
									name: '羽林军',
									roles: [{
										name: '羽林军',
										level: 86
									}]
								}],
								L: {
									text: '中军一营',
									tImg: 't_img15',
									img: 'site_m15',
									XY: ['35%', '45%'],
									renwus: [{
										name: '精锐兵',
										roles: [{
											name: '精锐兵',
											level: 74
										}]
									}, {
										name: '青州兵',
										roles: [{
											name: '青州兵',
											level: 76
										}]
									}],
									L: {
										text: '中军二营',
										tImg: 't_img15',
										img: 'site_m15',
										XY: ['30%', '45%'],
										renwus: [{
											name: '精锐兵',
											roles: [{
												name: '精锐兵',
												level: 75
											}]
										}, {
											name: '青州兵',
											roles: [{
												name: '青州兵',
												level: 77
											}]
										}],
										L: {
											text: '中军三营',
											tImg: 't_img15',
											img: 'site_m15',
											XY: ['25%', '45%'],
											renwus: [{
												name: '精锐兵',
												roles: [{
													name: '精锐兵',
													level: 76
												}]
											}, {
												name: '青州兵',
												roles: [{
													name: '青州兵',
													level: 78
												}]
											}],
											L: {
												text: '中军四营',
												tImg: 't_img15',
												img: 'site_m15',
												XY: ['20%', '45%'],
												renwus: [{
													name: '羽林军',
													roles: [{
														name: '羽林军',
														level: 73
													}]
												}, {
													name: '羽林军',
													roles: [{
														name: '羽林军',
														level: 80
													}]
												}],
												L: {
													text: '中军五营',
													tImg: 't_img15',
													img: 'site_m15',
													XY: ['15%', '45%'],
													renwus: [{
														name: '羽林军',
														roles: [{
															name: '羽林军',
															level: 77
														}]
													}, {
														name: '羽林军',
														roles: [{
															name: '羽林军',
															level: 83
														}]
													}],
													L: {
														text: '中军六营',
														tImg: 't_img15',
														img: 'site_m15',
														XY: ['10%', '45%'],
														renwus: [{
															name: '羽林军精锐',
															roles: [{
																name: '羽林军',
																level: 83
															}]
														}, {
															name: '羽林军精锐',
															roles: [{
																name: '羽林军',
																level: 86
															}]
														}],
														L: {
															text: '中军总营',
															tImg: 't_img15',
															img: 'site_m15',
															XY: ['10%', '45%'],
															renwus: [{
																name: '羽林军精锐',
																roles: [{
																	name: '羽林军',
																	level: 98
																}]
															}, {
																name: '羽林军精锐',
																roles: [{
																	name: '羽林军',
																	level: 100
																}]
															}],
															L: {
																text: '七级宝藏',
																tImg: 't_img12',
																img: 'site_m12',
																XY: ['5%', '45%']
															}
														}
													}
												}
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
			text: '弘农',
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
				name: '步兵',
				roles: [{
					name: '士兵',
					level: 14
				}, {
					name: '将官',
					level: 18
				}, {
					name: '军官',
					level: 23
				}, {
					name: '李典',
					level: 26
				}]
			}],
			L: {
				text: '函谷关',
				tImg: 't_img2',
				img: 'site_m2',
				XY: ['45%', '45%'],
				renwus: [{
					name: '青州兵',
					roles: [{
						name: '杂兵',
						level: 52
					}, {
						name: '青州兵',
						level: 50
					}]
				}, {
					name: '青州兵',
					roles: [{
						name: '杂兵',
						level: 52
					}, {
						name: '青州兵',
						level: 53
					}]
				}, {
					name: '羽林军',
					roles: [{
						name: '羽林军',
						level: 73
					}]
				}, {
					name: '羽林军',
					roles: [{
						name: '羽林军',
						level: 80
					}]
				}]
			},
			R: {
				text: '官渡',
				tImg: 't_img4',
				img: 'site_m4',
				XY: ['55%', '45%'],
				renwus: [{
					name: '精锐兵',
					roles: [{
						name: '精锐兵',
						level: 43
					}, {
						name: '士兵',
						level: 43
					}]
				}, {
					name: '青州兵',
					roles: [{
						name: '杂兵',
						level: 52
					}, {
						name: '青州兵',
						level: 50
					}]
				}, {
					name: '青州兵',
					roles: [{
						name: '杂兵',
						level: 52
					}, {
						name: '青州兵',
						level: 53
					}]
				}],
				T: {
					text: '乌巢',
					tImg: 't_img4',
					img: 'site_m4',
					XY: ['55%', '40%'],
					renwus: [{
						name: '精锐兵',
						roles: [{
							name: '精锐兵',
							level: 41
						}, {
							name: '士兵',
							level: 43
						}]
					}, {
						name: '精锐兵',
						roles: [{
							name: '精锐兵',
							level: 43
						}, {
							name: '士兵',
							level: 43
						}]
					}],
					T: {
						text: '延津',
						tImg: 't_img4',
						img: 'site_m4',
						XY: ['55%', '35%'],
						renwus: [{
							name: '黄巾军官',
							roles: [{
								name: '黄巾军官',
								level: 18
							}]
						}, {
							name: '黄巾军',
							roles: [{
								name: '黄巾军',
								level: 30
							}, {
								name: '黄巾军官',
								level: 18
							}]
						}, {
							name: '绿林大盗',
							roles: [{
								name: '绿林大盗',
								level: 75
							}]
						}, {
							name: '江洋大盗',
							roles: [{
								name: '江洋大盗',
								level: 75
							}]
						}],
						T: {
							text: '六级宝藏',
							tImg: 't_img12',
							img: 'site_m12',
							XY: ['55%', '25%']
						},
						R: {
							text: '白马',
							tImg: 't_img4',
							img: 'site_m4',
							map: 'chenliu'
						}
					}
				},
				R: {
					text: '先锋领军',
					tImg: 't_img15',
					img: 'site_m15',
					map: 'chenliu'
				},
				D: {
					text: '中牟',
					tImg: 't_img4',
					img: 'site_m4',
					map: 'xuchang'
				}
			}
		}
	}
}
positions.R.D.L.L = positions.R.T.L.T.L.D.D
module.exports = positions
