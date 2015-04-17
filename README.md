# html-minify-loader
Loader for webpack that minifies HTML using [minimize](https://github.com/Moveo/minimize)

To install
---

```
npm install html-minify-loader --save-dev
```

Use Case
---
Use it when you need to reduce the file size of your webpack template modules by removing comments and extra spaces from your templates

Example
---
```
module: {
    loaders: [
        {
                test: /\.html$/,
                name: "mandrillTemplates",
                loader: 'raw!html-minify'
        }
    ]
}
```

You can pass [minimize](https://github.com/Moveo/minimize) parameters via 'html-minify-loader' property of webpack config.

```
module: {
    loaders: [
        {
                test: /\.html$/,
                name: "mandrillTemplates",
                loader: 'raw!html-minify'
        }
    ]
},
'html-minify-loader': {
     empty: true,        // KEEP empty attributes
     cdata: true,        // KEEP CDATA from scripts
     comments: true     // KEEP comments
}

```
