
// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({ 
//   publicPath: process.env.NODE_ENV === 'production' ? '/quasar1-1/' : '/',
//   transpileDependencies: true


// const { configure } = require('quasar/wrappers')

// module.exports = configure(function (/* ctx */) {


//   return {
   
//     boot: [

//     ],

   
//     css: [
//       'app.scss'
//     ],

    
//     extras: [
     

//       'roboto-font', 
//       'material-icons' 
//     ],

//     build: {
//       target: {
//         browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
//         node: 'node20'
//       },

//       vueRouterMode: 'hash', 
     

//       vitePlugins: [
//         ['vite-plugin-checker', {
//           eslint: {
//             lintCommand: 'eslint "./**/*.{js,mjs,cjs,vue}"'
//           }
//         }, { server: false }]
//       ]
//     },

//     devServer: {
//       open: true 
//     },

//     framework: {
//       config: {},

      
//       plugins: []
//     },

   
//     animations: [],

    
//     ssr: {
     
//       pwa: false,


//       prodPort: 3000, 
      

//       middlewares: [
//         'render' 
//       ]
//     },

    
//     pwa: {
//       workboxMode: 'generateSW', 
//       injectPwaMetaTags: true,
//       swFilename: 'sw.js',
//       manifestFilename: 'manifest.json',
//       useCredentialsForManifestTag: false
      
//     },

    
//     cordova: {
//     },

//     capacitor: {
//       hideSplashscreen: true
//     },

//     electron: {
 

//       inspectPort: 5858,

//       bundler: 'packager',

//       packager: {

       
//       },

//       builder: {
        

//         appId: 'quasar-project'
//       }
//     },

//     bex: {
//       contentScripts: [
//         'my-content-script'
//       ]


//     }
//   }
// })
// })


const { defineConfig } = require('@vue/cli-service')
const { configure } = require('quasar/wrappers')

module.exports = defineConfig({ 
  publicPath: process.env.NODE_ENV === 'production' ? '/quasar1-1/' : '/',
  transpileDependencies: true
})

module.exports = configure(function (ctx) {
  return {
    boot: [],

    css: [
      'app.scss'
    ],

    extras: [
      'roboto-font', 
      'material-icons' 
    ],

    build: {
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        node: 'node20'
      },
      vueRouterMode: 'hash', 

      vitePlugins: [
        ['vite-plugin-checker', {
          eslint: {
            lintCommand: 'eslint ".//*.{js,mjs,cjs,vue}"'
          }
        }, { server: false }]
      ]
    },

    devServer: {
      open: true 
    },

    framework: {
      config: {},
      plugins: []
    },

    animations: [],

    ssr: {
      pwa: false,
      prodPort: 3000,

      middlewares: [
        'render' 
      ]
    },

    pwa: {
      workboxMode: 'generateSW', 
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false
    },

    cordova: {},

    capacitor: {
      hideSplashscreen: true
    },

    electron: {
      inspectPort: 5858,
      bundler: 'packager',
      packager: {
        // настройки пакета
      },
      builder: {
        appId: 'quasar-project'
      }
    },

    bex: {
      contentScripts: [
        'my-content-script'
      ]
    }
  }
})