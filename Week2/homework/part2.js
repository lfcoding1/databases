'use strict';

let mysql = require('mysql');

let connection = mysql.createConnection({
    host: "localhost",
    user: "hyfuser",
    password: "hyfuser",
    database: "new_world",
});


let userInput = console.log('More than 10 entries');
let allowedInput = console.log('entry updated')
let query = connection.query("CREATE TRIGGER language AFTER INSERT ON countrylanguage FOR EACH  ROW BEGIN IF NEW.language (COUNT >= 10) THEN SET @userInput = ?; ELSE SET @allowedInput = ?; END IF; INSERT INTO countrylanguage (countrycode, language) VALUES ('AGO', 'ARMENIAN')", [userInput, allowedInput], function (err, results){
  if (err) throw err;
  console.log(results);
});  

//correct answer:
delimiter;;
create procedure new_world.language_add (in_name varchar(52), in lang varchar(30), inoffical enum(‘T’, ‘F’), in _pct float(4,1))
begin
declare v_country_code char(3);
declare v_new_lang_count int;
select code into v_country_code from country where name = in_name;
insert into countrylanguage( countrycode, language, isofficial, percentage)
values
(v_country_code, in_lang, in_official, in_pct);
select(language) into v_new_lang_count
from countrylanguage where countrycode = v_country_code;
if v_new_lang_count >= 10
then
select concat(‘Warning: country’, in_name, ‘now has’, v_new_lang_count, ‘languages’);
else
select concat(‘Succeded: country’, in_name, ‘now has’, v_new_lang_count, ‘languages’);
end if;
end;;

