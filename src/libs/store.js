/* eslint-disable linebreak-style */
import Vuex from 'vuex'
import * as types from './types'

export default new Vuex.Store({
  state: {
    user: localStorage.$userstatus ? localStorage.$userstatus : {},
    token: localStorage.$token ? localStorage.$token : null,
    setting: localStorage.$usersetting ? localStorage.$usersetting : null,
    title: '',
    menu: localStorage.$menu ? localStorage.$menu : null,
    menutag: localStorage.$menutag ? JSON.parse(localStorage.$menutag) : [],
    mBreadcrumb: localStorage.$breadcrumb ? JSON.parse(localStorage.$breadcrumb) : [],
    screen: sessionStorage.$screen ? sessionStorage.$screen : false,
    mainHeight: sessionStorage.$screen ? window.screen.height : document.body.clientHeight,
    GPS: [{Lat:30.376534, Lon:114.307872}],
    ALARM:[]
  },
  mutations: {
    [types.LOGIN]: (state, data) => {
      localStorage.$token = data
      state.token = data
    },
    [types.USER]: (state, data) => {
      localStorage.$userstatus = data
      state.user = data
    },
    [types.SETTING]: (state, data) => {
      localStorage.$usersetting = data
    },
    [types.LOGOUT]: (state) => {
      localStorage.removeItem('token')
      state.token = null
    },
    [types.TITLE]: (state, data) => {
      state.title = data
    },
    [types.MENU]: (state, data) => {
      localStorage.$menu = data
      localStorage.$menutag = JSON.stringify([])
      localStorage.$breadcrumb = JSON.stringify([])
      state.menutag = []
      state.menu = data
    },
    [types.MENUTAG]: (state, data) => {
      localStorage.$menutag = JSON.stringify(data)
      state.menutag = data
    },
    [types.SCREEN]: (state, data) => {
      sessionStorage.$screen = data
      state.screen = data
      state.mainHeight = sessionStorage.$winheight
      sessionStorage.$winheight = document.body.clientHeight
    },
    [types.GPS]: (state, data) => {
      state.GPS = data
    },
    [types.ALARM]: (state, data) => {
      state.ALARM = data
    }

  }
})