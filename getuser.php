<!DOCTYPE html>
<html>
<head>
<style>
table {
    width: 100%;
    border-collapse: collapse;
}

table, td, th {
    border: 1px solid black;
    padding: 5px;
}

th {text-align: left;}
</style>
</head>
<body>

<?php
$q = intval($_GET['q']);

$con = mysqli_connect('localhost','zainuddm','CS21cs21','zainuddm');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax_demo");
$sql="SELECT * FROM user WHERE id = '".$q."'";
$result = mysqli_query($con,$sql);

echo "<table>
<tr>
<th>Games</th>
<th>Publisher</th>
<th>Year</th>
<th>Country</th>
<th>Rating</th>
</tr>";

while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['Games'] . "</td>";
    echo "<td>" . $row['Publisher'] . "</td>";
    echo "<td>" . $row['Year'] . "</td>";
    echo "<td>" . $row['Country'] . "</td>";
    echo "<td>" . $row['Rating'] . "</td>";
    echo "</tr>";
}
echo "</table>";
mysqli_close($con);
?>
</body>
</html>
