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
webpack 1
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
     comments: true,     // KEEP comments
     dom: {                            // options of !(htmlparser2)[https://github.com/fb55/htmlparser2]
            lowerCaseAttributeNames: false,      // do not call .toLowerCase for each attribute name (Angular2 use camelCase attributes)
     }
}

```

webpack 2

You can pass [minimize](https://github.com/Moveo/minimize) parameters via options property of loader. Example with multiple loaders.

```
module: {                                                           
   rules: [                                                        
	  {
		 test: /\.html$/, include: [applicationSource],
		 loaders: [
			'file-loader?publicPath=/,name=[path][name].min.[ext]',
			{
			   loader: 'html-minify-loader',
			   options: {
				  quotes: true,
				  dom: { lowerCaseTags: false }
			   }
			}
		 ]
	  }
   ]
}

```
