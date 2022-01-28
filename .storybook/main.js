const path = require("path");

module.exports = {
    stories: [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/preset-create-react-app",
    ],
    webpackFinal: async (config, { configType }) => {
        // fonts
        // config.module.rules.push({
        //     test: /\.(png|woff|woff2|eot|ttf)$/,
        //     use: [
        //         {
        //             loader: "file-loader",
        //             query: {
        //                 name: "[name].[ext]",
        //             },
        //         },
        //     ],
        //     include: path.resolve(__dirname, "../"),
        // });

        config.module.rules.push({
            test: /\.(sass|scss)$/,
            use: ["resolve-url-loader"],
            include: path.resolve(__dirname, "../"),
        });

        // don't forget to return.
        return config;
    },
};
