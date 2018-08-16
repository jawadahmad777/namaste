DROP TABLE if exists menu;

CREATE TABLE menu (
    id SERIAL primary key,
   dish  VARCHAR(255),
   price Numeric,
    create_at timestamp default CURRENT_TIMESTAMP
);


INSERT into menu (dish, price)VALUES ('Chicken Kurry', 9 );
INSERT into menu (dish, price)VALUES('Chickpea Curry', 7.50 );
INSERT into menu (dish, price)VALUES('Palak Paneer', 7.50);
INSERT into menu (dish, price)VALUES('Tandoori Chicken', 10.50 );
INSERT into menu (dish, price)VALUES('Rogan Josh', 9 );
INSERT into menu (dish, price)VALUES('Malai Kufta', 7);
INSERT into menu (dish, price)VALUES('Butter Chicken', 11);
INSERT into menu (dish, price)VALUES('Naan', 1.5 );
