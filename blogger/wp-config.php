<?php
define('WP_AUTO_UPDATE_CORE', false);// This setting is required to make sure that WordPress updates can be properly managed in WordPress Toolkit. Remove this line if this WordPress website is not managed by WordPress Toolkit anymore.
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
define('DB_NAME', 'wordpress_blogger');

/** MySQL database username */
define('DB_USER', 'wordpress_dbuser');

/** MySQL database password */
define('DB_PASSWORD', 'Y0vz0v7*');

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
define('AUTH_KEY',         'uB0S%tdlvQZw4r3SshOI5shqRCSEpa!NdCWAk(DYG9m%!dm8s4clJCU*jT3k1j(P');
define('SECURE_AUTH_KEY',  '1uuEhKOESc4s6TUbVkPjIZHm#@QOiPdi4jzV5)utysVGqsixRJP2i!GEGydzkx7y');
define('LOGGED_IN_KEY',    'p6K7@r@xTRsGYOpG1BvSnZ)E3uhhms6OyKkiUIlzLZx(kvQ1A5zCeMTdOidzgLIl');
define('NONCE_KEY',        'aS7WxdIIbMc9LSdp6Znk8rttZyVb9LJDk%&ra#T0H0JiH3W4aH)scJm1oGc4lx8u');
define('AUTH_SALT',        'QPl4Q!uw8rgU9Wmil!l^h(rSI&jTtxAP9jhd43HUYs0mNL3Klwkw&OZ&zg5Ap(CD');
define('SECURE_AUTH_SALT', 'QXAgJ*a!CtkQ!go(clolvHLrWjqXfrb%9atwnouj*NhB0#7@M1UyfAfCuOKVFPHM');
define('LOGGED_IN_SALT',   'Hk47n^BdR7(OqgM&uZVsAUKzv)isl^je4htOQ1ZDdPwgPof)8WUyOFyw@)93bhYL');
define('NONCE_SALT',       'ocEDh!BOWF#4a^jPB3WlEZAGePKO3T5rOMEQ4Ox@YXYUC8ZV@5l@ilF71lM6tw#3');
/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

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
