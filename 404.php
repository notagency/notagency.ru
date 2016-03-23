<?

require 'vendor/autoload.php';
require 'lib/tools.php';

$isMobile = (new Mobile_Detect)->isMobile();

ob_start();

?><!DOCTYPE html>
<html lang="ru" class="no-touch">
<head>
	
    <title>NotAgency</title>
    
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    
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
<body <?if ($isMobile):?>class="no-animation"<?endif?>>
    <div class="slide slide_hero text-center valign-middle" data-slide="hero">
        <div class="hero">
            <h1 class="hero__title">404</h1>
            <h3 class="hero__subtitle">Страница не найдена</h3>
            <div class="hero__divider">
                <hr>
            </div>
            <a href="/" class="btn btn-custom">На главную</a>
        </div>
    </div>
    <div class="content">
        <div class="footer text-center">
            <?=date('Y')?> &copy; NotAgency ОГРНИП 314774601700196
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-1.12.1.min.js"></script>
    <script src="/assets/js/common.js"></script>
</body>
</html><?

$buffer = ob_get_clean();
echo compressHtml($buffer);