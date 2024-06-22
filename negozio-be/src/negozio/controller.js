const pool = require('../../db');
const queries = require('./queries');

const getItem = (req,res) =>{
    pool.query(queries.getItem, (error,result) =>{
        if(error) throw error;
        res.status(200).json(result.rows);
    });
}

const getItemById = (req,res) =>{
    const id = parseInt(req.params.id);
    pool.query(queries.getItemById, [id], (error,result) =>{
        const item= result.rows[0];
        const imageBase64 = item.immagine.toString('base64');

        const itemWithImage = {
            id: item.id,
            nome_articolo: item.nome_articolo,
            prezzo: item.prezzo,
            descrizione: item.descrizione,
            immagine: imageBase64,
          };

      if(error) throw error;
      console.log("recupero dell'articolo ",result.rows );

      res.status(200).json(itemWithImage);  
    });
}

const addItem = (req,res) =>{
    console.log("elemento i aggiunta");
    const {nome_articolo, prezzo , descrizione,immagine} = req.body;
    
     const imageBuffer = Buffer.from(immagine, 'base64');
    

    
    pool.query(queries.getNameItem, [nome_articolo], (error,result)=>{
        if(result.rows.length){
            res.send("Nome dell'articolo gia presente");
        }

        pool.query(queries.addItem,[nome_articolo,prezzo,descrizione,imageBuffer],(error,result)=>{
            if(error) throw error;
            res.status(200).send("Articolo aggiunto con successo");
        });
    });
}

const deleteItem = (req, res)=>{
    
    const id = parseInt(req.params.id);
    console.log("sto eliminando  questo item",id);
    pool.query(queries.deleteItem, [id], (error,result)=>{
        if(error) throw error;
        res.status(200).send("Articolo eleminato");
    });
}

const updateItem = (req,res) =>{
    console.log("inizio del update", req.body);
    const id = parseInt(req.params.id);
    const {nome_articolo, prezzo , descrizione} = req.body;

    console.log("nome articolo ", req.body.name);
    pool.query(queries.updateItem ,[req.body.name, req.body.price,req.body.description,id], (error,result)=>{
        if(error) throw error;
        res.status(200).send("Articolo modificato");
    });
}

module.exports = {
    getItem,
    getItemById,
    addItem,
    deleteItem,
    updateItem,
}