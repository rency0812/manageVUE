<style>
    .mapview-list-box {
        position : absolute;
        top      : 0;
        right    : 0;
        z-index  : 1010;
        height   : 100%;
        }

    .mapview-list-content {
        width            : 200px;
        height           : 100%;
        float            : right;
        background-color : #F8F8F8;
        box-shadow       : inset -2px 0 5px rgba(0, 0, 0, 0.05), -2px 0 5px rgba(0, 0, 0, 0.05);
        transition       : all .5s ease-in-out;
        }

    .mapview-list-content h3 {
        height           : 32px;
        line-height      : 32px;
        padding          : 0 15px;
        color            : #FFF;
        background-color : #F60;
        box-shadow       : inset -2px 0 5px rgba(0, 0, 0, 0.05), -2px 0 5px rgba(0, 0, 0, 0.05);
        }

    .mapview-list-content h3 > i {
        font-size   : 20px;
        color       : #FFF;
        float       : right;
        width       : 32px;
        height      : 32px;
        line-height : 32px;
        text-align  : center;
        position    : absolute;
        right       : 0;
        opacity     : .75;
        cursor      : pointer;
        }

    .mapview-list-tabs {
        width            : 32px;
        height           : 100%;
        background-color : #0D4D63;
        float            : right;
        }

    .mapview-list-tabs > li {
        width      : 32px;
        height     : 32px;
        text-align : center;
        padding    : 0;
        }

    .mapview-list-tabs > li i {
        color       : #FFF;
        display     : block;
        width       : 32px;
        height      : 32px;
        line-height : 32px;
        overflow    : hidden;
        cursor      : pointer;
        }

    .mapview-list-tabs > li i > span {
        text-indent : -9999em;
        display     : block;
        }

    .mapview-list-tabs > li:hover, .mapview-list-tabs > li.active {
        background-color : #F60;
        }

    .mapview-list-carlist, .mapview-list-tree {
        margin-top : 5px;
        padding    : 5px 10px;
        overflow   : hidden;
        }

    .mapview-list-carlist {
        overflow-y : auto;
        overflow-x : hidden;
        }

    .mapview-list-tree > div {
        height : 100%;
        }

    .mapview-list-carlist-pages {
        padding : 5px 15px;
        }

    .mapview-list-carlist-pages .ivu-page-next, .mapview-list-carlist-pages .ivu-page-prev {
        background-color : transparent;
        }

    .mapview-list-carlist-card {
        margin-bottom : 5px;
        }

    .mapview-list-carlist-card div.ivu-card-body {
        padding       : 5px;
        border-radius : 4px;
        /*height        :49px;*/
        line-height   : 1.55;
        box-shadow    : 0 2px 2px rgba(0, 0, 0, .05);
        /*overflow      :hidden;*/
        cursor        : pointer;
        }

    .mapview-list-carlist-card:hover div.ivu-card-body {
        height     : auto;
        transition : height .5s ease-in;
        }

    .mapview-list-carlist-vehicleno {
        font-size   : 15px;
        color       : #585858;
        font-weight : 700;
        }

    .mapview-list-carlist-status {
        text-align : right;
        }

    .mapview-list-carlist-status > i {
        font-size      : 12px;
        color          : #DFDFDF;
        letter-spacing : .5rem;
        }

    .mapview-list-carlist-status > i.on {
        color : #0B7500;
        }

    .mapview-list-carlist-status > i.warning {
        color : #F30;
        }

    .mapview-list-carlist-time {
        font-size : 12px;
        color     : #999;
        }

    .mapview-list-carlist-card .ivu-btn-small {
        padding : 0 7px;
        }


</style>
<template>
    <div class="mapview-list-box">
        <ul class="mapview-list-tabs">
            <li :data-name="item.name" :data-type="item.type" @click="handleTabs"
                v-for="item in mapTabs">
                <Tooltip :content="item.text" placement="left">
                    <i :class="'ex-icon ' + item.icon"><span>{{item.name}}</span></i>
                </Tooltip>
            </li>
        </ul>
        <div class="mapview-list-content" :class="{'slide-left' :carTreeDisplay,'slide-right':!carTreeDisplay }">
            <h3>组织架构
                <i @click="handleTree"
                   :class="{'ivu-icon ivu-icon-android-arrow-dropright-circle':carTreeDisplay,'ivu-icon ivu-icon-android-arrow-dropleft-circle':!carTreeDisplay}"></i>
            </h3>
            <div class="mapview-list-tree"  style="height: calc( 100% - 32px)">
                <tree-company v-on:refreshtable="handleTreeData" :style="{height:treeHeight +'px'}"></tree-company>
            </div>
        </div>
        <div class="mapview-list-content" :class="{'slide-left':carListDisplay,'slide-right':!carListDisplay}"
             style="background-color:#F0F0F0;">
            <h3>车辆列表 {{searchKey}} <i @click="handleList"
                                      class="ivu-icon ivu-icon-android-arrow-dropleft-circle"
                                      v-if="!carTreeDisplay &&carListDisplay"></i>
            </h3>
            <div class="mapview-list-carlist" style="height: calc( 100% - 72px)">
                <Input v-model="searchKey" size="small" icon="search" placeholder="请输入搜索关键字..."
                       style="margin:7px auto;box-shadow: 0 0 15px rgba(0,0,0,.1)"
                       @on-keypress="handleSearchTree"></Input>
                <div class="layout-tree-content">
                    <Card class="mapview-list-carlist-card" v-for="item in vehicleData" :key="item.id">
                        <Row>
                            <Col span="4">
                            <i class="ex-icon ex-icon-truck"></i>
                            </Col>
                            <Col span="12" class="mapview-list-carlist-vehicleno">
                            {{item.vehiclenum}}
                            </Col>
                            <Col span="8" class="mapview-list-carlist-status">
                            <i class="ex-icon ex-icon-weixing" :class="item.weixing"></i>
                            <i class="ex-icon ex-icon-xinhao" :class="item.xinhao"></i>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="4">&nbsp;</Col>
                            <Col span="20" class="mapview-list-carlist-time">
                            {{item.locaDate}}
                            </Col>
                        </Row>
                        <Row>
                            <Col span="8">
                            <Button type="info" size="small" shape="circle" @click="handleDetail">
                                <Icon type="information-circled" size="10"></Icon>
                                详细
                            </Button>
                            </Col>
                            <Col span="8">
                            <Button size="small" shape="circle">
                                <Icon type="ios-infinite" size="10"></Icon>
                                轨迹
                            </Button>
                            </Col>
                            <Col span="8">
                            <Button size="small" shape="circle">
                                <Icon type="chatbubbles" size="10"></Icon>
                                消息
                            </Button>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </div>
            <div class="mapview-list-carlist-pages">
                <Page :total="5500" size="small" simple></Page>
            </div>
        </div>
    </div>
