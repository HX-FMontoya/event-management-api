SET client_encoding TO 'UTF8';

INSERT INTO cities (name) VALUES
('Buenos Aires'),
('Quito'),
('Ciudad de México');

INSERT INTO users (name, email, role, status, profile_image_url) VALUES
('Carlos Pérez', 'carlos.perez@example.com', 'admin', 'active', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnF-fG9GQERKTlnDx8atIGYF2jtqDydMeLhw&s'),
('María García', 'maria.garcia@example.com', 'user', 'active', 'https://hablemos-escritoras-as.s3.us-west-1.amazonaws.com/variants/cxuqm7ccayha0k85mr3zd1eouuk7/836ba6b7667eb9d5cbcf09d906649eecfddabb3e79f19d0398832407f50dee4f'),
('Sofía Rodríguez', 'sofia.rodriguez@example.com', 'organizer', 'inactive', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRozku83vT6VgWEWx4Hfves5id2kW06UVt5pg&s');

INSERT INTO credentials (user_id, password_hash, reset_token, last_login_at) VALUES
(1, '$2y$12$e4nZ6QsF/JFp7HbImbBhTOgnKQx2NRBRbkdTzAf8C3jKL/e4oY7Ni', NULL, '2024-09-10 12:34:56'),
(2, '$2y$12$e4nZ6QsF/JFp7HbImbBhTOgnKQx2NRBRbkdTzAf8C3jKL/e4oY7Ni', 'reset_token_value', '2024-09-11 09:15:32'),
(3, '$2y$12$e4nZ6QsF/JFp7HbImbBhTOgnKQx2NRBRbkdTzAf8C3jKL/e4oY7Ni', NULL, '2024-09-12 14:21:10');

INSERT INTO locations (name, address, city_id, latitude, longitude, image_url) VALUES
('Centro de Convenciones Buenos Aires', 'Avenida 9 de Julio 123', 1, -34.6037, -58.3816, 'https://images.mnstatic.com/64/97/6497e6819831d8310157b14b0a3b3270.jpg'),
('Parque La Carolina', 'Av. De los Shyris y Av. Eloy Alfaro', 2, -0.1807, -78.4678, 'https://www.quitoinforma.gob.ec/wp-content/uploads/2022/11/315974994_440783791565861_727850013211603165_n-1-e1668703928726-800x445.jpg'),
('Auditorio Nacional', 'Paseo de la Reforma 50', 3, 19.4326, -99.1332, 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/CDMX_-_Paseo_de_la_Reforma.jpg/640px-CDMX_-_Paseo_de_la_Reforma.jpg');

INSERT INTO events (created_by, location_id, title, description, start_date, end_date, status, image_url) VALUES
(3, 1, 'Conferencia de Innovación Tecnológica', 'Un evento sobre las últimas tendencias tecnológicas en Latinoamérica.', '2024-10-01 09:00', '2024-10-01 18:00', 'scheduled', 'https://www.linqto.com/wp-content/uploads/2024/02/AI-in-daily-life.webp'),
(2, 2, 'Feria de Emprendimiento Quito 2024', 'Evento de networking para emprendedores y startups de Ecuador.', '2024-11-15 10:00', '2024-11-15 16:00', 'scheduled', 'https://www.quitoinforma.gob.ec/wp-content/uploads/2023/11/Ferias-de-Emprendimiento-1-800x445.jpeg'),
(1, 3, 'Concierto de Rock en CDMX', 'Una noche de rock con las mejores bandas latinoamericanas.', '2024-12-05 20:00', '2024-12-05 23:59', 'scheduled', 'https://elalebrije.net/wp-content/uploads/2023/02/img_5285.jpg?w=873');

INSERT INTO tickets (event_id, user_id, ticket_type, price, purchase_date, status) VALUES
(1, 2, 'General', 150.00, '2024-09-12 10:00', 'paid'),
(2, 3, 'VIP', 250.00, '2024-09-13 11:30', 'reserved'),
(3, 1, 'General', 100.00, '2024-09-14 14:00', 'paid');

INSERT INTO attenders (event_id, user_id, ticket_id, status) VALUES
(1, 2, 1, 'confirmed'),
(2, 3, 2, 'pending'),
(3, 1, 3, 'confirmed');
