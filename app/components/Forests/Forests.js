import React from 'react';
import Helmet from 'react-helmet';

const Forests = function() {
	return (
		<div className={'page'}>
			<Helmet>
				<title>Forests</title>
			</Helmet>

			<h1>Forests</h1>
			<img width={'150px'} src={'/images/forest.jpg'} alt={'Forests'} />
		</div>
	);
};

export default Forests;
