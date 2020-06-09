<!-- 3개 다 연결해야 하는 것인가 -->
<!-- reset 부분이 이상했다.  -->
<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="value" @keyup="onKeyup" placeholder="검색어를 입력해주세요" autofocus>
    <button v-show="value.length" @click="onReset" type="button" class="btn-reset"></button>
  </form>
</template>

<script>
export default  {
  template: '#search-form',
  props:['value'],
  data() {
    return {
      // inputValue: this.value
    }
  },
  methods: {
    onSubmit() {
      // value를 넘기면 한 방에 다 해결되는 문제이긴 한데...!
      // 강의에서는 watch를 사용..!
      this.$emit('@submit', this.value)
    },
    onReset() {
      this.value = '';
      this.$emit('@reset')
    },
    onKeyup() {
      if (!this.value.length) this.onReset();
    },
  },
}
</script>
