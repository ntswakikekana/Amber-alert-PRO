// Combine all the documents into one document
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const pwd = process.env.PWD;

// Combine the documents into one document
export default function combineDocs() {

  // Define the paths to the documents
  const userDocPath = path.join(pwd, '/documentation/user.yaml');
  const reportDocPath = path.join(pwd, '/documentation/report.yaml');
  const authDocPath = path.join(pwd, '/documentation/auth.yaml');
  const schemaDocPath = path.join(pwd, '/documentation/schemas.yaml');


  // Load a YAML file
  function loadYamlFile(filePath) {
    try {
      return yaml.load(fs.readFileSync(filePath, 'utf8'));
    } catch (e) {
      console.log("Error reading file: ", e);
    }
  }

  // Load the documents
  const userDoc = loadYamlFile(userDocPath);
  const reportDoc = loadYamlFile(reportDocPath);
  const authDoc = loadYamlFile(authDocPath);
  const schemaDoc = loadYamlFile(schemaDocPath);

  // Combine the documents
  const combinedDoc = {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation For Amber Alert Pro',
      version: '1.0.0',
      description: 'This is the API documentation for the application.',
    },
    servers: [
      { url: 'http://localhost:5000' },
    ],
    tags: [
      { name: 'User', description: 'User operations' },
      { name: 'Report', description: 'Report operations' },
      { name: 'Auth', description: 'Authentication operations' },
    ],
    paths: {
      ...userDoc,
      ...reportDoc,
      ...authDoc,
    },
    components: {
      schemas: {
        ...schemaDoc
      },
    },
  };

  // Write the combined document to a file
  const combinedDocPath = path.join(pwd, 'documentation/swagger.yaml');
  fs.writeFileSync(combinedDocPath, yaml.dump(combinedDoc));
}
