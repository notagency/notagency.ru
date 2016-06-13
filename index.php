<?

require 'vendor/autoload.php';
require 'lib/tools.php';

$isMobile = (new Mobile_Detect)->isMobile();

ob_start();

?><!DOCTYPE html>
<html lang="ru">
<head>
    <title>NotAgency — Профессиональная разработка сайтов на 1C-Битрикс, Laravel, Symfony</title>    
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon.png?v=1.2">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <meta name="description" content="Профессиональная разработка сайтов на 1C-Битрикс, Laravel, Symfony" />
    <meta name="keywords" content="создание и поддержка веб-проектов, профессиональная разработка сайтов, 1C-Битрикс, Laravel, Symfony" />
    
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900|Russo+One&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
    
    <?
    $inputLessFile = 'assets/less/common.less';
    $outputCssFile = 'assets/css/common.min.css';
    compileLess('./' . $inputLessFile, './' . $outputCssFile);
    ?>
    <link rel="stylesheet" href="<?=$outputCssFile?>">
    
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body  <?if ($isMobile):?>class="no-animation"<?endif?>>
    <div class="header">
        <div class="header__inner">
            <h2 class="header_notagency animate left-to-right" data-delay="200">
                NotAgency
            </h2>
        </div>
    </div>
    <div class="slide slide_hero" data-slide="hero">
        <div class="hero">
            <h1 class="hero__title animate top-to-bottom" data-delay="400">Команда разработчиков</h1>
            <h3 class="hero__subtitle animate zoom-in" data-delay="600">Профессиональная разработка сайтов на&nbsp;1C&#8209;Битрикс,&nbsp;Laravel,&nbsp;Symfony</h3>
            <hr class="hero__hr  zoom-in animate" data-delay="800">
            <h3 class="hero__subtitle bottom-to-top animate" data-delay="1000">
                По любым вопросам<br/>
                <a href="mailto:info@notagency.ru">info@notagency.ru</a>
            </h3>
            <div class="about container-fluid">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="about__item bottom-to-top animate" data-delay="1000">
                            <div class="about__digit" data-digit="true">
                                65
                            </div><div class="about__text">
                                проектов по заказу агентств<br/>
                                <strong>Articul&nbsp;Media, CreativePeople,<br/>ZephyrLab, NotaMedia</strong>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="about__item bottom-to-top animate" data-delay="1100">
                            <div class="about__digit" data-digit="true">
                                20
                            </div><div class="about__text">
                                проектов по заказу клиентов<br/>
                                <strong>Yota, НПФ&nbsp;Сбербанка<br/>и других</strong>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="about__item bottom-to-top animate" data-delay="1200">
                            <div class="about__digit" data-digit="true">
                                8
                            </div><div class="about__text">
                                лет работы
                                <br/><strong>в веб&#8209;индустрии</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer text-center bottom-to-top animate" data-delay="1200">
        <?=date('Y')?> &copy; NotAgency ОГРНИП 314774601700196
    </div>
    <script src="https://code.jquery.com/jquery-1.12.1.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/mobile-detect/1.3.1/mobile-detect.min.js"></script>
    <script src="/assets/js/common.js"></script>
    <script src="/assets/js/index.js"></script>
    
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
</html><?

$buffer = ob_get_clean();
echo compressHtml($buffer);