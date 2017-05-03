DROP TABLE lightsabers;
DROP TABLE jedi;



CREATE TABLE jedi (
  id SERIAL8 PRIMARY KEY,
  name VARCHAR(255),
  age INT2,
  darkside BOOLEAN
);

CREATE TABLE lightsabers (
  id SERIAL8 PRIMARY KEY,
  owner_id INT8 REFERENCES jedi(id), 
  hilt_metal VARCHAR(255) NOT NULL,
  colour VARCHAR(255) NOT NULL
);



INSERT INTO jedi (name, age, darkside) VALUES ('Luke', 21, false);

INSERT INTO jedi (name, age, darkside) VALUES ('Vader', 100, true);

INSERT INTO jedi (name, age) VALUES ('Obi-Wan', 33);

UPDATE jedi SET darkside = true;

UPDATE jedi SET darkside = false WHERE name = 'Luke' OR name = 'Obi Wan';

INSERT INTO jedi (name, age, darkside) VALUES ('Anakin', 22, false);

UPDATE jedi SET age = 23 WHERE name = 'Anakin';

UPDATE jedi SET darkside = true WHERE name = 'Anakin';

-- DELETE FROM jedi WHERE name = 'Luke';

INSERT INTO jedi (name, age, darkside) VALUES ('Obi-Wan', 33, false);

UPDATE jedi SET darkside = false WHERE name = 'Obi-Wan';

DELETE FROM jedi WHERE id = 5;





INSERT INTO lightsabers (owner_id, hilt_metal, colour) VALUES (2, 'palladium', 'green');
INSERT INTO lightsabers (owner_id, hilt_metal, colour) VALUES (1, 'Silver', 'blue');
INSERT INTO lightsabers (owner_id, hilt_metal, colour) VALUES (3, 'palladium', 'blue');

SELECT * FROM lightsabers;
SELECT * FROM jedi;

