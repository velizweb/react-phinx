<?php
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
    header("Access-Control-Allow-Headers: *");
    header('Content-Type: text/html; charset=utf-8');
    header('P3P: CP="IDC DSP COR CURa ADMa OUR IND PHY ONL COM STA"');  
    
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "phinx";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 

    $sql = $_GET['opt'] == 0 ? "UPDATE `vehiculos` SET `statu` = 0 WHERE `vehiculos`.`id` = {$_GET['id']}" : "UPDATE `vehiculos` SET `statu` = 1 WHERE `vehiculos`.`id` = {$_GET['id']}";
    $select = "SELECT * FROM vehiculos";

    $data = '';
    $cars = array();
    $i = 0;
    if ($conn->query($sql) === TRUE) {
        $result = $conn->query($select);
        while($row = mysqli_fetch_array($result))
        {
            $cars[$i] = $row;
            $i++;
        }

        $data = ['status' => 200, 'cars' => $cars];
    } else {
        $result = $conn->query($select);
        while($row = mysqli_fetch_array($result))
        {
            $cars[$i] = $row;
            $i++;
        }
        $data = ['status' => 404, 'cars' => $cars];
    }

    $conn->close();
    
    echo json_encode($data);