-- SELECT l.colour FROM lightsabers l;


-- SELECT j.name, l.colour, l.hilt_metal FROM jedi j
-- INNER JOIN lightsabers l
-- ON j.id = l.owner_id;

-- SELECT j.name, l.colour, l.hilt_metal FROM jedi j
-- LEFT JOIN lightsabers l
-- ON j.id = l.owner_id;

-- SELECT j.name, l.colour, l.hilt_metal FROM jedi j
-- RIGHT JOIN lightsabers l 
-- ON j.id = l.owner_id;

--ZOMBIELAND JOINS


SELECT v.name AS "victim name", z.name AS "zombie name", b.infected_on FROM victims v 
INNER JOIN bitings b
ON v.id = b.victim_id
INNER JOIN zombies z
ON z.id = b.zombie_id;