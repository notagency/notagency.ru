<?

function linkCss($path)
{
    $url = getAsset($path);
    echo sprintf('<link rel="stylesheet" href="%s">', $url);
}

function linkJs($path)
{
    $url = getAsset($path);
    echo sprintf('<script async src="%s"></script>', $url);
}

function getAsset($path)
{
    if (strpos($path, '://') !== false) {
        return $path;
    }
    $mtime = filemtime($_SERVER['DOCUMENT_ROOT'] . $path);
    return $path . '?' . $mtime;
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