module.exports = {
    "stories": [
    //   '../stories/Introduction.stories.mdx',
      "../../**/*.stories.mdx",
      "../../**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [ 
        '@storybook/addon-docs',
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        '@storybook/addon-a11y',
    ],
    "typescript": {
      reactDocgen: 'react-docgen-typescript',
      reactDocgenTypescriptOptions: {
        compilerOptions: {
          allowSyntheticDefaultImports: false,
          esModuleInterop: false,
        },
      }
    },
  }