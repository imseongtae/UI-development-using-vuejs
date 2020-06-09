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