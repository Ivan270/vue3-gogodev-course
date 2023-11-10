import { ref, Ref } from 'vue';
import PostInterface from '@/interfaces/Post.interface';

class PostService {
	private posts: Ref<Array<PostInterface>>;
	private post: Ref<PostInterface>;

	constructor() {
		this.posts = ref<Array<PostInterface>>([]);
		this.post = ref<PostInterface>({});
	}

	getPosts(): Ref<Array<PostInterface>> {
		return this.posts;
	}
	getPost(): Ref<PostInterface> {
		return this.post;
	}
	async fetchAll(): Promise<void> {
		try {
			const url = 'https://jsonplaceholder.typicode.com/posts';
			this.posts.value = await (await fetch(url)).json();
		} catch (error) {
			console.log(error);
		}
	}
	async fetchPostById(id: string | Array<string>): Promise<void> {
		try {
			const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
			this.post.value = await (await fetch(url)).json();
		} catch (error) {
			console.log(error);
		}
	}
}

export default PostService;
