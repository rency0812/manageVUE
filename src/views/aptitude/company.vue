<style>
    .spin-icon-load {
        animation : ani-spin 2s linear infinite;
        }

    @keyframes ani-spin {
        from { transform : rotate(0deg); }
        50% { transform : rotate(180deg); }
        to { transform : rotate(360deg); }
        }

    .ivu-spin {
        color       : #FFF;
        font-size   : 20px;
        font-weight : bold;
        }

    .ivu-spin-fix {
        background-color : rgba(0, 50, 80, .65);
        }

    .ivu-table-cell .ivu-btn {
        line-height  : 1.4;
        margin-right : 7px;
        }

    .ivu-table-cell .ivu-btn .ivu-icon {
        font-size : 10px !important;
        }

    .ivu-table th {
        cursor : pointer;
        }

    .ivu-table-sort i {
        color : #DFDFDF;
        }

    .ivu-table-row-highlight td, .ivu-table-stripe .ivu-table-body tr.ivu-table-row-highlight:nth-child(2n) td, .ivu-table-stripe .ivu-table-fixed-body tr.ivu-table-row-highlight:nth-child(2n) td, tr.ivu-table-row-highlight.ivu-table-row-hover td {
        background-color : #F0F0F0;
        }

</style>
<template>
    <div>
        <div class="layout-tree">
            <tree-region v-on:refreshtable="handleTree" :style="{height:treeHeight +'px'}"></tree-region>
        </div>
        <div class="layout-table">
            <div id="advSearch">
                <adv-search :searchCfg="searchCfg" v-on:refreshtable="handleSearch"></adv-search>
            </div>
            <table-grid :tableData="companyData" :columns="columns" :tableHeight="tableHeight"
                        :spinShow="spinShow"></table-grid>
            <div class="layout-pages">
                <Page :total="PageTotal" :current="PageCurrent" size="small" :page-size="PageSize" show-elevator
                      show-total class="fr"
                      @on-change="handleTableData"></Page>
            </div>
        </div>
        <ipt-modal :modalCfg="modalCfg" :NewSave="NewSave" :tableData="companyData" :inputData="inputData"
                   :PageSize="PageSize" :PageTotal="PageTotal" :spinShow="spinShow"
                   v-on:refreshtable="handleModal"></ipt-modal>
        <band-modal :bandCfg="bandCfg"
                    v-on:refreshtable="handleModal"></band-modal>

    </div>
</template>
<script>/* eslint-disable quotes,no-console,semi,linebreak-style,no-var,indent,no-undef,init-declarations */
import advSearch from '../components/search/adv-search'
import iptModal from '../components/modal/input-modal'
import bandModal from '../components/modal/band-modal'
import treeRegion from '../components/tree/tree-region'
import tableGrid from '../components/table/table'
import store from "../../libs/store"
import Util from "../../libs/util"

