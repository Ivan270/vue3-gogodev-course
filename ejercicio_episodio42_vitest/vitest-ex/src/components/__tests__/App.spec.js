import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../../../vitest-example/src/App.vue';

describe('App.vue', () => {
	it('the component renders the initial state', () => {
		const wrapper = mount(App);
		if (expect(wrapper.find('h1'))) {
			expect(wrapper.find('h1').text()).toBe('0');
		}
		if (expect(wrapper.find('button'))) {
			expect(wrapper.find('button').text()).toBe('Increase');
		}
	});
	it('increment button adds one to counter', async () => {
		const wrapper = mount(App);
		await wrapper.find('button').trigger('click');
		expect(wrapper.find('h1').text()).toBe('1');
	});
});
