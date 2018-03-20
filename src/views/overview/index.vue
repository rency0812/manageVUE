<style>
    .overview-data {
        position  : absolute;
        min-width : 320px;
        height    : 100%;
        padding   : 15px;
        top       : 0;
        z-index   : 1000;
        }

    .overview-shadow {
        position   : absolute;
        /*min-width : 35%;*/
        width      : 100%;
        min-height : 160px;
        bottom     : 0;
        z-index    : 800;
        background : linear-gradient(to top, rgba(29, 26, 26, 1) 45%, rgba(29, 26, 26, 0) 100%);
        }

    .overview-shadow-left {
        position   : absolute;
        top        : 0;
        width      : 320px;
        /*width      : 100%;*/
        height     : 100%;
        left       : 0;
        z-index    : 800;
        background : linear-gradient(to right, rgba(29, 26, 26, 1) 45%, rgba(29, 26, 26, 0) 100%);
        }

    .overview-shadow-right {
        position   : absolute;
        top        : 0;
        width      : 320px;
        /*width      : 100%;*/
        height     : 100%;
        right      : 0;
        z-index    : 800;
        background : linear-gradient(to left, rgba(29, 26, 26, 1) 45%, rgba(29, 26, 26, 0) 100%);
        }

    .overview-data.left {
        left              : 0;
        -webkit-animation : slide-left-re 1.5s cubic-bezier(.25, .46, .45, .94) both; animation : slide-left-re 1.5s cubic-bezier(.25, .46, .45, .94) both;
        /*background : linear-gradient(to right, rgba(35, 37, 49, 1) 50%, rgba(35, 37, 49, 0) 100%);*/
        }

    .overview-data.right {
        right             : 35px;
        -webkit-animation : slide-left 1.5s cubic-bezier(.25, .46, .45, .94) both; animation : slide-left 1.5s cubic-bezier(.25, .46, .45, .94) both;
        /*background : linear-gradient(to left, rgba(35, 37, 49, 1) 50%, rgba(35, 37, 49, 0) 100%);*/
        }

    .overview-data-box {
        line-height      : 1.2;
        width            : 320px;
        color            : #99C9FF;
        border           : 1px solid rgba(0, 0, 0, .85);
        border-radius    : 3px;
        background-color : rgba(0, 0, 0, .35);
        background-image : url("../../assets/img/showtime/top_bg.png");
        /*background-image : linear-gradient(-45deg, rgba(255, 255, 255, .05) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .05) 50%, rgba(255, 255, 255, .05) 75%, transparent 75%, transparent);*/
        /*background-size  : 20px 20px;*/
        box-shadow       : inset 0 0 35px rgba(0, 0, 0, .85), 0 2px 2px rgba(0, 0, 0, .35);
        text-shadow      : 0 2px 2px rgba(0, 0, 0, .35);
        margin-bottom    : 15px
        }

    .overview-data-box .ivu-select-selection {
        background-color : transparent;
        border           : none;
        font-size        : 16px;
        color            : #FC0;
        border-right     : 1px solid #000;
        }

    .overview-data-box .ivu-select-single .ivu-select-selection .ivu-select-placeholder, .overview-data-box .ivu-select-single .ivu-select-selection .ivu-select-selected-value {
        font-size   : 16px;
        color       : #FC0;
        font-weight : 700;
        }

    .overview-data-box .ivu-select-arrow {
        font-size : 16px;
        color     : #FC0 !important;
        }

    .overview-data-box .ivu-select-dropdown {
        background-color : #FC0 !important;
        }

    .overview-data-box .ivu-select-item {
        font-size   : 15px !important;
        line-height : 32px;
        color       : #FFF;
        }

    .overview-data-box .ivu-select-item .ivu-select-item:hover {
        background-color : rgba(51, 153, 255, .9) !important;
        }

    .overview-data-box .ivu-row {
        padding       : 0 15px;
        font-size     : 13px;
        color         : #99C9FF;
        line-height   : 28px;
        min-height    : 28px;
        border-bottom : 1px solid #000;
        }

    .overview-data-box .ivu-tabs-nav {
        width : 100%;
        }

    .overview-data-box .ivu-tabs-tab {
        line-height : 2.4;
        font-size   : 14px;
        color       : #FC0;
        white-space : nowrap;
        padding     : 0 4px;
        }

    .overview-data-box .ivu-tabs-nav .ivu-tabs-tab .ivu-icon {
        font-size    : 18px;
        margin-right : 4px;
        }

    .overview-data-box .ivu-tabs-bar {
        border-bottom : 1px solid #000;
        }

    .overview-data-box .ivu-tabs-ink-bar {
        background-color : #FC0;
        }

    .overview-data-box > .title strong {
        font-size    : 16px;
        color        : #FC0;
        display      : block;
        border-right : 1px solid #000;
        }

    .overview-data-box i.topno {
        display          : block;
        width            : 18px;
        height           : 18px;
        text-align       : center;
        color            : #000;
        background-color : #FC0;
        font-size        : 14px;
        font-weight      : 700;
        line-height      : 18px;
        border-radius    : 50%;
        float            : left;
        margin-top       : 5px;
        margin-right     : 15px;
        font-style       : normal;
        }

    .overview-data-box span.num {
        color       : #FC0;
        font-size   : 22px;
        font-weight : 700;
        }

    .overview-data-charts {
        position          : absolute;
        bottom            : 15px;
        left              : 15px;
        width             : calc(100% - 30px);
        min-height        : 120px;
        z-index           : 900;
        border            : 1px solid rgba(0, 0, 0, .85);
        border-radius     : 3px;
        background-color  : rgba(0, 0, 0, .25);
        background-image  : url("../../assets/img/showtime/bottom_bg.png");
        background-repeat : repeat-x;
        /*background-image  : linear-gradient(-45deg, rgba(255, 255, 255, .02) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .02) 50%, rgba(255, 255, 255, .02) 75%, transparent 75%, transparent);*/
        /*background-size   : 20px 20px;*/
        box-shadow        : inset 0 0 35px rgba(0, 0, 0, .25), 0 0 15px rgba(0, 0, 0, .25);
        text-shadow       : 0 2px 2px rgba(0, 0, 0, .35);
        -webkit-animation : slide-up 1.5s cubic-bezier(.25, .46, .45, .94) both; animation : slide-up 1.5s cubic-bezier(.25, .46, .45, .94) both
        }

    .overview-data-charts .alerm_title {
        width      : 160px;
        height     : 32px;
        background : url("../../assets/img/showtime/alerm_title.png") no-repeat;
        position   : absolute;
        top        : -27px;
        left       : 0;
        }

    .overview-logo {
        position         : absolute;
        top              : 0;
        left             : 50%;
        width            : 400px;
        margin-left      : -200px;
        text-align       : center;
        color            : #99C9FF;
        font-size        : 20px;
        font-weight      : 700;
        z-index          : 900;
        text-shadow      : 0 2px 2px rgba(0, 0, 0, .35);
        background-color : rgba(0, 0, 0, .25);
        background-image : linear-gradient(-45deg, rgba(255, 255, 255, .02) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .02) 50%, rgba(255, 255, 255, .02) 75%, transparent 75%, transparent);
        background-size  : 20px 20px;
        box-shadow       : inset 0 0 35px rgba(0, 0, 0, .25), 0 2px 2px rgba(0, 0, 0, .25);
        }

    .ex-layout-exhibition-m-car-t {
        width  : 100%;
        height : 120px;
        }

    .ex-layout-exhibition-m-car-alerm, .ex-layout-exhibition-m-car-info, .ex-layout-exhibition-m-car-box {
        float    : left;
        position : relative;
        margin   : 0.5%;
        }

    .exhibition-border-s {
        position : absolute;
        left     : 0;
        top      : 0;
        width    : 100%;
        height   : 100%;
        }

    .exhibition-border-s > div {
        width      : 5px;
        height     : 5px;
        background : url("../../assets/img/showtime/border_s.png") no-repeat;
        position   : absolute;
        }

    .exhibition-border-s > div.left-top {
        left                : 0;
        top                 : 0;
        background-position : 0 0;
        }

    .exhibition-border-s > div.right-top {
        right               : 0;
        top                 : 0;
        background-position : -5px 0;
        }

    .exhibition-border-s > div.left-bottom {
        left                : 0;
        bottom              : 0;
        background-position : 0 -5px;
        }

    .exhibition-border-s > div.right-bottom {
        right               : 0;
        bottom              : 0;
        background-position : -5px -5px;
        }

    .ex-layout-exhibition-m-car-alerm {
        width : 24%;
        }

    .ex-layout-exhibition-m-car-alerm > h1 {
        width       : 100%;
        height      : 120px;
        line-height : 120px;
        text-align  : center;
        color       : #F30;
        float       : left;
        }

    .ex-layout-exhibition-m-car-box {
        width : 29%;
        }

    .ex-layout-exhibition-m-car-info {
        width       : 44%;
        color       : #99C9FF;
        font-size   : 14px;
        line-height : 1.28888;
        padding     : 0 15px;
        float       : left;
        }

    .ex-layout-exhibition-m-car-info > h3 {
        font-size : 20px;
        color     : #FC0;
        }

    .ex-layout-exhibition-m-car-info .car-info {
        width   : 100%;
        display : inline-block;
        }

    .ex-layout-exhibition-m-car-info .car-info > li {
        float : left;
        }

    .ex-layout-exhibition-m-car-info .car-info > .speed {
        width        : 60%;
        padding-top  : 5px;
        padding-left : 65px;
        background   : url("../../assets/img/showtime/speed_dashboard.png") 0 0 no-repeat;
        }

    .ex-layout-exhibition-m-car-info .car-info > .speed strong {
        font-size : 24px;
        }

    .ex-layout-exhibition-m-car-img {
        width  : 183px;
        height : 100px;
        margin : 10px auto;
        }

    .overview-data-charts .alerm_list {
        margin : 10px 25px;
        }

    .alerm_list > li {
        color       : #FFF;
        font-size   : 14px;
        line-height : 1.65;
        font-weight : 700;
        float       : left;
        width       : 33.333%;
        }

    .alerm_list > li .alerm {
        color : #F30;
        }

    .alerm_list > li .vehicleNo {
        color : #FC0;
        }

    .ex-layout-exhibition-m-car-img.a-speed { background : url('../../assets/img/showtime/exhibition_car_animate_speed.png') no-repeat; background-position : 0 0; animation : speedAnimate 2.5s steps(1) infinite; }

    .ex-layout-exhibition-m-car-img.a-uncover { background : url('../../assets/img/showtime/exhibition_car_animate_uncover.png') no-repeat; background-position : 0 0; animation : speedAnimate 2.5s steps(1) infinite; }

    .ex-layout-exhibition-m-car-img.a-weight { background : url('../../assets/img/showtime/exhibition_car_animate_weight.png') no-repeat; background-position : 0 0; animation : speedAnimate 2.5s steps(1) infinite; }

    .ex-layout-exhibition-m-car-img.a-load { background : url('../../assets/img/showtime/exhibition_car_animate_load.png') no-repeat; background-position : 0 0; animation : speedAnimate 2.5s steps(1) infinite; }

    .ex-layout-exhibition-m-car-img.a-unload { background : url('../../assets/img/showtime/exhibition_car_animate_unload.png') no-repeat; background-position : 0 0; animation : speedAnimate 2.5s steps(1) infinite; }

    @keyframes speedAnimate {
        0% { background-position : 0 0; }
        7% { background-position : 0 -100px; }
        14% { background-position : 0 -200px; }
        21% { background-position : 0 -300px; }
        28% { background-position : 0 -400px; }
        35% { background-position : 0 -500px; }
        42% { background-position : 0 -600px; }
        49% { background-position : 0 -700px; }
        56% { background-position : 0 -800px; }
        63% { background-position : 0 -900px; }
        70% { background-position : 0 -1000px; }
        77% { background-position : 0 -1100px; }
        84% { background-position : 0 -1200px; }
        91% { background-position : 0 -1300px; }
        100% { background-position : 0 -1400px; }
        }

