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
<body class="no-animation">
    <div class="header">
        <div class="header__inner">
            <h2 class="header_notagency animate left-to-right" data-delay="200">
                NotAgency
            </h2>
        </div>
    </div>
    <div class="slide slide_hero" data-slide="hero">
        <div class="hero">
            <h1 class="hero__title">404</h1>
            <h3 class="hero__subtitle">Страница не найдена</h3>
            <hr class="hero__hr">
            <h3 class="hero__subtitle">
                Вы можете: перейти на <a href="/">главную страницу</a>,<br/>или связаться с нами <a href="mailto:info@notagency.ru">info@notagency.ru</a>
            </h3>
        </div>
    </div>
    <div class="footer text-center bottom-to-top animate" data-delay="1200">
        <?=date('Y')?> &copy; NotAgency ОГРНИП 314774601700196
    </div>
    <script src="https://code.jquery.com/jquery-1.12.1.min.js"></script>
    <script src="/assets/js/common.js"></script>
</body>
</html><?

$buffer = ob_get_clean();
echo compressHtml($buffer);