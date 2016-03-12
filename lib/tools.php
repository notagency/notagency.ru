<?
function compileLess($inputFile, $outputFile, $minify=true)
{
    $cacheFile = $inputFile . '.cache';
    if (file_exists($cacheFile))
    {
        $cache = unserialize(file_get_contents($cacheFile));
    }
    else
    {
        $cache = $inputFile;
    }

    $less = new lessc;
    if ($minify)
    {
        $less->setFormatter('compressed');
    }
    $newCache = $less->cachedCompile($cache);

    if (!is_array($cache) || $newCache['updated'] > $cache['updated'])
    {
        if(!file_put_contents($cacheFile, serialize($newCache)))
        {
            if(strlen($newCache['compiled']) > 0)
            {
                echo 'Ошибка обновления файла ' . $cacheFile . ', возможно установлены некорректные права на запись.';
            }
        }
        if(!file_put_contents($outputFile, $newCache['compiled']))
        {
            if(strlen($newCache['compiled']) > 0)
            {
                echo 'Ошибка обновления файла ' . $outputFile . ', возможно установлены некорректные права на запись.';
            }
        }
    }
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