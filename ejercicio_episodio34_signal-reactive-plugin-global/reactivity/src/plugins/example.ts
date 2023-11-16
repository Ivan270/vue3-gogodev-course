export default {
	install: (app: any, options: any) => {
		// Se agrega una variable global a la app, siempre indicada con un $
		app.config.globalProperties.$count = () => 0;
		app.config.globalProperties.$saySomething = () => alert(options.message);
	},
};
