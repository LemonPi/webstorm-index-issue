module.exports = {
    // file that just exports
    entry : './src/index.js',
    output: {
        filename      : './dist/dp.js',
        libraryTarget : 'umd',
        library       : 'dp',
        umdNamedDefine: true,
    }
};