<?PHP
  require 'connect.php';
  
  $sqlStr = "SELECT * FROM world.city";

  $res = $conn->query($sqlStr);
  $lista = $res->fetchAll(PDO::FETCH_ASSOC);

  echo json_encode($lista);

  $conn = null;
