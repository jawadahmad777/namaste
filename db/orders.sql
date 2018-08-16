DROP TABLE if exists orders;

CREATE TABLE orders (
    id SERIAL primary key,
    name VARCHAR(255) not null,
    menu_id integer references menu(id),
    email VARCHAR(255) NOT NULL,

    address VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    create_at timestamp default CURRENT_TIMESTAMP
);
