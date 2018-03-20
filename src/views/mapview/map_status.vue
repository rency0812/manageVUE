<style>
    .map-view-location, .map-view-search {
        padding : 0 15px;
        }

    .map-view-search .ivu-input {
        width            : 215px;
        height           : 24px;
        border-color     : transparent;
        background-color : #E9F3F5;
        }

    .map-view-search .ivu-input:focus {
        border-color : #DFDFDF;
        box-shadow   : none;
        }

    .map-view-search .ivu-input-icon {
        cursor        : pointer;
        color         : #FFF;
        height        : 24px;
        line-height   : 24px;
        top           : 3px;
        background    : #39F;
        border-radius : 0 4px 4px 0;
        }

    .map-view-search .ivu-select-multiple .ivu-select-selection {
        padding          : 1px 24px 1px 0;
        min-height       : 24px;
        height           : 24px;
        margin           : 0;
        border-color     : transparent;
        background-color : #E9F3F5;
        overflow         : hidden;
        }

    .map-view-search .ivu-select-multiple .ivu-select-selection .ivu-select-placeholder {
        height      : 22px;
        line-height : 22px;
        }

    .map-view-search .ivu-select-placeholder {
        height      : 22px;
        line-height : 22px;
        }

    .map-view-search .ivu-select-multiple .ivu-tag {
        margin      : 0 3px;
        border      : none;
        height      : 20px;
        line-height : 20px;
        }

    .map-view-search .ivu-select-dropdown {
        background-color : #FFF;
        max-height       : inherit;
        }

    .map-view-search .ivu-select-item {
        line-height : 2.2;
        }

    .map-view-search .ivu-select-selection .ivu-icon {
        color : #39F;
        }

    .layout-map .layout-map-tool {
        left  : 15px;
        right : auto;
        }

</style>
<template>
    <div class="layout-map" ref="mapContent">
        <map-tool></map-tool>
        <map-detail :DetailActive="DetailActive"></map-detail>
        <div id="Map" class="layout-map-view" style="height:100%"></div>
        <div  style="height:100%">
            <map-list :carTreeDisplay="carTreeDisplay" :searchKey="searchKey" v-on:eventMap="handleList"></map-list>
        </div>
    </div>
</template>
<script>/* eslint-disable linebreak-style,indent,no-var,no-undef,quotes,comma-spacing,no-unused-vars,init-declarations,no-console */
import '../../assets/css/leaflet.css'
import store from '../../libs/store'
import * as types from '../../libs/types'
import L from 'leaflet'
import mapList from './components/list'
import mapTool from './components/tool'
import mapDetail from './components/detail'
import singaIR from '../../libs/hubs'
import gps84 from '../../libs/gps'

var marker, map
export default {
    components: {
        'map-list': mapList,
        'map-tool': mapTool,
        'map-detail': mapDetail
    },
    data() {
        return {
            searchKey: null,
            carTreeDisplay:false,
            cityList: [
                {
                    value: 'beijing',
                    label: '北京市'
                },
                {
                    value: 'shanghai',
                    label: '上海市'
                },
                {
                    value: 'shenzhen',
                    label: '深圳市'
                },
                {
                    value: 'hangzhou',
                    label: '杭州市'
                },
                {
                    value: 'nanjing',
                    label: '南京市'
                },
                {
                    value: 'chongqing',
                    label: '重庆市'
                }
            ],
            model10: [],
            DetailActive:false
        }
    },
    watch: {
        ALARM() {
            var _gps = gps84.wgs84togcj02(this.GPS[0].Lon, this.GPS[0].Lat)
            console.log(_gps[1])
            marker = L.marker([_gps[1], _gps[0]])
                .addTo(map)
                .bindPopup(this.GPS[0].PhoneNum + '      ' + this.GPS[0].Speed + 'km/h<br/>' + this.GPS[0].GpsDateTime + '<br/>' + this.GPS[0].Poi.Address)
                .openPopup()
            map.setView(L.latLng([_gps[1], _gps[0]]), 19)

        },
        GPS() {
            var _gps = gps84.wgs84togcj02(this.GPS[0].Lon, this.GPS[0].Lat)
            console.log(_gps[1])
            marker = L.marker([_gps[1], _gps[0]])
                .addTo(map)
                .bindPopup(this.GPS[0].PhoneNum + '      ' + this.GPS[0].Speed + 'km/h<br/>' + this.GPS[0].GpsDateTime + '<br/>' + this.GPS[0].Poi.Address)
                .openPopup()
            map.setView(L.latLng([_gps[1], _gps[0]]), 19)

        }
    },
    methods: {
        handleSearchehicle (event, value) {
            console.log(event, value)
        },
        handleList(v){



        }
    },
    mounted() {
        //singaIR.content()
        setTimeout(function () {
            singaIR.gpshub.server.sub("017027082303,016202706269,016202703059")
            singaIR.gpshub.server.subAlarm("017027082303,016202706269,016202703059")
            console.log('sub gps')
        }, 5000)
        var _gps = gps84.wgs84togcj02(this.GPS[0].Lon, this.GPS[0].Lat)
        var lat = _gps[1], lon = _gps[0]
        map = L.map('Map').setView(L.latLng([lat, lon]), 12)
        L.tileLayer('http://webrd0{s}.is.autonavi.com/appmaptile?size=1&scale=1&style=7&x={x}&y={y}&z={z}', {
            subdomains: '1'
        }).addTo(map)

        //临时隐藏
        document.querySelector('.leaflet-control-container').style.display = 'none'



    },
    computed: {
        ALARM: function () {
            return store.state.ALARM
        },
        GPS: function () {
            return store.state.GPS
        },
        screen: function () {
            return store.state.screen
        }
    }
}
</script>
