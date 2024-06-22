const getItem = "SELECT * FROM articoli  ORDER BY id";
const getItemById = "SELECT * FROM articoli where id= $1";
const addItem = "INSERT INTO articoli (nome_articolo,prezzo,descrizione,immagine) VALUES ($1,$2,$3,$4)";
const getNameItem = "SELECT s FROM articoli s where s.nome_articolo = $1";
const deleteItem = "DELETE FROM articoli where id = $1";
const updateItem = "UPDATE articoli set nome_articolo = $1 , prezzo = $2 , descrizione = $3 where id=$4";

module.exports = {
    getItem,
    getItemById,
    addItem,
    getNameItem,
    deleteItem,
    updateItem,
}