<?php

$host = 'localhost';
$usuario = 'root'; 
$senha = '';       
$banco = 'ellos_db';

$conn = new mysqli($host, $usuario, $senha, $banco);

if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $mensagem = $_POST['mensagem'];

    $sql = "INSERT INTO leads (nome, email, telefone, mensagem) VALUES (?, ?, ?, ?)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $nome, $email, $telefone, $mensagem);
    
    if ($stmt->execute()) {
        echo "<script>
                alert('Sucesso! Seus dados foram gravados no Banco de Dados.');
                window.location.href = 'index.html';
              </script>";
    } else {
        echo "<script>
                alert('Erro ao enviar dados. Tente novamente.');
                window.location.href = 'index.html';
              </script>";
    }
    
    $stmt->close();
}
$conn->close();
?>