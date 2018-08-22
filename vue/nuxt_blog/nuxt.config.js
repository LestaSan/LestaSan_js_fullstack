module.exports = {
    head: {
        meta: [
            { "charset": 'utf-8' },
            { "name": "viewport", content: "width=device-width, initial-scale=1" },
            { "name": "renderer", content: "webkit" },
            { "hid": "keywords", name: "keywords", content: "VueBlog, Vue.js, Node.js, 服务端渲染" },
            {
                "hid": "description",
                "name": "description",
                "content": "VueBlog是一个基于Vue.js的小型博客应用，让你可以为所欲为的分享自己的知识和创作"
            }
        ]
    },
    loading: { color: '#42b983' },
    plugins: ['~/plugins/components.js',
        '~/plugins/filters.js'
    ]
}