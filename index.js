const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Le backend SaaS IA fonctionne ✅');
});
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// ✅ Route principale pour tester si le backend fonctionne
app.get('/', (req, res) => {
  res.send('Le backend SaaS IA fonctionne ✅');
});

// ✅ Route spécifique pour le plan Starter
app.get('/api/starter', (req, res) => {
  res.json({ message: 'Bienvenue sur le plan Starter !' });
});


app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