</style>
<template>
    <div id="showMain" style="width:100%; height: 100%;  background-color: #1D1D1D;position: relative">
        <div class="overview-shadow"></div>
        <div class="overview-shadow-left"></div>
        <div class="overview-shadow-right"></div>
        <div class="overview-logo">智慧建筑弃土大数据分析</div>
        <div class="overview-data left" v-if="regionData">
            <div class="overview-data-box" :class="{'flip-vertical-bck-o':flip[0]}">
                <Row class="title text-center">
                    <Col span="8">
                    <Select v-model="regionCurrent" @on-change="handleSelect">
                        <Option v-for="item in region" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select></Col>
                    <Col span="16" style="text-align: center;">
                    2017-10-01 12:00:00</Col>
                </Row>
                <Row class="row text-center">
                    <Col span="8">
                    <strong>核准运营车辆</strong>
                    <p><span class="num">{{regionData.carData.cartoday}}</span> 辆</p>
                    </Col>
                    <Col span="8">
                    <strong>运营车辆上线率</strong>
                    <p><span class="num">{{regionData.carData.online}}</span></p>
                    </Col>

                    <Col span="8">
                    <strong>昨日运营车辆</strong>
                    <p>{{regionData.carData.caryestoday}}辆,
                        <Icon type="arrow-up-a"></Icon>
                        {{regionData.carData.update}}
                    </p>
                    </Col>
                </Row>
                <Row class="row  text-center">
                    <Col span="8">
                    <strong>核准出土工地</strong>
                    <p><span class="num">{{regionData.siteData.sitetoday}}</span> 个</p>
                    </Col>
                    <Col span="8">
                    <strong>可疑出土工地</strong>
                    <p><span class="num">{{regionData.siteData.sitemabey}}</span>个 </p>
                    </Col>
                    <Col span="8">
                    <strong>昨日出土工地</strong>
                    <p>{{regionData.siteData.siteyestoday}}个,
                        <Icon type="arrow-down-a"></Icon>
                        {{regionData.siteData.update}}
                    </p>
                    </Col>
                </Row>
                <Row class="row text-center">
                    <Col span="8">
                    <strong>核准消纳点</strong>
                    <p><span class="num">{{regionData.loadDown.loadtoday}}</span>个</p>
                    </Col>

                    <Col span="8">
                    <strong>可疑消纳点</strong>
                    <p><span class="num">{{regionData.loadDown.loadmabey}}</span>个 </p>
                    </Col>
                    <Col span="8">
                    <strong>昨日运营消纳点</strong>
                    <p>{{regionData.loadDown.loadyestoday}}个,
                        <Icon type="arrow-down-a"></Icon>
                        {{regionData.loadDown.update}}
                    </p>
                    </Col>
                </Row>
            </div>
            <!---->
            <div class="overview-data-box" :class="{'flip-vertical-bck-o':flip[0]}">
                <Row class="title">
                    <Col span="24">
                    <strong>{{regionStastic[3].title}}</strong></Col>
                </Row>
                <Row class="row" v-for="(item,index) in regionStastic[3].company_data[0].list" :key="item.id">
                    <Col span="16">
                    <i class="topno">{{index + 1}}</i> {{item.name}}
                    </Col>
                    <Col span="8" class="text-center">
                    {{item.value}}
                    </Col>
                </Row>
            </div>

            <div class="overview-data-box" :class="{'flip-vertical-bck-o':flip[1]}">
                <Row class="title">
                    <Col span="24">
                    <strong>{{regionStastic[2].title}}</strong></Col>
                </Row>
                <Tabs :value="regionStastic[2].ncp_data[0].title">
                    <TabPane :icon="item.icon" :label="item.title" :name="item.title"
                             v-for="item in regionStastic[2].ncp_data" :key="item.id">
                        <Row class="row" v-for="(it,index)  in item.list" :key="it.name">
                            <Col span="16">
                            <i class="topno">{{index + 1}}</i> {{it.name}}
                            </Col>
                            <Col span="8" class="text-center">
                            {{it.value}}
                            </Col>
                        </Row>
                    </TabPane>
                </Tabs>
            </div>
        </div>
        <div class="overview-data right" v-if="regionData">
            <div style="position: absolute;right: -15px; top: 15px; z-index: 800">
                <Button type="text" shape="circle" @click="handleScreen(true)" v-show="!screen"
                        style="color: #FFF;float: right;margin-bottom: 15px">
                    <Icon type="arrow-expand"></Icon>
                </Button>
                <Button type="text" shape="circle" @click="handleScreen(false)" v-show="screen"
                        style="color: #FFF;float: right;margin-bottom: 15px">
                    <Icon type="arrow-shrink"></Icon>
                </Button>
            </div>
            <div class="overview-data-box" :class="{'flip-vertical-bck-o':flip[1]}">
                <Row class="title">
                    <Col span="24">
                    <strong>{{regionStastic[0].title}}</strong></Col>
                </Row>
                <Tabs :value="regionStastic[0].site_data[0].title">
                    <TabPane :icon="item.icon" :label="item.title" :name="item.title"
                             v-for="item in regionStastic[0].site_data" :key="item.id">
                        <Row class="row" v-for="it in item.list" :key="it.name">
                            <Col span="16">
                            {{it.name}}
                            </Col>
                            <Col span="8" class="text-center">
                            {{it.value}}
                            </Col>
                        </Row>
                    </TabPane>
                </Tabs>
            </div>
            <!---->
            <div class="overview-data-box" :class="{'flip-vertical-bck-o':flip[0]}">
                <Row class="title">
                    <Col span="24">
                    <strong>{{regionStastic[1].title}}</strong></Col>
                </Row>
                <Tabs :value="regionStastic[1].load_data[0].title">
                    <TabPane :icon="item.icon" :label="item.title" :name="item.title"
                             v-for="item in regionStastic[1].load_data" :key="item.id">
                        <Row class="row" v-for="it in item.list" :key="it.name">
                            <Col span="16">
                            {{it.name}}
                            </Col>
                            <Col span="8" class="text-center">
                            {{it.value}}
                            </Col>
                        </Row>
                    </TabPane>
                </Tabs>
            </div>
        </div>
        <Row class="overview-data-charts">
            <div class="alerm_title"></div>
            <Col span="10">
            <div class="ex-layout-exhibition-m-car-t" v-if="carAlerm">
                <div class="ex-layout-exhibition-m-car-alerm">
                    <h1>{{carAlerm.alerm}}</h1>
                    <div class="exhibition-border-s">
                        <div class="left-top"></div>
                        <div class="right-top"></div>
                        <div class="left-bottom"></div>
                        <div class="right-bottom"></div>
                    </div>
                </div>
                <div class="ex-layout-exhibition-m-car-box">
                    <div class="ex-layout-exhibition-m-car-img"
                         :class="{'a-speed':carAlerm.img[0],'a-uncover':carAlerm.img[1],'a-weight':carAlerm.img[2],'a-load':carAlerm.img[3],'a-unload':carAlerm.img[4]}"></div>
                    <div class="exhibition-border-s">
                        <div class="left-top"></div>
                        <div class="right-top"></div>
                        <div class="left-bottom"></div>
                        <div class="right-bottom"></div>
                    </div>
                </div>
                <div class="ex-layout-exhibition-m-car-info">
                    <h3>{{carAlerm.vehicleNo}}</h3>
                    <ul class="car-info">
                        <li class="speed">
                            <b>当前速度</b>
                            <p><strong>{{carAlerm.speed}}</strong> km/h</p>
                        </li>
                        <li class="status">
                            <ol>
                                <li><b>· 状态:</b> {{carAlerm.status}}</li>
                                <li><b>· 载重:</b> {{carAlerm.weight}}</li>
                                <li><b>· 顶棚:</b> {{carAlerm.cover}}</li>
                            </ol>
                        </li>
                    </ul>
                    <p><i class="ex-icon ex-icon-pin"></i> 当前位置：{{carAlerm.location}}</p>
                    <div class="exhibition-border-s">
                        <div class="left-top"></div>
                        <div class="right-top"></div>
                        <div class="left-bottom"></div>
                        <div class="right-bottom"></div>
                    </div>
                </div>
            </div>
            <!--<div id="lineCharts" style="width:100%; height: 100%;"></div>-->
            </Col>
            <Col span="14">
            <ul class="alerm_list">
                <li v-for="item in carAlermList" class="focus-in-expand-fwd  text-center">
                    <Row>
                        <Col span="4" class="alerm">
                        {{item.alerm}}</Col>
                        <Col span="8" class="vehicleNo">
                        {{item.vehicleNo}}</Col>
                        <Col span="12">
                        {{item.alermDate}}</Col>
                    </Row>
                </li>
            </ul>


            <!--<div id="pieCharts" style="width:100%; height: 100%;"></div>-->
            </Col>
        </Row>
        <div id="main" style="width:100%; height: 100%;"></div>


    </div>
