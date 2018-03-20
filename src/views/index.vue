<template>
    <div class="layout">
        <Menu mode="horizontal" :theme="theme" :active-name="activeName">
            <Row type="flex" justify="center" align="top">
                <Col span="10" class="layout-logo-div">
                <div class="layout-logo">
                    <a href="/" class="layout-logo-img" ref="logoImg"></a>
                    <a href="/" class="layout-logo-text" ref="logoTxt" style="opacity: 0">依迅北斗</a>
                </div>
                <h1>|  智慧环卫--智慧建筑弃土监管平台 <sub>3.0</sub></h1>
                </Col>
                <Col span="14" class="layout-administroter">
                <div class="header-screen">
                    <Button type="text" shape="circle" @click="handleScreen(false)" v-show="screen">
                        <Icon type="arrow-shrink"></Icon>
                        恢复
                    </Button>
                    <Button type="text" shape="circle" @click="handleScreen(true)" v-show="!screen">
                        <Icon type="arrow-expand"></Icon>
                        全屏
                    </Button>
                </div>
                <span> | </span>
                <Dropdown class="drop" placement="bottom-end" @on-click="handleDrop">
                    <a href="javascript:void(0);">{{NikeName}}
                        <Icon type="arrow-down-b" size="8" style="margin:0 .5rem;"/>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem name="modify_password">
                            <Icon type="lock-combination" 　size="11"/>&nbsp;&nbsp;&nbsp;&nbsp;修改密码
                        </DropdownItem>
                        <DropdownItem name="user_exit">
                            <Icon type="android-exit" 　size="11"/>&nbsp;&nbsp;&nbsp;&nbsp;退　　出
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Avatar icon="person" size="small" style="margin-top:.3rem;"/>
                </Col>
            </Row>
        </Menu>
        <Menu mode="horizontal" :theme="theme" :active-name="activeName" style="background: #25709A;">
            <Row type="flex" justify="center" align="top">
                <Col span="24" class="layout-nav">
                <Submenu :name="'name'+item.id" v-for="item in menuList" :key="item.id"
                         @click.native="titleToPage">
                    <template slot="title">
                        <span :data-url="item.url" :data-id="item.id">{{item.text}}</span>
                    </template>
                    <Dropdown placement="right-start" v-for="i in item.children"
                              :key="i.id">
                        <DropdownItem :name="i.id" :data-id="item.id" :data-url="i.url" @click.native="subToPage">
                            {{i.text}}
                            &nbsp;&nbsp;
                            <Icon v-if="i.children !=[] && i.children" type="ios-arrow-forward" size="10"></Icon>
                        </DropdownItem>
                        <DropdownMenu slot="list" v-if="i.children !=[] && i.children">
                            <DropdownItem :name="it.id" :data-id="item.id" :data-url="it.url" v-for="it in i.children"
                                          :key="it.id" @click.native="subToPage">
                                {{it.text}}
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Submenu>
                </Col>
            </Row>
        </Menu>
        <div class="layout-breadcrumb">
            <Col span="4" :class="{breadBoderRight:breadBoderActive}">
            <Breadcrumb>
                <BreadcrumbItem href="/">
                    <Icon type="home"></Icon>
                    首页
                </BreadcrumbItem>
                <BreadcrumbItem v-if="mBreadcrumb" :href="mBreadcrumb.url">{{mBreadcrumb.title}}</BreadcrumbItem>
            </Breadcrumb>
            </Col>
            <Col span="20" :class="{breadBoderLeft:breadBoderActive}">
            <Tag v-for="item in menuTag" :name="item.id" :key="item.title" :data-id="item.id" :data-url="item.url"
                 closable
                 @click.native="handleTag"
                 @on-close="handleTagClose">
                {{item.title}}
            </Tag>
            <Tag v-if="breadBoderActive" @click.native="emptyMenuTag" class="removeall">
                <Icon type="ios-trash"></Icon>
                清空
            </Tag>
            </Col>
            </Row>
        </div>
        <div ref="pageBody" style="margin-top: -6px;position: relative;height:calc( 100% - 126px)">
            <!-- 这里是需要keepalive的 -->
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <!-- 这里不会被keepalive -->
            <router-view v-if="!$route.meta.keepAlive"></router-view>
            <!--<alert-box></alert-box>-->
        </div>
        <div class="ivu-menu-primary layout-status">
            <Row>
                <Col span="16">
                &nbsp; 技术支持：武汉依迅北斗信息技术有限公司  &nbsp;&nbsp;&nbsp;&nbsp; 服务热线：87773501
                </Col>
                <Col span="2">
                运营车辆：2347辆
                </Col>
                <Col span="2">
                报警数量：2347次
                </Col>
                <Col span="2">
                执法人员：2347人
                </Col>
                <Col span="2">
                执法车辆：2347辆
                </Col>
            </Row>
        </div>

    </div>