const GetCompanyTableDataUrl = require('../../libs/api').GetCompanyTableDataUrl
export default {
    components: {
        'adv-search': advSearch,
        'ipt-modal': iptModal,
        'band-modal': bandModal,
        'tree-region': treeRegion,
        'table-grid': tableGrid
    },
    data() {
        return {
            searchCfg: {
                Button: {'search': true, 'plus': true, 'delete': false, 'import': false, 'export': false, 'band': true},
                Cfg: [
                    {
                        id: 1,
                        label: '企业名称',
                        type: 'input',
                        name: 'comName',
                        value: ''
                    }, {
                        id: 2,
                        label: '联系人',
                        type: 'input',
                        name: 'Contact',
                        value: ''
                    }, {
                        id: 3,
                        label: '联系电话',
                        type: 'input',
                        name: 'Mobile',
                        value: ''
                    }]
            },
            modalCfg: {
                show: false,
                title: '新增企业信息',
                Cfg: [
                    {
                        id: 1,
                        title: '企业名称',
                        name: 'Name',
                        type: 'input',
                        require: 1
                    },
                    {
                        id: 2,
                        title: '企业简称',
                        name: 'nickName',
                        type: 'input',
                        require: 1
                    },
                    {
                        id: 3,
                        title: '法人代表',
                        name: 'LawMan',
                        type: 'input',
                        require: 1
                    },
                    {
                        id: 4,
                        title: '法人电话',
                        name: 'PhoneNum',
                        type: 'input',
                        require: 1
                    },
                    {
                        id: 5,
                        title: '联系人',
                        name: 'Contact',
                        type: 'input',
                        require: 1
                    },
                    {
                        id: 6,
                        title: '联系人电话',
                        name: 'ContactPhoneNum',
                        type: 'input',
                        require: 1
                    },
                    {
                        id: 7,
                        title: '工商执照',
                        name: 'License',
                        type: 'input',
                        require: 0
                    },
                    {
                        id: 8,
                        title: '注册资金',
                        name: 'Money',
                        type: 'input',
                        require: 0
                    },
                    {
                        id: 9,
                        title: '所属区域',
                        name: 'Region',
                        type: 'select',
                        require: 1
                    },
                    {
                        id: 10,
                        title: '资质类型',
                        name: 'Aptitude',
                        type: 'input',
                        require: 0
                    },
                    {
                        id: 11,
                        title: '有效期起',
                        name: 'Date1',
                        type: 'datepicker',
                        require: 0
                    },
                    {
                        id: 12,
                        title: '有效期止',
                        name: 'Date2',
                        type: 'datepicker',
                        require: 0
                    },
                    {
                        id: 13,
                        title: '停车场地',
                        name: 'Stop',
                        type: 'input',
                        require: 0,
                        width: '100%'
                    },
                    {
                        id: 14,
                        title: '企业地址',
                        name: 'Address',
                        type: 'input',
                        require: 0,
                        width: '100%'
                    }]
            },
            bandCfg: {
                show: false,
                title: '绑定/导入车辆',
                Cfg: [
                    {
                        id: 1,
                        title: '企业名称',
                        name: 'Name',
                        type: 'input',
                        require: 1
                    },
                    {
                        id: 2,
                        title: '企业简称',
                        name: 'nickName',
                        type: 'input',
                        require: 1
                    },
                    {
                        id: 3,
                        title: '法人代表',
                        name: 'LawMan',
                        type: 'input',
                        require: 1
                    },
                    {
                        id: 4,
                        title: '法人电话',
                        name: 'PhoneNum',
                        type: 'input',
                        require: 1
                    },
                    {
                        id: 5,
                        title: '联系人',
                        name: 'Contact',
                        type: 'input',
                        require: 1
                    },
                    {
                        id: 6,
                        title: '联系人电话',
                        name: 'ContactPhoneNum',
                        type: 'input',
                        require: 1
                    },
                    {
                        id: 7,
                        title: '工商执照',
                        name: 'License',
                        type: 'input',
                        require: 0
                    },
                    {
                        id: 8,
                        title: '注册资金',
                        name: 'Money',
                        type: 'input',
                        require: 0
                    },
                    {
                        id: 9,
                        title: '所属区域',
                        name: 'Region',
                        type: 'select',
                        require: 1
                    },
                    {
                        id: 10,
                        title: '资质类型',
                        name: 'Aptitude',
                        type: 'input',
                        require: 0
                    },
                    {
                        id: 11,
                        title: '有效期起',
                        name: 'Date1',
                        type: 'datepicker',
                        require: 0
                    },
                    {
                        id: 12,
                        title: '有效期止',
                        name: 'Date2',
                        type: 'datepicker',
                        require: 0
                    },
                    {
                        id: 13,
                        title: '停车场地',
                        name: 'Stop',
                        type: 'input',
                        require: 0,
                        width: '100%'
                    },
                    {
                        id: 14,
                        title: '企业地址',
                        name: 'Address',
                        type: 'input',
                        require: 0,
                        width: '100%'
                    }]
            },
            columns: [
                {
                    title: '企业名称',
                    sortable: true,
                    key: 'Name'
                },
                {
                    title: '企业简称',

                    key: 'nickName'
                },
                {
                    title: '所属区域',
                    align: 'center',
                    sortable: true,
                    key: 'Region'
                },
                {
                    title: '注册资金',
                    key: 'Money'
                },
                {
                    title: '法人代表',
                    align: 'center',
                    key: 'LawMan'
                },
                {
                    title: '联系电话',
                    align: 'center',
                    key: 'PhoneNum'
                },
                {
                    title: '工商执照',
                    align: 'center',
                    key: 'License'
                },
                {
                    title: '车辆总数',
                    align: 'center',
                    sortable: true,
                    key: 'Vehicles'
                },
                {
                    title: '绑定设备数',
                    align: 'center',
                    sortable: true,
                    key: 'Devices'
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 300,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'default',
                                    icon: "clipboard",
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.modalCfg.show = true
                                        this.inputData = this.companyData[params.index]
                                        this.NewSave = false
                                    }

                                }
                            }, '查看'),
                            h('Button', {
                                props: {
                                    type: 'default',
                                    icon: "edit",
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.modalCfg.show = true
                                        this.inputData = this.companyData[params.index]
                                        this.NewSave = true
                                    }
                                }
                            }, '编辑'),
                            h('Button', {
                                props: {
                                    type: 'warning',
                                    icon: "paperclip",
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.bandCfg.show = true
                                    }
                                }
                            }, '绑定车辆'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    icon: "android-close",
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.$Modal.confirm({
                                            title: '删除',
                                            content: '是否删除该条目？'
                                        });
                                    }
                                }
                            }, '删除')
                        ])

                    }
                }
            ],
            companyData: [],
            PageTotal: 0,
            PageSize: 40,
            searchHeight: 42,
            PageCurrent: 1,
            spinShow: true,
            treeParams: [],
            inputData: [],
            NewSave: true
        }
    },
    created() {
        this.handleAjax();
    },
    methods: {
        handleTableData(e) {
            console.log(e)
            this.handleAjax();
        },
        handleAjax() {
            var self = this
            self.spinShow = true
            Util.ajax.post(GetCompanyTableDataUrl, {Account: 'ximoo'}).then(function (response) {
                self.companyData = response.data.ReturnValue.companyData
                self.PageSize = response.data.ReturnValue.PageSize
                self.PageTotal = response.data.ReturnValue.PageTotal
                self.spinShow = false
            }).catch(function (error) {
                console.log(error)
            })
        },
        handleSearch(v) {
            switch (v.type) {
                case 'search':
                    this.handleAjax();
                    break;
                case 'plus':
                    this.NewSave = true
                    this.modalCfg.show = true
                    break;
                case 'band':
                    this.bandCfg.show = true
                    break;
            }
        },
        handleTree(v) {
            this.treeParams = v
            this.handleAjax();
        },
        handleModal(v) {
            this.PageCurrent = v
            this.handleAjax();
        }
    },
    mounted() {
        if (document.getElementById('advSearch').offsetHeight != null) {
            this.searchHeight = document.getElementById('advSearch').offsetHeight
        } else {
            this.searchHeight = 42
        }


        let inputData = new Object()
        let modalData = this.modalCfg.Cfg
        for (var i in modalData) {
            inputData[modalData[i].name] = ''
        }
        this.inputData = inputData


    },
    computed: {
        tableHeight: function () {
            let tableHeight = store.state.mainHeight - this.searchHeight - 29 - 126
            return tableHeight
        },
        treeHeight: function () {
            let treeHeight = store.state.mainHeight - 126
            return treeHeight
        }
    }
}
</script>
