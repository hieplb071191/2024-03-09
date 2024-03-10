/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    cacheHandler: require.resolve('./cache-handler.js'),
    cacheMaxMemorySize: 0, // disable default in-memory caching
    generateBuildId: async () => {
        // This could be anything, using the latest git hash
        return process.env.GIT_HASH ? process.env.GIT_HASH : 'jasdhjfgnasbdfvsdn'
    },
    output: 'export',
    images: {
        loader: 'custom',
        loaderFile: './my-loader.ts',
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};

module.exports = nextConfig;
