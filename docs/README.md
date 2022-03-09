<template>
	<l-button type="primary">Click me</l-button>
	<l-button type="primary">点击提示</l-button>
</template>

<script>
export default {
  data() {
    return {
      content: '提示内容'
    }
  },
  mounted(){
    this.onNotice();
  },
  methods: {
    onNotice() {
      this.$notice({
        title: '提示',
        content: this.content || '内容',
        duration: 3
      })
    }
  }
}
</script>

