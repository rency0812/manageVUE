<template>
        <div :style="{height:tableHeight +'px'}" style="position: relative">
            <Spin size="large" fix v-if="spinShow">
                <Icon type="load-d" size='32' class="spin-icon-load"></Icon>
                <div>Loading</div>
            </Spin>
            <Table :height="tableHeight" :columns="columns" :data="tableData" highlight-row border></Table>
        </div>
</template>
<script>/* eslint-disable quotes,no-console,semi,linebreak-style,no-var,indent,linebreak-style */
export default {
    props: ['tableData', 'columns', 'tableHeight', 'spinShow'],
    data() {
        return {}
    },
    mounted() {
    },
    methods: {},
    computed: {}
}
</script>