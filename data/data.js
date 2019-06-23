// Applicant table data:

const applicantData = [
    ['A001', 'Raj', 'raj@abc.com', '2nd Street,Hebbal', 'Mysore'],
    ['A002', 'Vadi', 'vadi@abc.com', '4th Street,Vijayangar', 'Bangalore'],
    ['A003', 'Sam', 'sam_sundar@abc.com', '5th Street,Edappalli', 'Cochin'],
    ['A004', 'Suraj', 'suraj@abc.com', '1st Main,Rabindra Nagar', 'Kolkata)'],
    ['A005', 'Lakshmi', 'lakshmi@abc.com', '2nd Main,Allipuram', 'Vizag'],
    ['A006', 'Sandra', 'sandra@abc.com', '3rd Corss,RS Puram', 'Coimbatore'],
    ['A007', 'Vivek', 'vivek_kumar@abc.com', '5th Main,Coimbed', 'Chennai'],
    ['A008', 'Vikas', 'vikas@abc.com', '2nd Main,Jayalakhmipuram', 'Bangalore'],
    ['A009', 'Bipin', 'bipin@abc.com', '2nd Cross,Siddarth Nagar', 'Mysore'],
    ['A010', 'Gopi', 'gopi@abc.com', '2nd Street,Green Market', 'Delhi'],
    ['A011', 'Sandy', 'sandy@abc.com', '9th Cross,Seshadripuram', 'Bangalore'],
    ['A012', 'Lilly', 'lilly@abc.com', '9th Main,Banjara Hills', 'Hyderabad'],
    ['A013', 'Rose', 'rose@abc.com', '11th Cross,Kadavanthara', 'Cochin'],
    ['A014', 'Megha', 'megha@abc.com', '10th Lane,Vashi', 'Mumbai'],
    ['A015', 'Henry', 'henry@abc.com', '2nd street,Silk Board', 'Bangalore'],
    ['A016', 'Joel', 'jeol@abc.com', '4th street,Vijayanagar', 'Mysore']
];

// Branch table data:
const branchData = [
    ['B1', 'Information Science'],
    ['B2', 'Computer Science'],
    ['B3', 'Electronics'],
    ['B4', 'Electrical'],
    ['B5', 'Mechanical'],
    ['B6', 'Civil']
];

// Course table data:
const courseData = [
    ['C001', 'Programming Fundamentals', 1, 'B1', 'N', 20, 10, 10, 60],
    ['C002', 'Data Structures', 2, 'B1', 'N', 20, 10, 10, 60],
    ['C003', 'Basics of RDBMS', 2, 'B1', 'N', 20, 10, 10, 60],
    ['C004', 'System Software', 3, 'B1', 'N', 20, 10, 10, 60],
    ['C005', 'Computer Hardware', 3, 'B2', 'N', 20, 10, 10, 60],
    ['C006', 'File Structures', 4, 'B1', 'N', 60, 10, 10, 20],
    ['C007', 'Network Computing', 4, 'B3', 'N', 20, 10, 10, 60],
    ['C008', 'Data Warehousing', 5, 'B1', 'Y', 20, 10, 10, 60],
    ['C010', 'Analysis of Algorithms', 5, 'B1', 'N', 20, 10, 10, 60],
    ['C009', 'Neural Networks', 6, 'B2', 'Y', null, 10, 10, 80]
];

// Student table data:
const studentData = [
    ['S001', 'A001', 2, 'raj', 'tiger'],
    ['S002', 'A003', 3, 'sam', 'tiger'],
    ['S003', 'A004', 5, 'suraj', 'tiger'],
    ['S004', 'A006', 3, 'sandra', 'tiger'],
    ['S005', 'A007', 4, 'vivek', 'tiger'],
    ['S006', 'A008', 7, 'vikas', 'tiger'],
    ['S007', 'A009', 8, 'bipin', 'tiger'],
    ['S008', 'A010', 3, 'gopi', 'tiger'],
    ['S009', 'A012', 1, 'lilly', 'tiger'],
    ['S010', 'A013', 4, 'rose', 'tiger'],
    ['S011', 'A014', 7, 'megha', 'tiger'],
    ['S012', 'A015', 6, 'henry', 'tiger'],
    ['S013', 'A016', 2, 'jeol', 'tiger']
];

