const databaseType = {
    userType: "admin",
    type: "local"
}

async function connectToDatabase(databaseName) {
    console.log(`Conectado ao banco: ${databaseName}`);
}

async function disconnectDatabase() {
    onsole.log(`Desconectado...`);
}

// equivalente ao module.exports = connectToDatabase;
// export default connectToDatabase;

// equivalente ao module.exports = {}
export {
    connectToDatabase,
    disconnectDatabase,
    databaseType
}