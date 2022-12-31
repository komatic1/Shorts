
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=0">
    <meta name="apple-touch-fullscreen" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="format-detection" content="telephone=no">
    <meta name="version" content="v202209160945">
    <link rel="shortcut icon" href="favicon.ico?t=7ea7bfea">
    <link href="themes/default/css/perfect-scrollbar.css?t=7ea7bfea" rel="stylesheet">
    <link id="baseCss" href="themes/default/css/base.css?t=7ea7bfea" rel="stylesheet">
    <title id="title">Opening...</title>
    <noscript>
      <meta http-equiv="refresh" content="0; url=error.html?t=7ea7bfea"/>
    </noscript>
  </head>
  
  <body>
    <div id="main-container"></div>
    <script src="js/libs/jquery.min.js?t=7ea7bfea"></script>
    <script src="js/libs/polyfill.js?t=7ea7bfea"></script>
    <script src="js/libs/cryptoJS.min.js?t=7ea7bfea"></script>
    <script src="js/libs/tpEncrypt.new.js?t=7ea7bfea"></script>
    <script src="js/app/url.js?t=7ea7bfea"></script>
    <script src="js/su/char.js?t=7ea7bfea"></script>
    <script src="js/su/language.js?t=7ea7bfea"></script>
    <script>
      try {
          var unsupported=!1;
          if (new Function("return !-[1,];")()&&(unsupported=!0),!localStorage||!localStorage.setItem||unsupported)
          throw"unsupported browser"
        }
      catch(r) {
          location.href="./error.html?t=7ea7bfea"
        }
      try { 
          $.su.language=new $.su.Language
        }
      catch(r) {
          console.error(r)
        }

    </script>
    
    <script src="js/su/frame1.js?t=7ea7bfea"></script>
    <script src="js/su/widgets.js?t=7ea7bfea"></script>
    <script src="js/su/frame2.js?t=7ea7bfea"></script>
    <script src="js/app/ruIspAutoConfig.js?t=7ea7bfea"></script>

    <script>
      $.su.isMobile()?$('<link type="text/css" href="themes/default/css/mobile.css?t=7ea7bfea" rel="stylesheet" />')
      .insertAfter("#baseCss"):($('<link type="text/css" href="themes/default/css/mobile.css?t=7ea7bfea" rel="stylesheet" media="screen and (max-width:767px)"/>')
      .insertAfter("#baseCss"),$('<link type="text/css" href="themes/default/css/total.css?t=7ea7bfea" rel="stylesheet" />')
      .insertAfter("#baseCss"))
    </script>
    
    <script>
      $(document).ready(function(n){App=new $.su.App,App.setContainer("main-container"),App.init().done(function(){App.launch()})})
    </script>
  </body>
  </html>