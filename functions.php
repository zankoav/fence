<?php
if (!defined('ABSPATH')) {
    exit;
}

require __DIR__ . '/backend/Assets.php';
require __DIR__ . '/backend/CMB2/index.php';
require __DIR__ . '/backend/ajax.php';



add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
});


add_action('wp_enqueue_scripts', 'page_scripts');

function page_scripts()
{
    wp_dequeue_script('jquery');
    wp_dequeue_script('jquery-core');
    wp_dequeue_script('jquery-migrate');
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('wp-block-library-theme');
    wp_dequeue_style('wc-blocks-style');
}
