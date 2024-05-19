import * as fs from 'fs';
import { parse } from 'csv-parse/sync';
import { stringify } from 'csv-stringify/sync';

/**
 * Converts a CSV file to an array of JSON objects where each row in the CSV becomes an object.
 * @param {string} filePath The path to the CSV file.
 * @returns {any[]} An array of objects, each representing a row in the CSV.
 */
export function csvToJson(filePath: string): any[] {
  const csvFile = fs.readFileSync(filePath);
  const records = parse(csvFile, {
    columns: true,
    skip_empty_lines: true,
  });
  return records;
}

/**
 * Converts a CSV file to an array of strings, where each string represents a row in the CSV.
 * @param {string} filePath The path to the CSV file.
 * @returns {string[]} An array of strings, each representing a row in the CSV.
 */
export function csvToStringArray(filePath: string): string[] {
  const csvFile = fs.readFileSync(filePath, { encoding: 'utf-8' });
  const rows = csvFile.split('\n');
  return rows.filter(row => row.trim() !== '');
}

/**
 * Prints each record from a CSV file with values labeled by their column headers.
 * @param {string} filePath The path to the CSV file.
 */
export function printCsvRecords(filePath: string): void {
  const csvFile = fs.readFileSync(filePath);
  const records = parse(csvFile, {
    columns: true,
    skip_empty_lines: true,
  });
  records.forEach((record: any, index: number) => {
    console.log(`Record ${index + 1}:`);
    for (const key in record) {
      console.log(`${key}: ${record[key]}`);
    }
    console.log('');
  });
}

/**
 * Accesses a specific field in a CSV file based on the header name and record index.
 * @param {string} filePath The path to the CSV file.
 * @param {string} header The column header to access.
 * @param {number} index The index of the record (zero-based).
 */
export function accessCsvData(filePath: string, header: string, index: number): void {
  const csvFile = fs.readFileSync(filePath);
  const records = parse(csvFile, {
    columns: true,
    skip_empty_lines: true,
  });
  if (records.length > index) {
    if (header in records[index]) {
      console.log(`Record ${index + 1}, ${header}: ${records[index][header]}`);
    } else {
      console.log(`Header "${header}" does not exist in the data.`);
    }
  } else {
    console.log(`Index ${index + 1} is out of range. Total records: ${records.length}.`);
  }
}

/**
 * Updates the 'comments' field in a CSV file for all records to a specified dummy value.
 * @param {string} filePath The path to the CSV file.
 * @param {string} dummyValue The value to set for each 'comments' field.
 */
export function updateComments(filePath: string, dummyValue: string): void {
  const csvFile = fs.readFileSync(filePath);
  const records = parse(csvFile, {
    columns: true,
    skip_empty_lines: true,
  });
  const updatedRecords = records.map((record: { comments: string; }) => {
    record.comments = dummyValue; // Set the dummy value
    return record;
  });
  const updatedCsv = stringify(updatedRecords, { header: true });
  fs.writeFileSync(filePath, updatedCsv);
}

/**
 * Conditionally updates the 'comments' field in the CSV file based on username.
 * @param {string} filePath The path to the CSV file.
 * @param {string} newComment The new comment to apply to qualifying records.
 */
export function updateCommentsConditionally(filePath: string, newComment: string): void {
  const csvFile = fs.readFileSync(filePath);
  const records = parse(csvFile, {
    columns: true,
    skip_empty_lines: true,
  });

  const updatedRecords = records.map(record => {
    // Only update comments if the username starts with 'user'
    if (record.username.startsWith('user')) {
      record.comments = newComment;
    }
    return record;
  });

  const updatedCsv = stringify(updatedRecords, { header: true });
  fs.writeFileSync(filePath, updatedCsv);
}

