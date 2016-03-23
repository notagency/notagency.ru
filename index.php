<?

require 'vendor/autoload.php';
require 'lib/tools.php';

ob_start();

?><!DOCTYPE html>
<html lang="ru" class="no-touch">
<head>
	
    <title>NotAgency</title>
    
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Russo+One' rel='stylesheet' type='text/css'>
    
    <?/*<link rel="stylesheet" href="/assets/packages/owl.carousel.css">*/?>    
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
<body>    
    <div class="header">
        <div class="header__inner">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6">
                        <div class="header_notagency animate left-to-right" data-delay="200">
                            NotAgency
                        </div>
                    </div>
                    <div class="col-md-6">
                        <?/*<div class="header_lang">
                            <a class="header_menu__link" href="#">EN</a>
                        </div>
                        <div class="header_contact animate right-to-left" data-delay="200">
                            <a href="mailto:info@notagency.ru">info@notagency.ru</a>
                        </div>*/?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="slide slide_hero text-center valign-middle" data-slide="hero">
        <div class="hero">
            <h3 class="hero__title animate top-to-bottom" data-delay="400">Команда разработчиков</h3>
            <h3 class="hero__subtitle animate zoom-in" data-delay="600">Верстка и сборка сайтов на 1C-Битрикс и Laravel</h3>
            <div class="hero__divider zoom-in animate" data-delay="800">
                <hr>
            </div>
            <div class="hero__email bottom-to-top animate" data-delay="1000">
                По любым вопросам<br/>
                <a href="mailto:info@notagency.ru">info@notagency.ru</a>
            </div>
            <div class="about container-fluid">
                <div class="row">
                    <div class="col-md-4">
                        <div class="about__item bottom-to-top animate" data-delay="1000">
                            <div class="about__digit" data-digit="true">
                                65
                            </div>
                            <div class="about__text">
                                проектов по заказу агенств<br/>
                                <strong>Articul Media, Creative People,<br/>ZephyrLab, NotaMedia</strong>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="about__item bottom-to-top animate" data-delay="1100">
                            <div class="about__digit" data-digit="true">
                                20
                            </div>
                            <div class="about__text">
                                проектов по заказу клиентов<br/>
                                <strong>Yota, НПФ Сбербанка<br/>и других</strong>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="about__item bottom-to-top animate" data-delay="1200">
                            <div class="about__digit" data-digit="true">
                                8
                            </div>
                            <div class="about__text">
                                лет работы
                                <br/><strong>в веб-индустрии</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer text-center bottom-to-top animate" data-delay="1200">
            <?=date('Y')?> &copy; NotAgency ОГРНИП 314774601700196
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-1.12.1.min.js"></script>
    <?/*<script src="/assets/packages/wow.min.js"></script>
    <!--<script src="/assets/packages/owl.carousel.min.js"></script>-->
    <script src="/assets/packages/jquery.validation-1.15.0/jquery.validate.min.js"></script>
    <script src="/assets/packages/jquery.validation-1.15.0/messages_ru.min.js"></script>*/?>
    <script src="/assets/js/common.js"></script>
    <script src="/assets/js/index.js"></script>
</body>
</html><?

$buffer = ob_get_clean();
echo compressHtml($buffer);