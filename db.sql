-- phpMyAdmin SQL Dump
-- version 4.3.11.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 07, 2020 at 12:25 PM
-- Server version: 5.5.32-MariaDB
-- PHP Version: 5.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db_mraw`
--

-- --------------------------------------------------------

--
-- Table structure for table `applicants`
--

CREATE TABLE IF NOT EXISTS `applicants` (
  `name` varchar(60) NOT NULL,
  `email` varchar(30) NOT NULL,
  `matric` varchar(20) NOT NULL,
  `photoPath` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `applicants`
--

INSERT INTO `applicants` (`name`, `email`, `matric`, `photoPath`) VALUES
('Fai Ng', 'hwee961103@gmail.com', 'a16ke0232', 'slip-1573097212995.jpeg'),
('ABDULLAH SHARAF SALEH AL-HAMMADI', 'abdu2015sharaf@gmail.com', 'a16ke4017', 'slip-1572921200434.png'),
('Eliya Tazreena Tashbib', 'eliya.tazreena15@gmail.com', 'a16mb4008', 'slip-1572920826667.png'),
('mai mohamed', 'yoshomohamed11@gmail.com', 'a16mb4010 ', 'slip-1572928753484.jpeg'),
('Omar Mohsen Mahmoud Mohamed Mady', 'madyomar98@gmail.com', 'a17ke0322', 'slip-1572917836949.png'),
('ABDELMEGUID MAHMOUD ABDELSAMIE MAHMOUD SHEHAB', 'abdelmagedd@gmail.com', 'a17ke0336', 'slip-1572964842079.png'),
('MANEA MOHAMMED AHMED MUSLEH AL-ASAADI', 'manaaalasaadi98@gmail.com', 'a17ke4003', 'slip-1572956158910.png'),
('Yunes Abdulwahab Lutf Al-Dailami', 'yunes2020thebest@gmail.com', 'a17ke4005', 'slip-1573008295832.png'),
('Aseel Ahmed Mohammed Obaid Basalem', 'aseelbasaleem@yahoo.com', 'a17ke4012', 'slip-1572963839709.jpeg'),
('ALAA FAISAL ALI AL-FAHAD', 'alaaalfahd143@gmail.com', 'a17ke4022', 'slip-1572964199916.jpeg'),
('ASSEM JAMEEL AHMED THABET AL-QERSHI', 'assem.j1998@gmail.com', 'a17ke4023', 'slip-1572879650788.jpeg'),
('Abdulghani Saeed Alamodi ', 'aaa1998sss@gmail.com', 'a17ke4032 ', 'slip-1573124803876.jpeg'),
('Marwan', 'tmarawan11@gmail.com', 'a18cs3016', 'slip-1572880686264.png'),
('OSAMA ABDALLA MOHAMED SULIMAN', 'osama200949@gmail.com', 'a18cs4049', 'slip-1573122102508.jpeg'),
('Bayes Ahmed Shoharto ', 'Shoharto@gmail.com', 'a18cs4051', 'slip-1572882641950.png'),
('Otbah Esam Hubaishi ', 'otbah.hubaishi@gmail.com', 'a18ka4007', 'slip-1573139210827.png'),
('Soyeb Al Saad Adnan', 'solad12344@gmail.com', 'a18ke0326', 'slip-1572889777848.png'),
('Ammar Nasir', 'ammarnasir3498@gmail.com', 'a18ke3004 ', 'slip-1573121188072.jpeg'),
('abdelwahab ahmed', 'abdobahaa96000@gmail.com', 'a18ke4008', 'slip-1572910586719.png'),
('AMMAR ADEL KAID HADWAN ', 'ammar-hadwan@hotmail.com', 'a18ke4013', 'slip-1573121920046.jpeg'),
('yousif ahmed abdelazim mohamed gomaa', 'mrjo.ahmed@gmail.com', 'a18ke4014', 'slip-1572929466532.jpeg'),
('Mohammed khaled Hussein Omar', '7mood201082@gmail.com', 'a18ke4028', 'slip-1572928601147.jpeg'),
('Abdulrahman mohammed ali al-amoudi', 'saeedbenadeeb@gmail.com', 'a18ke4039', 'slip-1572930368307.jpeg'),
('MOHAMMED SADEQ NOMAN MANSOOR', 'Sadeq@graduate.utm.my', 'a18kt4002', 'slip-1573034953009.png'),
('Nasser Hussein Mohammed Saleh BinAskar', 'nasshu71@gmail.com', 'a18mb4005', 'slip-1573033981379.png'),
('BELAL YAHYA HUSSEIN AL-TAM ', 'Eng.belal0055@gmail.com', 'a18mb4007 ', 'slip-1573039095916.jpeg'),
('IBRAHIM ADEL MOHAMMED QAHTAN', 'bemoqaht@hotmail.com', 'a18mb4008', 'slip-1573124676815.jpeg'),
('Loo Zheng Yan', 'zhengyan_00@hotmail.com', 'a19ea0062', 'slip-1573143046410.jpeg'),
('Asem', 'asemobaid20201@gmail.com', 'a19eb4003', 'slip-1573119080257.jpeg'),
('Omar Ahmed Mohammed hamood Alshaikh ', 'omar.utm18@gmail.com', 'a19eb4011 ', 'slip-1573122475039.jpeg'),
('LEE SZE YUAN', 'lsyuan1029@gmail.com', 'a19ec0068', 'slip-1573127210581.jpeg'),
('LOH YEW CHONG', 'lohchong2207@gmail.com', 'a19ec0076', 'slip-1573145151860.png'),
('Muhammad Khairuzzaman bin Kassi.', 'oneandonlymanza@gmail.com', 'a19ec0101', 'slip-1573199719425.png'),
('IMAM DARU RISMI', 'imamdaru8@gmail.com', 'a19ec0241', 'slip-1573120444507.png'),
('Zeyad Mostafa', 'ZeyadMTN@gmail.con', 'a19ec0297', 'slip-1572952204140.jpeg'),
('ABU SAYED KHUDRI ROMAN', 'romanyad16@gmail.com', 'a19ec4002', 'slip-1572949817879.jpeg'),
('Mustafa Naveed', 'mustafanaveed404@gmail.com', 'a19ec4017', 'slip-1572950024218.jpeg'),
('Rafah Ragheb Omar AL-Qirshi ', 'rafahraggy7@gmail.com', 'a19ec4019', 'slip-1573129167867.jpeg'),
('Ahmed Hussin', 'agamh2000@gmail.com', 'a19ee4012', 'slip-1573121820318.jpeg'),
('YOUSEF GAMAL ABDULMAJEED AHMED ', 'yusufjamal1998@gmail.com', 'kig180705', 'slip-1573138862712.png'),
('Sarjhun Mohamed Sahuban', 'sarjhunofficial@gmail.com', 'mbe181063', 'slip-1572961847006.png'),
('Annisa Ariyanti', 'annisaariyanti1@gmail.com', 'mbe181064', 'slip-1572963252323.png'),
('Habibu Aminu Sani', 'habibuaminu98@gmail.com', 'mcs172025', 'slip-1572907777101.jpeg'),
('Mahmood Umar', 'umarmahmood@graduate.utm.my', 'mcs182017', 'slip-1573095436963.png'),
('Salihu Abdullahi Abdulkadir', 'salihubinabdullahi@gmail.com', 'mcs182018', 'slip-1573126456639.jpeg'),
('Umar Sani', 'umarsani@graduate.utm.my', 'mcs182027', 'slip-1573110658875.jpeg'),
('HAMEED MOHIDEEN ABDUL KADIR KALVATHI', 'mkalvathi@gmail.com', 'mkm171040', 'slip-1573134793313.jpeg'),
('ASHIK AHAMAD HANNAN LIYAKATH ALI ', 'ashikahamad9027@gmail.com', 'mkm171063', 'slip-1573134669512.jpeg'),
('Fadhilah Qalbi Annisa', 'qfadhilah@gmail.com', 'mmb191002', 'slip-1573052532426.jpeg'),
('Abubakar Usman ', 'usmanabubakar67@gmail.com', 'msc172021 ', 'slip-1572944100485.png'),
('Ali Shariff Kabara', 'alishariff080@gmail.com', 'pha173018', 'slip-1572961139768.png'),
('Rafat Riyadh Noormohammed Abdul-razzaq', 'rafatriyadh@gmail.com', 'pkp1600021', 'slip-1572965509505.jpeg'),
('Usman Galadima ', 'usman.galadima@ssu.edu.ng', 'ppp163035', 'slip-1572959324694.jpeg'),
('IDRIS ABDULLAHI MOHAMMED', 'idrisbgd@gmail.com', 'ppp173066', 'slip-1573176297220.png'),
('Muhammad Nasiru Hassan', 'nasiruhassan@graduate.utm.my', 'ppp173093', 'slip-1572933247100.jpeg'),
('Shirka Kassam Jwasshaka', 'cassak4real@yahoo.ca', 'ppp173117', 'slip-1572885500753.jpeg'),
('Sirajo Muhammad Gulubba ', 'gulubba1@gmail.com', 'ppp173124 ', 'slip-1572962793878.jpeg'),
('Faruku Aliyu', 'farukualiyu@graduate.utm.my', 'ppp183073', 'slip-1572886032764.png'),
('Faruku Aliyu', 'farukualiyu@graduate.utm.my', 'ppp183073 .', 'slip-1572885762704.png'),
('Asif Iqbal Rishad', 'shahrishad143@gmail.com', 't18cs3017', 'slip-1573046638251.jpeg'),
('Amgad Mohammed Abdulmajid ', 'amgad.utm@gmail.com', 't18km0012', 'slip-1573026589365.png'),
('HUSAM ABDULRAZZAQ ABDULAZIZ AHMED ', 'husamutm@gmail.com', 't18km0021 ', 'slip-1573034872337.jpeg'),
('Osama Abdelhameed Shahata Abdelnasser ', 'osamaabdelhameed41@gmail.com', 't19ec0065 ', 'slip-1573128948859.jpeg'),
('Najmus Sakib Razin ', 'nsrazin2357@gmail.com', 't19ke5018', 'slip-1573121046895.jpeg'),
('Abdullah Omar Abdullah Al-amoudi', 'alamoudi88a@gmail.com', 't1cs0009', 'slip-1573026225381.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE IF NOT EXISTS `applications` (
  `appID` int(15) NOT NULL,
  `institutionName` varchar(20) NOT NULL,
  `applicantNationality` varchar(20) NOT NULL,
  `applicantGender` varchar(10) NOT NULL,
  `applicantDOB` varchar(100) NOT NULL,
  `applicantPOB` varchar(50) NOT NULL,
  `passportNumber` varchar(20) NOT NULL,
  `courseName` varchar(50) NOT NULL,
  `yesrOfStudy` int(5) NOT NULL,
  `status` varchar(15) NOT NULL DEFAULT 'Pending',
  `dateApplied` varchar(100) NOT NULL,
  `totalAmount` float NOT NULL DEFAULT '0',
  `fullName` varchar(50) NOT NULL,
  `userID` int(11) NOT NULL,
  `profLink` varchar(50) NOT NULL,
  `passLink` varchar(50) NOT NULL,
  `attendLink` varchar(50) NOT NULL,
  `scoreLink` varchar(50) NOT NULL,
  `payLink` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=1034 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `applications`
--

INSERT INTO `applications` (`appID`, `institutionName`, `applicantNationality`, `applicantGender`, `applicantDOB`, `applicantPOB`, `passportNumber`, `courseName`, `yesrOfStudy`, `status`, `dateApplied`, `totalAmount`, `fullName`, `userID`, `profLink`, `passLink`, `attendLink`, `scoreLink`, `payLink`) VALUES
(1000, 'UTM', 'Libya', 'Male', '1997-01-10', 'England', 'CS28322', 'Network and Security', 2, 'Completed', '2019-04-02', 500, 'Emad Alhaderi', 4017, 'profile.jpg', 'passport.jpg', 'attendence.jpg', 'score.jpg', 'payment.png'),
(1001, 'UTeM', 'Yemen', 'Male', '1996-01-01', 'Jizan', '068255', 'Software Engineering ', 2, 'Completed', '2019-02-02', 3200, 'Wardan Rashed', 4027, '', '', '', '', ''),
(1033, 'aasd', 'Oman', 'Male', '2012-January-1', 'Johor Bahru', 'war232', 'Soft', 3, 'Completed', '05-16-2019', 9000, 'wardamnm wardamnm ', 4027, 'images.jpg', 'psa.jpg', 'checklist.jpg', 'add-endpoint.png', 'add-endpoint.png');

-- --------------------------------------------------------

--
-- Table structure for table `userlog`
--

CREATE TABLE IF NOT EXISTS `userlog` (
  `logID` int(10) NOT NULL,
  `userID` int(10) NOT NULL,
  `type` varchar(10) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userlog`
