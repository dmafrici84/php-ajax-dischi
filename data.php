<?php
  header("Content-Type: application/json");
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
  header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

  include __DIR__ . "./partials/var.php";

  // var_dump ($data);
  
  echo json_encode ($data);
 ?>
