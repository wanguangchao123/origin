<template>
  <div class="container-article">
    <!-- 筛选条件布局 -->
    <el-card>
      <!-- 头 -->
      <div slot="header">
        <my-bread>内容管理</my-bread>
      </div>
      <!-- 表 -->
      <el-form label-width="80px" size="small">
        <el-form-item label="状态:">
          <el-radio-group v-model="reqParams.status">
            <el-radio :label="null">全部</el-radio>
            <el-radio :label="0">草稿</el-radio>
            <el-radio :label="1">待审核</el-radio>
            <el-radio :label="2">审核通过</el-radio>
            <el-radio :label="3">审核失败</el-radio>
            <el-radio :label="4">已删除</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道:">
          <el-select v-model="reqParams.chanel_id" placeholder="请选择">
            <el-option
              v-for="item in chanelOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="日期:">
          <el-date-picker
            v-model="dateArr"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">筛选</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 筛选内容布局 -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      reqParams: {
        status: null,
        chanel_id: null,
        begin_pubdate: null,
        end_pubdate: null
      },
      chanelOptions: [{
        alue: 1, label: 'java'
      }, {
        alue: 2, label: 'php'
      }],
      dateArr: []
    }
  }
}
</script>

<style scoped lang="less">
</style>
