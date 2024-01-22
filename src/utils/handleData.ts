import fs from 'fs';
import path from 'path';

const filePath = path.resolve('../shared/data/userData.json');

export const readData = () => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading data:', error);
    return null;
  }
};

export const writeData = (data: any) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    console.log('Data written successfully.');
  } catch (error) {
    console.error('Error writing data:', error);
  }
};
