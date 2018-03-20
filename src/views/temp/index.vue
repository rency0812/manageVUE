<style>
    .overview-data {
        position  : absolute;
        min-width : 35%;
        height    : 100%;
        padding   : 15px;
        top       : 0;
        z-index   : 1000;
    }

    .overview-data.left {
        left       : 0;
        background : linear-gradient(to right, rgba(35, 37, 49, 1) 50%, rgba(35, 37, 49, 0) 100%);
    }

    .overview-data.right {
        right      : 0;
        background : linear-gradient(to left, rgba(35, 37, 49, 1) 50%, rgba(35, 37, 49, 0) 100%);
    }

    .overview-data-box {
        padding          : 15px;
        margin-bottom    : 15px;
        line-height      : 1.5;
        width            : 230px;
        color            : #FC0;
        border           : 1px solid #FC0;
        border-radius    : 3px;
        background-color : rgba(255, 204, 0, .15);
        background-image : linear-gradient(-45deg, rgba(255, 255, 255, .05) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .05) 50%, rgba(255, 255, 255, .05) 75%, transparent 75%, transparent);
        background-size  : 20px 20px;
        box-shadow       : inset 0 0 15px rgba(255, 204, 0, .35), 0 2px 2px rgba(0, 0, 0, .35);
    }

    .overview-data-box > h3 {
        font-size : 13px;
    }

    .overview-data-box > p > span {
        font-size   : 22px;
        font-weight : 700;
    }


</style>
<template>
    <div id="showMain" style="width:100%; height: 100%; background-color: #293C55;position: relative">
        <div class="overview-data right">
            <div style="width: 220px; float: right">
                <Button type="text" shape="circle" @click="handleScreen(false)" v-show="screen"
                        style="color: #FFF;float: right;margin-bottom: 15px">
                    <Icon type="arrow-shrink"></Icon>
                </Button>
                <div class="overview-data-box">
                    <h3>核准工地数</h3>
                    <p class="text-center"><span>256</span>个</p>
                    <p>昨日出土工地:123个，上升 5%</p>
                </div>
                <div class="overview-data-box">
                    <h3>核准消纳点</h3>
                    <p class="text-center"><span>56</span>个</p>
                    <p>昨日出土工地:23个，下降 15%</p>
                </div>
                <div class="overview-data-box">
                    <h3>核准运营车辆数</h3>
                    <p class="text-center"><span>3256</span>辆　　上线率85%</p>
                    <p>昨日运营车辆数:2323辆，上升 35%</p>
                </div>
            </div>
        </div>
        <div id="main" style="width:100%; height: 100%;"></div>
    </div>
</template>
<script>/* eslint-disable linebreak-style,no-unused-vars,indent,no-var,init-declarations,semi,no-dupe-keys,no-console,no-undef,quotes,no-redeclare */
import Util from '../../libs/util'
import bd09 from '../../libs/gps'
import store from '../../libs/store'
import * as types from '../../libs/types'

const GetTrackDataUrl = require('../../libs/api').GetTrackDataUrl
const GetSiteDataUrl = require('../../libs/api').GetSiteDataUrl

