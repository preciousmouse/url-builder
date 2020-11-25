const { override, overrideDevServer } = require('customize-cra');

const multipleEntry = require('react-app-rewire-multiple-entry')([{
    entry: 'src/urlBuilder/index.tsx',
    template: 'templates/amaze.html',
    outPath: '/urlBuilder.html',
}]);

const addEntry = () => config => {
    multipleEntry.addMultiEntry(config);
    return config;
};

const fixRoot = () => (configFunction) => {
    return {
        ...configFunction,
        index: 'urlBuilder.html',
    };
}

module.exports = {
    webpack: override(
        addEntry(),
    ),
    devServer: overrideDevServer(
        fixRoot(),
    )
}