</template>
<script>/* eslint-disable linebreak-style,complexity,no-var,brace-style,no-console,comma-spacing,indent,no-cond-assign,quotes,init-declarations */
import store from '../libs/store'
import * as types from '../libs/types'
import Util from '../libs/util'
import alertBox from './components/alertbox'

const maxMenuTag = 9
export default {
    components: {
        'alert-box': alertBox
    },
    data() {
        return {
            'activeName': 'name' + 1,
            'breadBoderActive': false,
            'menuTag': store.state.menutag,
            'mBreadcrumb': JSON.parse(localStorage.$breadcrumb),
            'screen': false,
            'theme': 'primary',
            'menuList': JSON.parse(store.state.menu).menu,
            'NikeName': JSON.parse(store.state.user).Account || '超级管理员',
            'messageHeight': 'auto',
        }
    },
    mounted() {
        this.$nextTick(function () {
            //===========logo动画=================
            const $logoImg = this.$refs.logoImg
            const $logoTxt = this.$refs.logoTxt
            let boonAnimate = true
            setInterval(function () {
                if (boonAnimate) {
                    $logoImg.className = 'layout-logo-img  flip-vertical-fwd'
                    $logoTxt.className = 'layout-logo-text  flip-vertical-bck'
                    boonAnimate = false
                } else {
                    $logoImg.className = 'layout-logo-img  flip-vertical-bck'
                    $logoTxt.className = 'layout-logo-text  flip-vertical-fwd'
                    boonAnimate = true
                }
            }, 5000)
        })
        if (this.menuTag.length > 5 && this.mBreadcrumb) {
            this.breadBoderActive = true
            var targetTitle = this.mBreadcrumb.title.trim()
            var id = this.$data.mBreadcrumb.id
            setTimeout(function () {
                var eItemList = document.querySelectorAll('.ivu-tag.ivu-tag-closable')
                for (var i = 0; i < eItemList.length; i++) {
                    eItemList[i].classList.remove('active')       //将背景色设置为无
                    if (eItemList[i].querySelector('span').innerText.trim() === targetTitle) {
                        eItemList[i].classList.add('active')
                    }
                }
                this.activeName = id
            }, 500)
        }
    },
    watch: {
        screen(e) {
            var docElm = document.documentElement
            if (e) {
                //W3C
                if (docElm.requestFullscreen) {
                    docElm.requestFullscreen()
                }
                //FireFox
                else if (docElm.mozRequestFullScreen) {
                    docElm.mozRequestFullScreen()
                }
                //Chrome等
                else if (docElm.webkitRequestFullScreen) {
                    docElm.webkitRequestFullScreen()
                }
                //IE11
                else if (docElm.msRequestFullscreen) {
                    docElm.msRequestFullscreen()
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen()
                }
                else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen()
                }
                else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen()
                }
                else if (document.msExitFullscreen) {
                    document.msExitFullscreen()
                }
            }
            store.commit(types.SCREEN, this.screen)

            console.log(this.mainHeight)
        }
    },
    methods: {
        handleScreen(e) {
            if (e) {
                this.screen = true
            } else {
                this.screen = false
            }
        },
        subToPage(event) {
            var target = (event.target.localName == 'li') ? event.target : event.target.querySelector('li.ivu-dropdown-item')
            var targetTitle = target.innerText.trim()
            var targetUrl = target.dataset.url
            var targetId = 'name' + target.dataset.id
            var recode = {
                title: targetTitle,
                url: targetUrl,
                id: targetId
            }
            if (store.state.menutag.length >= maxMenuTag) {
                store.state.menutag.splice(0, 1)
                store.state.menutag.push(recode)
            } else {
                store.state.menutag.push(recode)
            }
            store.commit(types.MENUTAG, Util.uniqueArray(store.state.menutag))
            this.menuTag = store.state.menutag
            this.mBreadcrumb = recode
            if (this.menuTag.length > 5 && this.mBreadcrumb) {
                this.breadBoderActive = true
            }
            localStorage.$breadcrumb = JSON.stringify(recode)
            this.activeName = targetId

            this.$router.push(targetUrl)
            setTimeout(function () {
                var eItemList = document.querySelectorAll('.ivu-tag.ivu-tag-closable')
                for (var i = 0; i < eItemList.length; i++) {
                    eItemList[i].classList.remove('active')       //将背景色设置为无
                    if (eItemList[i].querySelector('span').innerText.trim() === targetTitle) {
                        eItemList[i].classList.add('active')
                    }
                }
            }, 200)
        },
        titleToPage(event) {
            console.log(event)
            var target = (event.target.localName == 'span') ? event.target : event.target.querySelector('span')
            if (event.target.localName == 'i') {
                target = event.target.previousElementSibling
            }
            var targetTitle = target.innerText.trim()
            var targetUrl = target.dataset.url
            var targetId = 'name' + target.dataset.id
            var recode = {
                title: targetTitle,
                url: targetUrl,
                id: targetId
            }
            if (store.state.menutag.length >= maxMenuTag) {
                store.state.menutag.splice(0, 1)
                store.state.menutag.push(recode)
            } else {
                store.state.menutag.push(recode)
            }
            store.commit(types.MENUTAG, Util.uniqueArray(store.state.menutag))
            this.menuTag = store.state.menutag
            this.mBreadcrumb = recode
            localStorage.$breadcrumb = JSON.stringify(recode)
            this.activeName = targetId
            if (this.menuTag.length > 5 && this.mBreadcrumb) {
                this.breadBoderActive = true
            }
            this.$router.push(targetUrl)
            setTimeout(function () {
                var eItemList = document.querySelectorAll('.ivu-tag.ivu-tag-closable')
                for (var i = 0; i < eItemList.length; i++) {
                    eItemList[i].classList.remove('active')       //将背景色设置为无
                    if (eItemList[i].querySelector('span').innerText.trim() === targetTitle) {
                        eItemList[i].classList.add('active')
                    }
                }
            }, 200)
        },
        handleDrop(name) {
            var self = this
            console.log(name)
            switch (name) {
                case 'user_exit' :
                    localStorage.clear()
                    sessionStorage.clear()
                    self.$router.push('/login')
                    break
                default:
                    break
            }
        },
        handleTag(event) {
            var target = (event.target.className == 'ivu-tag-text') ? event.srcElement.parentElement : event.srcElement
            var url = target.dataset.url
            var id = target.dataset.id
            var eItemList = document.querySelectorAll('.ivu-tag.ivu-tag-closable')
            for (var i = 0; i < eItemList.length; i++) {
                eItemList[i].classList.remove('active')       //将背景色设置为无
                target.classList.add('active')
            }
            this.activeName = 'name' + id
            this.mBreadcrumb = {
                id: id,
                url: url,
                title: target.innerText.trim()
            }
            localStorage.$breadcrumb = JSON.stringify(this.mBreadcrumb)
            this.$router.push(url)
        },
        handleTagClose(event) {
            var taget = event.target.previousSibling
            var title = taget.innerText.trim()
            var menuTemp = new Array()
            for (var i = 0; i < store.state.menutag.length; i++) {
                if (title !== store.state.menutag[i].title) {
                    menuTemp.push(store.state.menutag[i])
                }
            }
            store.commit(types.MENUTAG, menuTemp)
            this.menuTag = store.state.menutag
            if (store.state.menutag.length <= 0) {
                this.breadBoderActive = false
                this.mBreadcrumb = '[]'
                localStorage.$breadcrumb = this.mBreadcrumb
                this.$router.push('/')
            }
        },
        emptyMenuTag() {
            store.commit(types.MENUTAG, [])
            this.menuTag = store.state.menutag
            this.mBreadcrumb = '[]'
            localStorage.$breadcrumb = this.mBreadcrumb
            this.breadBoderActive = false
            this.$router.push('/')
        }
    },
    computed: {
    }
}
</script>