--

INSERT INTO `userlog` (`logID`, `userID`, `type`, `username`, `password`) VALUES
(1, 4017, 'Student', 'emad', '111'),
(2, 4027, 'Student', 'wardan', '222'),
(3, 4008, 'Staff', 'redone', '123'),
(4, 4009, 'Staff', 'dhivya', '321');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `userID` int(10) NOT NULL,
  `type` varchar(10) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `imgLink` varchar(100) NOT NULL,
  `emailAddress` varchar(30) NOT NULL,
  `phoneNumber` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userID`, `type`, `firstName`, `lastName`, `imgLink`, `emailAddress`, `phoneNumber`) VALUES
(4008, 'Staff', 'Redhwan', 'Altal', '4008.jpg', 'redhwanaltal@gmail.com', 1876383),
(4009, 'Staff', 'Dhivya', 'Dhivya', '4009.jpg', 'dhivya@gmail.com', 1283744454),
(4017, 'Student', 'Emad', 'Alhaderi', '4017.jpg', 'emadAlhadre1@gmail.com', 9087675),
(4027, 'Student', 'Wardan', 'Rashed', '4027.jpg', 'wardan1@gmail.com', 1100234);

-- --------------------------------------------------------

--
-- Table structure for table `users_applications`
--

CREATE TABLE IF NOT EXISTS `users_applications` (
  `userID` int(10) NOT NULL,
  `appID` int(15) NOT NULL,
  `type` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users_applications`
