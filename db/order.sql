DROP TABLE if exists order;

CREATE TABLE order (
    id SERIAL primary key,
    name VARCHAR(255) not null,
    email VARCHAR(255) NOT NULL UNIQUE,
    hashed_password VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    create_at timestamp default CURRENT_TIMESTAMP
);
