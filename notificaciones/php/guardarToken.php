<?php
    include "./conexion.php";

    $token = $_POST['token'];
    $av="select * from suscripciones
    where token='$token'";
    $avi=sqlsrv_query($cnx,$av);
    $valida=sqlsrv_fetch_array($avi);

if(isset($valida)){
    echo '<script>alert("El token ya existe en la base de datos")</script>';
    echo '<meta http-equiv="refresh" content="0,url=index.html">';
} else{
    $id_usuario=1;
    $us="select * from suscripciones 
    where id_user='$id_usuario'";
    $usr=sqlsrv_query($cnx,$us);
    $vaidaUsr=sqlsrv_fetch_array($usr);
    
    if(isset($vaidaUsr)){
        $token = "update suscripciones set token='$token' where id_user='$id_usuario'";
        $tokenResult = sqlsrv_query($cnx, $token);
        echo '<script>alert("Se realizo el update")</script>';
        echo '<meta http-equiv="refresh" content="0,url=index.html">';
    } else{
        $token = "insert into suscripciones (token, id_user) values('$token',$id_usuario)";
        $tokenResult = sqlsrv_query($cnx, $token);
        echo '<script>alert("Se realizo el isert")</script>';
        echo '<meta http-equiv="refresh" content="0,url=index.html">';
    }
}
?>