<template id="tabs">
  <ul class="tabs">
    <!-- 적용할 속성 active, 조건설정: tab의 이름이 selectedTab 과 같을 때 속성 적용 -->
    <!-- 추천 검색어와 같은 이름을 가진 탭이 있다면 속성 적용 -->
    <li v-for="(tab, index) in tabs" @click="onClickTab(tab)" v-bind:class="{active: tab === selectedTab}" :key="index">
      {{ tab }}
    </li>
  </ul>
</template>

<script>
export default {
  template: '#tabs',
  props: {
    tabs: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      selectedTab: this.tabs[0],
    }
  },
  methods: {
    onClickTab(tab) {
      this.selectedTab = tab;
      this.$emit('@tab', tab)
    }
  },
}
</script>
