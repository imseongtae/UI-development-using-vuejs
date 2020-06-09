export default {
  template: '#search-result',
  // props: ['data'],
  props: {
    data: {
      type: Array,
      required: true,
    },
    query: {
      type: String,      
    }
  },
  data() {
    return {
      // results: this.data
      // query: this.keyword,
    }
  },
  methods: {
    name() {
      
    }
  },
}