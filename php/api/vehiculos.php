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

    $select = "SELECT * FROM vehiculos";
    $result = $conn->query($select);

    $data = '';
    $cars = array();
    $i = 0;

    if ($result->num_rows >= 0) {
        while($row = mysqli_fetch_array($result))
        {
            $cars[$i] = $row;
            $i++;
        }
        $data = ['status' => 201, 'cars' => $cars];
    } else {
        $data = ['status' => 404];
    }

    $conn->close();
    
    echo json_encode($data);