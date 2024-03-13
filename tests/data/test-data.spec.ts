// import { Page, test } from '@playwright/test';
// import { loadCsvData, loadCsvDataAsJson } from '../../helpers';
// let data = loadCsvDataAsJson('data/test-data.csv');

// let jsonDataPromise = loadCsvDataAsJson('data/test-data.csv').then(JSON.parse);

//   // const csvDataPromise = JSON.parse(process.env.CSV_DATA || '[]');
//   // for (const data of csvDataPromise){
//   // // csvDataPromise.forEach((data) => {
//   //   test.describe(`Row number- ${data.id}`, () => {
//   //     test(`Use CSV data in test - ${data.username}`, async ({ page }) => {
//   //       console.log(`The user name is ${data.username}`)
//   //       });
//   //     } 
//   //   )};

//   let jsonData = await loadCsvDataAsJson('data/test-data.csv');

//   for (const data of jsonData){
//   test(`Iterating ${data.indexOf}`, async ({ page }) => {
//             console.log(data.id);
//             });
//     }

// // test.describe(`Parameterized test`, () => {
// //   const csvData = loadCsvDataAsJson('data/test-data.csv')
// //   csvData.forEach((data: { id: any; username: any; }) => {
// //     test.describe(`Row number- ${data.id}`, () => {
// //       test(`Use CSV data in test - ${data.username}`, async ({ page }) => {
// //         console.log(`The user name is ${data.username}`)
// //         });
// //       } 
// //     )}) 
// //   });

// // test.describe(`Convert CSV data into JSON list`, async () => {

// // test.beforeAll(async () => {
// //   data = await jsonDataPromise;
// // });

// //     for (const entry of await data){
// //         test(`Samepl Test - ${entry.indexOf}`,async ({page}) => {
// //           page.goto('https://www.linkedin.com')
// //         })
// //     }
// // })


// // import { test } from '@playwright/test';
// // import { loadCsvData } from '../../helpers';

// // let csvData: any[];
// // loadCsvData('data/test-data.csv').then(data => {
// //   csvData = data;
// //   test.describe.serial('Sample tests', () => {
// //     test.beforeAll(async () => {
// //       if (!csvData) {
// //         csvData = await loadCsvData('data/test-data.csv');
// //       }
// //     });

// //     csvData.forEach((data, index) => {
// //       test(`Use CSV data in test - ${data.username} #${index}`, async ({ page }) => {
// //         console.log(`The user name is ${data.username}`);
// //       });
// //     });
// //   });
// // }).catch(err => console.error('Failed to load CSV data:', err));
