<?php

    function conexionDB(){
        $host = "host=localhost";
        $port = "port=5432";
        $dbName = "dbName=orion-web";
        $user = "user=postgres";
        $password = "password=1234";
        
        $bd = pg_connect("$host $port $dbName $user $password");

        if(!$bd){
            echo "ERROR: ".pg_last_error;
        }else{
            echo "<h3>Conexion exitosa de PHP-PosrtgreSQL</h3>";
            return $bd;
        }
    }

?>