CREATE TABLE account_requests (
idRequest INT NOT NULL AUTO_INCREMENT,
netid VARCHAR(7) NOT NULL,
password VARCHAR(15) NOT NULL,
firstName VARCHAR(15) NOT NULL,
lastName VARCHAR(15) NOT NULL,
PRIMARY KEY (idRequest)
);