<style>

</style>
<template>
    <Modal v-model="modalCfg.show" :mask-closable="false" width="55%" class="layou-modal-input">
        <p slot="header">
            <Icon type="information-circled"></Icon>
            <span>{{modalCfg.title}}</span>
        </p>
        <div class="layout-modal-content">
            <div class="layout-modal-content-input">
                <Form v-model="inputData" inline label-position="left" :label-width="100" aria-disabled="true">
                    <FormItem :label="item.title+':'" v-for="item in modalData" :key="item.id"
                              :style="{width:item.width}">
                        <!--输入框-->
                        <Input type="text" :placeholder="'请输入'+item.title+'...'" size="small"
                               v-model="inputData[item.name]" v-if="item.type == 'input'"></Input>
                        <!--时间日期选择器-->
                        <DatePicker type="datetime" size="small"
                                    v-model="inputData[item.name]" :placeholder="'请输入'+item.title+'...'"
                                    v-if="item.type == 'datepicker'"></DatePicker>
                        <!--选择下拉-->
                        <Select v-model="inputData[item.name]" clearable filterable v-if="item.type == 'select'"
                                size="small">
                            <Option value="武汉市">武汉市</Option>
                            <Option value="洪山区">洪山区</Option>
                            <Option value="武昌区">武昌区</Option>
                            <Option value="硚口区">硚口区</Option>
                            <Option value="江汉区">江汉区</Option>
                            <Option value="江岸区">江岸区</Option>
                            <Option value="汉阳区">汉阳区</Option>
                            <Option value="汉南区">汉南区</Option>
                            <Option value="青山区">青山区</Option>
                            <Option value="蔡甸区">蔡甸区</Option>
                            <Option value="黄陂区">黄陂区</Option>
                            <Option value="江夏区">江夏区</Option>
                            <Option value="东西湖区">东西湖区</Option>
                            <Option value="东湖高新区">东湖高新区</Option>
                            <Option value="沌口开发区">沌口开发区</Option>
                        </Select>
                    </FormItem>
                </Form>
                <div class="layout-modal-button" v-if="NewSave">
                    <Button type="info" icon="checkmark-round" size="small" :loading="modal_loading"
                            @click="handleSave">
                        保 存
                    </Button>
                    <Button type="ghost" size="small" @click="handleCancel"> 取 消 </Button>
                </div>
            </div>
            <div class="layout-modal-content-grid">
                <Spin size="large" fix v-if="spinShow" style="height: 450px;">
                    <Icon type="load-d" size='32' class="spin-icon-load"></Icon>
                    <div>Loading</div>
                </Spin>
                <Table height="490" :columns="columns" :data="tableData" highlight-row border
                       @on-row-click="handleRowData"></Table>
                <Page :style="{height:'40px','margin-top':'10px'}" :total="PageTotal" size="small" :page-size="PageSize"
                      class="fr"
                      @on-change="handleTableData"></Page>
            </div>
        </div>
        <div slot="footer">

        </div>
    </Modal>
</template>
<script>/* eslint-disable quotes,no-console,semi,linebreak-style,no-var,indent,linebreak-style,camelcase */
export default {
    props: ['modalCfg', 'tableData', 'PageTotal', 'PageSize', 'spinShow', 'inputData', 'NewSave'],
    data() {
        return {
            'modal_loading': false,
            columns: [
                {
                    title: '企业名称',
                    key: 'Name'
                },
                {
                    title: '企业简称',
                    key: 'nickName'
                }],
            modalData: this.$props.modalCfg.Cfg,
            edit: false
        }
    },
    methods: {
        handleSave() {
            var self = this
            self.modal_loading = true
            self.NewSave = false
            setTimeout(() => {
                self.modalCfg.show = false
                self.modal_loading = false
                self.NewSave = true
            }, 2000)
        },
        handleCancel() {
            var self = this
            self.modalCfg.show = false
            self.NewSave = true
        },
        handleRowData(res) {
            var self = this
            if (self.NewSave) {
                self.$Modal.confirm({
                    title: '编辑',
                    content: '是否修改该条目？',
                    onOk: () => {
                        self.edit = true
                        let inputData = self.inputData
                        for (var ikey in inputData) {
                            for (var key in res) {
                                if (key === ikey) {
                                    inputData[ikey] = res[key]
                                }
                            }
                        }
                        self.inputData = inputData
                    }
                });
            } else {
                self.edit = false
                let inputData = self.inputData
                for (var ikey in inputData) {
                    for (var key in res) {
                        if (key === ikey) {
                            inputData[ikey] = res[key]
                        }
                    }
                }
                self.inputData = inputData
            }
        },
        handleTableData(e) {
            console.log(e)
            this.$emit('refreshtable', e)
        }
    },
    watch: {
        NewSave(c) {
            console.log(c)
            var self = this
            if (c) {
                let inputData = self.inputData
                for (var key in inputData) {
                    inputData[key] = ''
                }
                self.inputData = inputData
            }
        }
    },
    mounted() {
    },
    computed: {}
}
</script>