<template>
  <div id="app">
    <header>
      <h2 class="container">검색</h2>
    </header>

    <search-form v-bind:value="query" v-on:@submit="onSubmit" v-on:@reset="onReset"></search-form>

    <div v-if="submitted">
      <!-- 검색 결과화면 -->
      <search-result v-bind:data="searchResult" :query="query"></search-result>
    </div>
    <div v-else>
      <!-- tab Component -->
      <tabs v-bind:tabs="tabs" v-on:@tab="onClickTab"></tabs>
      <div v-if="selectedTab === tabs[0]">
        <!-- Keyword List -->
        <list v-bind:data="keywords" type="keywords" v-on:@click="onClickKeyword"></list>
      </div>
      <div v-else>
        <!-- History List -->
        <list 
          v-bind:data="history" 
          type="history" 
          v-on:@click="onClickKeyword" v-on:@remove="onClickRemoveHistory" 
        />
      </div>
    </div>

  </div>
</template>

<script>
import SearchModel from './models/SearchModel.js';
import KeywordModel from './models/KeywordModel.js';
import HistoryModel from './models/HistoryModel.js';

import FormComponent from '@/components/FormComponent.vue';
import ListComponent from '@/components/ListComponent.vue';
import TabComponent from '@/components/TabComponent.vue';
import ResultComponent from '@/components/ResultComponent.vue';


export default {
  name: 'App',
  components: {
    'search-form': FormComponent,
    'search-result': ResultComponent,
    'tabs': TabComponent,
    'list': ListComponent,
  },
  data() {
    return {
      query:'',
      submitted: false, 
      tabs: ['추천 검색어', '최근 검색어'],
      selectedTab: '',
      searchResult: [],
      keywords: [],
      history: [],
    }
  },
  created () {
    // 코드 중복을 막기 위해 Vue인스턴스가 생성될 떄 tabs[0]로 설정하도록 설정
    // 탭의 이름이 selectedTab과 같도록 설정
    this.selectedTab = this.tabs[0]; // 값이 추천 검색어가 됨
    this.fetchKeyword();
    this.fetchHistory();
  },
  methods: {    
    onSubmit(keyword) {
      this.query = keyword
      this.search();
    },
    onKeyup() {
      if (!this.query.length) this.onReset()
    },
    onReset() {
      this.resetForm();
    },
    search() {
      SearchModel.list().then(data => {
        this.submitted = true;
        this.searchResult = data;
      });
      HistoryModel.add(this.query)
      this.fetchHistory();
    },
    resetForm() {
      this.query = '';
      console.log('resetForm 작동')
      // to do remove Results..
      this.searchResult = [];
      this.submitted = false;        
    },
    onClickTab(tab) {
      console.log(tab)
      this.selectedTab = tab;
    },
    fetchKeyword() {
      KeywordModel.list().then(data => {
        this.keywords = data
      })
    },
    onClickKeyword(keyword) {
      // debugger
      this.query = keyword;
      this.search()
    },
    fetchHistory() {
      HistoryModel.list().then(data => {
        this.history = data
      })
    },
    onClickRemoveHistory(keyword) {
      console.log('이벤트 버블링 중지', keyword)
      HistoryModel.remove(keyword)
      this.fetchHistory();
    },
  },
}
</script>

<style>

</style>
