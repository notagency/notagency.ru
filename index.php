<?php

require $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';
require $_SERVER['DOCUMENT_ROOT'] . '/lib/tools.php';

$isMobile = (new Mobile_Detect)->isMobile();
$isMainPage = $_SERVER['REQUEST_URI'] == '/' || $_SERVER['REQUEST_URI'] == '/index.php';

ob_start();

?><!DOCTYPE html>
<html lang="ru">
<head>
    <title>NotAgency — Профессиональная разработка сайтов на 1C-Битрикс, Laravel, Symfony</title>    
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.png?v=1.1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <meta name="description" content="Профессиональная разработка сайтов на 1C-Битрикс, Laravel, Symfony" />
    <meta name="keywords" content="создание и поддержка веб-проектов, профессиональная разработка сайтов, 1C-Битрикс, Laravel, Symfony" />
    
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900|Russo+One&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
    
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    
    <link rel="stylesheet" href="/assets/icons.css?<?=filemtime($_SERVER['DOCUMENT_ROOT'] . '/assets/icons.css')?>">
    <link rel="stylesheet" href="/assets/styles.css?<?=filemtime($_SERVER['DOCUMENT_ROOT'] . '/assets/styles.css')?>">
    
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body  <?php if ($isMobile || !$isMainPage):?>class="no-animation"<?php endif?>>

    <div id="app" data-state='<?=json_encode(['data' => ['isMobile' => $isMobile, 'year' => date('Y')]])?>'></div>
    <script src="/assets/app.js"></script>

    <?/*<script src="https://code.jquery.com/jquery-1.12.1.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/mobile-detect/1.3.1/mobile-detect.min.js"></script>
    <script src="/assets/js/common.js"></script>
    <script src="/assets/js/index.js"></script>*/?>
    
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-75473565-1', 'auto');
      ga('send', 'pageview');
    </script>
    <!-- Yandex.Metrika counter --> <script type="text/javascript"> (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter36296500 = new Ya.Metrika({ id:36296500, clickmap:true, trackLinks:true, accurateTrackBounce:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks"); </script> <noscript><div><img src="https://mc.yandex.ru/watch/36296500" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->    
</body>
</html><?php

$buffer = ob_get_clean();
echo compressHtml($buffer);
