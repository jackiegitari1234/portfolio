export default {

    head: {
        title: "Jackline Gitari",
        link: [
            {
              rel: 'stylesheet',
              href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
            }
          ]

    },
    /*
    ** Activate components - https://nuxtjs.org/guides/directory-structure/components#components-module
    */
    components: true,

    /*
    ** Global CSS - https://nuxtjs.org/guides/features/configuration#pre-processors
    */
    css: [
        '~/assets/main.css',
    ],

    /*
    ** env property
    */
    env: {
	    apiUrl: "https://api.nuxtjs.dev"
    },

    /*
    ** Modules - https://nuxtjs.org/guides/directory-structure/modules
    */
    modules: [
        '@nuxtjs/axios',
        'bootstrap-vue/nuxt'
    ]

}