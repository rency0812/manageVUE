<style>
    .overview-data {
        position  : absolute;
        min-width : 35%;
        height    : 100%;
        padding   : 15px;
        top       : 0;
        z-index   : 1000;
        }

    .overview-data.left {
        left       : 0;
        background : linear-gradient(to right, rgba(35, 37, 49, 1) 50%, rgba(35, 37, 49, 0) 100%);
        }

    .overview-data.right {
        right      : 0;
        background : linear-gradient(to left, rgba(35, 37, 49, 1) 50%, rgba(35, 37, 49, 0) 100%);
        }

    .overview-data-box {
        padding          : 15px;
        margin-bottom    : 15px;
        line-height      : 1.5;
        width            : 230px;
        color            : #FC0;
        border           : 1px solid #FC0;
        border-radius    : 3px;
        background-color : rgba(255, 204, 0, .15);
        background-image : linear-gradient(-45deg, rgba(255, 255, 255, .05) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .05) 50%, rgba(255, 255, 255, .05) 75%, transparent 75%, transparent);
        background-size  : 20px 20px;
        box-shadow       : inset 0 0 15px rgba(255, 204, 0, .35), 0 2px 2px rgba(0, 0, 0, .35);
        }

    .overview-data-box > h3 {
        font-size : 13px;
        }

    .overview-data-box > p > span {
        font-size   : 22px;
        font-weight : 700;
        }


</style>
<template>
    <div id="showMain" style="width:100%; height: 100%; background-color: #293C55;position: relative">
        <div class="overview-data right">
            <div style="width: 220px; float: right">
                <Button type="text" shape="circle" @click="handleScreen(false)" v-show="screen"
                        style="color: #FFF;float: right;margin-bottom: 15px">
                    <Icon type="arrow-shrink"></Icon>
                </Button>
                <div class="overview-data-box">
                    <h3>核准工地数</h3>
                    <p class="text-center"><span>256</span>个</p>
                    <p>昨日出土工地:123个，上升 5%</p>
                </div>
                <div class="overview-data-box">
                    <h3>核准消纳点</h3>
                    <p class="text-center"><span>56</span>个</p>
                    <p>昨日出土工地:23个，下降 15%</p>
                </div>
                <div class="overview-data-box">
                    <h3>核准运营车辆数</h3>
                    <p class="text-center"><span>3256</span>辆　　上线率85%</p>
                    <p>昨日运营车辆数:2323辆，上升 35%</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>/* eslint-disable linebreak-style,no-unused-vars,indent,no-var,init-declarations,semi,no-dupe-keys,no-console,no-undef,quotes,no-redeclare */
import Util from '../../libs/util'
import bd09 from '../../libs/gps'
import store from '../../libs/store'
import * as types from '../../libs/types'


export default {
    data() {
        return {
            // 初始化空对象
        }
    },
    methods: {
        handleScreen(e) {
            if (e === false) {
                this.$parent.screen = false
                this.screen = false
            }
        }
    },
    mounted() {
        this.$nextTick(function () {
            var self = this

        })
    },
    watch: {
        screen(e) {
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
    },
    computed: {
        screen() {
            return this.$parent.screen
        }
    }
}
</script>
