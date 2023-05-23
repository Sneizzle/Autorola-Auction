import Carousel from "../components/carousel/Carousel";
const Details = () => {
	const slides = [
		{ url: "http://localhost:3000/image-1.jpg", title: "First" },
		{ url: "http://localhost:3000/image-2.jpg", title: "Second" },
		{ url: "http://localhost:3000/image-3.jpg", title: "Third" },
		{ url: "http://localhost:3000/image-4.jpg", title: "First" },
		{ url: "http://localhost:3000/image-5.jpg", title: "First" },
		{ url: "http://localhost:3000/image-6.jpg", title: "First" },
		{ url: "http://localhost:3000/image-7.jpg", title: "First" },
		{ url: "http://localhost:3000/image-8.jpg", title: "First" },
		{ url: "http://localhost:3000/image-9.jpg", title: "First" },
		{ url: "http://localhost:3000/image-10.jpg", title: "First" },
		{ url: "http://localhost:3000/image-11.jpg", title: "First" },
		{ url: "http://localhost:3000/image-12.jpg", title: "First" },
		{ url: "http://localhost:3000/image-13.jpg", title: "First" },
		{ url: "http://localhost:3000/image-14.jpg", title: "First" },
		{ url: "http://localhost:3000/image-15.jpg", title: "First" },
		{ url: "http://localhost:3000/image-16.jpg", title: "First" },
		{ url: "http://localhost:3000/image-17.jpg", title: "First" },
	];
	
	const containerStyles = {
		width: '500px',
		height: '280px',
        margin: "40px auto"
		
	};
	return (
		<div>
			<h1 style={{textAlign: "center"}}>Autorola	</h1>
			<div style={containerStyles}>
				<Carousel slides={slides} />
			</div>

		</div>
	);
};


export default Details;
