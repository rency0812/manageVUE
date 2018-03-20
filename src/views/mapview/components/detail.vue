<style>
    .layout-map-detail {
        position         : absolute;
        bottom           : -99em;
        left             : 0;
        width            : calc(100% - 232px);
        height           : 100%;
        background-color : rgba(248, 248, 248, .95);
        z-index          : 1000;
        opacity          : 0;
        transition       : all .5s ease-in-out;
        }

    .silde-in {
        -webkit-animation : slide-up .5s cubic-bezier(.25, .46, .45, .94) both;
        animation         : slide-up .5s cubic-bezier(.25, .46, .45, .94) both;
        opacity           : 1;
        bottom            : 0;
        transition        : all .5s ease-in-out;
        }

    .layout-map-detail-tabs {
        width            : 100%;
        padding-left     : 15px;
        height           : 32px;
        line-height      : 32px;
        color            : #FFF;
        background-color : #43B1E2;
        }

    .layout-map-detail-tabs .ivu-btn {
        height        : 32px;
        width         : 32px;
        line-height   : 32px;
        padding       : 0;
        border-radius : 0;
        position      : absolute;
        top           : 0;
        right         : 0;
        z-index       : 1000;
        }

    .layout-map-detail-content {
        position : absolute;
        top      : 1px;
        left     : 0;
        width    : 100%;
        }

    .layout-map-detail-content .ivu-tabs-nav-wrap {
        margin-left : 150px;
        }

    .layout-map-detail-content .ivu-tabs-nav .ivu-tabs-tab {
        border-radius    : 0 !important;
        color            : #FFF !important;
        background-color : transparent !important;
        border           : none !important;
        height           : 32px !important;
        }

    .layout-map-detail-content .ivu-tabs-nav .ivu-tabs-tab-active {
        color            : #585858 !important;
        background-color : #F8F8F8 !important;
        }

    .layout-map-detail-content-box {
        padding : 7px 15px;
        }

    .layout-map-detail-content .ivu-card-head {
        background-color : #FFF
        }

    .layout-map-detail-content .ivu-card-head > h3 {
        font-size   : 13px;
        font-weight : normal;
        }

    .detail-car-box {
        width             : 100%;
        height            : 350px;
        background-image  : url('../../../assets/img/truck_bg.png');
        background-repeat : no-repeat;
        margin            : 15px auto;
        position          : relative;
        z-index           : 1;
        background-size   : auto 100%;
        overflow          : hidden;
        }

    .detail-car-mask {
        width           : 73%;
        height          : 50px;
        position        : absolute;
        top             : 36px;
        left            : 322px;
        z-index         : 101;
        overflow        : hidden;
        background-size : auto 100%;
        }

    .detail-car-cover {
        width           : 73%;
        height          : 50px;
        position        : absolute;
        top             : 0;
        background      : url(../../../assets/img/truck_cover.png) 0 0 no-repeat;
        z-index         : 10;
        transition      : left .5s ease-in-out;
        background-size : auto 100%;
        }

</style>
<template>
    <div class="layout-map-detail" :class="{'silde-in':DetailActive}">
        <div class="layout-map-detail-tabs">
            <i class="ex-icon ex-icon-truck"></i> 鄂A112345
            <Button type="error" class="fr" @click="closeDetail">
                <Icon type="android-close"></Icon>
            </Button>
        </div>
        <Tabs value="status" type="card" class="layout-map-detail-content">
            <TabPane label="实时状态" name="status" class="layout-map-detail-content-box">
                <Row type="flex">
                    <Col span="8">
                    <Card :bordered="false">
                        <h3 slot="title">
                            <Icon type="location"></Icon>
                            当前位置
                        </h3>
                        <div>湖北省;武汉市;江夏区,距离武汉大学科技园停车场83米</div>
                        <div>最后记录时间：2016-04-07 10:25:08[10小时前]</div>
                    </Card>

                    <Card :bordered="false" style="margin-top: 10px">
                        <h3 slot="title">
                            <Icon type="location"></Icon>
                            实时状态
                        </h3>
                        <div>


                        </div>
                    </Card>
                    </Col>
                    <Col span="16" style="padding: 15px">
                    <div class="detail-car-box">
                        <div class="detail-car-mask">
                            <div class="detail-car-cover" :style="{'left':coverLeft}"></div>
                        </div>
                    </div>
                    </Col>
                </Row>
            </TabPane>
            <TabPane label="标签二" name="name2" class="layout-map-detail-content-box">标签二的内容</TabPane>
            <TabPane label="标签三" name="name3" class="layout-map-detail-content-box">标签三的内容</TabPane>
        </Tabs>
    </div>
</template>
<script>/* eslint-disable quotes,no-console,semi,linebreak-style,no-var,indent,linebreak-style */
export default {
    props: ['DetailActive'],
    data() {
        return {}
    },
    methods: {
        closeDetail() {
            this.$parent.DetailActive = false
            this.$parent.carTreeDisplay = false
        }
    },
    computed: {
        coverLeft() {
            setInterval(function () {
                let r = Math.round(Math.random() * 1) + 1
                if (r == 1) {
                    return '-95%'
                } else {
                    return 0
                }
            }, 500)
        }
    }
}
</script>