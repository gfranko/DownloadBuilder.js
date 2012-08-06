DownloadBuilder.js
==================

A JavaScript library that uses the HTML5 Filesystem API to create concatenated single file custom builds for front-end projects.  The library currently supports concatenating local files (supported in all  major browsers) and/or files from Github (not supported in IE unless you use a window.atob polyfill).  The library also uses Session Storage to provide an option to cache ajax/jsonp requests.