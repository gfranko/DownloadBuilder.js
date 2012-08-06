DownloadBuilder.js
==================

JavaScript Library to Create Custom Builds For Front-End Projects
-----------------------------------------------------------------

A JavaScript library that uses the HTML5 Filesystem API to create concatenated single file custom builds for front-end projects.  The library currently supports concatenating local files (supported in all  major browsers) and/or files from Github (not supported in IE unless you use a window.atob polyfill).  The library also uses Session Storage to provide an option to cache ajax/jsonp requests.

if you are using a browser that does not support the HTML5 Filesystem, the text of the concatenated file will still be available to provide users with the custom build code, just not a separate file link to it.

DownloadBuilder.js is heavily influenced by [Eric Bidler](https://github.com/ebidel) (a member of the Google Chrome Developer Relations Team).  Eric has been a big supporter of the HTML5 Filesystem API and without his HTML5 Rocks articles and HTML5 Filesystem O'Reilly Book, this library would not have been created.  The project is also heavily influenced by [Oscar Goodson's JSONP project](https://github.com/OscarGodson/JSONP) and [James Ward's Github File Download project](https://github.com/jamesward/github-files). 

**Notable Features**

   - Supports **Blob URL creation** (Essentially a new file is created to point to the concatenated custom build)

   - Supports **concatenating** local files and/or files from Github

   - Supports **caching** ajax/jsonp requests via **Session Storage**

##Requirements
None

##Optional Dependencies

[window.btoa and window.atob polyfill](https://bitbucket.org/davidchambers/base64.js) - IE < 10 does not support window.atob (necessary to pull files from Github)

##Browser Support
Only Google Chrome fully supports the HTML5 Filesystem API.  This means that only Google Chrome supports creating a custom build url.

All Major Browsers (IE8+, Firefox, Chrome, Safari) support retrieving local files and concatenating them.

Firefox, Chrome, and Safari all support retrieving Github files.  If you include the window.atob polyfill, then IE8+ will also support retrieving Github files.

##Unit Tests
All unit tests are written using the Jasmine Framework (Work in Progress)

##Contributing
Take care to maintain the existing coding style. Add Jasmine unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

If you plan to contribute to `DownloadBuilder` in the future, keep in mind that you should make sure your code passes the Grunt checks.  If you are on Windows (like me) remember you need to run the grunt command using `grunt.cmd`.  Also, if you have trouble getting the Jasmine Unit Tests to work with the current release of PhantomJS (the current release), install PhantomJS 1.3.

After you have verified your code, send a pull request to the `DownloadBuilder` dev branch.  After you send a pull request, you will hear back from me shortly after I review your code.

You'll find source code in the "src" subdirectory!

##Forking
If you find that you need a feature that DownloadBuilder does not currently support, either let me know via the DownloadBuilder issue tracker, or fork DownloadBuilder on Github and extend it.

For more documentation on how to do this, take a look at the [documentation](http://gregfranko.com/blog/introducing-the-jquery-plugin-selectboxit/#extending-selectboxit)

##Change Log

`0.1.0` - August 6th, 2012

- Initial DownloadBuilder release.  Added annotated source code, unit tests, and documentation

**Contributors**

Greg Franko - [@gfranko](https://github.com/gfranko)

## License
Copyright (c) 2012 Greg Franko  
Licensed under the MIT license.
