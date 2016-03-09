<?
require 'vendor/autoload.php';
require 'lib/tools.php';

?><!DOCTYPE html>
<html lang="ru" class="no-touch">
<head>
	
    <title>NotAgency</title>
    
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <link rel="stylesheet" href="/assets/packages/owl.carousel.css">    
    <link rel="stylesheet" href="/assets/packages/animations.css">
    
    <?
    $inputLessFile = '/vendor/twbs/bootstrap/less/bootstrap.less';
    $outputCssFile = '/assets/css/bootstrap.min.css';
    compileLess('.' . $inputLessFile, '.' . $outputCssFile);
    
    $inputLessFile = '/assets/less/common.less';
    $outputCssFile = '/assets/css/common.min.css';
    compileLess('.' . $inputLessFile, '.' . $outputCssFile);
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
    <?/*
    <div class="header animate top-t-bottom" data-delay="1200">
        <ul class="list-inline header_menu">
          <li><a class="header_menu__link" href="#" data-scroll-to="services">Наши услуги</a></li>
          <li><a class="header_menu__link" href="#" data-scroll-to="portfolio">Последние работы</a></li>
          <li><a class="header_menu__link" href="#" data-scroll-to="contacts">Контакты</a></li>
        </ul>
        <div class="header_lang">
            <a class="header_menu__link" href="#">EN</a>
        </div>
    </div>
    */?>
    <div class="slide slide_hero text-center valign-middle" data-slide="hero">
        <div class="hero">
            <h1 class="hero__title animate zoom-in" data-delay="400">Not</h1>
            <h2 class="hero__title_smaller animate right-t-left" data-delay="600">Agency</h2>
            <h3 class="hero__subtitle animate zoom-in" data-delay="800">Верстка и сборка сайтов на 1C-Битрикс</h3>
            <div class="hero__divider zoom-in animate" data-delay="1000">
                <hr>
            </div>
            <div class="bottom-t-top animate" data-delay="1200">
                <a href="#" class="btn btn-custom" data-scroll-to="contacts">Контакты</a>
            </div>
        </div>
    </div>
    <div class="content">
        <?/*
        <div class="slide slide_services text-center" data-slide="services">
            <h1 class="slide__title">Что мы умеем</h1>
            <hr>
            <p>
                Мы умеем классно собирать высоконагруженные сайты на Битрикс.<br/>
                А еще верстать и даже разрабатывать игры на HTML5.<br/>
                И еще немножко дизайн.<br/>
                Для нас важная каждая деталь Вашего проекта.<br/>
                А вообще этот текст нужно копирайтить.
            </p>
        </div>
        <div class="slide slide_technologies" data-role="technologies-list">
            <div class="technology_item">
                <img src="http://cdn.undsgn.com/uncode/wp-content/uploads/2014/12/logo-jquery-uai-258x116.png" alt="" />
            </div>
            <div class="technology_item">
                <img src="http://cdn.undsgn.com/uncode/wp-content/uploads/2014/12/logo-less-uai-258x116.png" alt="" />
            </div>
            <div class="technology_item">
                <img src="http://cdn.undsgn.com/uncode/wp-content/uploads/2014/12/logo-sass-uai-258x116.png" alt="" />
            </div>
            <div class="technology_item">
                <img src="http://cdn.undsgn.com/uncode/wp-content/uploads/2015/05/logo-github-uai-258x116.png" alt="" />
            </div>
            <div class="technology_item">
                <img src="http://cdn.undsgn.com/uncode/wp-content/uploads/2014/12/logo-jquery-uai-258x116.png" alt="" />
            </div>
            <div class="technology_item">
                <img src="http://cdn.undsgn.com/uncode/wp-content/uploads/2014/12/logo-less-uai-258x116.png" alt="" />
            </div>
            <div class="technology_item">
                <img src="http://cdn.undsgn.com/uncode/wp-content/uploads/2014/12/logo-sass-uai-258x116.png" alt="" />
            </div>
            <div class="technology_item">
                <img src="http://cdn.undsgn.com/uncode/wp-content/uploads/2015/05/logo-github-uai-258x116.png" alt="" />
            </div>
        </div>
        <div class="slide slide_portfolio text-center" data-slide="portfolio">
            <h1 class="slide__title">Последние работы</h1>
            <hr>
            <div class="slide__desc">Нам доверяют ведущие веб-студии</div>
            <ul class="list-inline portfolio_menu">
              <li><a class="portfolio_menu__link portfolio_menu__link_current" href="#">Все</a></li>
              <li><a class="portfolio_menu__link" href="#">Разработка</a></li>
              <li><a class="portfolio_menu__link" href="#">Верстка</a></li>
              <li><a class="portfolio_menu__link" href="#">Дизайн</a></li>
            </ul>
            <div class="portfolio_list" data-role="portfolio-list">
                <div class="portfolio_list__item wow animate bottom-t-top" data-delay="0">
                    <a href="/portfolio/twd6/play/"><img class="portfolio_list__item__image" src="/assets/i/twd6.png" alt="" /></a>
                    <p>Разработка игры и верстка промо-сайта.<br/>По заказу <a target="_blank" href="http:/articulmedia.ru/">Articul Media</a></p>
                </div>
                <div class="portfolio_list__item wow animate bottom-t-top" data-delay="100">
                    <img class="portfolio_list__item__image" src="/assets/i/ww2.png" alt="" />
                    <p>Сайт о Великой Отечественной Войне<br/>Дизайн и сборка под ключ.</p>
                </div>
                <div class="portfolio_list__item wow animate bottom-t-top" data-delay="200">
                    <p>Fox-live</p>
                </div>
                <div class="portfolio_list__item wow animate bottom-t-top" data-delay="300">
                    <p>Вертикаль</p>
                </div>
                <div class="portfolio_list__item wow animate bottom-t-top" data-delay="300">
                    <p>МатчТВ</p>
                </div>
                <div class="portfolio_list__item wow animate bottom-t-top" data-delay="300">
                    <p>Кафекремона</p>
                </div>
                <div class="portfolio_list__item wow animate bottom-t-top" data-delay="300">
                    <p>Брабантиа</p>
                </div>
            </div>
        </div>
        */?>
        <div class="slide slide_contacts text-center" data-slide="contacts">
            <h1 class="slide__title">Контакты</h1>
            <hr>
            <div class="slide__desc">Вы хотели бы заказать проект, или у Вас есть вопросы?</div>
            <div class="contacts_form">
                <form>
                  <div class="form-group">
                    <input type="text" class="form-control form-control-big" placeholder="Как Вас зовут">
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control form-control-big" placeholder="Email / Телефон / Любой контакт">
                  </div>
                  <div class="form-group">
                    <textarea class="form-control form-control-big" rows="3" placeholder="Комментарий"></textarea>
                  </div>
                  <div class="text-center">
                      <button type="submit" class="btn btn-custom">Отправить</button>
                  </div>
                </form>
             </div>
        </div>
        <div class="footer text-center">
            2016 &copy; NotAgency ОГРНИП 1230812093819283
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-1.12.1.min.js"></script>
    <script src="/assets/packages/wow.min.js"></script>
    <script src="/assets/packages/owl.carousel.min.js"></script>
    <script src="/assets/js/scripts.js"></script>
</body>
</html>