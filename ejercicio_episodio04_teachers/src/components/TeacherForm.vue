<template>
	<section>
		<h3>Añadir profesor</h3>
		<div>
			<label>Nombre:</label>
			<input type="text" placeholder="Juan" v-model="teacher.teacherName" />
		</div>
		<div>
			<label>Apellidos:</label>
			<input
				type="text"
				placeholder="Perez Lopez"
				v-model="teacher.teacherSurname"
			/>
		</div>
		<div>
			<label>DNI:</label>
			<input type="text" placeholder="11.111.111-1" v-model="teacher.dni" />
		</div>
		<div>
			<label>Materias:</label>
			<input type="text" placeholder="Vue" v-model="subject" />
			<button @click="addSubject">Agregar materia</button>
		</div>
		<div>
			<ul>
				<li v-for="(materia, index) in teacher.subjects" :key="index">
					{{ materia }}
				</li>
			</ul>
		</div>
		<input type="checkbox" v-model="teacher.doc" /> Documentación entregada
		<button @click="addTeacher">Agregar Profesor</button>
	</section>

	<section>
		<h3>Listado de profesores</h3>
		<table>
			<tr>
				<th>Nombre</th>
				<th>Apellidos</th>
				<th>DNI</th>
				<th>Materias</th>
				<th>Documentación entregada</th>
			</tr>
			<tr v-for="(teacher, index) in teachers" :key="index">
				<th>{{ teacher.teacherName }}</th>
				<th>{{ teacher.teacherSurname }}</th>
				<th>{{ teacher.dni }}</th>
				<th>
					<ul>
						<li v-for="(subject, index) in teacher.subjects" :key="index">
							{{ subject }}
						</li>
					</ul>
				</th>
				<th v-if="teacher.doc">Entregada</th>
				<th v-else>No entregada</th>
			</tr>
		</table>
	</section>
</template>

<script lang="ts" setup>
	import { ref, Ref } from 'vue';

	interface TeacherInterface {
		teacherName: string;
		teacherSurname: string;
		dni: string;
		subjects: string[] /* también sirve Array<string> */;
		doc: boolean;
	}
	let teacher: Ref<TeacherInterface> = ref({
		teacherName: '',
		teacherSurname: '',
		dni: '',
		subjects: [],
		doc: false,
	});

	let teachers: Ref<Array<TeacherInterface>> = ref([]);

	let subject: Ref<string> = ref('');

	const addSubject = () => {
		teacher.value.subjects.push(subject.value);
		subject.value = '';
	};
	const addTeacher = () => {
		// Es necesario generar un objeto nuevo y pasárselo al array, así cada profesor nuevo tendrá su propio valor y no seguirá referenciando lo mismo para todos.
		teachers.value.push({
			teacherName: teacher.value.teacherName,
			teacherSurname: teacher.value.teacherSurname,
			dni: teacher.value.dni,
			subjects: teacher.value.subjects,
			doc: teacher.value.doc,
		});
		teacher.value.teacherName = '';
		teacher.value.teacherSurname = '';
		teacher.value.dni = '';
		teacher.value.subjects = [];
		teacher.value.doc = false;
	};
</script>

<style scoped></style>
