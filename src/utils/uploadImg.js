import axios from 'axios';

//upload
const upload = async (file) => {
	const data = new FormData();
	data.append('file', file);
	data.append('upload_preset', 'gacha-shop');

	try {
		const res = await axios.post('https://api.cloudinary.com/v1_1/dyte46yep/image/upload', data);

		const { url } = res.data;
		return url;
	} catch (err) {
		console.log(err);
	}
};

export default upload;
