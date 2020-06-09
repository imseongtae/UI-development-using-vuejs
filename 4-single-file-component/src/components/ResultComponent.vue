<template>
  <div v-if="data.length">
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <img v-bind:src="item.image" alt=""> {{item.name}}
      </li>
    </ul>
  </div>
  <div v-else>          
    {{query}} 검색어로 찾을 수 없습니다.
  </div>
</template>

<script>
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
</script>
