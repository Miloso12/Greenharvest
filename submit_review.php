<?php
// Database connection
$conn = new mysqli("localhost", "root", "", "reviews_db");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$rating = $_POST['rating'];
$message = $_POST['message'];

// Handle Image Upload
$target_dir = "uploads/";
$image_name = basename($_FILES["image"]["name"]);
$target_file = $target_dir . $image_name;
move_uploaded_file($_FILES["image"]["tmp_name"], $target_file);

// Insert into database
$sql = "INSERT INTO reviews (name, rating, message, image) VALUES ('$name', '$rating', '$message', '$target_file')";

if ($conn->query($sql) === TRUE) {
    echo "Review submitted successfully!";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>