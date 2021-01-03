const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#6C00E1',
              '@layout-header-padding': '0 64px',
              '@layout-header-background': '#ffffff',
              '@border-radius-base': '22px',
              '@btn-text-hover-bg': '#EEE7FD',
              '@btn-font-weight': '600',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
