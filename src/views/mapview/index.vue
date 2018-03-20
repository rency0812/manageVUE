<template>
    <div class="layout-content">
        <router-view></router-view>
    </div>
</template>
<script>
  /* eslint-disable linebreak-style,no-unused-vars,no-var */


  import Util from '../../libs/util'

  export default {
    methods: {
      toPage(name) {
        this.$router.push(name)
      }
    }
  }

</script>
