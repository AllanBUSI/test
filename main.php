<?php 
function creerBinomes($liste) {
    $binomes = array();
    $taille = count($liste);

    for ($i = $taille - 1; $i > 0; $i--) {
        $j = rand(0, $i);
        $temp = $liste[$i];
        $liste[$i] = $liste[$j];
        $liste[$j] = $temp;
    }

    for ($i = 0; $i < $taille - 1; $i += 2) {
        $binomes[] = array($liste[$i], $liste[$i+1]);
    }

    if ($taille % 2 == 1) {
        array_push($binomes[count($binomes) - 1], $liste[$taille - 1]);
    }

    return $binomes;
}

$liste = array(1, 2, 3, 4, 5, 6, 7);
$binomes = creerBinomes($liste);
print_r($binomes); 
