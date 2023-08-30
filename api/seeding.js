const { Client } = require('pg');
const fs = require('fs');
// Configuration for connecting to PostgreSQL
const config = {
    user: 'user',
    password: 'password', // Use the password you set in Docker
    host: 'localhost',
    port: 5432,
    database: 'test_db' // Default database name in PostgreSQL
};

// Create a new PostgreSQL client
const client = new Client(config);

async function main() {
    try {
        // Connect to the database
        await client.connect();

        const seedQuery = fs.readFileSync('seed.sql', { encoding: 'utf8' })
        // SQL command to create a table

        // Execute the create table query
        await client.query(seedQuery);

        console.log('Table "employees" created successfully');
    } catch (error) {
        console.error('Error creating table:', error);
    } finally {
        // Close the database connection
        await client.end();
    }
}

main();
