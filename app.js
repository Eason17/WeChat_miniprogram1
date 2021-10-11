//app.js
App({
    globalData: {
        "authentication": "未认证",
        "categorys": [{
                "id": 0,
                "name": "个人类",
                "level": 0,
                "children": [{
                        "id": 0,
                        "level": 1,
                        "subject": "全部竞赛",
                        "children": [{
                            "level": 2,
                            "subject": "全部",
                            "children": [{
                                    "id": 1,
                                    "src": "http://cdn1.52jingsai.com/portal/202012/02/160615nuw8nnjjnnpgfvzf.jpg",
                                    "tag": "英语竞赛",
                                    "title": "2020年第二届全国高校创新英语翻译赛",
                                    "release_time": "2020-11-25",
                                    "introduction": "你知道吗？2021年1月10日是我国第一个中国人民警察节，为了致敬平安守护者，广东省公安厅与南方都市报联合发起2021年警察形象创意作品大赛 ...",
                                    "deadline": "2020-12-15",
                                    "sponsor": "中国文化信息协会创新文化传播专业委员会\n全国高校创新英语挑战活动组委会"
                                },
                                {
                                    "id": 2,
                                    "src": "http://cdn1.52jingsai.com/portal/202012/11/160010gx2hhikoll7krlio.png",
                                    "tag": "设计比赛",
                                    "title": "中国青少年模拟政协提案专用标识LOGO征集大赛",
                                    "release_time": "2020-11-29",
                                    "introduction": "语言是互联互通的纽带，英语作为全球目前使用最广泛的语言，是国际交往、文化交流的重要工具。在加快教育现代化，建设教育强国的时代背景之下...",
                                    "deadline": "2020-12-18",
                                    "sponsor": "共青团中央维护青少年权益部, 中华全国学生联合会秘书处"
                                },
                                {
                                    "id": 3,
                                    "src": "http://cdn1.52jingsai.com/portal/202009/02/142123lg44ycafky4o49wt.png",
                                    "tag": "营销策划",
                                    "title": "2020年全国大学生职业发展大赛",
                                    "release_time": "2020-12-08",
                                    "introduction": "为贯彻中共中央、国务院《关于深化教育体制机制改革的意见》，继续落实教育部办公厅《大学生职业发展与就业指导课程教学要求》...",
                                    "deadline": "2020-12-20",
                                    "sponsor": "全国大学生职业发展大赛组委会,中国信息协会信息化发展研究院"
                                },
                                {
                                    "id": 4,
                                    "src": "http://cdn1.52jingsai.com/portal/202010/09/145946myf0ryb7rrro07r0.png",
                                    "tag": "英语竞赛",
                                    "title": "2020年第二届全国高校创新英语词汇赛",
                                    "release_time": "2020-12-13",
                                    "introduction": "语言是互联互通的纽带，英语作为全球目前使用最广泛的语言，是国际交往、文化交流的重要工具。在加快教育现代化，建设教育强国的时代背景之下...",
                                    "deadline": "2020-01-13",
                                    "sponsor": "《海外英语》杂志,\n中国文化信息协会创新文化传播专业委员会"
                                },
                            ]
                        }]
                    },
                    {
                        "id": 1,
                        "level": 1,
                        "subject": "商业创业",
                        "children": [{
                                "level": 2,
                                "subject": "创业大赛",
                                "children": []
                            },
                            {
                                "level": 2,
                                "subject": "营销策划"
                            },
                            {
                                "level": 2,
                                "subject": "财会金融"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "level": 1,
                        "subject": "兴趣爱好",
                        "children": [{
                                "id": 0,
                                "level": 2,
                                "subject": "选秀唱歌"
                            },
                            {
                                "id": 1,
                                "level": 2,
                                "subject": "摄影影视"
                            },
                            {
                                "id": 2,
                                "level": 2,
                                "subject": "动漫书画"
                            },
                            {
                                "id": 3,
                                "level": 2,
                                "subject": "播音主持"
                            },
                            {
                                "id": 4,
                                "level": 2,
                                "subject": "文学演讲"
                            },
                            {
                                "id": 5,
                                "level": 2,
                                "subject": "模特大赛"
                            },
                            {
                                "id": 6,
                                "level": 2,
                                "subject": "武术舞蹈"
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "level": 1,
                        "subject": "广告公益",
                        "children": [{
                                "id": 0,
                                "level": 2,
                                "subject": "广告创意"
                            },
                            {
                                "id": 1,
                                "level": 2,
                                "subject": "公益大赛"
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "level": 1,
                        "subject": "学科技能",
                        "children": [{
                                "id": 0,
                                "level": 2,
                                "subject": "学科学术"
                            },
                            {
                                "id": 0,
                                "level": 2,
                                "subject": "英语竞赛"
                            },
                            {
                                "id": 1,
                                "level": 2,
                                "subject": "计算机类",
                                "children": [{
                                    "id": 6,
                                    "src": "http://cdn1.52jingsai.com/portal/202012/05/121100j0szed27q2oe0qsz.jpg",
                                    "tag": "计算机类",
                                    "title": "2021年（第十三届）上海市大学生计算机应用能力大赛",
                                    "release_time": "2020-11-01",
                                    "introduction": "为贯彻落实上海市教育委员会关于深化高等教育人才培养模式创新与实践教学改革的精神，激发上海大学生学习计算机知识和技能的积极性，提高运用信息技术解决实际问题的综合能力...",
                                    "deadline": "2020-11-15",
                                    "sponsor": "上海市教育委员会、上海市高等学校计算机等级考试委员会"
                                }, ]
                            },
                            {
                                "id": 2,
                                "level": 2,
                                "subject": "物理竞赛"
                            },
                            {
                                "id": 3,
                                "level": 2,
                                "subject": "数学建模"
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "level": 1,
                        "subject": "科技创新",
                        "children": [{
                                "id": 0,
                                "level": 2,
                                "subject": "科技大赛"
                            },
                            {
                                "id": 0,
                                "level": 2,
                                "subject": "应用开发"
                            },
                            {
                                "id": 0,
                                "level": 2,
                                "subject": "设计比赛",
                                "children": [{
                                    "comtest_info": [{
                                        "src": "http://cdn1.52jingsai.com/portal/202012/02/160615nuw8nnjjnnpgfvzf.jpg",
                                        "tag": "学科学术",
                                        "title": "2020年第二届全国高校创新英语翻译赛",
                                        "release_time": "2020-11-25",
                                        "desc": "你知道吗？2021年1月10日是我国第一个中国人民警察节，为了致敬平安守护者，广东省公安厅与南方都市报联合发起2021年警察形象创意作品大赛 ...",
                                        "deadline": "2020年12月15日",
                                        "sponsor": [
                                            "广东省公安厅",
                                            "南方都市报"
                                        ]
                                    }]
                                }]
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "level": 1,
                        "subject": "其他比赛",
                        "children": [{
                                "id": 0,
                                "level": 2,
                                "subject": "体育竞技"
                            },
                            {
                                "id": 1,
                                "level": 2,
                                "subject": "游戏竞技"
                            }
                        ]
                    }
                ]
            },
            {
                "id": 1,
                "name": "团队类",
                "level": 0,
                "children": [{
                        "id": 0,
                        "level": 1,
                        "subject": "全部竞赛",
                        "children": [{
                            "level": 2,
                            "subject": "全部",
                            "children": [{
                                    "id": 5,
                                    "src": "http://cdn1.52jingsai.com/portal/202011/16/172729n06chz2czg62q0ge.png",
                                    "tag": "学科学术",
                                    "title": "首届全国大学生工业化建筑与智慧建造竞赛",
                                    "release_time": "2020-11-29",
                                    "introduction": "为进一步落实新时代全国高校本科教育工作会议和《关于加快建设发展新工科实施卓越工程师教育培养计划2.0的意见》（教高〔2018〕3号）文件的精神，整合校内外资源，强化工科学生工程实践能力...",
                                    "deadline": "2021-01-01",
                                    "sponsor": "1、中国建筑学会,2、中国建筑学会工业化建筑学术委员会"
                                },
                                {
                                    "id": 6,
                                    "src": "http://cdn1.52jingsai.com/portal/202012/05/121100j0szed27q2oe0qsz.jpg",
                                    "tag": "计算机类",
                                    "title": "2021年（第十三届）上海市大学生计算机应用能力大赛",
                                    "release_time": "2020-11-01",
                                    "introduction": "为贯彻落实上海市教育委员会关于深化高等教育人才培养模式创新与实践教学改革的精神，激发上海大学生学习计算机知识和技能的积极性，提高运用信息技术解决实际问题的综合能力...",
                                    "deadline": "2020-11-15",
                                    "sponsor": "上海市教育委员会、上海市高等学校计算机等级考试委员会"
                                },
                                {
                                    "id": 7,
                                    "src": "http://cdn1.52jingsai.com/portal/202004/21/104253ig8wggs8poo1007y.jpg",
                                    "tag": "计算机类",
                                    "title": "2020全国大学生计算机技能应用大赛",
                                    "release_time": "2020-04-20",
                                    "introduction": "为贯彻习近平主席在十九大报告中关于“推动互联网、大数据、人工智能和实体经济深度融合”以及“善于运用互联网技术和信息化手段开展工作”等讲话精神，引导高校在校生学习掌握计算机与互联网知识，提高计算机的技能应用能力...",
                                    "deadline": "2020-07-05",
                                    "sponsor": "中国软件行业协会培训中心,全国百家高校团委、学生会、计算机类社团"
                                }, {
                                    "id": 8,
                                    "src": "http://cdn1.52jingsai.com/portal/202003/12/181246u8cy7878g8m7ylyv.jpg",
                                    "tag": "计算机类",
                                    "title": "2020中国大学生计算机设计大赛",
                                    "release_time": "2020-04-15",
                                    "introduction": "根据全国教育大会精神，全面振兴本科教育，提高本科教学质量，切实提高计算机基础教学水平，激励大学生学习计算机知识，技术，技能的兴趣和潜能，提高运用信息技术解决实际问题的综合实践能力...",
                                    "deadline": "2020-07-21",
                                    "sponser": "主办学校：山东大学，阜阳师范大学"
                                }
                            ]
                        }]
                    },
                    {
                        "id": 1,
                        "level": 1,
                        "subject": "商业创业",
                        "children": [{
                                "level": 2,
                                "subject": "创业大赛",
                                "children": []
                            },
                            {
                                "level": 2,
                                "subject": "营销策划",

                            },
                            {
                                "level": 2,
                                "subject": "财会金融"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "level": 1,
                        "subject": "兴趣爱好",
                        "children": [{
                                "id": 0,
                                "level": 2,
                                "subject": "选秀唱歌"
                            },
                            {
                                "id": 1,
                                "level": 2,
                                "subject": "摄影影视"
                            },
                            {
                                "id": 2,
                                "level": 2,
                                "subject": "动漫书画"
                            },
                            {
                                "id": 3,
                                "level": 2,
                                "subject": "播音主持"
                            },
                            {
                                "id": 4,
                                "level": 2,
                                "subject": "文学演讲"
                            },
                            {
                                "id": 5,
                                "level": 2,
                                "subject": "模特大赛"
                            },
                            {
                                "id": 6,
                                "level": 2,
                                "subject": "武术舞蹈"
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "level": 1,
                        "subject": "广告公益",
                        "children": [{
                                "id": 0,
                                "level": 2,
                                "subject": "广告创意"
                            },
                            {
                                "id": 1,
                                "level": 2,
                                "subject": "公益大赛"
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "level": 1,
                        "subject": "学科技能",
                        "children": [{
                                "id": 0,
                                "level": 2,
                                "subject": "学科学术"
                            },
                            {
                                "id": 0,
                                "level": 2,
                                "subject": "英语竞赛"
                            },
                            {
                                "id": 1,
                                "level": 2,
                                "subject": "计算机类",
                                "children": [{
                                        "id": 6,
                                        "src": "http://cdn1.52jingsai.com/portal/202012/05/121100j0szed27q2oe0qsz.jpg",
                                        "tag": "计算机类",
                                        "title": "2021年（第十三届）上海市大学生计算机应用能力大赛",
                                        "release_time": "2020-11-01",
                                        "introduction": "为贯彻落实上海市教育委员会关于深化高等教育人才培养模式创新与实践教学改革的精神，激发上海大学生学习计算机知识和技能的积极性，提高运用信息技术解决实际问题的综合能力...",
                                        "deadline": "2020-11-15",
                                        "sponsor": "上海市教育委员会、上海市高等学校计算机等级考试委员会"
                                    },
                                    {
                                        "id": 7,
                                        "src": "http://cdn1.52jingsai.com/portal/202004/21/104253ig8wggs8poo1007y.jpg",
                                        "tag": "计算机类",
                                        "title": "2020全国大学生计算机技能应用大赛",
                                        "release_time": "2020-04-20",
                                        "introduction": "为贯彻习近平主席在十九大报告中关于“推动互联网、大数据、人工智能和实体经济深度融合”以及“善于运用互联网技术和信息化手段开展工作”等讲话精神，引导高校在校生学习掌握计算机与互联网知识，提高计算机的技能应用能力...",
                                        "deadline": "2020-07-05",
                                        "sponsor": "中国软件行业协会培训中心,全国百家高校团委、学生会、计算机类社团"
                                    }, {
                                        "id": 8,
                                        "src": "http://cdn1.52jingsai.com/portal/202003/12/181246u8cy7878g8m7ylyv.jpg",
                                        "tag": "计算机类",
                                        "title": "2020中国大学生计算机设计大赛",
                                        "release_time": "2020-04-15",
                                        "introduction": "根据全国教育大会精神，全面振兴本科教育，提高本科教学质量，切实提高计算机基础教学水平，激励大学生学习计算机知识，技术，技能的兴趣和潜能，提高运用信息技术解决实际问题的综合实践能力...",
                                        "deadline": "2020-07-21",
                                        "sponser": "主办学校：山东大学，阜阳师范大学"
                                    }
                                ]
                            },
                            {
                                "id": 2,
                                "level": 2,
                                "subject": "物理竞赛"
                            },
                            {
                                "id": 3,
                                "level": 2,
                                "subject": "数学建模"
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "level": 1,
                        "subject": "科技创新",
                        "children": [{
                                "id": 0,
                                "level": 2,
                                "subject": "科技大赛"
                            },
                            {
                                "id": 0,
                                "level": 2,
                                "subject": "应用开发"
                            },
                            {
                                "id": 0,
                                "level": 2,
                                "subject": "设计比赛",
                                "children": [{
                                    "comtest_info": [{
                                        "src": "http://cdn1.52jingsai.com/portal/202012/02/160615nuw8nnjjnnpgfvzf.jpg",
                                        "tag": "学科学术",
                                        "title": "2020年第二届全国高校创新英语翻译赛",
                                        "release_time": "2020-11-25",
                                        "desc": "你知道吗？2021年1月10日是我国第一个中国人民警察节，为了致敬平安守护者，广东省公安厅与南方都市报联合发起2021年警察形象创意作品大赛 ...",
                                        "deadline": "2020年12月15日",
                                        "sponsor": [
                                            "广东省公安厅",
                                            "南方都市报"
                                        ]
                                    }]
                                }]
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "level": 1,
                        "subject": "其他比赛",
                        "children": [{
                                "id": 0,
                                "level": 2,
                                "subject": "体育竞技"
                            },
                            {
                                "id": 1,
                                "level": 2,
                                "subject": "游戏竞技"
                            }
                        ]
                    }
                ]
            }
        ],
        userInfo: null
    },
    onLaunch: function () {
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        })
        // 获取用户信息
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            // 可以将 res 发送给后台解码出 unionId
                            this.globalData.userInfo = res.userInfo

                            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                            // 所以此处加入 callback 以防止这种情况
                            if (this.userInfoReadyCallback) {
                                this.userInfoReadyCallback(res)
                            }
                        }
                    })
                }
            }
        })
    },
})