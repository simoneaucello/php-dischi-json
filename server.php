<?php

$json_string = file_get_contents('dischi.json');


$disk_list = json_decode($json_string, true);


// verifico che esista in POST la variabile newSongTitle
// se esiste aggiungo un nuovo brano alla lista e poi aggiorno il file dischi.json con la lista decodificata in testo

if (isset($_POST['newSongTitle'])) {
  $new_song = [
    'title' => $_POST['newSongTitle'],
    'author' => $_POST['newSongAuthor'],
    'year' => $_POST['newSongYear'],
    'poster' => $_POST['newSongPoster'],
    'genre' => $_POST['newSongGenre'],
  ];
  $disk_list[] = $new_song;
  file_put_contents('dischi.json', json_encode($disk_list));
}

// se mi arriva in POST songToDelete elimino il post all'indice e aggiorno i dati
if (isset($_POST['songToDelete'])) {
  $indexToDelete = $_POST['indexToDelete'];
  array_splice($disk_list, $indexToDelete, 1);
  file_put_contents('dischi.json', json_encode($disk_list));
}

header('Content-Type: application/json');

echo json_encode($disk_list);

// var_dump($json_string);
