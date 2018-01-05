// desc: to configure the API server, not the UI.
// ref: https://github.com/Vandivier/charm-abm/blob/master/webpack.config.js

'use strict'

const path = require('path')
const sDist = path.resolve(__dirname, 'dist')

module.exports = {
    entry: [
        //path.resolve(__dirname, 'src')
    ],
    output: {
        path: sDist,
        filename: 'server.bundle.js'
    },
    devServer: {
        contentBase: sDist,
        port: 8080
    },
    plugins: [],
    target: 'node' // TODO: needed?
}
