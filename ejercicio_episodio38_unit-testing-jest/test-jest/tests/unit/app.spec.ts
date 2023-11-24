import { mount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
	it('Component renders initial state', () => {
		const wrapper = mount(App);
		if (expect(wrapper.find('h2').exists())) {
			expect(wrapper.find('h2').text()).toBe('0');
		}
		if (expect(wrapper.find('button').exists())) {
			expect(wrapper.find('button').text()).toBe('Increment');
		}
	});
	it('Increment button adds 1 to counter', async () => {
		const wrapper = mount(App);
		// Gatillará evento @click del boton
		await wrapper.find('button').trigger('click');
		expect(wrapper.find('h2').text()).toBe('1');
	});
});
