// import { describe } from 'vitest';
import App from '../src/App.vue';
import { mount } from '@vue/test-utils';

describe('App.vue', () => {
	it('the component renders the initial state', () => {
		const wrapper = mount(App);
		if (expect(wrapper.find('h1')).exists()) {
			expect(wrapper.text()).toBe('0');
		}
		if (expect(wrapper.find('button')).exists()) {
			expect(wrapper.text()).toBe('Increase');
		}
	});
	it('increment button adds one to counter', async () => {
		const wrapper = mount(App);
		await wrapper.find('button').trigger('click');
		expect(wrapper.find('h1').text()).toBe('1');
	});
});