// Registration table data:
const registrationData = [
    ['S001', 'C001', '05-JUN-08', 20, 5, 5, 50, 'A'],
    ['S002', 'C001', '24-AUG-08', 15, 10, 8, 32, 'B'],
    ['S003', 'C002', '15-MAR-08', 20, 9, 9, 55, 'A'],
    ['S004', 'C003', '13-AUG-08', 20, 10, 10, 60, 'A'],
    ['S005', 'C004', '08-SEP-08', 15, 10, 10, 50, 'A'],
    ['S006', 'C005', '22-NOV-08', 10, 5, 5, 30, 'D'],
    ['S007', 'C006', '06-FEB-08', 15, 5, 5, 45, 'B'],
    ['S010', 'C004', '08-SEP-08', 20, 10, 10, 50, 'A'],
    ['S009', 'C003', '29-DEC-08', 18, 8, 10, 46, 'A'],
    ['S011', 'C007', '13-SEP-08', 20, 7, 8, 55, 'A'],
    ['S012', 'C008', '16-JAN-08', 35, 5, 5, 20, 'B'],
    ['S013', 'C006', '06-FEB-08', 47, 8, 7, 18, 'A']
];

// Department table data: 
const departmentData = [
    [10, 'Information Science', 'I105'],
    [20, 'Computer Science', 'I102'],
    [30, 'Electronics', 'I104'],
    [40, 'Electrical', 'I107'],
    [50, 'Mechanical', 'I109'],
    [60, 'Civil', 'I106']
];

// Instructor table data:
const instructorData = [
    ['I101', 'Bob Hockins', '12-Jan-2000', 10],
    ['I102', 'Suguru Zikovich', '21-Feb-2001', 20],
    ['I103', 'Ritivoi', '13-Jan-2003', 10],
    ['I104', 'David Field', '30-Mar-1999', 30],
    ['I105', 'Emillie Norton', '04-Jun-1998', 30],
    ['I106', 'Ron Hardman', '01-Jan-2005', 60],
    ['I107', 'Scott Urman', '08-Apr-2008', 40],
    ['I108', 'Daisy Samson', '09-Dec-2004', 50],
    ['I109', 'Ford Bravo', '10-May-1998', 50],
    ['I110', 'Rebecca Brown', '02-Jan-2009', 10],
    ['I111', 'Antario', '23-Jun-2004', 10],
    ['I112', 'Samuel', '25-Jan-2002', 60],
    ['I113', 'Justin', '14-Apr-2003', 40],
    ['I114', 'Nissar', '16-Mar-2009', 10],
    ['I115', 'Avinash Naren', '27-May-2007', 20],
    ['I116', 'Micheal Rose', '05-Jan-2008', 40]
];

// Courseallocation table data:
const courseAllocationData = [
    [1001, 'C001', 'I101', '01-JUN-11', '04-JUN-11'],
    [1002, 'C002', 'I102', '07-MAR-11', '14-MAR-11'],
    [1003, 'C001', 'I103', '20-AUG-11', '23-AUG-11'],
    [1004, 'C001', 'I101', '01-SEP-11', '04-SEP-11'],
    [1005, 'C003', 'I104', '10-AUG-11', '12-AUG-11'],
    [1006, 'C004', 'I103', '04-SEP-11', '07-SEP-11'],
    [1007, 'C003', 'I104', '26-AUG-11', '28-AUG-11'],
    [1008, 'C002', 'I107', '21-JUL-11', '27-JUL-11'],
    [1009, 'C005', 'I105', '12-NOV-11', '21-NOV-11'],
    [1010, 'C006', 'I106', '01-FEB-11', '05-FEB-11'],
    [1011, 'C007', 'I108', '07-SEP-11', '12-SEP-11'],
    [1012, 'C005', 'I109', '12-NOV-11', '21-NOV-11'],
    [1013, 'C008', 'I110', '15-JAN-11', '15-JAN-11']
];

// Attendace table data:
const attendanceData = [
    ['S001', 'C001', 4, 3],
    ['S002', 'C001', 4, 4],
    ['S003', 'C002', 8, 5],
    ['S004', 'C003', 3, 3],
    ['S005', 'C004', 4, 2],
    ['S006', 'C005', 10, 9],
    ['S007', 'C006', 5, 5],
    ['S010', 'C004', 4, 4],
    ['S009', 'C003', 3, 1],
    ['S011', 'C007', 6, 5],
    ['S012', 'C008', 1, 1]
];

// Hostel table data:
const hostelData = [
    ['Violet', 101, 'S001', 3000],
    ['Violet', 201, 'S003', 4000],
    ['Violet', 300, 'S004', 5000],
    ['Indigo', 100, 'S002', 3000],
    ['Indigo', 201, 'S005', 4000],
    ['Indigo', 300, 'S006', 5000],
    ['Blue', 100, 'S007', 3000],
    ['Blue', 201, 'S008', 4000],
    ['Blue', 300, 'S009', 5000]
];

module.exports = {
    applicantData,
    branchData,
    courseData,
    studentData,
    registrationData,
    departmentData,
    instructorData,
    courseAllocationData,
    attendanceData,
    hostelData
};