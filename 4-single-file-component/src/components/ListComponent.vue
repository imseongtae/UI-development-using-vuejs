<template>
  <div v-if="data.length">
    <ul class="list">
      <!-- 루프돌 때 배열에 있는 객체를 가져올 수 있고, 두 번째 인자로 index를 가져올 수 있다. -->
      <li v-for="(item, index) in data" @click="onClickList(item.keyword)" :key="index">
        <span v-if="keywordType" class="number">{{index + 1}}</span>
        {{item.keyword}}
        <span v-if="historyType" class="date">{{item.date}}</span>
        <button v-if="historyType" class="btn-remove" v-on:click.stop="onRemoveList(item.keyword)"></button>
      </li>
    </ul>
  </div>
  <div v-else>
    <ul class="list">
      <li>
        <span v-if="keywordType">추천 검색어가 없습니다.</span>
        <span v-if="historyType">최근 검색어가 없습니다.</span>
      </li>
    </ul>    
  </div>
</template>


<script>

export default {
  template: '#list',
  props: {
    data: {
      type: Array,
      required: true,
    },
    type: {
      required: true,
    }
  },
  computed: {
    keywordType() {
      return this.type === 'keywords';
    },
    historyType() {
      return this.type === 'history';
    }
  },
  methods: {
    onClickList(keyword) {
      this.$emit('@click', keyword)
    },
    onRemoveList(keyword) {
      this.$emit('@remove', keyword)
    }    
  },

}
</script>
