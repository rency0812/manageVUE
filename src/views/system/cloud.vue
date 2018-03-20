<style>
    .layout-map-cloud-box {
        position   : absolute;
        left       : 12px;
        top        : 12px;
        z-index    : 1000;
        box-shadow : 0 2px 2px rgba(0, 0, 0, .15);
        }

    .layout-map-cloud-list {
        width                      : 330px;
        padding                    : 5px 7px;
        background-color           : #FFF;
        border-bottom-left-radius  : 3px;
        border-bottom-right-radius : 3px;
        float                      : left;
        }

    .layout-map-cloud-box-top {
        width                   : 330px;
        padding                 : 5px 7px;
        background              : #3DA3FD;
        border-top-left-radius  : 3px;
        border-top-right-radius : 3px;
        }

    .layout-map-cloud-box-top-content {
        padding    : 7px;
        max-height : 350px;
        overflow-x : hidden;
        overflow-y : auto;
        }

    .layout-map-cloud-box-top .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-nav-container {
        height : auto;
        }

    .layout-map-cloud-box-top .ivu-tabs-nav {
        float : none;
        }

    .layout-map-cloud-box-top .ivu-tabs-bar {
        border-bottom : none;
        }

    .layout-map-cloud-box-top .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
        width            : 25%;
        text-align       : center;
        margin           : 0;
        height           : auto;
        border           : none;
        text-align       : center;
        background-color : transparent;
        color            : #9DC9FE;
        }

    .layout-map-cloud-box-top .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
        color : #FFF;
        }

    .layout-map-cloud-box-top .ivu-tabs-nav .ivu-tabs-tab .ivu-icon {
        width     : auto;
        height    : auto;
        font-size : 32px;
        margin    : 0 auto;
        display   : block;
        }

    .layout-map-cloud-box-top .ivu-form-item {
        margin-bottom : 8px;
        }

    .layout-map-cloud-box-top .cloude-btn {
        margin     : 17px auto 0;
        text-align : right;
        }

    .layout-map-cloud-box-top .ivu-input, .layout-map-cloud-box-top .ivu-select-selection {
        background-color : #3587EB;
        border           : none;
        }

    .layout-map-cloud-box-top input {
        padding-left : 35px;
        color        : #E1F1FF;
        }

    .layout-map-cloud-box-top .ivu-input::placeholder, .layout-map-cloud-box-top input::placeholder {
        color : #ACD7FF;
        }

    .cloude-btn-remove {
        background-color : #3587EB;
        border-color     : transparent;
        width            : 24px;
        height           : 24px;
        line-height      : 24px;
        text-align       : center;
        padding          : 0;
        font-size        : 14px;
        border-radius    : 50%;
        }

    .cloude-btn-remove .ivu-icon {
        color       : #FFF;
        height      : 24px;
        line-height : 24px;
        }

    .layout-map-cloud-box-top .i-arrow {
        color     : #FFF;
        transform : rotate(90deg);
        }

    .layout-map-cloud-box-top .ivu-select-dropdown {
        background-color : #3D93FD;
        color            : #FFF;
        max-height       : 120px;
        overflow         : auto;
        line-height      : 2.4;
        box-shadow       : 0 2px 2px rgba(0, 0, 0, .1);
        }

    .layout-map-cloud-box-top .ivu-select-selection .ivu-select-arrow:nth-of-type(1) {
        color   : #FFF !important;
        z-index : 1000;
        }

    .layout-map-cloud-box-top-content .ivu-form-item-content > i.ivu-icon {
        position    : absolute;
        left        : 0;
        top         : 0;
        color       : #E1F1FF;
        width       : 32px;
        height      : 32px;
        line-height : 32px;
        text-align  : center;
        z-index     : 10;
        }

    .layout-map-cloud-box-top .ivu-select-item, .layout-map-cloud-box-top .ivu-select-not-found {
        color : #FFF;
        }

    .layout-map-cloud-box-top .ivu-select-item:hover {
        background-color : #3587EB;
        }

    .layout-map-cloud-box-top .ivu-input-icon + .ivu-input {
        padding-right : 15px;
        }

    .layout-map-cloud-box-top .ivu-input-wrapper .ivu-input-icon {
        left    : 0;
        right   : auto;
        color   : #E1F1FF;
        width   : 32px;
        z-index : 10;
        }

    .layout-map-cloud-box-top .ivu-input-group-append, .layout-map-cloud-box-top .ivu-input-group-prepend {
        background-color : #49DE49;
        border           : 1px solid #49DE49;
        color            : #FFF;
        }

    .layout-map-cloud-list .ivu-table-border td, .layout-map-cloud-list .ivu-table-border th {
        border : none;
        }
