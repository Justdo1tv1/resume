<template>
  <div>
    <top-menu></top-menu>
   <router-view></router-view>
   <home-footer></home-footer>
  </div>
</template>

<script>
import TopMenu from '../components/menu/TopMenu'
import HomeFooter from '../components/footer'
export default {
    name:'index',
    components:{
        TopMenu,
        HomeFooter
    }
}
</script>

<style>
</style>
