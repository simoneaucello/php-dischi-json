<?php

$json_string = file_get_contents('dischi.json');


$disks = json_decode($json_string);


/*

logica di modifica cancellazione dei dati 

*/

header('Content-Type: application/json');

echo json_encode($disks);

var_dump($json_string);
