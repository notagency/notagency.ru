<?php

require $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';

define('IS_MOBILE', (new Mobile_Detect)->isMobile());
define('IS_MAIN_PAGE', $_SERVER['REQUEST_URI'] == '/' || $_SERVER['REQUEST_URI'] == '/index.php');

require $_SERVER['DOCUMENT_ROOT'] . '/lib/tools.php';

ob_start();

$supportedLangs = ['ru', 'en'];
$defaultLang = 'en';
$lang = $defaultLang;
if (!empty($_SERVER['HTTP_ACCEPT_LANGUAGE'])) {
    $rawLang = Locale::acceptFromHttp($_SERVER['HTTP_ACCEPT_LANGUAGE']);
}
if ($rawLang) {
    list($lang, $regionCode) = explode('_', $rawLang);
    $lang = strtolower($lang);
    $lang = in_array($lang, $supportedLangs) ? $lang : 'en';
}

?><!DOCTYPE html>
<html lang="ru">
<head>
    <title>NotAgency — Профессиональная разработка сайтов на 1C-Битрикс, Laravel, Symfony, ReactJS</title>    
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.png?v=1.1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <meta name="description" content="Профессиональная разработка сайтов на 1C-Битрикс, Laravel, Symfony, ReactJS" />
    <meta name="keywords" content="создание и поддержка веб-проектов, профессиональная разработка сайтов, 1C-Битрикс, Laravel, Symfony, ReactJS, React, Redux" />
    <?php
    linkCss('/assets/icons.css');
    linkCss('/assets/app.css');
    ?>
</head>
<body  <?php if (IS_MOBILE || !IS_MAIN_PAGE):?>class="no-animation"<?php endif?>>

    <?php 
    $data = [
        'isMobile' => IS_MOBILE, 
        'fromMainPage' => IS_MAIN_PAGE, 
        'year' => date('Y'), 
        'lang' => $lang
    ];
    ?>

    <div id="app" data-state='<?=json_encode(['data' => $data])?>'></div>
    
    <?php
    linkJs('/assets/app.js');
    ?>
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
