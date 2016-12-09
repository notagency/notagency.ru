<?

function linkCss($path)
{
    $url = getAsset($path);
    echo sprintf('<link rel="stylesheet" href="%s">', $url);
}

function linkJs($path)
{
    $url = getAsset($path);
    echo sprintf('<script src="%s"></script>', $url);
}

function getAsset($path)
{
    $mtime = filemtime($_SERVER['DOCUMENT_ROOT'] . $path);
    $pathInfo = pathinfo($path);
    $minified = $pathInfo['dirname'] . '/' . $pathInfo['filename'] . '.min.' . $pathInfo['extension'];
    if (IS_PRODUCTION && file_exists($_SERVER['DOCUMENT_ROOT'] . $minified)) {
       $url = $pathInfo['dirname'] . '/' . $pathInfo['filename'] . '.min.' . $pathInfo['extension'];
    } else {
       $url = $pathInfo['dirname'] . '/' . $pathInfo['filename'] . '.' . $pathInfo['extension'];
    }
    $url .= '?' . $mtime;
    return $url;
}


/**
 * @see http://stackoverflow.com/a/6225706/2393499
 */
function compressHtml($buffer) 
{
    $search = array(
        '/\>[^\S ]+/s',  // strip whitespaces after tags, except space
        '/[^\S ]+\</s',  // strip whitespaces before tags, except space
        '/(\s)+/s'       // shorten multiple whitespace sequences
    );

    $replace = array(
        '>',
        '<',
        '\\1'
    );

    $buffer = preg_replace($search, $replace, $buffer);

    return $buffer;
}