const { src, dest } = require('gulp');
const sharpResponsive = require('gulp-sharp-responsive');

const compress = () =>
	src("images/*.{png,jpg}")
		.pipe(
			sharpResponsive({
				formats: [
					// jpeg
					{ width: 256, format: "png", rename: { suffix: "-256" } },
					{ width: 512, format: "png", rename: { suffix: "-512" } },
					{ width: 1024, format: "png", rename: { suffix: "-1024" } },
				],
			})
		)
		.pipe(dest("src/assets/img"));

module.exports = {
	compress
};