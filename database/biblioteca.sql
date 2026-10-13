CREATE DATABASE IF NOT EXISTS biblioteca CHARACTER SET utf8mb4;
USE biblioteca;

CREATE TABLE IF NOT EXISTS livros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  autor VARCHAR(255) NOT NULL,
  isbn VARCHAR(50) NOT NULL UNIQUE
);  

INSERT INTO livros (titulo, autor, isbn) VALUES
('Dom Casmurro', 'Machado de Assis', '9788594318602'),
('O Alquimista', 'Paulo Coelho', '9788542211603'),
('Vidas Secas', 'Graciliano Ramos', '9788501014528');