export default {
    data() {
        return {
            // 初始化空对象
            chart: null,
            center: [114.3118287971, 30.5984342798],
            option: [],
            cityBorder: [],
            sitePoi: [],
            busLines: [],
            carspoi: []
        }
    },
    methods: {
        // 绘图
        drawGraph(id) {
            var self = this
            // 绘图方法
            self.chart = echarts.init(document.getElementById(id))

            // 皮肤添加同一般使用方式
            self.chart.setOption(self.option = {
                bmap: {
                    center:self.center,
                    zoom: 12,
                    roam: true,
                    mapStyle: {
                        styleJson: [{
                            'featureType': 'water',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#282f49'
                            }
                        }, {
                            'featureType': 'land',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#232630'
                            }
                        }, {
                            'featureType': 'railway',
                            'elementType': 'all',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'highway',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#424550'
                            }
                        }, {
                            'featureType': 'highway',
                            'elementType': 'labels',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'arterial',
                            'elementType': 'geometry',
                            'stylers': {
                                'color': '#3c4150'
                            }
                        }, {
                            'featureType': 'arterial',
                            'elementType': 'geometry.fill',
                            'stylers': {
                                'color': '#3f4867'
                            }
                        }, {
                            'featureType': 'poi',
                            'elementType': 'all',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'green',
                            'elementType': 'all',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'subway',
                            'elementType': 'all',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'manmade',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#252e49'
                            }
                        }, {
                            'featureType': 'local',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#252e49'
                            }
                        }, {
                            'featureType': 'arterial',
                            'elementType': 'labels',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }, {
                            'featureType': 'boundary',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#252e49'
                            }
                        }, {
                            'featureType': 'building',
                            'elementType': 'all',
                            'stylers': {
                                'color': '#252e49'
                            }
                        }, {
                            'featureType': 'label',
                            'elementType': 'labels.text.fill',
                            'stylers': {
                                'visibility': 'off'
                            }
                        }]
                    }
                },
                series: [{
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: self.busLines,
                    silent: true,
                    lineStyle: {
                        normal: {
                            opacity: 0.35,
                            width: 2
                        }
                    },
                    progressiveThreshold: 500,
                    progressive: 200,
                    zlevel: 5
                }, {
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: self.busLines,
//                    silent: true,
                    lineStyle: {
                        normal: {
                            color: "#ffcc00",
                            width: 0
                        }
                    },
                    effect: {
                        constantSpeed: 50,
                        show: true,
                        trailLength: 0.1,
                        symbolSize: 1.5
                    },
                    zlevel: 1
                }, {
                    type: 'lines',
                    coordinateSystem: 'bmap',
                    polyline: true,
                    data: self.cityBorder,
                    silent: true,
                    lineStyle: {
                        normal: {
                            color: '#5975AD',
                            opacity: 1,
                            width: 5
                        }
                    },
                    progressiveThreshold: 500,
                    progressive: 200,
                    zlevel: 5
                }, {
                    type: 'effectScatter',
                    coordinateSystem: 'bmap',
                    data: self.sitePoi,
                    symbolSize: function (val) {
                        return val[2] / 10;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#ffcc00'
                        }
                    }
                }]
            });
        },
        handleScreen(e) {
            if (e === false) {
                this.$parent.screen = false
                this.screen = false
            }
        }
    },
    mounted() {
        this.$nextTick(function () {
            var self = this
            self.drawGraph('main')
            Util.ajax.get(GetTrackDataUrl).then(function (res) {
                var trackData = res.data.ReturnValue.track_data
                self.busLines = [].concat.apply([], trackData.map(function (busLine) {
                    var hStep = 300 / (trackData.length - 1);
                    var point = []
                    for (var i in busLine) {
                        if (busLine.length >= 2) {
                            point[i] = bd09.gcj02tobd09(busLine[i].lng, busLine[i].lat)
                        } else {
                            point = [[114.44812667657546, 30.498176423692563], [114.44812667657546, 30.498176423692563]]
                        }
                    }
                    return {
                        coords: point,
                        lineStyle: {
                            normal: {
                                color: 'rgb(255, 120, 0)'
                            }
                        }
                    };
                }));

                // 获取百度地图实例，使用百度地图自带的控件
                var bmap = self.chart.getModel().getComponent('bmap').getBMap();
                var mercatorProjection = bmap.getMapType().getProjection();
                var bdary = new BMap.Boundary();
                bdary.get('武汉市', function (rs) {       //获取行政区域
                    var cityBorder = rs.boundaries[0].split(';')
                    var Border = []
                    for (var i in cityBorder) {
                        Border[i] = cityBorder[i].split(',')
                    }

                    self.cityBorder = [{coords: Border}]
                });
            }).catch(function (error) {
                console.log(error)
            })

            Util.ajax.get(GetSiteDataUrl).then(function (res) {
                var siteData = res.data.ReturnValue.site_data
                var point = []
                for (var i in siteData) {
                    var uploadNum = Math.round(Math.random() * 500)
                    point[i] = {
                        name: siteData[i].name,
                        value: bd09.gcj02tobd09(siteData[i].lng, siteData[i].lat).concat([uploadNum])
                    }
                }
                self.sitePoi = point
                console.log(JSON.stringify(self.sitePoi))
            }).catch(function (error) {
                console.log(error)
            })
        })
    },
    watch: {
        busLines() {
            var self = this
            if (!self.chart) {
                return;
            }
            //更新数据
            var option = self.chart.getOption();
            option.series[0].data = self.busLines;
            option.series[1].data = self.busLines;
            self.chart.setOption(option);
        },
        cityBorder() {
            var self = this
            if (!self.chart) {
                return;
            }
            //更新数据
            var option = self.chart.getOption();
            option.series[2].data = self.cityBorder;
            self.chart.setOption(option);
        },
        sitePoi() {
            var self = this
            if (!self.chart) {
                return;
            }
            //更新数据
            var option = self.chart.getOption();
            option.series[3].data = self.sitePoi;
            self.chart.setOption(option);
        },
        screen(e) {
            if (e) {
                document.getElementById('showMain').style.position = "fixed"
                document.getElementById('showMain').style.top = '0px'
                document.getElementById('showMain').style.left = '0px'
                document.getElementById('showMain').style.zIndex = 2000
            } else {
                document.getElementById('showMain').style.position = "relative"
                document.getElementById('showMain').style.top = 'auto'
                document.getElementById('showMain').style.left = 'auto'
                document.getElementById('showMain').style.zIndex = 1
            }
        }
    },
    computed: {
        screen() {
            return this.$parent.screen
        }
    }
}
</script>
