const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "elections",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/getCandidats", (req, res) => {
  connection.query("SELECT * FROM candidats", (err, rows) => {
    if (err) throw err;
    console.log("Data received from Db:");
    console.log(rows);
    res.send(rows);
  });
});

app.get("/getElecteurs", (req, res) => {
  connection.query("SELECT * FROM electeurs", (err, rows) => {
    if (err) throw err;
    console.log("Data received from Db:");
    console.log(rows);
    res.send(rows);
  });
});

app.get("/getDepartements", (req, res) => {
  connection.query("SELECT * FROM departements", (err, rows) => {
    if (err) throw err;
    console.log("Data received from Db:");
    console.log(rows);
    res.send(rows);
  });
});

app.get("/getBureau", (req, res) => {
  connection.query("SELECT * FROM bureau", (err, rows) => {
    if (err) throw err;
    console.log("Data received from Db:");
    console.log(rows);
    res.send(rows);
  });
});

app.get("/getPartie", (req, res) => {
  connection.query("SELECT * FROM partie", (err, rows) => {
    if (err) throw err;
    console.log("Data received from Db:");
    console.log(rows);
    res.send(rows);
  });
});
//  nom 	prenom 	adresse 	age 	idPartie 	idDepartement 	resultat
app.post("/addCandidat", (req, res) => {
  console.log(req);
  connection.query(
    "INSERT INTO candidats (nom, prenom, adresse, age, idPartie, idDepartement, resultat) VALUES (?,?,?,?,?,?,?)",
    [
      req.query.nom,
      req.query.prenom,
      req.query.adresse,
      req.query.age,
      req.query.idPartie,
      req.query.idDepartement,
      req.query.resultat,
    ],
    (err, rows) => {
      if (err) throw err;
      console.log("Data received from Db:");
      console.log(rows);
      res.send(rows);
    }
  );
});

//  nom 	prenom 	idBureau 	idChoix1 	idChoix2 	adresse 	age
app.post("/addElecteur", (req, res) => {
  console.log(req);
  connection.query(
    "INSERT INTO electeurs (nom, prenom, idBureau, idChoix1, idChoix2, adresse, age) VALUES (?,?,?,?,?,?,?)",
    [
      req.query.nom,
      req.query.prenom,
      req.query.idBureau,
      req.query.idChoix1,
      req.query.idChoix2,
      req.query.adresse,
      req.query.age,
    ],
    (err, rows) => {
      if (err) throw err;
      console.log("Data received from Db:");
      console.log(rows);
      res.send(rows);
    }
  );
});

//  	nom 	codePostal
app.post("/addDepartement", (req, res) => {
  console.log(req);
  connection.query(
    "INSERT INTO departements (nom, codePostal) VALUES (?,?)",
    [req.query.nom, req.query.codePostal],
    (err, rows) => {
      if (err) throw err;
      console.log("Data received from Db:");
      console.log(rows);
      res.send(rows);
    }
  );
});
// idDepartement 	lieu
app.post("/addBureau", (req, res) => {
  console.log(req);
  connection.query(
    "INSERT INTO bureau (idDepartement, lieu) VALUES (?,?)",
    [req.query.idDepartement, req.query.lieu],
    (err, rows) => {
      if (err) throw err;
      console.log("Data received from Db:");
      console.log(rows);
      res.send(rows);
    }
  );
});

app.post("/addPartie", (req, res) => {
  console.log(req);
  connection.query(
    "INSERT INTO partie (nom) VALUES (?)",
    [req.query.nom],
    (err, rows) => {
      if (err) throw err;
      console.log("Data received from Db:");
      console.log(rows);
      res.send(rows);
    }
  );
});

app.post("/updateCandidat", (req, res) => {
  console.log(req);
  connection.query(
    "UPDATE candidats SET nom = ?, prenom = ?, adresse = ?, age = ?, idPartie = ?, idDepartement = ?, resultat = ? WHERE id = ?",
    [
      req.query.nom,
      req.query.prenom,
      req.query.adresse,
      req.query.age,
      req.query.idPartie,
      req.query.idDepartement,
      req.query.resultat,
      req.query.id,
    ],
    (err, rows) => {
      if (err) throw err;
      console.log("Data received from Db:");
      console.log(rows);
      res.send(rows);
    }
  );
});

app.post("/updateElecteur", (req, res) => {
  console.log(req);
  connection.query(
    "UPDATE electeurs SET nom = ?, prenom = ?, idBureau = ?, idChoix1 = ?, idChoix2 = ?, adresse = ?, age = ? WHERE id = ?",
    [
      req.query.nom,
      req.query.prenom,
      req.query.idBureau,
      req.query.idChoix1,
      req.query.idChoix2,
      req.query.adresse,
      req.query.age,
      req.query.id,
    ],
    (err, rows) => {
      if (err) throw err;
      console.log("Data received from Db:");
      console.log(rows);
      res.send(rows);
    }
  );
});

app.post("/updateDepartement", (req, res) => {
  console.log(req);
  connection.query(
    "UPDATE departements SET nom = ?, codePostal = ? WHERE id = ?",
    [req.query.nom, req.query.codePostal, req.query.id],
    (err, rows) => {
      if (err) throw err;
      console.log("Data received from Db:");
      console.log(rows);
      res.send(rows);
    }
  );
});

app.post("/updateBureau", (req, res) => {
  console.log(req);
  connection.query(
    "UPDATE bureau SET idDepartement = ?, lieu = ? WHERE id = ?",
    [req.query.idDepartement, req.query.lieu, req.query.id],
    (err, rows) => {
      if (err) throw err;
      console.log("Data received from Db:");
      console.log(rows);
      res.send(rows);
    }
  );
});

app.post("/updatePartie", (req, res) => {
  console.log(req);
  connection.query(
    "UPDATE partie SET nom = ? WHERE id = ?",
    [req.query.nom, req.query.id],
    (err, rows) => {
      if (err) throw err;
      console.log("Data received from Db:");
      console.log(rows);
      res.send(rows);
    }
  );
});

app.post("/deleteCandidat", (req, res) => {
  console.log(req);
  connection.query(
    "DELETE FROM candidats WHERE id = ?",
    [req.query.id],
    (err, rows) => {
      if (err) throw err;
      console.log("Data received from Db:");
      console.log(rows);
      res.send(rows);
    }
  );
});

app.post("/deleteElecteur", (req, res) => {
  console.log(req);
  connection.query(
    "DELETE FROM electeurs WHERE id = ?",
    [req.query.id],
    (err, rows) => {
      if (err) throw err;
      console.log("Data received from Db:");
      console.log(rows);
      res.send(rows);
    }
  );
});

app.post("/deleteDepartement", (req, res) => {
  console.log(req);
  connection.query(
    "DELETE FROM departements WHERE id = ?",
    [req.query.id],
    (err, rows) => {
      if (err) throw err;
      console.log("Data received from Db:");
      console.log(rows);
      res.send(rows);
    }
  );
});

app.post("/deleteBureau", (req, res) => {
  console.log(req);
  connection.query(
    "DELETE FROM bureau WHERE id = ?",
    [req.query.id],
    (err, rows) => {
      if (err) throw err;
      console.log("Data received from Db:");
      console.log(rows);
      res.send(rows);
    }
  );
});

app.post("/deletePartie", (req, res) => {
  console.log(req);
  connection.query(
    "DELETE FROM partie WHERE id = ?",
    [req.query.id],
    (err, rows) => {
      if (err) throw err;
      console.log("Data received from Db:");
      console.log(rows);
      res.send(rows);
    }
  );
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
