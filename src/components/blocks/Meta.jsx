import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const Meta = ({ title }) => {
	return (
		<Helmet>
			<title>{title}</title>
			{/* <meta name='description' content='Mô tả trang web của bạn' />
			<meta name='keywords' content='từ khóa của trang web' />
			<link rel='icon' href='favicon.ico' /> */}
		</Helmet>
	);
};

Meta.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Meta;
