/* eslint-disable no-param-reassign,@typescript-eslint/no-var-requires */

//* new share here
const withTM = require('next-transpile-modules')(['shared'], {
    resolveSymlinks: true,
})

export default withTM({
    webpack(config) {
        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            'react-native$': 'react-native-web',
        }
        config.resolve.extensions = [
            '.web.js',
            '.web.ts',
            '.web.tsx',
            ...config.resolve.extensions,
        ]

        return config
    },
})