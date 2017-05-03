DROP TABLE IF EXISTS bounties;


CREATE TABLE bounties(
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(255) not null,
  bounty_value INT2 not null,
  species VARCHAR(255) not null,
  cashed_in BOOLEAN not null
);

