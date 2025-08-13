-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.7.26 - MySQL Community Server (GPL)
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  12.10.0.7000
-- --------------------------------------------------------

-- 导出 crawler_db 的数据库结构
CREATE DATABASE IF NOT EXISTS `crawler_db` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `crawler_db`;

-- 导出  表 crawler_db.sales 结构
CREATE TABLE IF NOT EXISTS `sales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `production` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `month` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `monthly_sales` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- 正在导出表  crawler_db.sales 的数据：12 rows
INSERT INTO `sales` (`id`, `production`, `month`, `monthly_sales`) VALUES
	(1, '手机', '一月', 120),
	(2, '手机', '二月', 135),
	(3, '手机', '三月', 150),
	(4, '手机', '四月', 32),
	(5, '手机', '五月', 170),
	(6, '手机', '六月', 180),
	(7, '手机', '七月', 15),
	(8, '手机', '八月', 165),
	(9, '手机', '九月', 155),
	(10, '手机', '十月', 145),
	(11, '手机', '十一月', 140),
	(12, '手机', '十二月', 130);

