<?php

if (!defined('ABSPATH')) {
    exit;
}
?>
<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="<?php bloginfo('charset'); ?>" />
    <link rel="profile" href="http://gmpg.org/xfn/11" />
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
    <?php wp_head(); ?>
    <!-- Google Tag Manager -->
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-5L6RDDK6');
    </script>
    <!-- End Google Tag Manager -->
    <script type="text/javascript">
        <?php
        $templateName = (wp_is_mobile() ? 'mobile' : 'desktop') . '_p404.js';
        $assets = new Assets();
        echo file_get_contents(__DIR__ . $assets->asset($templateName));
        ?>
    </script>
</head>

<body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5L6RDDK6" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <?php
    $template = wp_is_mobile() ? 'backend/components/mobile/404' : 'backend/components/desktop/404';
    get_template_part($template);
    ?>
</body>

</html>