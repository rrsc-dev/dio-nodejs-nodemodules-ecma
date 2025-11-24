async function connectToDatabase(databaseName) {
    console.log(`Conectado ao banco: ${databaseName}`);
}

// equivalente ao module.exports = connectToDatabase;
export default connectToDatabase;