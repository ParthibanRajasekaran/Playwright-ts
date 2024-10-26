import { test } from '@playwright/test';
import { csvToStringArray, printCsvRecords, accessCsvData, updateComments, updateCommentsConditionally, updateValueWithoutComma } from '../../data/datautil';

// Define the path to the CSV file used in the tests
const filePath = 'data/test-data.csv';

test.describe("CSV data manipulation tests", () => {

// Test conversion of CSV data to JSON
// csvToJson(filePath).forEach((data, index) => {
//   test(`Test JSON conversion - Row ${index + 1}`, async () => {
//     // Log the details from the converted JSON object
//     console.log(`Running test for ID: ${data.id}`);
//     console.log(`Running test for Username: ${data.username}`);
//     console.log(`Running test for Password: ${data.password}`);
//   });
// });

// Test reading a CSV file and outputting it as a string array
test("Test to read CSV and output as string array", async () => {
  const stringArray = csvToStringArray(filePath);
  // Log the second line from the CSV to check correct reading and splitting
  console.log(`Second row of CSV: ${stringArray[1]}`);
});

// Test printing all records from the CSV file
test("Test to print all CSV records", async () => {
  printCsvRecords(filePath);
});

// Test accessing a specific record's value using a header and index
test("Test to access specific CSV field", async () => {
  const header = 'username'; 
  const index = 1; // Access the second record
  accessCsvData(filePath, header, index);
});

// Test updating a column in the CSV file
test("Test to update comments column in CSV file", async () => {
  const dummyValue = "New Comment"; // This is your dummy string
  updateComments(filePath, dummyValue);
  console.log(`Comments updated with '${dummyValue}'`);
});

test("Conditionally update comments based on username", async () => {
  const newComment = "Updated for specific user";
  updateCommentsConditionally(filePath, newComment);
  console.log(`Comments conditionally updated where username starts with 'user'.`);
});

test("Conditionally update comments for EOF", async () => {
  const newComment = "111111";
  updateValueWithoutComma(filePath, newComment);
  console.log(`Comments conditionally updated where username starts with 'user'.`);
});

})
