<style>

    .showAll{
        width      :100% !important;
        transition :width .3s ease-in-out;
        }

</style>
<template>
    <Modal v-model="bandCfg.show" :mask-closable="false" width="75%" class="layout-modal-band">
        <p slot="header">
            <Icon type="android-car"></Icon>
            <span>{{bandCfg.title}}</span>
        </p>
        <div class="layout-modal-content">
            <div class="layout-modal-content-tree" v-if="tabsName === 'Transfer'">
                <tree-company v-on:refreshtable="handleTree"></tree-company>
            </div>
            <div class="layout-modal-content-vehicle" :class="{showAll:tabsName !== 'Transfer'}">
                <Tabs value="Transfer" type="card" @on-click="handleTabs">
                    <TabPane label="选择车辆" name="Transfer" icon="paperclip">
                        <Transfer
                                style="height: 380px; text-align:center; margin:15px 0"
                                :data="source"
                                :titles="['未绑定车辆', '已选车辆']"
                                :operations="['解绑车辆','绑定车辆']"
                                :target-keys="target"
                                filterable
                                :filter-method="filterMethod"
                                @on-change="handleChange"></Transfer>
                        <div class="layout-modal-transfre-page ">
                            <Page :total="totalSource.length" :page-size="pageSize" :current="pageCurrent"
                                  size="small"
                                  @on-change="handlePage" show-total
                                  class="fl">
                                <Icon type="ios-information"></Icon>
                                共 {{totalSource.length}} 辆未绑定车辆
                            </Page>
                            <Page :total="totalSource.length" :page-size="pageSize" :current="pageCurrent"
                                  size="small"
                                  @on-change="handlePage"
                                  class="fr"></Page>
                        </div>
                    </TabPane>
                    <TabPane label="直接导入车辆列表" name="Import" icon="ios-download">
                        <div class="layout-modal-import">
                            <h3 class="ivu-transfer-list-header layout-modal-import-title">
                                <Icon type="ios-download"></Icon>
                                直接导入车辆列表
                            </h3>
                            <div style="position:relative; height:100%">
                                <Input ref="iptImport" v-model="importData" type="textarea" :rows="4"
                                       class="ivu-transfer-list-body layout-modal-import-content"
                                       placeholder="请直接粘贴以 [，] 分隔的车牌号数据..."
                                       @on-blur="handleImport('blur')"></Input>
                                <ul class="layout-modal-import-content-list" v-if="showVechileNum"
                                    @click="handleImport('focus')">
                                    <li v-for="item in importShow">
                                        {{item}}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
                <div class="layout-modal-button">
                    <Button type="info" icon="checkmark-round" size="small" :loading="band_loading"
                            @click="handleBandSave">
                        确定绑定
                    </Button>
                    <Button type="ghost" size="small" @click="handleCancel"> 取 消 </Button>
                </div>
            </div>
        </div>
        <div slot="footer"></div>
    </Modal>
</template>
<script>/* eslint-disable quotes,no-console,semi,linebreak-style,no-var,indent,linebreak-style,camelcase,no-unused-vars,no-dupe-keys,no-redeclare,no-case-declarations */
import treeCompany from '../tree/tree-company'
import Util from '../../../libs/util'

const GetVehicleListUrl = require('../../../libs/api').GetVehicleListUrl


export default {
    components: {
        'tree-company': treeCompany
    },
    props: ['bandCfg'],
    data() {
        return {
            band_loading: false,
            source: [],
            target: [],
            showTransfer: true,
            totalSource: [],
            pageCurrent: 1,
            pageSize: 100,
            loaded: false,
            importData: null,
            importShow: [],
            showVechileNum: false,
            tabsName: 'Transfer'
        }
    },
    methods: {
        handleBandSave() {
            var self = this
            self.band_loading = true
            setTimeout(() => {
                self.bandCfg.show = false
                self.band_loading = false
            }, 2000)
        },
        handleCancel() {
            var self = this
            self.bandCfg.show = false
        },
        handleImport() {
            this.showTransfer = false
        },
        handleTransfer() {
            this.showTransfer = true
        },
        handleTree(v) {
            let self = this
            self.pageCurrent = 1
            self.target = []
            self.getVehicleData()
        },
        handleData() {
            let self = this
            let pageCurrent = self.pageCurrent
            let pageSize = self.pageSize
            let totalSource = self.totalSource
            if (self.loaded) {
                self.source = totalSource.slice((pageCurrent - 1) * pageSize, pageCurrent * pageSize)
            }
        },
        handlePage(e) {
            let self = this
            self.pageCurrent = e
            self.handleData()
        },
        getVehicleData() {
            let self = this
            let mockData = [];
            self.loaded = false
            Util.ajax.get(GetVehicleListUrl, {Account: "ximoo"}).then(function (response) {
                for (var i in response.data.ReturnValue.DataList) {
                    mockData.push({
                        key: (response.data.ReturnValue.DataList[i].DeviceNum).toString(),
                        label: response.data.ReturnValue.DataList[i].VehicleNum
                    })
                }
                self.totalSource = mockData;
                self.loaded = true
                self.handleData()
            }).catch(function (error) {
                self.loaded = false
                console.log(error)
            })
        },
        handleChange(newTargetKeys, direction, moveKeys) {
            let self = this
            let targetStore = self.targetStore
            self.target = newTargetKeys
            self.target = self.uniqueArray(self.target);
        },
        filterMethod(data, query) {
            return data.label.indexOf(query) > -1;
        },
        handleImport(e) {
            let self = this
            switch (e) {
                case 'blur':
                    let string = self.importData
                    let strs = new Array(); //定义一数组
                    if (string) {
                        strs = string.split(",");
                    }
                    self.importShow = strs
                    if (self.importShow.length>0 && self.importShow) {
                        self.showVechileNum = true
                    }
                    break;
                case 'focus':
                    self.showVechileNum = false
                    self.$refs.iptImport.focus()
                    break;
            }
        },
        handleTabs(name) {
            console.log(name)
            this.tabsName = name
        },
        uniqueArray(array) {
            var newArr = [array[0]]
            for (var i = 1; i < array.length; i++) {
                var Item = array[i]
                var repeat = false
                for (var j = 0; j < newArr.length; j++) {
                    if (Item == newArr[j]) {
                        repeat = true
                        break
                    }
                }
                if (!repeat) {
                    newArr.push(Item)
                }
            }
            return newArr
        }
    },
    beforCreated() {

    },
    mounted() {

    },
    watch: {
        show(curVal, oldVal) {
            let self = this
            if (curVal) {
                self.pageCurrent = 1
                self.source = []
                self.target = []
                self.totalSource = []
            }
        }
    },
    computed: {
        show() {
            return this.$props.bandCfg.show
        }
    }
}
</script>