--

INSERT INTO `users_applications` (`userID`, `appID`, `type`) VALUES
(4017, 1000, 'Student'),
(4027, 1001, 'Student'),
(4027, 1033, 'Student');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applicants`
--
ALTER TABLE `applicants`
  ADD PRIMARY KEY (`matric`);

--
-- Indexes for table `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`appID`);

--
-- Indexes for table `userlog`
--
ALTER TABLE `userlog`
  ADD PRIMARY KEY (`logID`), ADD KEY `userID_3` (`userID`,`type`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userID`,`type`);

--
-- Indexes for table `users_applications`
--
ALTER TABLE `users_applications`
  ADD PRIMARY KEY (`userID`,`appID`,`type`), ADD KEY `fk_userapp` (`userID`,`type`), ADD KEY `app_ref` (`appID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applications`
--
ALTER TABLE `applications`
  MODIFY `appID` int(15) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=1034;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `userlog`
--
ALTER TABLE `userlog`
ADD CONSTRAINT `fk` FOREIGN KEY (`userID`, `type`) REFERENCES `users` (`userID`, `type`);

--
-- Constraints for table `users_applications`
--
ALTER TABLE `users_applications`
ADD CONSTRAINT `app_ref` FOREIGN KEY (`appID`) REFERENCES `applications` (`appID`),
ADD CONSTRAINT `fk_userapp` FOREIGN KEY (`userID`, `type`) REFERENCES `users` (`userID`, `type`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
