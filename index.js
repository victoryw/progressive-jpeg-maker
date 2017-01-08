const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

imagemin(['images/*.{jpg,png}'], 'build/images', {
    plugins: [
        imageminMozjpeg({quality:95,progressive: true}),
    ]
}).then(files => {
    console.log(files);
//=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
});



const imageminJpegtran = require('imagemin-jpegtran');
imagemin(['images/*.{jpg,png}'], 'build2/images', {
    plugins: [
        imageminJpegtran({progressive: true})
    ]
}).then(files => {
    console.log(files);
//=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
});

const imageminJpegRecompress = require('imagemin-jpeg-recompress');
imagemin(['images/*.{jpg,png}'], 'build3/images', {
    plugins: [
        imageminJpegtran({progressive: true}),
        imageminJpegRecompress({min: 95, max:95})
    ]
}).then(files => {
    console.log(files);
//=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
});
