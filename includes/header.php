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
    
    <link rel="stylesheet" href="https://use.fontawesome.com/c57a88943c.css">
    
    <?php
    $inputLessFile = '/assets/less/common.less';
    $outputCssFile = '/assets/css/common.min.css';
    compileLess($_SERVER['DOCUMENT_ROOT'] . $inputLessFile, $_SERVER['DOCUMENT_ROOT'] . $outputCssFile);
    ?>
    <link rel="stylesheet" href="<?=$outputCssFile?>">
    
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body  <?php if ($isMobile || !$isMainPage):?>class="no-animation"<?php endif?>>
    <div class="header">
        <div class="header__inner row">
            <div class="col-xs-6 animate left-to-right" data-delay="200">
                <h2 class="header__logo">
                    <?php if (!$isMainPage):?>
                        <a href="/">
                    <?php endif?>
                    <span>NotAgency</span>
                    <?php if (!$isMainPage):?>
                        </a>
                    <?php endif?>
                </h2>
            </div>
            <div class="col-xs-6 animate right-to-left text-right" data-delay="1000">
                <a class="header__social" href="https://www.facebook.com/notagency.ru/" target="_blank">
                    <i class="fa fa-facebook-official" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    </div>