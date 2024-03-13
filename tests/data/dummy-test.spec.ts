import { test } from '@playwright/test';
import { csvToJson } from '../../data/datautil';

const filePath = 'data/test-data.csv';

const csvData = csvToJson(filePath);

for (const data of csvData) {
    test(`testing with ${data.id}`, async ({}) => {
      console.log(`Running test for username: ${data.username}`);
      console.log(`Running test for password: ${data.password}`);
    });
  }
  
