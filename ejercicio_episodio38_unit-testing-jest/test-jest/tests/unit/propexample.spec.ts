import { mount } from '@vue/test-utils';
import PropExample from '@/components/PropExample.vue';

describe('PropExample.vue', () => {
	it('Component receives and shows title and content props', () => {
		// Props mockeadas como segundo argumento de mount
		const wrapper = mount(PropExample, {
			props: {
				title: 'Hello World',
				content: 'Lorem ipsum',
			},
		});
		// Chequeando que reciba title prop
		if (expect(wrapper.find('h3').exists())) {
			expect(wrapper.find('h3').text()).toBe('Hello World');
		}
		// Chequeando que recibe content prop
		if (expect(wrapper.find('p').exists())) {
			expect(wrapper.find('p').text()).toBe('Lorem ipsum');
		}
	});
	it('Component emits counter value', async () => {
		const wrapper = mount(PropExample);
		await wrapper.find('button').trigger('click');
		// console.log(wrapper.emitted());

		expect(wrapper.emitted().clickMe[0][0].toBe(1));
	});
});
