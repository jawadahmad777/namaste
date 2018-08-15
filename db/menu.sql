DROP TABLE if exists menu;

CREATE TABLE menu (
    id SERIAL primary key,
    name VARCHAR(255) not null,
   dish  VARCHAR(255),
    create_at timestamp default CURRENT_TIMESTAMP
);