</style>
<template>

    <div>

        <map-tool></map-tool>
        <div class="layout-map-cloud-box">
            <div class="layout-map-cloud-box-top">
                <Tabs :animated="false" type="card" @on-click="handleTabs">
                    <TabPane label="工地" icon="social-apple">
                        <Row class="layout-map-cloud-box-top-content" v-if="siteValue.show">
                            <Col span="24">
                            <Button type="info" long @click="handlePlus('site')">新增一个工地
                            </Button>
                            </Col>
                        </Row>
                        <Row class="layout-map-cloud-box-top-content" v-if="!siteValue.show">
                            <Col span="2">&nbsp;</Col>
                            <Col span="20">
                            <Form :model="siteValue">
                                <FormItem>
                                    <Input v-model="siteValue.Name" placeholder="请输入工地名称..."
                                           icon="map"></Input>
                                </FormItem>
                                <FormItem>
                                    <Input v-model="siteValue.nickName" placeholder="请输入工地别名..." icon="map"></Input>
                                </FormItem>
                                <FormItem>
                                    <Input v-model="siteValue.polygon" readonly placeholder="请描画工地范围..." icon="map">
                                    <Button slot="append" type="info" icon="edit" size="small"></Button>
                                    </Input>
                                </FormItem>
                                <div class="cloude-btn">
                                    <Button icon="checkmark-round" size="small" type="info"
                                            @click="handleSave('site')">保存
                                    </Button>
                                    <Button size="small" type="default" @click="handleCancel('site')">取消</Button>
                                </div>
                            </Form>
                            </Col>
                            <Col span="2">&nbsp;</Col>
                        </Row>
                    </TabPane>
                    <TabPane label="消纳点" icon="social-apple">
                        <Row class="layout-map-cloud-box-top-content" v-if="downloadValue.show">
                            <Col span="24">
                            <Button type="info" long @click="handlePlus('download')">
                                新增一个消纳点
                            </Button>
                            </Col>
                        </Row>
                        <Row class="layout-map-cloud-box-top-content" v-if="!downloadValue.show">
                            <Col span="2">&nbsp;</Col>
                            <Col span="20">
                            <Form :model="downloadValue">
                                <FormItem>
                                    <Input v-model="downloadValue.Name" placeholder="请输入消纳点名称..." icon="map"></Input>
                                </FormItem>
                                <FormItem>
                                    <Input v-model="downloadValue.nickName" placeholder="请输入消纳点别名..."
                                           icon="map"></Input>
                                </FormItem>
                                <FormItem>
                                    <Input v-model="downloadValue.polygon" readonly placeholder="请描画消纳点范围..."
                                           icon="map">
                                    <Button slot="append" type="info" icon="edit" size="small"></Button>
                                    </Input>
                                </FormItem>
                                <div class="cloude-btn">
                                    <Button icon="checkmark-round" size="small" type="info"
                                            @click="handleSave('download')">保存
                                    </Button>
                                    <Button size="small" type="default" @click="handleCancel('download')">取消</Button>
                                </div>
                            </Form>
                            </Col>
                            <Col span="2">&nbsp;</Col>
                        </Row>
                    </TabPane>
                    <TabPane label="线路" icon="social-apple">
                        <div class="layout-map-cloud-box-top-content">
                            <Button type="info" long v-if="lineValue.show" @click="handlePlus('line')">
                                新增一条线路
                            </Button>
                            <Form :model="lineValue" v-else>
                                <Row type="flex" justify="center"
                                     align="middle">
                                    <Col span="2">&nbsp;</Col>
                                    <Col span="20">
                                    <FormItem>
                                        <Input v-model="lineValue.Name" placeholder="请输入线路名称..." icon="map"></Input>
                                    </FormItem>
                                    <FormItem>
                                        <Input v-model="lineValue.nickName" placeholder="请输入线路别名..." icon="map"></Input>
                                    </FormItem>
                                    <hr style="border: none;border-bottom: 1px dotted #DFDFDF;"/>
                                    </Col>
                                    <Col span="2">&nbsp;</Col>
                                </Row>
                                <Row type="flex" justify="center"
                                     align="middle">
                                    <Col span="2">
                                    <Icon type="arrow-swap" class="i-arrow"></Icon>
                                    </Col>
                                    <Col span="20">
                                    <FormItem>
                                        <Icon type="map"></Icon>
                                        <Select
                                                v-model="lineValue.siteName"
                                                filterable
                                                clearable
                                                remote
                                                :remote-method="remoteMethod"
                                                :loading="loadSelect"
                                                icon="map"
                                                placeholder="请选择已设置工地...">
                                            <Option v-for="(option, index) in optionsData" :value="option.value"
                                                    :key="index">{{option.label}}
                                            </Option>
                                        </Select>
                                    </FormItem>
                                    <FormItem
                                            v-for="(item, index) in lineValue.items"
                                            :key="index|sort">
                                        <Row>
                                            <Col span="21">
                                            <Input type="text" v-model="item.value"
                                                   placeholder="请输入或描画途径地点..." icon="map">
                                            <Button slot="append" type="info" icon="edit" size="small"></Button>
                                            </Input>
                                            </Col>
                                            <Col span="2" offset="1">
                                            <Button icon="plus-round" type="text" @click="handleLinePlus(index)"
                                                    class="cloude-btn-remove"
                                                    v-if="index<5 &&item.plus===true"></Button>
                                            <Button icon="minus-round" type="text" @click="handleLineRemove(index)"
                                                    class="cloude-btn-remove"
                                                    v-else-if="index<5 &&item.plus===false "></Button>
                                            </Col>
                                        </Row>
                                    </FormItem>
                                    <FormItem>
                                        <Icon type="map"></Icon>
                                        <Select
                                                v-model="lineValue.downloadName"
                                                filterable
                                                clearable
                                                remote
                                                :remote-method="remoteMethod"
                                                :loading="loadSelect"
                                                placeholder="请选择已设置消纳点...">
                                            <Option v-for="(option, index) in optionsData" :value="option.value"
                                                    :key="index">{{option.label}}
                                            </Option>
                                        </Select>
                                    </FormItem>
                                    </Col>
                                    <Col span="2">&nbsp;</Col>
                                </Row>
                                <div class="cloude-btn">
                                    <Button icon="checkmark-round" size="small" type="info"
                                            @click="handleSave('line')">保存
                                    </Button>
                                    <Button size="small" type="default" @click="handleCancel('line')">取消</Button>
                                </div>
                            </Form>

                        </div>
                    </TabPane>
                    <TabPane label="卡点" icon="social-apple">
                        <div class="layout-map-cloud-box-top-content">
                            <Button type="info" long v-if="poiValue.show" @click="handlePlus('poi')">开始设置卡点</Button>
                            <Form :model="poiValue" v-else>
                                <Row type="flex" justify="center"
                                     align="middle">
                                    <Col span="2">&nbsp;</Col>
                                    <Col span="20">
                                    <FormItem>
                                        <Input v-model="poiValue.Name" placeholder="请输入卡点名称..." icon="map"></Input>
                                    </FormItem>
                                    <FormItem>
                                        <Input v-model="poiValue.nickName" placeholder="请输入卡点别名..." icon="map"></Input>
                                    </FormItem>
                                    <hr style="border: none;border-bottom: 1px dotted #DFDFDF;"/>
                                    </Col>
                                    <Col span="2">&nbsp;</Col>
                                </Row>
                                <Row type="flex" justify="center"
                                     align="middle">
                                    <Col span="2">
                                    <Icon type="arrow-swap" class="i-arrow"></Icon>
                                    </Col>
                                    <Col span="20">
                                    <FormItem>
                                        <Icon type="map"></Icon>
                                        <Select
                                                v-model="poiValue.lineName"
                                                filterable
                                                clearable
                                                remote
                                                placement="top"
                                                :remote-method="remoteMethod"
                                                :loading="loadSelect"
                                                placeholder="请选择已规划线路...">

                                            <Option v-for="(option, index) in optionsData" :value="option.value"
                                                    :key="index">{{option.label}}
                                            </Option>
                                        </Select>
                                    </FormItem>
                                    <FormItem
                                            v-for="(item, index) in poiValue.items"
                                            :key="index|sort">
                                        <Row>
                                            <Col span="21">
                                            <Input type="text" v-model="item.value"
                                                   placeholder="请输入或描画卡点位置..." icon="map">
                                            <Button slot="append" type="info" icon="edit" size="small"></Button>
                                            </Input>
                                            </Col>
                                            <Col span="2" offset="1">
                                            <Button icon="plus-round" type="text" @click="handlePoiPlus(index)"
                                                    class="cloude-btn-remove"
                                                    v-if="index<3 &&item.plus===true"></Button>
                                            <Button icon="minus-round" type="text" @click="handlePoiRemove(index)"
                                                    class="cloude-btn-remove"
                                                    v-else-if="index<3 &&item.plus===false "></Button>
                                            </Col>
                                        </Row>
                                    </FormItem>
                                    </Col>
                                    <Col span="2">&nbsp;</Col>
                                </Row>
                                <div class="cloude-btn">
                                    <Button icon="checkmark-round" size="small" type="info"
                                            @click="handleSave('poi')">保存
                                    </Button>
                                    <Button size="small" type="default" @click="handleCancel('poi')">取消</Button>
                                </div>
                            </Form>

                        </div>
                    </TabPane>
                </Tabs>
            </div>
            <div class="layout-map-cloud-list" :class="{'slide-bottom':tableCfg}" v-if="tableCfg">
                <table-grid :dataType="dataType" :tableData="tableCfg.tableData" :columns="tableCfg.columns" :tableHeight="tableHeight"
                ></table-grid>
            </div>

        </div>
        <div id="Map" ref="Map" class="layout-map-view" :style="{height:mapHeight  + 'px'}"></div>
    </div>
