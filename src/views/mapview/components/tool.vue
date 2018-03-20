<style>
    .layout-map-tool {
        position   : absolute;
        right      : 15px;
        top        : 15px;
        z-index    : 1000;
        box-shadow : 0 2px 2px rgba(0, 0, 0, .15);
        }

    .layout-map-tool .ivu-menu-light {
        background-color : #FFF;
        border-radius    : 4px;
        }

    .layout-map-tool .ivu-select-dropdown {
        background-color : #F8F8F8;
        overflow-y       : auto;
        overflow-x       : hidden;
        }

    .layout-map-tool .ivu-select-dropdown-list {
        padding : 0px;
        color   : #585858;
        }

    .ivu-select-dropdown-list .layout-map-tool-poi {
        width       : 100%;
        text-align  : left;
        line-height : 2.2;
        display     : block !important;
        font-size   : 13px !important;
        clear       : none;
        }

    .layout-map-tool .ivu-menu-item:hover, .ivu-select-dropdown-list .layout-map-tool-poi:hover {
        background    : #2DB7F5 !important;
        color         : #FFF !important;
        border-bottom : none !important;
        }

    .layout-map-tool .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active .layout-map-tool .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover {
        color         : inherit !important;
        border-bottom : none;
        }

    .layout-map-tool .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item.map-poi {
        background : none !important;
        color      : #585858 !important;
        border     : none;
        }

    .map-poi-search {
        margin-right : 6px;
        position     : absolute;
        right        : 0;
        top          : 0;
        width        : 48px;
        text-align   : center;
        line-height  : 1.8;
        color        : #999;
        }

</style>
<template>
    <div class="layout-map-tool">

        <Menu mode="horizontal" theme="light" @on-select="handleTool">
            <MenuItem name="map-poi" class="map-poi">
                区域切换:
                <Select
                        v-model="areaName"
                        icon="ios-search"
                        id="areaPoi"
                        ref="areaPoi"
                        size="small"
                        clearable
                        filterable
                        remote
                        :remote-method="handleSearch"
                        :loading="areaLoading"
                        placeholder="请输入您想查询的地点"
                        style="margin-top: -3px;width: 200px;"
                        @on-change="handlePoi">

                    <Option class="layout-map-tool-poi" v-for="(item,index) in areaSlot" :value="item.label"
                            :key="index">
                        {{ item.label }}
                    </Option>
                </Select>
                <Icon type="search" class="map-poi-search"></Icon>
            </MenuItem>
            <Submenu name="map-layout">
                <template slot="title">
                    <Icon type="ios-browsers-outline"></Icon>
                    {{layoutName}}
                </template>
                <MenuItem name="map-layout-1">
                    <Icon type="ios-browsers-outline"></Icon>
                    高德地图
                </MenuItem>
                <MenuItem name="map-layout-2">
                    <Icon type="ios-browsers-outline"></Icon>
                    谷歌地形图
                </MenuItem>
                <MenuItem name="map-layout-3">
                    <Icon type="ios-browsers-outline"></Icon>
                    高德卫星图
                </MenuItem>
            </Submenu>
            <Submenu name="map-tool">
                <template slot="title">
                    <Icon type="briefcase"></Icon>
                    工具
                </template>
                <MenuItem name="map-tool-1">
                    <Icon type="ios-browsers-outline"></Icon>
                    全国
                </MenuItem>
                <MenuItem name="map-tool-2">
                    <Icon type="ios-browsers-outline"></Icon>
                    测距
                </MenuItem>
                <MenuItem name="map-tool-3">
                    <Icon type="ios-browsers-outline"></Icon>
                    测面
                </MenuItem>
                <MenuItem name="map-tool-4">
                    <Icon type="ios-browsers-outline"></Icon>
                    拉框放大
                </MenuItem>
                <MenuItem name="map-tool-5">
                    <Icon type="ios-browsers-outline"></Icon>
                    拉框缩小
                </MenuItem>
                <MenuItem name="map-tool-6">
                    <Icon type="ios-browsers-outline"></Icon>
                    坐标查询
                </MenuItem>
            </Submenu>
        </Menu>
    </div>
</template>
<script>/* eslint-disable quotes,no-console,semi,linebreak-style,no-var,indent,linebreak-style */

const areaSlot = [{
    label: '武汉市',
    value: [30, 114, 15]
}, {
    label: '硚口区',
    value: [30, 114, 15]
}, {
    label: '江汉区',
    value: [30, 114, 15]
}, {
    label: '江岸区',
    value: [30, 114, 15]
}, {
    label: '汉阳区',
    value: [30, 114, 15]
}, {
    title: '汉南区',
    value: [30, 114, 15]
}, {
    label: '武昌区',
    value: [30, 114, 15]
}, {
    label: '青山区',
    value: [30, 114, 15]
}, {
    label: '洪山区',
    value: [30, 114, 15]
}, {
    label: '东西湖区',
    value: [30, 114, 15]
}, {
    label: '黄陂区',
    value: [30, 114, 15]
}, {
    label: '蔡甸区',
    value: [30, 114, 15]
}, {
    label: '江夏区',
    value: [30, 114, 15]
}]

export default {
    data() {
        return {
            layoutName: '高德地图',
            areaName: '',
            areaSlot: areaSlot,
            list: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming']
        }
    },
    methods: {
        handleTool(name) {
            if (name.indexOf('map-poi') > -1) {
                this.$refs.areaPoi.clearSingleSelect()
                setTimeout(() => {
                    this.areaSlot = areaSlot;
                    this.areaName = ''
                }, 200);
                return
            }
            if (name.indexOf('map-layout') > -1) {
                switch (name) {
                    case 'map-layout-1':
                        this.layoutName = '高德地图'
                        break
                    case 'map-layout-2':
                        this.layoutName = '谷歌地形图'
                        break
                    case 'map-layout-3':
                        this.layoutName = '高德卫星图'
                        break
                }
            }
        },
        handlePoi(e) {
            setTimeout(() => {
                this.areaName = e
            }, 200);
            console.log(this.areaName)
        },
        handleSearch(query) {
            if (query !== '') {
                this.areaLoading = true;
                this.areaSlot = []
                setTimeout(() => {
                    this.areaLoading = false;
                    const list = this.list.map(item => {
                        return {
                            value: item,
                            label: item
                        };
                    });
                    this.areaSlot = list.filter(item => item.label.indexOf(query) > -1);
                }, 200);
            } else {
                this.areaSlot = []
                setTimeout(() => {
                    this.areaSlot = areaSlot;
                }, 200);
            }
        }
    },
    computed: {}
}
</script>