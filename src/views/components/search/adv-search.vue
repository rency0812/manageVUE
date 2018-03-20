<style>
    .ivu-date-picker .ivu-select-dropdown{
        background-color :#fff;
        }
    .ivu-date-picker-header-label, span.ivu-date-picker-cells-cell, .ivu-time-picker-cells-list ul li, .ivu-input-icon,.ivu-select-selection .ivu-icon{
        color :#333;
        }
    .ivu-date-picker-cells-cell-next-month em, .ivu-date-picker-cells-cell-prev-month em{
        color :#dfdfdf;
        }
    .ivu-date-picker-rel{
        margin-top :4px;
        }
    .layout-adv-search .ivu-select-dropdown ,.layout-modal-content .ivu-select-dropdown{
        background-color :#f8f8f8;
        overflow         :auto;
        }
    .layout-adv-search .ivu-select-item,.layout-modal-content .ivu-select-item{
        padding :7px 16px;
        }
    .ivu-select-not-found{
        line-height :2.4;
        }

</style>
<template>
    <div class="layout-adv-search">
        <Form ref="formInline" :model="formInline" inline label-position="left" :label-width="80">
            <FormItem :label="item.label+':'" v-for="item in searchCfg.Cfg" :key="item.id">
                <!--输入框-->
                <Input type="text" v-model="searchParams[item.name]" :placeholder="'请输入'+item.label+'...'" size="small"
                       v-if="item.type == 'input'"></Input>
                <!--时间日期选择器-->
                <DatePicker type="datetime" size="small" v-model="searchParams[item.name]"
                            :placeholder="'请输入'+item.label+'...'"
                            v-if="item.type == 'datepicker'"></DatePicker>
                <!--单选框-->
                <RadioGroup v-model="Radio" v-if="item.type == 'radio'" @on-change="handleRadio">
                    <Radio :label="i.label" v-for="i in item.children" :key="i.label"></Radio>
                </RadioGroup>
                <!--复选框-->
                <CheckboxGroup v-model="CheckBox" v-if="item.type == 'checkbox'"  @on-change="handleCheckbox">
                    <Checkbox :label="i.label" v-for="i in item.children" :key="i.label"></Checkbox>
                </CheckboxGroup>
                <!--选择下拉-->
                <Select v-model="searchParams[item.name]" clearable filterable v-if="item.type == 'select'"
                        style="width:170px" size="small">
                    <Option value="1">武汉市</Option>
                    <Option value="2">洪山区</Option>
                    <Option value="3">武昌区</Option>
                    <Option value="4">硚口区</Option>
                    <Option value="5">江汉区</Option>
                    <Option value="6">江岸区</Option>
                    <Option value="7">汉阳区</Option>
                    <Option value="8">汉南区</Option>
                    <Option value="9">青山区</Option>
                    <Option value="10">蔡甸区</Option>
                    <Option value="11">黄陂区</Option>
                    <Option value="12">江夏区</Option>
                    <Option value="13">东西湖区</Option>
                    <Option value="14">东湖高新区</Option>
                    <Option value="15">沌口开发区</Option>
                </Select>
            </FormItem>
            <FormItem>
                <Button type="info" size="small" icon="android-search" class="adv-search-btn" @click="handleSearch"
                        v-if="searchCfg.Button.search">
                    查询
                </Button>
                <Button type="warning" size="small" icon="ios-download-outline" class="adv-search-btn"
                        @click="handleImport" v-if="searchCfg.Button.import">
                    导入
                </Button>
                <Button type="warning" size="small" icon="ios-upload-outline" class="adv-search-btn"
                        @click="handleExport" v-if="searchCfg.Button.export">
                    导出
                </Button>
                <Button type="success" size="small" icon="plus-round" class="adv-search-btn"
                        @click="handlePlus" v-if="searchCfg.Button.plus">
                    新增
                </Button>
                <Button type="warning" size="small" icon="paperclip" class="adv-search-btn"
                        @click="handleBand" v-if="searchCfg.Button.band">
                    绑定车辆/设备
                </Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>/* eslint-disable quotes,no-console,semi,linebreak-style,no-var,indent,linebreak-style,init-declarations,no-unused-vars */
export default {
    props: ['searchCfg'],
    data() {
        return {
            Radio: '男',
            CheckBox: ['女', '男']
        }
    },
    methods: {
        handleSearch() {
            console.log(JSON.stringify(this.searchParams))
            this.$emit('refreshtable', {type: 'search', value: this.searchParams})
        },
        handlePlus() {
            this.$emit('refreshtable', {type: 'plus'})
        },
        handleBand() {
            this.$emit('refreshtable', {type: 'band'})
        },
        handleRadio(e) {
            this.searchParams.Radio = e
        },
        handleCheckbox(e) {
            this.searchParams.CheckBox = e
        }
    },
    mounted() {
    },
    computed: {
        searchParams: function () {
            let searchCfg = this.searchCfg.Cfg
            let searchParams = new Object()
            for (var i in searchCfg) {
                searchParams[searchCfg[i].name] = ''
            }
            return searchParams
        }
    }
}
</script>