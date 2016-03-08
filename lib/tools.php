<?
function compileLess($inputFile, $outputFile)
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
    $less->setFormatter('compressed');
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