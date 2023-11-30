import Note from '../../models/Note';

export default defineEventHandler(async (event) => {
	// respuesta que entrega la BBDD. En este caso está hardcodeada.
	const notes = await Note.find();
	return { notes };
});
