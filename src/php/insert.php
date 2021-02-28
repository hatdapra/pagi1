<?PHP
  require 'connect.php';
  /* require 'makePOSTVariables.php';
  require 'makeGETVariables.php'; */

  $postdata = file_get_contents("php://input");
  
  $t = json_decode($postdata);
  /* echo "<pre>";
  print_r($t);
  echo "</pre>";

  echo 'flag: ' . $t->flag . '<br>';
  echo 'flag: ' . $t->data->name . '<br>';
 */

  $t->data->position = 100;

  echo json_encode($t);

  /* $params = json_decode($jsonstr);

  switch ($params->flag) {
    case 'periodic':
      $sqlStr = "INSERT INTO `elements` (`name`, `weight`, `symbol`) VALUES ("
        . "'" . $params->data->name . "', "
        . "'" . $params->data->weight . "', "
        . "'" . $params->data->symbol . "')";

      $conn->query($sqlStr);

      $r['res'] = 'ok';

      echo json_encode($r);
      break;
    case 'city':
      $sqlStr = "INSERT INTO `city` (`Name`, `CountryCode`, `District`, `Population`) VALUES ("
        . "'" . $params->data->Name . "', "
        . "'" . $params->data->CountryCode . "', "
        . "'" . $params->data->District . "', "
        . "'" . $params->data->Population . "')";

      $conn->query($sqlStr);
      break;
    default:
      # code...
      break;
  } */

  $conn = null;
