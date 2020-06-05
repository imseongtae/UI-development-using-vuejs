const data = [
	{
		id: 1,
		name: '[ham] Avocado and Egg Toast',
		image:
			'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
	},
	{
		id: 2,
		name: '[키친르쎌] Blueberry Banana Toast',
		image:
			'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
  },
  {
		id: 3,
		name: '[키친르쎌] 이탈리아 파티 Salad 세트 3~4인분',
		image:
			'https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&w=1000&q=80',
	},
];

export default {
	list(query) {
		return new Promise(res => {
			setTimeout(() => {
				res(data);
			}, 200);
		});
	},
};
