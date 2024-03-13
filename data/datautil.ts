import * as fs from 'fs';
import { parse } from 'csv-parse/sync';

export function csvToJson(filePath: string): any[] {
  const csvFile = fs.readFileSync(filePath);
  const records = parse(csvFile, {
    columns: true,
    skip_empty_lines: true,
  });

  return records;
}