// import connectToDatabase from "./utils/database.js"; // precisa inserir a extensão do arquivo
// import * as database from "./utils/database.js"; // Importa tudo que foi exportado pelo arquivo database.js
import { connectToDatabase, databaseType } from "./utils/database.js";

connectToDatabase("Teste");