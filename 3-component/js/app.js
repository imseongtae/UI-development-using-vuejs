import SearchModel from './models/SearchModel.js';
import KeywordModel from './models/KeywordModel.js';
import HistoryModel from './models/HistoryModel.js';

import FormComponent from './components/FormComponent.js';
import ResultComponent from './components/ResultComponent.js';
import ListComponent from './components/ListComponent.js';
import TabComponent from './components/TabComponent.js';

new Vue({
  el:'#app',
  components: {
    'search-form': FormComponent,
    'search-result': ResultComponent,
    'list': ListComponent, 
    'tabs': TabComponent,
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
})
