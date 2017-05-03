DROP TABLE bites CASCADE;
DROP TABLE humans CASCADE; 
DROP TABLE zombies CASCADE;


CREATE TABLE zombies (
id SERIAL8 PRIMARY KEY, 
name VARCHAR(255),
type VARCHAR(255)
-- has_bitten INT8 REFERENCES humans(id)
);

CREATE TABLE humans (
id SERIAL8 PRIMARY KEY, 
name VARCHAR(255) NOT NULL,
run_speed INT2 
-- bitten_by INT8 REFERENCES zombies(id)
);

CREATE TABLE bites (
  id SERIAL8 PRIMARY KEY,
  victim_id INT8 REFERENCES humans(id),
  zombie_id INT8 REFERENCES zombies(id),
  infected_on DATE not null
);

INSERT INTO zombies (name, type) VALUES ('John', 'Crawler');
INSERT INTO zombies (name, type) VALUES ('Bill Murray', 'Crawler');
INSERT INTO zombies (name, type) VALUES ('Woody', 'Walker');
INSERT INTO zombies (name, type) VALUES ('Beth','Crawler');

INSERT INTO humans (name, run_speed) VALUES ('Joe', 10);
INSERT INTO humans (name, run_speed) VALUES ('Usain Bolt', 100);
INSERT INTO humans (name, run_speed) VALUES ('Donald Trump', 1);
INSERT INTO humans (name, run_speed) VALUES ('The Flash', 999);

INSERT INTO bites (zombie_id, victim_id, infected_on) VALUES (1,3, 'Jan 20, 2017');
INSERT INTO bites (zombie_id, victim_id, infected_on) VALUES (1,2, 'Jan 25, 2017');
INSERT INTO bites (zombie_id, victim_id, infected_on) VALUES (1,4, 'Jan 10, 2017');
INSERT INTO bites (zombie_id, victim_id, infected_on) VALUES (2,1, 'Jan 20, 2017');

SELECT * FROM zombies WHERE name = 'John';
SELECT victim_id FROM bites WHERE zombie_id = 1;
SELECT name FROM humans WHERE id IN (2,3,4);