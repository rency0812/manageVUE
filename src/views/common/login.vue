<style>
    .layout-login .ivu-form-item{
        margin-top :28px;
        }
</style>


<template>
    <div class="layout-login">
        <div class="layout-btn-screen">
            <Tooltip content="退出全屏模式" placement="left" :delay="1000">
                <Button type="text" shape="circle" @click="handleScreen(false)" v-show="screen">
                    <Icon type="arrow-shrink"></Icon>
                </Button>
            </Tooltip>
            <Tooltip content="进入全屏模式" placement="left" :delay="1000">
                <Button type="text" shape="circle" @click="handleScreen(true)" v-show="!screen">
                    <Icon type="arrow-expand"></Icon>
                </Button>
            </Tooltip>
        </div>
        <div class="layout-login-box">
            <Row>
                <Col span="10">
                <h1>ExWebUI <sub>3.0</sub></h1>
                <img src="../../assets/img/site_slogon.png">
                </Col>
                <Col span="14">
                <Form ref="loginValue" size="large" :model="loginValue" :rules="ruleInline"
                      class="layout-login-input-group">
                    <Avatar src="" icon="person" size="large" class="layout-login-avatar"/>
                    <FormItem prop="Account" label="支持账号、Email、手机号" style="margin-top: 24px;">
                        <Input type="text" v-model="loginValue.Account" placeholder="请输入用户名">
                        <Icon type="person" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="Password">
                        <Input type="password" size="large" v-model="loginValue.Password" placeholder="请输入密码">
                        <Icon type="locked" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem>
                        <Button type="success" size="large" long @click="handleSubmit('loginValue')">登　　录</Button>
                    </FormItem>
                    <Row>
                        <Col span="12">
                        <FormItem>
                            <strong>记住账号:</strong>
                            <i-switch v-model="loginValue.Switch[0]">
                                <Icon type="android-done" slot="open"></Icon>
                                <Icon type="android-close" slot="close"></Icon>
                            </i-switch>
                        </FormItem>
                        </Col>
                        <Col span="12">
                        <FormItem style="text-align: right;">
                            <strong>2周内自动登录:</strong>
                            <i-switch v-model="loginValue.Switch[1]">
                                <Icon type="android-done" slot="open"></Icon>
                                <Icon type="android-close" slot="close"></Icon>
                            </i-switch>
                        </FormItem>
                        </Col>
                    </Row>
                    <div style="text-align:center">(请不要在公共电脑记住登录信息)</div>
                </Form>
                </Col>
            </Row>
        </div>
        <div class="layout-login-bg  login-bg-05" ref="loginBg"></div>
        <div class="layout-copyrights">
            <p>技术支持：武汉依迅北斗信息技术有限公司  &nbsp;&nbsp;&nbsp;&nbsp; 服务热线：87773501</p>
            <p>Copyright © 2015-2018   增值电信业务许可证号：B2-20150538    备案号:鄂ICP备10014997号-1</p>
        </div>
    </div>
</template>
<script>
    /* eslint-disable no-undef,no-console,semi,no-unused-vars,linebreak-style,no-var,brace-style,camelcase,complexity,indent */
    import * as types from '../../libs/types'
    import Util from '../../libs/util'

    const Base64 = require('../../libs/util').Base64
    const loginUrl = require('../../libs/api').loginUrl
    const GetMenuListUrl = require('../../libs/api').GetMenuListUrl
    var idBg;
    export default {
        data() {
            return {
                screen: false,
                ruleInline: {
                    Account: [
                        {required: true, message: '用户名不能为空', trigger: 'blur'},
                        {type: 'string', min: 5, message: '用户名长度不能小于6位', trigger: 'blur'}
                    ],
                    Password: [
                        {required: true, message: '密码不能为空', trigger: 'blur'},
                        {type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur'}
                    ]
                }
            }
        },
        mounted() {
            this.$nextTick(function () {
                this.handleBackground();
            })
        },
        created() {
            if (!sessionStorage.$screen) {
                sessionStorage.$winheight = window.screen.height
            }
        },
        beforCreated() {
            this.$Message.config({
                top: document.body.scrollHeight * 0.8
            })
        },
        computed: {
            loginValue: function () {
                var self = this
                var UserStatus = (localStorage.$userstatus) ? JSON.parse(self.$store.state.user) : {
                    Account: '',
                    Password: ''
                }
                var UserSetting = (localStorage.$usersetting) ? JSON.parse(self.$store.state.setting) : {
                    RemberName: true,
                    AutoLogin: true
                }
                var loginData = {
                    Account: UserStatus.Account,
                    Password: Base64.decode(UserStatus.Password),
                    Switch: [UserSetting.RemberName, UserSetting.AutoLogin]
                }
                return loginData
            }
        },
        methods: {
            handleScreen(e) {
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
                    this.screen = true
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
                    this.screen = false
                }
                this.$store.commit(types.SCREEN, this.screen)
            },
            handleSubmit(name) {
                var self = this
                self.$refs[name].validate((valid) => {
                    if (valid) {
                        self.handleLogin()
                    }
                })
            },
            handleLogin() {
                var self = this
                var loginValue = {
                    Account: self.loginValue.Account,
                    Password: Base64.encode(self.loginValue.Password)
                }
                var userSetting = {
                    RemberName: self.loginValue.Switch[0],
                    AutoLogin: self.loginValue.Switch[1]
                }
                Util.ajax.get(loginUrl, {params: loginValue}).then(function (response) {
                    var loginToken = {
                        access_token: response.data.ReturnValue.access_token,
                        login_date: new Date().getTime()
                    }
                    if (response.data.isSuccess) {
                        self.$store.commit(types.LOGIN, JSON.stringify(loginToken))
                        clearInterval(idBg);
                        self.$Message.success({
                            content: '登录成功!',
                            onClose: function () {
                                self.$store.commit(types.USER, JSON.stringify({
                                    Account: self.loginValue.Account
                                }));
                                self.$store.commit(types.SETTING, JSON.stringify(userSetting))
                                Util.ajax.get(GetMenuListUrl, {params: {Account: self.loginValue.Account}}).then(function (response) {
                                    if (response.data.isSuccess) {
                                        self.$store.commit(types.MENU, JSON.stringify(response.data.ReturnValue))
                                        console.log(self.$store.state.menu)
                                        clearInterval(Util.idtime)
                                        self.$router.push('/')
                                    } else {
                                        self.$Message.error({
                                            content: '获取失败!',
                                            duration: 10
                                        })
                                    }
                                }).catch(function (error) {
                                    self.$Message.error({
                                        content: '获取失败!',
                                        duration: 10
                                    })
                                })
                            }
                        })
                    }
                }).catch(function (error) {
                    self.$Message.error({
                        content: '登录失败!',
                        duration: 10
                    })
                })
            },
            handleBackground() {
                var $loginBg = this.$refs.loginBg
                idBg = setInterval(function () {
                    var randomBg = Math.round(Math.random() * 4 + 1);
                    $loginBg.className = 'layout-login-bg login-bg-0' + randomBg;
                    console.log(randomBg)
                }, 5000);
            }
        }
    }
</script>
