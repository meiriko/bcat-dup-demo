# node-bcat-dup DEMO
Demonstrates how to use bcat-dup
See:

How to use:

install [bcag-dup](https://www.npmjs.com/package/bcat-dup): npm install -g bcat-dup

npm install

gulp | bcat-dup --keepStdout

This will notify you on which port your server is running and automatically open a browser that displays gulp's output.

Make sure you have liverealod plugin enabled.

Open your (simple) html page in a browser: http://localhsot:3000 (change to the relevant port). Make sure your livereload plugin is activated (the little dot is full).


Now open public/index.html for editing and change the content. You will here a beep when gulp starts the updats and two beeps once it is done and your web page is loaded. While this is happening, the bcat-dup tab will reflect the updates to gulp's output. These udpates are also visible in the console where you originally ran gulp.