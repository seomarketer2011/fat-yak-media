<?php
/**
 * Your code here.
 *
 */
function lbmn_child_scripts() {
	// Load the parent stylesheet.
	wp_enqueue_style( 'lbmn-parent-style', get_template_directory_uri() . '/style.css', false );
}
add_action( 'wp_enqueue_scripts', 'lbmn_child_scripts', 101, 1 );
