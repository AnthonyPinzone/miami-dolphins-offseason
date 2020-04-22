module.exports = {
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-material-ui`,
        {
            resolve: `gatsby-plugin-google-fonts-v2`,
            options: {
                fonts: [
                    {
                        family: "Quicksand",
                        variable: true,
                        weights: ["300..700"],
                    },
                    {
                        family: "Roboto Slab",
                        variable: true,
                        weights: ["100..900"],
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-164228042-1",
                head: true,
                respectDNT: true,
            },
        },
    ],
};
