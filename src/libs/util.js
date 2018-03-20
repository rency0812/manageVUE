import axios from 'axios'
import Qs from 'qs'
import env from './env'

const _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

let util = {}

util.title = function (title) {
    title = title ? title + '- ExWebUI3.0' : 'ExWebUI3.0'
    window.document.title = title
}

const ajaxUrl = env === 'development' ?
    '/api/' :
    env === 'production' ? 'http://192.168.1.195:8182/api/' : 'http://192.168.1.195:8182/api/'

const idtime = null

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 10000,
    transformRequest: [function (data) {
        data = Qs.stringify(data)
        return data
    }]
})

util.ojax = axios.create({
    timeout: 10000
})


// http request 拦截器
util.ajax.interceptors.request.use(
    config => {
        // config.headers.access_token = ` dafasfasfasfasdf`;
        return config
    },
    err => {
        return Promise.reject(err)
    })
//
// http response 拦截器
util.ajax.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response) {

        }
        console.log(JSON.stringify(error))
        return Promise.reject(error.response)
    })

// http request 拦截器
util.ojax.interceptors.request.use(
    config => {
        // config.headers.access_token = ` dafasfasfasfasdf`;
        return config
    },
    err => {
        return Promise.reject(err)
    })
//
// http response 拦截器
util.ojax.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response) {

        }
        console.log(JSON.stringify(error))
        return Promise.reject(error.response)
    })





//BASE64加密
const base64 = {
    _keyStr,
    encode: function (e) {
        var t = ''
        var n, r, i, s, o, u, a
        var f = 0
        e = Base64._utf8_encode(e)
        while (f < e.length) {
            n = e.charCodeAt(f++)
            r = e.charCodeAt(f++)
            i = e.charCodeAt(f++)
            s = n >> 2
            o = (n & 3) << 4 | r >> 4
            u = (r & 15) << 2 | i >> 6
            a = i & 63
            if (isNaN(r)) {
                u = a = 64
            } else if (isNaN(i)) {
                a = 64
            }
            t = t + _keyStr.charAt(s) + _keyStr.charAt(o) + _keyStr.charAt(u) + _keyStr.charAt(a)
        }
        return t
    },
    decode: function (e) {
        var t = ''
        var n, r, i
        var s, o, u, a
        var f = 0
        e = e.replace(/[^A-Za-z0-9+/=]/g, '')
        while (f < e.length) {
            s = _keyStr.indexOf(e.charAt(f++))
            o = _keyStr.indexOf(e.charAt(f++))
            u = _keyStr.indexOf(e.charAt(f++))
            a = _keyStr.indexOf(e.charAt(f++))
            n = s << 2 | o >> 4
            r = (o & 15) << 4 | u >> 2
            i = (u & 3) << 6 | a
            t = t + String.fromCharCode(n)
            if (u != 64) {
                t = t + String.fromCharCode(r)
            }
            if (a != 64) {
                t = t + String.fromCharCode(i)
            }
        }
        t = Base64._utf8_decode(t)
        return t
    },
    _utf8_encode: function (e) {
        e = e.replace(/rn/g, 'n')
        var t = ''
        for (var n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n)
            if (r < 128) {
                t += String.fromCharCode(r)
            } else if (r > 127 && r < 2048) {
                t += String.fromCharCode(r >> 6 | 192)
                t += String.fromCharCode(r & 63 | 128)
            } else {
                t += String.fromCharCode(r >> 12 | 224)
                t += String.fromCharCode(r >> 6 & 63 | 128)
                t += String.fromCharCode(r & 63 | 128)
            }
        }
        return t
    },
    _utf8_decode: function (e) {
        var t = ''
        var n = 0
        var r = 0
        var c1 = 0
        var c2 = 0

        while (n < e.length) {
            r = e.charCodeAt(n)
            if (r < 128) {
                t += String.fromCharCode(r)
                n++
            } else if (r > 191 && r < 224) {
                c2 = e.charCodeAt(n + 1)
                t += String.fromCharCode((r & 31) << 6 | c2 & 63)
                n += 2
            } else {
                c2 = e.charCodeAt(n + 1)
                c3 = e.charCodeAt(n + 2)
                t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63)
                n += 3
            }
        }
        return t
    }
}


util.uniqueArray = function (array) {
    var newArr = [array[0]]
    for (var i = 1; i < array.length; i++) {
        var Item = array[i]
        var repeat = false
        for (var j = 0; j < newArr.length; j++) {
            if (Item.title == newArr[j].title) {
                repeat = true
                break
            }
        }
        if (!repeat) {
            newArr.push(Item)
        }
    }
    return newArr
}


export default util
export const Base64 = base64