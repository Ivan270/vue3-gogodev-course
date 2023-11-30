export default class NoteService {
	private base_uri = 'http://127.0.0.1:3000/api/notes';

	public async getNote() {
		const response = await fetch(this.base_uri);
		const note = await response.json();
		return note;
	}
}
