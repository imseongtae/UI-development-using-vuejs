export default {
	data: [
		{ keyword: '검색기록2', date: '12.03' },
		{ keyword: '검색기록1', date: '12.02' },
		{ keyword: '검색기록0', date: '12.01' },
	],

	list() {
		return Promise.resolve(this.data);
	},

	add(keyword = '') {
		keyword = keyword.trim();
		if (!keyword) return;
		// some은 callback이 참(불린으로 변환했을 때 true가 되는 값)을 반환하는 요소를 찾을 때까지 배열에 있는 각 요소에 대해 한 번씩 callback 함수를 실행
		if (this.data.some(item => item.keyword === keyword)) {
			this.remove(keyword);
		}

		const date = '12.31';
		this.data = [{ keyword, date }, ...this.data];
	},

	remove(keyword) {
		this.data = this.data.filter(item => item.keyword !== keyword);
	},
};
