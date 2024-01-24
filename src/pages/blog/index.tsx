import {Link } from "react-router-dom";

const blog = () => {
	return (
		<div>
			<h1>Blog</h1>
			<p>Blog page content</p>
            <Link to="/">
				<button>Click me</button>
			</Link>
		</div>
	);
};

export default blog;