</template>
<script>/* eslint-disable quotes,no-console,semi,linebreak-style,no-var,indent,linebreak-style,init-declarations,complexity */
import '../../assets/css/leaflet.css'
import store from '../../libs/store'
import tableGrid from '../components/table/table-cloud'
import mapTool from  '../mapview/components/tool.vue'
import L from 'leaflet'
import Util from '../../libs/util'

const GetCloudTableDataUrl = require('../../libs/api').GetCloudTableDataUrl

var map
export default {
    components: {
        'table-grid': tableGrid,
        'map-tool':mapTool
    },
    data() {
        return {
            tableHeight: 250,
            dataType:0,
            mapHeight: store.state.mainHeight - 126,
            loadSelect: false,
            optionsData: [],
            ajaxData: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'],
            siteValue: {
                show: true,
                Name: null,
                nickName: null,
                polygon: []
            },
            downloadValue: {
                show: true,
                Name: null,
                nickName: null,
                polygon: []
            },
            lineValue: {
                show: true,
                Name: null,
                nickName: null,
                siteName: null,
                downloadName: null,
                items: [
                    {
                        value: '',
                        plus: true
                    }
                ]
            },
            poiValue: {
                show: true,
                Name: null,
                nickName: null,
                lineName: '',
                items: [
                    {
                        value: '',
                        plus: true
                    }
                ]
            },
            tableCfg: null,


        }
    },
    methods: {
        handlePlus(type) {
            let self = this
            switch (type) {
                case 'site':
                    self.siteValue.show = false
                    break
                case 'download':
                    self.downloadValue.show = false
                    break
                case 'line':
                    self.lineValue.show = false
                    break
                case 'poi':
                    self.poiValue.show = false
                    break
            }
        },
        handleSave(type) {
            let self = this
            Util.ajax.post(GetCloudTableDataUrl, {Account: 'ximoo'}).then(function (response) {
                console.log(self.tableCfg.type)
                //模拟增加
                let etype
                let cloudDataTemplate = {siteData: [], downloadData: [], lineData: [], poiData: []}
                let cloudData = sessionStorage.$cloudData || JSON.stringify(cloudDataTemplate)
                cloudData = JSON.parse(cloudData)

                switch (type) {
                    case 'site':
                        self.siteValue.show = true
                        cloudData.siteData.unshift(self.siteValue)
                        etype = 0
                        break
                    case 'download':
                        self.downloadValue.show = true
                        cloudData.downloadData.unshift(self.downloadValue)
                        etype = 1
                        break
                    case 'line':
                        self.lineValue.show = true
                        cloudData.lineData.unshift(self.lineValue)
                        etype = 2
                        break
                    case 'poi':
                        self.poiValue.show = true
                        cloudData.poiData.unshift(self.poiValue)
                        etype = 3
                        break
                }
                sessionStorage.$cloudData = JSON.stringify(cloudData)
                self.handleTable(etype)
            }).catch(function (error) {
                console.log(error)
            })
        },
        handleCancel(type) {
            let self = this
            switch (type) {
                case 'site':
                    self.siteValue.show = true
                    break
                case 'download':
                    self.downloadValue.show = true
                    break
                case 'line':
                    self.lineValue.show = true
                    break
                case 'poi':
                    self.poiValue.show = true
                    break
            }
        },
        handleLinePlus(index) {
            console.log(index)
            var last
            if (index < 5) {
                this.lineValue.items.unshift({
                    value: '',
                    plus: false
                });
                last = this.lineValue.items.length
                this.lineValue.items[last - 1].plus = true;
            } else {
                last = this.lineValue.items.length
                this.lineValue.items[last - 1].plus = false;
            }
        },
        handleLineRemove(index) {
            if (index < 5) {
                this.lineValue.items.splice(index, 1);
                var last = this.lineValue.items.length
                this.lineValue.items[last - 1].plus = true;
            }
        },
        handlePoiPlus(index) {
            console.log(index)
            var last
            if (index < 3) {
                this.poiValue.items.unshift({
                    value: '',
                    plus: false
                });
                last = this.poiValue.items.length
                this.poiValue.items[last - 1].plus = true;
            } else {
                last = this.poiValue.items.length
                this.poiValue.items[last - 1].plus = false;
            }
        },
        handlePoiRemove(index) {
            if (index < 3) {
                this.poiValue.items.splice(index, 1);
                var last = this.poiValue.items.length
                this.poiValue.items[last - 1].plus = true;
            }
        },
        handleTabs(e) {
            var self = this
            self.dataType = e
            self.siteValue = {
                show: true,
                Name: null,
                nickName: null,
                polygon: []
            }
            self.downloadValue = {
                show: true,
                Name: null,
                nickName: null,
                polygon: []
            }
            self.lineValue = {
                show: true,
                Name: null,
                nickName: null,
                siteName: null,
                downloadName: null,
                items: [
                    {
                        value: '',
                        plus: true
                    }
                ]
            }
            self.poiValue = {
                show: true,
                Name: null,
                nickName: null,
                lineName: '',
                items: [
                    {
                        value: '',
                        plus: true
                    }
                ]
            }
            self.handleTable(e)
        },
        handleTable(type) {
            //模拟加载数据
            var self = this
            var columns = [{
                title: '操作',
                key: 'action',
                width: 120,
                align: 'center',
                render: (h, params) => {
                    return h('div', [
                        h('Button', {
                            props: {
                                type: 'text',
                                size: 'small'
                            },
                            style: {
                                marginRight: '5px'
                            },
                            on: {
                                click: () => {
                                    this.$Modal.confirm({
                                        title: '编辑',
                                        content: '是否编辑该条目？',
                                        onOk: () => {
                                            self.siteValue = {
                                                show: true,
                                                name: null,
                                                nickName: null,
                                                polygon: []
                                            }
                                            self.downloadValue = {
                                                show: true,
                                                name: null,
                                                nickName: null,
                                                polygon: []
                                            }
                                            self.lineValue = {
                                                show: true,
                                                name: null,
                                                nickName: null,
                                                siteName: null,
                                                downloadName: null,
                                                items: [
                                                    {
                                                        value: '',
                                                        plus: true
                                                    }
                                                ]
                                            }
                                            self.poiValue = {
                                                show: true,
                                                name: null,
                                                nickName: null,
                                                lineName: '',
                                                items: [
                                                    {
                                                        value: '',
                                                        plus: true
                                                    }
                                                ]
                                            }
                                        }
                                    });
                                }
                            }
                        }, '编辑'),
                        h('Button', {
                            props: {
                                type: 'text',
                                size: 'small'
                            },
                            on: {
                                click: () => {
                                    console.log(params.row.ID)
                                    let ID = params.row.ID
                                    this.$Modal.confirm({
                                        title: '删除',
                                        content: '是否删除该线路：' + params.row.Name + '？',
                                        onOk: () => {
                                            Util.ajax.post(GetCloudTableDataUrl + '/' + ID + '/delete').then(function (response) {
                                                console.log(self.tableCfg.type)
                                                //模拟删除
                                                if (response.data.isSuccess) {
                                                    for (var i in self.tableCfg.tableData) {
                                                        if (self.tableCfg.tableData[i].ID === ID) {
                                                            self.tableCfg.tableData.splice(i, 1)
                                                        }
                                                    }
                                                }
                                                let cloudData = JSON.parse(sessionStorage.$cloudData)
                                                switch (self.tableCfg.type) {
                                                    case 0 :
                                                        self.siteValue = {
                                                            show: false,
                                                            name: null,
                                                            nickName: null,
                                                            polygon: []
                                                        }
                                                        cloudData.siteData = self.tableCfg.tableData
                                                        break
                                                    case 1 :
                                                        self.downloadValue = {
                                                            show: false,
                                                            name: null,
                                                            nickName: null,
                                                            polygon: []
                                                        }
                                                        cloudData.downloadData = self.tableCfg.tableData
                                                        break
                                                    case 2 :
                                                        self.lineValue = {
                                                            show: false,
                                                            name: null,
                                                            nickName: null,
                                                            siteName: null,
                                                            downloadName: null,
                                                            items: [
                                                                {
                                                                    value: '',
                                                                    plus: true
                                                                }
                                                            ]
                                                        }
                                                        cloudData.lineData = self.tableCfg.tableData
                                                        break
                                                    case 3 :
                                                        self.poiValue = {
                                                            show: false,
                                                            name: null,
                                                            nickName: null,
                                                            lineName: '',
                                                            items: [
                                                                {
                                                                    value: '',
                                                                    plus: true
                                                                }
                                                            ]
                                                        }
                                                        cloudData.poiData = self.tableCfg.tableData
                                                        break
                                                }
                                                sessionStorage.$cloudData = JSON.stringify(cloudData)
                                            }).catch(function (error) {
                                                console.log(error)
                                            })
                                        }
                                    });
                                }
                            }
                        }, '删除')
                    ])

                }
            }]
            var tableData = []
            var tableCfg = {
                tableData: tableData,
                columns: columns,
                type: type

            }
            let cloudDataTemplate = {siteData: [], downloadData: [], lineData: [], poiData: []}
            let cloudData = sessionStorage.$cloudData || JSON.stringify(cloudDataTemplate)
            cloudData = JSON.parse(cloudData)
            switch (type) {
                case 0 :
                    tableCfg.columns.unshift({
                        title: '工地名称',
                        sortable: true,
                        key: 'Name'
                    })

                    if (cloudData.siteData && cloudData.siteData.length > 0) {
                        tableData = cloudData.siteData
                        tableCfg.tableData = tableData
                        self.tableCfg = tableCfg
                    } else {
                        self.getTableData(function (res) {
                            tableData = res
                            cloudData.siteData = tableData
                            console.log(tableData)
                            sessionStorage.$cloudData = JSON.stringify(cloudData)
                            tableCfg.tableData = tableData
                            self.tableCfg = tableCfg
                        })
                    }
                    break
                case 1 :
                    tableCfg.columns.unshift({
                        title: '消纳点名称',
                        sortable: true,
                        key: 'Name'
                    })
                    if (cloudData.downloadData && cloudData.downloadData.length > 0) {
                        tableData = cloudData.downloadData
                        tableCfg.tableData = tableData
                        self.tableCfg = tableCfg
                    } else {
                        self.getTableData(function (res) {
                            tableData = res
                            cloudData.downloadData = tableData
                            console.log(tableData)
                            sessionStorage.$cloudData = JSON.stringify(cloudData)
                            tableCfg.tableData = tableData
                            self.tableCfg = tableCfg
                        })
                    }
                    break
                case 2 :
                    tableCfg.columns.unshift({
                        title: '线路名称',
                        sortable: true,
                        key: 'Name'
                    })
                    if (cloudData.lineData && cloudData.lineData.length > 0) {
                        tableData = cloudData.lineData
                        tableCfg.tableData = tableData
                        self.tableCfg = tableCfg
                    } else {
                        self.getTableData(function (res) {
                            tableData = res
                            cloudData.lineData = tableData
                            console.log(tableData)
                            sessionStorage.$cloudData = JSON.stringify(cloudData)
                            tableCfg.tableData = tableData
                            self.tableCfg = tableCfg
                        })
                    }
                    break
                case 3 :
                    tableCfg.columns.unshift({
                        title: '卡点名称',
                        sortable: true,
                        key: 'Name'
                    })
                    if (cloudData.poiData && cloudData.poiData.length > 0) {
                        tableData = cloudData.poiData
                        tableCfg.tableData = tableData
                        self.tableCfg = tableCfg
                    } else {
                        self.getTableData(function (res) {
                            tableData = res
                            cloudData.poiData = tableData
                            console.log(tableData)
                            sessionStorage.$cloudData = JSON.stringify(cloudData)
                            tableCfg.tableData = tableData
                            self.tableCfg = tableCfg
                        })
                    }
                    break
            }


        },
        getTableData(callback) {
            callback = callback || function () {
            }
            Util.ajax.post(GetCloudTableDataUrl, {Account: 'ximoo'}).then(function (response) {
                console.log(response)
                if (response.data.isSuccess) {
                    return callback(response.data.ReturnValue.cloudData)
                }
            }).catch(function (error) {
                console.log(error)
            })
        },
        remoteMethod(query) {
            if (query !== '') {
                this.loadSelect = true;
                setTimeout(() => {
                    this.loadSelect = false;
                    const ajaxData = this.ajaxData.map(item => {
                        return {
                            value: item,
                            label: item
                        };
                    });
                    this.optionsData = ajaxData.filter(item => item.label.indexOf(query) > -1);
                }, 200);
            } else {
                this.optionsData = [];
            }
        }
    },
    mounted() {
        map = L.map('Map').setView(L.latLng([30.5927600000, 114.3052500000]), 15)
        L.tileLayer('http://webrd0{s}.is.autonavi.com/appmaptile?size=1&scale=1&style=7&x={x}&y={y}&z={z}', {
            subdomains: '1'
        }).addTo(map)
        //临时隐藏
        document.querySelector('.leaflet-control-container').style.display = 'none'

        this.handleTabs(0)


    },
    computed: {}
}
</script>