<template>
  <div class="post">

    <el-card class="box-card">
      <span>{{ post.name }}</span>
      <p>{{ post.content }}</p>
    </el-card>
  </div>
</template>

<script>

export default {
  name: 'post',
  props: {
    post: {
      type: Object,
      required: false,
      default: {}
    }
  }
}
</script>

<style scoped>

</style>
