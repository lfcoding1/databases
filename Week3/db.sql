CREATE DATABASE IF NOT EXISTS 'todo'

CREATE TABLE IF NOT EXISTS `tasks` (
  `id` int(11) NOT NULL,
  `task` varchar(200) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
 
ALTER TABLE `tasks` ADD PRIMARY KEY (`id`);
ALTER TABLE `tasks` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;



/*same data*/
INSERT INTO `tasks` (`id`, `task`,`created_at`) VALUES
(1, 'Shopping','2016-04-10 23:50:40'),
(2, 'Homework','2016-04-10 23:50:40'),
(3, 'Cleaning', '2016-04-10 23:50:40'),
(4, 'Sleeping', '2016-04-10 23:50:40'),
(5, 'Vacuuming','2016-04-10 23:50:50');

