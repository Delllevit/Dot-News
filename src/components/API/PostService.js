import post_1_img from "../../static/images/post-1.png";
import post_2_img from "../../static/images/post-2.png";
import post_3_img from "../../static/images/post-3.png";
import {chunkArray} from "../../utils/chankArray";
import UserService from "./UserService";

const posts = [
	{
		url: '1-rebranding-your-business',
		img: post_1_img,
		title: '1 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '2-rebranding-your-business',
		img: post_2_img,
		title: '2 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '3-rebranding-your-business',
		img: post_3_img,
		title: '3 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '4-rebranding-your-business',
		img: post_2_img,
		title: '4 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '5-rebranding-your-business',
		img: post_3_img,
		title: '5 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '6-rebranding-your-business',
		img: post_1_img,
		title: '6 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '7-rebranding-your-business',
		img: post_3_img,
		title: '7 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '8-rebranding-your-business',
		img: post_1_img,
		title: '8 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '9-rebranding-your-business',
		img: post_2_img,
		title: '9 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '10-rebranding-your-business',
		img: post_1_img,
		title: '10 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '11-rebranding-your-business',
		img: post_2_img,
		title: '11 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '12-rebranding-your-business',
		img: post_3_img,
		title: '12 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '13-rebranding-your-business',
		img: post_1_img,
		title: '13 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '14-rebranding-your-business',
		img: post_2_img,
		title: '14 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '15-rebranding-your-business',
		img: post_3_img,
		title: '15 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '16-rebranding-your-business',
		img: post_1_img,
		title: '16 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '17-rebranding-your-business',
		img: post_2_img,
		title: '17 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '18-rebranding-your-business',
		img: post_3_img,
		title: '18 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '19-rebranding-your-business',
		img: post_3_img,
		title: '19 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '20-rebranding-your-business',
		img: post_1_img,
		title: '20 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '21-rebranding-your-business',
		img: post_2_img,
		title: '21 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '22-rebranding-your-business',
		img: post_3_img,
		title: '22 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '23-rebranding-your-business',
		img: post_1_img,
		title: '23 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '24-rebranding-your-business',
		img: post_2_img,
		title: '24 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '25-rebranding-your-business',
		img: post_3_img,
		title: '25 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '26-rebranding-your-business',
		img: post_1_img,
		title: '26 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '27-rebranding-your-business',
		img: post_2_img,
		title: '27 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '28-rebranding-your-business',
		img: post_3_img,
		title: '28 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '29-rebranding-your-business',
		img: post_3_img,
		title: '29 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '30-rebranding-your-business',
		img: post_1_img,
		title: '30 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '31-rebranding-your-business',
		img: post_2_img,
		title: '31 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '32-rebranding-your-business',
		img: post_3_img,
		title: '32 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '33-rebranding-your-business',
		img: post_1_img,
		title: '33 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '34-rebranding-your-business',
		img: post_2_img,
		title: '34 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '35-rebranding-your-business',
		img: post_3_img,
		title: '35 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '36-rebranding-your-business',
		img: post_1_img,
		title: '36 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '37-rebranding-your-business',
		img: post_2_img,
		title: '37 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '38-rebranding-your-business',
		img: post_3_img,
		title: '38 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '39-rebranding-your-business',
		img: post_3_img,
		title: '39 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '40-rebranding-your-business',
		img: post_1_img,
		title: '40 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '41-rebranding-your-business',
		img: post_2_img,
		title: '41 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '42-rebranding-your-business',
		img: post_3_img,
		title: '42 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '43-rebranding-your-business',
		img: post_1_img,
		title: '43 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '44-rebranding-your-business',
		img: post_2_img,
		title: '44 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '45-rebranding-your-business',
		img: post_3_img,
		title: '45 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '46-rebranding-your-business',
		img: post_1_img,
		title: '46 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '47-rebranding-your-business',
		img: post_2_img,
		title: '47 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '48-rebranding-your-business',
		img: post_3_img,
		title: '48 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
	{
		url: '49-rebranding-your-business',
		img: post_3_img,
		title: '49 Rebranding Your Business',
		text: 'Changing the face of your business car really be a challenging decision sometimes.',
		category: 'Logo Design'
	},
];

const comments = [
	{
		postCode: '1-rebranding-your-business',
		userId: 1,
		time: 1648034580995,
		text: '1 Integer ac gravida erat. Ut vitae elit neque. Fusce quam dolor, pellentesque a arcu venenatis, fermentum cursus nulla. Phasellus facilisis pellentesque neque, ut ultricies magna. Cras ac ex rhoncus, varius enim sit amet, aliquet libero.'
	},
	{
		postCode: '1-rebranding-your-business',
		userId: 1,
		time: 1648033619145,
		text: '2 Integer ac gravida erat. Ut vitae elit neque. Fusce quam dolor, pellentesque a arcu venenatis, fermentum cursus nulla. Phasellus facilisis pellentesque neque, ut ultricies magna. Cras ac ex rhoncus, varius enim sit amet, aliquet libero.'
	},
	{
		postCode: '1-rebranding-your-business',
		userId: 1,
		time: 1648033619145,
		text: '3 Integer ac gravida erat. Ut vitae elit neque. Fusce quam dolor, pellentesque a arcu venenatis, fermentum cursus nulla. Phasellus facilisis pellentesque neque, ut ultricies magna. Cras ac ex rhoncus, varius enim sit amet, aliquet libero.'
	},
]

export default class PostService {
	static getAll(limit = 10, page = 1) {
		const response = {};

		let chunkItems = chunkArray(posts, limit);

		response.items = chunkItems[page - 1];
		response.totaCount = posts.length;
		response.totaPages = chunkItems.length;

		return response;
	}

	static getByCode(code) {
		return posts.find(post => post.url === code);
	}

	static getComments(){
		let result = comments;
		if (!localStorage.getItem('comments')) {
			localStorage.setItem('comments', JSON.stringify(comments));

		}else{
			result = JSON.parse(localStorage.getItem("comments"));
		}

		result.sort(function(a, b) {
			return b.time - a.time;
		});

		return result;
	}

	static getCommentByPostId(code) {
		let response = [];
		let commentsAr = this.getComments();

		commentsAr.forEach((comment) => {
			if( comment.postCode === code ) {
				comment.user = UserService.getUserInfo();
				response.push(comment);
			}
		})

		return response;
	}

	static addComment(text, postId){
		let allComments = this.getComments();
		let userInfo = UserService.getUserInfo();
		let comment = {
			postCode: postId,
			userId: userInfo.id,
			time: Date.now(),
			text: text
		}

		allComments.unshift(comment);
		localStorage.setItem('comments', JSON.stringify(allComments));

		return this.getCommentByPostId(postId);
	}

}