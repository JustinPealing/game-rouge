module.exports = {
    entry: './js/main.js',
    devtool: '#inline-source-map',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [  {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', 
            query: {
                presets: ['es2015']
            }
        }]
    }
};