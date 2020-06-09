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