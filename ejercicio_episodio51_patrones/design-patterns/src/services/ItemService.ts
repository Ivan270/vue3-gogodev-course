export default class {
	private uri = 'https://jsonplaceholder.typicode.com';

	async getItems() {
		const response = await fetch(`${this.uri}/users`);
		const data = await response.json();
		return data;
	}
}