</template>
<script>/* eslint-disable linebreak-style,no-unused-vars,indent,no-var,init-declarations,semi,no-dupe-keys,no-console,no-undef,quotes,no-redeclare,no-unreachable,complexity,camelcase,brace-style */
import Util from '../../libs/util'
import bd09 from '../../libs/gps'
import store from '../../libs/store'
import * as types from '../../libs/types'

const GetOverViewDataUrl = require('../../libs/api').GetOverViewDataUrl
var mapbox, idtimer, listTimer, alermTimer, alermListTimer

export default {
    data() {
        return {
            // 初始化空对象var
            screen: false,
            mapChart: null,
            lineChart: null,
            pieChart: null,
            flip: [false, false],
            center: [[114.3052387810, 30.5927599029], [114.40713644027709, 30.641664415720523], [114.4504165649414, 30.473069888549535], [114.40713644027709, 30.641664415720523], [113.9164365952, 30.9248268791]],
            option: [],
            cityBorder: [],
            "car_data": [],
            regionData: null,
            regionStastic: null,
            dataValue: [],
            carAlerm: null,
            carAlermList: [],
            regionCurrent: 0,
            region: [{
                label: '武汉市',
                value: 0
            }, {
                label: '硚口区',
                value: 1
            }]
        }
    },
    methods: {
        // 绘图
        drawMap(id) {
            mapboxgl.accessToken = 'pk.eyJ1IjoieGltb28iLCJhIjoiY2o4Nm5kNjkzMHl4ZDJ3cGQ5OG9iOWVkaSJ9.iNYgRySDVMad5s9GFBT1CA';
            var self = this
            // 绘图方法
            self.mapChart = echarts.init(document.getElementById(id))
            // 皮肤添加同一般使用方式
            self.mapChart.setOption(self.option = {
//                visualMap: {
//                    show: false,
//                    calculable: true,
//                    realtime: false,
//                    inRange: {
//                        color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
//                    },
//                    max: 500
//                },
                mapbox: {
                    center: self.center[0],
                    zoom: 10.5,
                    pitch: 35,
                    bearing: 0,
                    style: 'mapbox://styles/mapbox/dark-v9',
                    boxHeight: 8,
                    altitudeScale: 1,
                    shading: 'color',
                    temporalSuperSampling:{enable: true},
                    postEffect: {
                        enable: true,
                        SSAO: {
                            enable: true,
                            radius: 6,
                            intensity: 2.5,
                            quality: 'high'
                        },
                        FXAA: {
                            enable: true
                        },
                        viewControl: {
                            projection: 'orthographic'
                        },
                        screenSpaceAmbientOcclusion: {
                            enable: true,
                            intensity: 2.5,
                            radius: 6,
                            quality: 'high'
                        },
                        screenSpaceReflection: {
                            enable: true
                        }
                    },
                    light: {
                        main: {
                            intensity: 1,
                            shadow:true,
                            shadowQuality: 'high'
                        },
                        ambient: {
                            intensity: 0.75
                        },
                        ambientCubemap: {
                            texture: '/statics/mapbox_turetext.hdr',
                            exposure:   1,
                            diffuseIntensity:    0.5,
                            specularIntensity:  2
                        }
                    }
                },
                series: [{
                    type: 'lines3D',
                    shading: 'realistic',

                    coordinateSystem: 'mapbox',
                    effect: {
                        show: true,
                        constantSpeed: 10,
                        trailWidth: 2,
                        trailLength: 15,
                        trailOpacity: 0.85,
                        spotIntensity: 45
                    },
                    blendMode: 'lighter',
                    polyline: true,
                    lineStyle: {
                        width: 3,
                        color: '#ff6600',
                        opacity: 1
                    },
                    data: []
                }, {
                    type: 'bar3D',
                    shading: 'realistic',
                    coordinateSystem: 'mapbox',
                    barSize: 0.75,
                    bevelSize:0.15,
                    bevelSmoothness:5,
                    silent: true,
                    data: [],
                    itemStyle:{
                        color:'#39f'
                    },
                    label: {
                        show: true,
                        distance: 5,
                        formatter: '{b}'
                    }
                }, {
                    type: 'scatter3D',
                    coordinateSystem: 'mapbox',
                    silent: true,
                    data: [],
                    symbol:'pin',
                    symbolSize: 15,
                    label: {
                        show: false,
                        position:'bottom',
                        formatter: '{c}'
                    },
                    itemStyle: {
                        color:'#fc0',
                        borderWidth: 0,
                        borderColor: "#B1153F"
                    }
                }]
            })
            ;
            mapbox = self.mapChart.getModel().getComponent('mapbox').getMapbox();
            mapbox.on('load', function () {
                document.querySelector('.mapboxgl-control-container').style.display = 'none'
            })
            window.onresize = self.mapChart.resize
            self.handleData()
            self.handleCarData()
        },
        drawLineCharts(id) {
            var self = this
            //模拟数据
            var base = +new Date(1968, 9, 3);
            var oneDay = 24 * 3600 * 1000;
            var date = [];

            var dataline = [Math.random() * 300];

            for (var i = 1; i < 20000; i++) {
                var now = new Date(base += oneDay);
                date.push([now.getMonth() + 1, now.getDate()].join('.'));
                dataline.push(Math.round((Math.random() - 0.5) * 20 + dataline[i - 1]));
            }

            self.lineChart = echarts.init(document.getElementById(id))
            self.lineChart.setOption(self.option = {
                tooltip: {
                    trigger: 'axis',
                    position: function (pt) {
                        return [pt[0], '10%'];
                    }
                },
                grid: {
                    left: '15px',
                    top: '15px',
                    right: '15px',
                    bottom: '32px'
                },
                xAxis: {
                    type: 'category',
                    axisLabel: {
                        textStyle: {
                            color: "#ffd668"
                        }
                    },
                    data: date
                },
                yAxis: {
                    type: 'value',
                    show: false
                },
                series: [
                    {
                        name: '模拟数据',
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                        sampling: 'average',
                        itemStyle: {
                            normal: {
                                color: 'rgb(255, 204, 0)'
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgb(255, 224, 100)'
                                }, {
                                    offset: 1,
                                    color: 'rgb(255, 204, 0)'
                                }])
                            }
                        },
                        data: dataline
                    }
                ]
            });
        },
        drawPieCharts(id) {
            var self = this
            //模拟数据
            self.pieChart = echarts.init(document.getElementById(id))
            self.pieChart.setOption(self.option = {
                color: ['#ffcc00', '#009bd8', '#c85d44', '#78ced1', '#fece7c', '#462d53', '#973d40', '#6a509f'],
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                grid: {
                    left: '15px',
                    top: '15px',
                    right: '15px',
                    bottom: '15px'
                },
                calculable: true,
                series: [
                    {
                        name: '半径模式',
                        type: 'pie',
                        radius: [20, 30],
                        center: ['15%', '50%'],
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        lableLine: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        data: [
                            {value: 10, name: 'rose1'},
                            {value: 5, name: 'rose2'},
                            {value: 15, name: 'rose3'},
                            {value: 25, name: 'rose4'},
                            {value: 20, name: 'rose5'},
                            {value: 35, name: 'rose6'},
                            {value: 30, name: 'rose7'},
                            {value: 40, name: 'rose8'}
                        ]
                    },
                    {
                        name: '面积模式',
                        type: 'pie',
                        radius: [20, 30],
                        center: ['34%', '50%'],
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        lableLine: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        data: [
                            {value: 10, name: 'rose1'},
                            {value: 5, name: 'rose2'},
                            {value: 15, name: 'rose3'},
                            {value: 25, name: 'rose4'},
                            {value: 20, name: 'rose5'},
                            {value: 35, name: 'rose6'},
                            {value: 30, name: 'rose7'},
                            {value: 40, name: 'rose8'}
                        ]
                    },
                    {
                        name: '面积模式',
                        type: 'pie',
                        radius: [20, 30],
                        center: ['52.5%', '50%'],
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        lableLine: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        data: [
                            {value: 10, name: 'rose1'},
                            {value: 5, name: 'rose2'},
                            {value: 15, name: 'rose3'},
                            {value: 25, name: 'rose4'},
                            {value: 20, name: 'rose5'},
                            {value: 35, name: 'rose6'},
                            {value: 30, name: 'rose7'},
                            {value: 40, name: 'rose8'}
                        ]
                    },
                    {
                        name: '面积模式',
                        type: 'pie',
                        radius: [20, 30],
                        center: ['70.5%', '50%'],
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        lableLine: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        data: [
                            {value: 10, name: 'rose1'},
                            {value: 5, name: 'rose2'},
                            {value: 15, name: 'rose3'},
                            {value: 25, name: 'rose4'},
                            {value: 20, name: 'rose5'},
                            {value: 35, name: 'rose6'},
                            {value: 30, name: 'rose7'},
                            {value: 40, name: 'rose8'}
                        ]
                    },
                    {
                        name: '面积模式',
                        type: 'pie',
                        radius: [20, 30],
                        center: ['89%', '50%'],
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        lableLine: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        data: [
                            {value: 10, name: 'rose1'},
                            {value: 5, name: 'rose2'},
                            {value: 15, name: 'rose3'},
                            {value: 25, name: 'rose4'},
                            {value: 20, name: 'rose5'},
                            {value: 35, name: 'rose6'},
                            {value: 30, name: 'rose7'},
                            {value: 40, name: 'rose8'}
                        ]
                    }
                ]
            });


        },
        handleScreen(e) {
            var docElm = document.documentElement
            if (e) {
                //W3C
                if (docElm.requestFullscreen) {
                    docElm.requestFullscreen()
                }
                //FireFox
                else if (docElm.mozRequestFullScreen) {
                    docElm.mozRequestFullScreen()
                }
                //Chrome等
                else if (docElm.webkitRequestFullScreen) {
                    docElm.webkitRequestFullScreen()
                }
                //IE11
                else if (docElm.msRequestFullscreen) {
                    docElm.msRequestFullscreen()
                }
                this.screen = true
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen()
                }
                else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen()
                }
                else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen()
                }
                else if (document.msExitFullscreen) {
                    document.msExitFullscreen()
                }
                this.screen = false
            }
            this.$store.commit(types.SCREEN, this.screen)
        },
        handleData() {
            var self = this
            Util.ajax.get(GetOverViewDataUrl).then(function (res) {
                var DataValue = res.data.ReturnValue.dataValue
                for (var i in DataValue) {
                    //路线数据
                    var track_data = DataValue[i].track_data
                    var local_track_data, local_site_data, local_region_data
                    local_track_data = [].concat.apply([], track_data.map(function (track_data) {
                        var point = []
                        for (var x in track_data) {
                            if (track_data.length >= 2) {
                                point[x] = bd09.gcj02towgs84(track_data[x].lng, track_data[x].lat)
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
                    //工地数据
                    var site_point = []
                    var site_data = DataValue[i].site_data
                    for (var t in site_data) {
                        var uploadNum = Math.round(Math.random() * 500 + 100)
                        site_point[t] = {
                            name: site_data[t].name,
                            value: bd09.gcj02towgs84(site_data[t].lng, site_data[t].lat).concat([uploadNum])
                        }
                    }
                    local_site_data = site_point
                    //区域基础数据
                    local_region_data = DataValue[i].region_data
                    self.dataValue[i] = {
                        track_data: local_track_data,
                        site_data: local_site_data,
                        region_data: local_region_data
                    }
                }
                self.refreshMap(0)
                self.animateMap()
                self.handleCarAlerm()
            }).catch(function (error) {
                console.log(error)
            })
        },
        handleCarData() {
            var self = this
            var deviceNums = ["017002727233", "017071270131", "017002727212", "017027919001", "013147164507", "017071270137", "017002727215", "017027082301", "017002727214", "017002727232", "017002727248", "017002727234", "017027082303", "017027082302", "017027082304", "017071270064", "017071270056", "017071270125", "017071270015", "017071270115", "017071270107", "017071270099", "017071270078", "017071270098", "017071270117", "017071270114", "017071270116", "017071270090", "017071270122", "017071270120", "017071270123", "017071270095", "017071270124", "017071270087", "017071270118", "017071270094", "017071270110", "017071270112", "017071270096", "017071270109", "017071270113", "017071270108", "017002727204", "017002727239", "017002727225", "017002727250", "017002727261", "017002727246", "017002727220", "017002727230", "017002727231", "017002727217", "017002727219", "017002727229", "017002727221", "017002727226", "017002727227", "017002727228", "017002727185", "017002727196", "017002727195", "017002727133", "017002727191", "017002727210", "017002727176", "017002727178", "017002727175", "017002727179", "017002727174", "017002727206", "017002727318", "017002727216", "017002727209", "017002727208", "017002727190", "017002727207", "017002727180", "017002727173", "016202706077", "016202706101", "017002727148", "017002727197", "017002727152", "017002727136", "017002727147", "017002727146", "017002727135", "017002727129", "017002727143", "017002727199", "017002727201", "017002727192", "017002727189", "017002727112", "017002727200", "017002727202", "017002727198", "017002727194", "017002727159", "017002727193", "017002727183", "017002727184", "017002727186", "017002727187", "017002727188", "017002727181", "017002727177", "017002727182", "017002727161", "017002727162", "017002727160", "017002727154", "017002727169", "017002727158", "017002727156", "017002727157", "017002727153", "017002727164", "017002727155", "017002727163", "017002727167", "017002727166", "017002727165", "017002727171", "017002727168", "017002727172", "017002727170", "017002727145", "017002727144", "017002727149", "017002727150", "017002727151", "017002727142", "017002727134", "017002727141", "017002727139", "017002727140", "017002727128", "017002727124", "017002727130", "017002727114", "015127173258"]
            Util.ojax.post('http://signalr.bss.comlbs.com/api/Location/GetCurPosByPhoneNums', deviceNums).then(function (res) {
                var carData = res.data.Data
                var point = []
                for (var i in carData) {
                    point[i] = {
                        name: carData[i].PhoneNum,
                        value: [carData[i].Lon, carData[i].Lat, 300]
                    }
                }
                self.car_data = point
                localStorage.$car_data = JSON.stringify(self.car_data)
            }).catch(function (error) {
                console.log(error)
            })
        },
        animateMap() {
            var self = this
            var dataNum = self.dataValue.length
            idtimer = setInterval(function () {
                var animateNum = Math.round(Math.random() * dataNum)
                clearInterval(listTimer)
                self.refreshMap(animateNum)
                self.flip[0] = true
                var flytoCenterIndex = Math.round(Math.random() * self.car_data.length - 1)
                var flytoCenter = self.car_data[flytoCenterIndex].value.splice(0, 2)
//                var pitch = randomNum(1, 60)
//                    var bearing = randomNum(0, 360)
                var zoom = randomNum(10, 15)
//                mapbox.setPitch(pitch)
//                    mapbox.setBearing(bearing)
                mapbox.flyTo({center: flytoCenter, zoom: zoom})
                setTimeout(function () {
                    self.flip[0] = false
                }, 1500)
            }, 5000)


        },
        handleSelect(e) {
            var self = this
            console.log(e)

            self.refreshMap(e)

        },
        refreshMap(idx) {
            var self = this
            var option = self.mapChart.getOption();
            option.series[0].data = {
                count: function () {
                    return self.dataValue[idx].track_data.length;
                },
                getItem: function (i) {
                    return self.dataValue[idx].track_data[i]
                }
            };
            option.series[1].data = self.dataValue[idx].site_data;
            option.series[2].data = self.car_data;
            self.mapChart.setOption(option);
            self.regionData = self.dataValue[idx].region_data
            self.regionCurrent = idx
            var dataListNum = self.regionData.stastic.length
            var i = 0
            self.regionStastic = self.dataValue[idx].region_data.stastic
        },
        handleCarAlerm() {
            //模拟报警
            var self = this
            var alerm_str = ['超速', '未密闭', '超载', '提前出土', '可疑消纳']
            var status_str = ['定位失败', '通讯中断', '行驶', '熄火', '停车']
            self.carAlerm = {
                vehicleNo: '鄂A12345',
                alerm: '提前出土',
                speed: '80',
                status: '定位失败',
                weight: '899',
                cover: '密闭',
                location: '湖北省;武汉市;蔡甸区,距离武汉水阀门集团214米',
                img: [false, true, false, false, false]
            }
            //模拟变化
            alermTimer = setInterval(function () {
                var alermNum = Math.round(Math.random() * 4)
                var img_state = [false, false, false, false, false]
                var alerm = alerm_str[alermNum]
                var status = status_str[alermNum]
                img_state[alermNum] = true
                var speed = Math.round(Math.random() * 90)
                var weight = Math.round(Math.random() * 300)
                self.carAlerm = {
                    vehicleNo: '鄂A12345',
                    alerm: alerm,
                    speed: speed,
                    status: status,
                    weight: weight,
                    cover: '密闭',
                    location: '湖北省;武汉市;蔡甸区,距离武汉水阀门集团214米',
                    img: img_state
                }
            }, 3000)

            var it = 0
            //模拟报警列表
            alermListTimer = setInterval(function () {
                if (it >= 15) {
                    it = 0
                    self.carAlermList = []
                }
                it++
                var alermNum = Math.round(Math.random() * 4)
                var img_state = [false, false, false, false, false]
                var alerm = alerm_str[alermNum]
                self.carAlermList.push({
                    vehicleNo: '鄂A12345',
                    alerm: alerm,
                    alermDate: [new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDay()].join('-') + ' ' + [new Date().getHours(), new Date().getMinutes(), new Date().getSeconds()].join(':')
                })
            }, 3000)
        }
    },
    mounted() {
        this.$nextTick(function () {
            var self = this
            self.drawMap('main')
//            self.drawLineCharts('lineCharts')
//            self.drawPieCharts('pieCharts')
        })
    },
    watch: {
//        cityBorder() {
//            var self = this
//            if (!self.chart) {
//                return;
//            }
//            //更新数据
//            var option = self.chart.getOption();
//            option.series[2].data = self.cityBorder;
//            self.chart.setOption(option);
//        },
        car_data() {
            var self = this
            if (!self.mapChart) {
                return;
            }
            //更新数据
            var option = self.mapChart.getOption();
            option.series[2].data = self.car_data;
            self.mapChart.setOption(option);
        },
        screen(e) {
            var self = this
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
    }
}

//生成从minNum到maxNum的随机数
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return Math.random() * minNum + 1;
            break
        case 2:
            return Math.random() * (maxNum - minNum + 1) + minNum
            break
        default:
            return 1
            break
    }
}


</script>
