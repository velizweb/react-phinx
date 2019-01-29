<?php
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
    header("Access-Control-Allow-Headers: *");
    header('Content-Type: text/html; charset=utf-8');
    header('P3P: CP="IDC DSP COR CURa ADMa OUR IND PHY ONL COM STA"');
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);

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

    $sql = "INSERT INTO vehiculos (brand, anio, madein, maxspeed, statu, descrip, color, quantity_doors)
    VALUES ('{$_POST['brand']}', {$_POST['year']}, '{$_POST['madein']}', {$_POST['maxspeed']}, {$_POST['state']}, '{$_POST['description']}', '{$_POST['colors']}', {$_POST['quantity_doors']})";

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

        $data = ['status' => 201, 'cars' => $cars];
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