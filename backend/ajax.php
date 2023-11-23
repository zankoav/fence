<?php if (!defined('ABSPATH')) {
    exit;
}

function set_html_content_type()
{
    return "text/html";
}

add_filter('wp_mail_content_type', 'set_html_content_type');

function post_message()
{

    $mail_to = 'info@lightning-soft.com';
    $subject = 'Сообщение из lightning-soft!';
    $headers = 'From: lightning-soft.com <' . $mail_to . '>' . "\r\n";

    $response           = array();
    $response['status'] = 0;
    $form_phone         = empty($_POST['phone']) ? '' : esc_attr($_POST['phone']);
    $form_comments       = empty($_POST['comments']) ? '' : esc_attr($_POST['comments']);
    $form_opponent      = empty($_POST['opponent']) ? '' : esc_attr($_POST['opponent']);
    $form_prototip      = empty($_POST['prototip']) ? '' : esc_attr($_POST['prototip']);

    if (empty($form_phone)) {
        $response['message']    = 'Phone empty';
        echo json_encode($response);
        wp_die();
    }


    $msg = "<p><strong>Телефон: </strong><span>" . $form_phone . "</span></p>";
    $msg .= "<p><strong>Ссылка на конкурента: </strong><span>" . $form_opponent  . "</span></p>";
    $msg .= "<p><strong>Ссылка на Figma: </strong><span>" . $form_prototip  . "</span></p>";
    $msg .= "<p><strong>Комментарий: </strong><span>" . $form_comments  . "</span></p>";


    if (wp_mail($mail_to, $subject, $msg, $headers)) {
        $response['status'] = 1;
    }

    echo json_encode($response);
    wp_die();
}

add_action('wp_ajax_post_message', 'post_message');
add_action('wp_ajax_nopriv_post_message', 'post_message');