</template>
<script>/* eslint-disable indent,linebreak-style,no-var,comma-spacing,no-undef,init-declarations,no-console */
import Util from '../../../libs/util'
import treeCompany from '../../components/tree/tree-company'


const GetTreeCompanyUrl = require('../../../libs/api').GetTreeCompanyUrl
export default {
    props: ['mapHeight', 'searchKey', 'carTreeDisplay'],
    components: {
        'tree-company': treeCompany
    },
    data() {
        return {
            mapTabs: [{
                id: 1,
                text: '组织架构',
                type: 'tree',
                icon: 'ex-icon-section',
                name: 'section'
            }, {
                id: 2,
                text: '在线车辆',
                type: 'list',
                icon: 'ex-icon-truck',
                name: 'truck'
            }, {
                id: 3,
                text: '关注车辆',
                type: 'list',
                icon: 'ex-icon-fav',
                name: 'fav'
            }],
            carListDisplay: true,
            request: '',
            treeCheck: false,
            vehicleData: [{
                id: 0,
                vehiclenum: '鄂A12345',
                xinhao: 'on',
                weixing: 'warning',
                locaDate: '2017/07/31 01:02:03'
            }, {
                id: 1,
                vehiclenum: '鄂A12345',
                xinhao: 'on',
                weixing: 'warning',
                locaDate: '2017/07/31 01:02:03'
            }, {
                id: 2,
                vehiclenum: '鄂A12345',
                xinhao: 'on',
                weixing: 'warning',
                locaDate: '2017/07/31 01:02:03'
            }, {
                id: 3,
                vehiclenum: '鄂A12345',
                xinhao: 'on',
                weixing: 'warning',
                locaDate: '2017/07/31 01:02:03'
            }, {
                id: 4,
                vehiclenum: '鄂A12345',
                xinhao: 'on',
                weixing: 'warning',
                locaDate: '2017/07/31 01:02:03'
            }, {
                id: 5,
                vehiclenum: '鄂A12345',
                xinhao: 'on',
                weixing: 'warning',
                locaDate: '2017/07/31 01:02:03'
            }, {
                id: 6,
                vehiclenum: '鄂A12345',
                xinhao: 'on',
                weixing: 'warning',
                locaDate: '2017/07/31 01:02:03'
            }, {
                id: 7,
                vehiclenum: '鄂A12345',
                xinhao: 'on',
                weixing: 'warning',
                locaDate: '2017/07/31 01:02:03'
            }, {
                id: 8,
                vehiclenum: '鄂A12345',
                xinhao: 'on',
                weixing: 'warning',
                locaDate: '2017/07/31 01:02:03'
            }, {
                id: 9,
                vehiclenum: '鄂A12345',
                xinhao: 'on',
                weixing: 'warning',
                locaDate: '2017/07/31 01:02:03'
            }]
        }
    },
    methods: {
        handleTabs(event) {
            var name = event.target.parentNode.parentNode.parentNode.dataset.name
            var type = event.target.parentNode.parentNode.parentNode.dataset.type

            switch (type) {
                case 'list':
                    this.carListDisplay = true
                    this.carTreeDisplay = false
                    break
                case 'tree':
                    this.carListDisplay = true
                    this.carTreeDisplay = true
                    break
            }
            this.request = name
            var eItemList = document.querySelectorAll('.mapview-list-tabs>li')
            for (var i = 0; i < eItemList.length; i++) {
                eItemList[i].classList.remove('active')       //将背景色设置为无
                if (eItemList[i].querySelector('i>span').innerText.trim() === name) {
                    eItemList[i].classList.add('active')
                }
            }
        },
        handleTree() {
            if (this.carTreeDisplay) {
                this.carTreeDisplay = false
            } else {
                this.carTreeDisplay = true
            }
        },
        handleList() {
            if (this.carTreeDisplay) {
                this.carTreeDisplay = false
            } else {
                this.carTreeDisplay = true
            }
        },
        handleTreeData(event) {
            //模拟加载
            var oldData = this.vehicleData
            console.log(event)
            this.vehicleData = oldData.splice(0, 5)
        },
        handleDetail() {
            this.$parent.DetailActive = true
        }
    },
    mounted() {
        var eItemList = document.querySelectorAll('.mapview-list-tabs>li')
        eItemList[0].classList.add('active')
    },
    computed: {
        treeData: function () {
            let treeData
            Util.ajax.post(GetTreeCompanyUrl, {Account: 'ximoo'}).then(function (response) {
                console.log(response.data.ReturnValue.treeData)
                treeData = response.data.ReturnValue.treeData
            }).catch(function (error) {
                console.log(error)
            })
            return treeData
        }
    }

}
</script>