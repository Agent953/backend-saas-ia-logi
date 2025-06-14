const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Le backend SaaS IA fonctionne ✅');
});

app.get('/api/starter', (req, res) => {
  res.json({
    formule: "Starter",
    simulations: 3,
    upload: "Excel/CSV manuel",
    alertesIA: 4,
    rapportsPDF: 2,
    support: "Support IA + FAQ automatisée"
  });
});

app.get('/api/pro', (req, res) => {
  res.json({
    formule: "Pro",
    jumeauNumerique: true,
    simulations: 20,
    upload: "Excel/CSV manuel",
    alertesIA: 12,
    rapportsPDF: "Hebdomadaire automatique",
    support: "IA + FAQ automatisée",
    campagnes: "Email + WhatsApp",
    dashboard: "Prédictif complet",
    onboarding: "Accès prioritaire + onboarding personnalisé",
    rapportMensuel: "Rapport valeur gagnée/évité ce mois",
    tableauRisques: true
  });
});

app.get('/api/copilote', (req, res) => {
  res.json({
    formule: "Pro Copilote+",
    jumeauNumerique: true,
    simulations: 30,
    upload: "Excel/CSV manuel",
    alertesIA: 20,
    rapportsPDF: "Hebdomadaire automatique",
    support: "IA + FAQ automatisée",
    dashboard: "Prédictif complet",
    campagnes: "Email + WhatsApp",
    onboarding: "Accès prioritaire + onboarding personnalisé",
    tableauRisques: true,
    scenarios: "Et si…",
    assistantIA: "Vocal ou chat"
  });
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
