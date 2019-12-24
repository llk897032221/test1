<template>
  <div>
    <h3>Welcome,管理员</h3>
    <el-calendar v-model="date">
    </el-calendar>  
  </div>
</template>
<script>
export default {
    data(){
      return{
         date: new Date()
      }
    }
}
</script>
<style lang="less" scoped>

</style>

