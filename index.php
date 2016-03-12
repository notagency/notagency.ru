<?

require 'vendor/autoload.php';
require 'lib/tools.php';

ob_start();

?><!DOCTYPE html>
<html lang="ru" class="no-touch">
<head>
	
    <title>NotAgency</title>
    
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
    
    <?/*<link rel="stylesheet" href="/assets/packages/owl.carousel.css">*/?>    
    <?
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
    <div class="header animate top-to-bottom" data-delay="1200">
        <ul class="list-inline header_menu">
          <li><a class="header_menu__link" href="#" data-scroll-to="services">Наши услуги</a></li>
          <li><a class="header_menu__link" href="#" data-scroll-to="portfolio">Последние работы</a></li>
          <li><a class="header_menu__link" href="#" data-scroll-to="partners">Партнеры</a></li>
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
            <h2 class="hero__title_smaller animate right-to-left" data-delay="600">Agency</h2>
            <!--<h3 class="hero__subtitle animate zoom-in" data-delay="800">Верстка и сборка сайтов на 1C-Битрикс</h3>-->
            <h3 class="hero__subtitle animate zoom-in" data-delay="800">Секретное оружие digital-агенств</h3>
            <div class="hero__divider zoom-in animate" data-delay="1000">
                <hr>
            </div>
            <div class="bottom-to-top animate" data-delay="1200">
                <a href="#" class="btn btn-custom" data-scroll-to="about">Узнать больше</a>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="slide slide_services text-center" data-slide="about">
            <h1 class="slide__title">Кто мы</h1>
            <hr>
            <p>
                Мы умеем классно собирать высоконагруженные сайты на 1С-Битрикс.<br/>
                А еще верстать и даже разрабатывать игры на HTML5.<br/>
                И еще немножко дизайн.<br/>
                Мы сотрудничаем с топовыми digital-агенствами.<br/>
                Мы &mdash; их тайное оружие.
            </p>
            <a href="#" class="btn btn-custom" data-scroll-to="contacts">Сделать заказ</a>
        </div>
        <?/*
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
        */?>
        <div class="slide slide_partners text-center" data-slide="portfolio">
            <div class="partners_wrapper">
                <div class="partners_side">
                    Нам доверяют
                </div>
                <div class="partners_list">
                    <div class="partner_item wow animate bottom-to-top" data-delay="100">
                        <img src="/assets/i/partners/articulmedia_72x72_bw.jpg" alt="Articul Media" /><br/>
                        <span class="partner_item__name">Articul Media</span>
                    </div>
                    <div class="partner_item wow animate bottom-to-top" data-delay="200">
                        <img src="/assets/i/partners/cpeople_72x72.png" alt="Creative People" /><br/>
                        <span class="partner_item__name">Creative People</span>
                    </div>
                    <div class="partner_item wow animate bottom-to-top" data-delay="300">
                        <img src="/assets/i/partners/zephyrlab_72x72_bw.jpg" alt="ZephyrLab" /><br/>
                        <span class="partner_item__name">ZephyrLab</span>
                    </div>
                </div>
                <?/*<div class="partners_side">
                    Наши работы
                </div>*/?>
            </div>
        </div>
        <?/*<div class="slide slide_portfolio text-center" data-slide="portfolio">
            <h1 class="slide__title">Последние работы</h1>
            <hr>
            <div class="slide__desc">Мы можем рассекретить только лишь некоторые наши работы</div>
            <ul class="list-inline portfolio_menu">
              <li><a class="portfolio_menu__link portfolio_menu__link_current" href="#">Все</a></li>
              <li><a class="portfolio_menu__link" href="#">Разработка</a></li>
              <li><a class="portfolio_menu__link" href="#">Верстка</a></li>
              <li><a class="portfolio_menu__link" href="#">Дизайн</a></li>
            </ul>
            <div class="portfolio_list">
                <div class="portfolio_list__row">
                    <div class="portfolio_list__item">
                        <a href="http://grandawards.ru/" target="_blank">
                            <img class="portfolio_list__item__image" src="/assets/i/portfolio/vertical.jpg" alt="" />
                        </a>
                        <p>
                            Сборка сайта национальной премии<br/>
                            бизнес-коммуникаций. По заказу <a target="_blank" href="http://articulmedia.ru/">Articul Media</a>.
                        </p>
                    </div>
                    <div class="portfolio_list__item">
                        <a href="/portfolio/twd6/play/" target="_blank">
                            <img class="portfolio_list__item__image" src="/assets/i/portfolio/twd6.jpg" alt="" />
                        </a>
                        <p>
                            Разработка игры, верстка промо-сайта, сборка.<br/>
                            По заказу <a target="_blank" href="http://articulmedia.ru/">Articul Media</a>.
                        </p>
                    </div>
                    <div class="portfolio_list__item">
                        <a href="http://1941-1945.org/" target="_blank">
                            <img class="portfolio_list__item__image" src="/assets/i/portfolio/ww2.jpg" alt="" />
                        </a>
                        <p>Хроники Великой Отечественной Войны<br/>Создание под ключ.</p>
                    </div>
                    <div class="portfolio_list__item wow animate bottom-to-top" data-delay="200">
                        <p>Fox-live</p>
                    </div>
                    <div class="portfolio_list__item wow animate bottom-to-top" data-delay="300">
                        <p>МатчТВ</p>
                    </div>
                    <div class="portfolio_list__item wow animate bottom-to-top" data-delay="300">
                        <p>Кафекремона</p>
                    </div>
                    <div class="portfolio_list__item wow animate bottom-to-top" data-delay="300">
                        <p>Брабантиа</p>
                    </div>
                </div>
            </div>
        </div>*/?>
        <div class="slide slide_contacts text-center" data-slide="contacts">
            <h1 class="slide__title">Напишите нам</h1>
            <hr>
            <div class="slide__desc">Сделайте заказ или задайте вопрос</div>
            <div class="contacts_form">
                <form method="post" action="/api/v1/feedback/" data-role="feedback-form">
                  <div class="alert alert-success hide" data-role="feedback-form-success">
                      <strong>Спасибо!</strong> Ваше сообщение отправлено. Мы свяжемся с Вами в ближайшее время.
                  </div>
                  <div class="alert alert-danger hide">
                      Произошла ошибка. Попробуйте позднее.
                  </div>
                  <div class="form-group error">
                    <input name="name" type="text" class="form-control form-control-big" placeholder="Ваше имя" required>
                  </div>
                  <div class="form-group">
                    <input name="contact" type="text" class="form-control form-control-big" placeholder="Email / Телефон / Любой контакт" required>
                  </div>
                  <div class="form-group">
                    <textarea name="message" class="form-control form-control-big" rows="5" placeholder="Опишите вашу задачу" required></textarea>
                  </div>
                  <div class="text-center">
                      <a href="#" class="btn btn-custom" data-role="feedback-form-submit">
                          Отправить
                          <div class="spinner">
                            <i class="glyphicon glyphicon-refresh"></i>
                          </div>
                      </a>
                  </div>
                </form>
             </div>
        </div>
        <div class="footer text-center">
            <?=date('Y')?> &copy; NotAgency ОГРНИП 314774601700196
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-1.12.1.min.js"></script>
    <script src="/assets/packages/wow.min.js"></script>
    <script src="/assets/packages/owl.carousel.min.js"></script>
    <script src="/assets/packages/jquery.validation-1.15.0/jquery.validate.min.js"></script>
    <script src="/assets/packages/jquery.validation-1.15.0/messages_ru.min.js"></script>
    <script src="/assets/js/scripts.js"></script>
</body>
</html><?

$buffer = ob_get_clean();
echo compressHtml($buffer);