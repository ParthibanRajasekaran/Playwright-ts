// import * as fs from 'fs';
// import csv from 'csv-parser';

// export async function loadCsvData(filePath: string): Promise<any[]> {
//     const results: any[] = [];
//     return new Promise((resolve, reject) => {
//         fs.createReadStream(filePath)
//             .pipe(csv())
//             .on('data', (data) => results.push(data))
//             .on('end', () => resolve(results))
//             .on('error', reject);
//     });
// }



// export async function loadCsvDataAsJson(filePath: string): Promise<string> {
//     const results: any[] = [];
//     return new Promise((resolve, reject) => {
//         fs.createReadStream(filePath)
//             .pipe(csv())
//             .on('data', (data) => results.push(data))
//             .on('end', () => {
//                 // Convert the array of objects to a JSON string
//                 const json = JSON.stringify(results);
//                 resolve(json);
//             })
//             .on('error', reject);
//     });
// }
