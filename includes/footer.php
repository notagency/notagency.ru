    <div class="footer text-center bottom-to-top animate" data-delay="1200">
        <div class="col-xs-2">
            <?php /* <a href="/join/">Разработчикам</a> */ ?>
        </div>
        <div class="col-xs-8">
            <?=date('Y')?> &copy; NotAgency ОГРНИП 314774601700196
        </div>
        <div class="col-xs-2">
        </div>
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
</html><?php

$buffer = ob_get_clean();
echo compressHtml($buffer);