<?php
define('WP_CACHE', true);
define('WP_AUTO_UPDATE_CORE', false);// This setting was defined by WordPress Toolkit to prevent WordPress auto-updates. Do not change it to avoid conflicts with the WordPress Toolkit auto-updates feature.
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'bienblog_c7d');

/** MySQL database username */
define('DB_USER', 'bienblog_e20');

/** MySQL database password */
define('DB_PASSWORD', '5fYWr&|g9LC$');

/** MySQL hostname */
define('DB_HOST', '103.21.58.5:3306');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'yX8nW3JO](3YmTr@V&9I0xCgY6b57N6yUn6XXa4Ky#&j6N4N!P0]o6#~1pxGr)&M');
define('SECURE_AUTH_KEY', '%76x]XD3S8/U+k|-(6]S2tLDRw%1*DP8t%8LhlZY23B%9+7c51a4~eA&zDb2)!Lz');
define('LOGGED_IN_KEY', 'C9BA::EPz7|j@8x1UXy5/VomcY5jl_nVm3x[G*3/T619t]b[U%z+/(Qf07w]+(JQ');
define('NONCE_KEY', 'B6@-j5fhd]]gdfm%2!p]d6-q-gPW%);@*Z2x6]%opXOJ7Oi/J8XcZf/61p(4Co;b');
define('AUTH_SALT', ';(_12Cum;_vDl10|1%v69lHw0HvegNyPv0[e!9r4QTS23;Be/N:7n:G31x2q|q+#');
define('SECURE_AUTH_SALT', '5Cnp5550By480G~;0vHWRz:#7S|j+:ZLrg;w309k#Fuh;io04+Hkz3qf7_Nnf1&-');
define('LOGGED_IN_SALT', '83I4RO9jyNQ*n@h|;cbd)2D5as1Sm#_4QD7Qcc7!@4P5%Z@ksQG!p1GQw&Z*6pY_');
define('NONCE_SALT', '/k66Z|w%Ej1i8]5z6/mD3U])g_8fU@3LD6UpiOX|)tHZp+HR:YNl)/nH)O1G;_d0');
/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'U55O8ZSh_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

define( 'WP_ALLOW_MULTISITE', true );

define ('FS_METHOD', 'direct');
