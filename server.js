const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Base de données en mémoire (dans un vrai projet, utilisez MongoDB ou PostgreSQL)
let database = {
  users: {
    'alex shadow': { password: '1596', role: 'admin', id: '001596', name: 'ALEX SHADOW' },
    'draco_tve': { password: '1596', role: 'membre', id: '002001', name: 'DRACO_TVE' }
  },
  stats: {
    activeMembers: 52,
    totalOperations: 147,
    totalEarnings: '$24.8M',
    orgLevel: 92
  },
  operations: [
    {
      id: 1,
      title: 'Opération "Diamant Noir"',
      description: 'Braquage du casino - Zone sécurisée VIP',
      status: 'active',
      date: '15 Février 2026',
      time: '22:00',
      team: '6 membres',
      earnings: '$2.1M',
      leader: 'Alex Shadow',
      risk: 'Élevé'
    },
    {
      id: 2,
      title: 'Opération "Cargo Express"',
      description: 'Transport de marchandises - Route maritime',
      status: 'planned',
      date: '20 Février 2026',
      time: '03:00',
      team: '4 membres',
      earnings: '$850K',
      leader: 'Ghost',
      risk: 'Moyen'
    },
    {
      id: 3,
      title: 'Opération "Nuit Blanche"',
      description: 'Sécurisation territoire Downtown',
      status: 'completed',
      date: '10 Février 2026',
      time: '21:30',
      team: '8 membres',
      earnings: '$1.2M',
      leader: 'Viper',
      risk: 'Succès'
    }
  ],
  info: {
    about: 'Le Syndicate est une organisation d\'élite spécialisée dans les opérations à haut risque et haute récompense. Fondée en 2021, notre équipe compte parmi les plus redoutées de Los Santos. Nous opérons avec précision, professionnalisme et une loyauté sans faille entre membres.',
    territories: 'Downtown Los Santos • Vespucci Beach • Del Perro • Rockford Hills • La Mesa Industrial',
    lastUpdate: 'Système mis à jour le 12 Février 2026 - Nouvelles fonctionnalités de planification ajoutées'
  }
};

// Routes API
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = database.users[username.toLowerCase()];
  
  if (user && user.password === password) {
    res.json({ 
      success: true, 
      user: {
        username: username.toLowerCase(),
        name: user.name,
        role: user.role,
        id: user.id
      }
    });
  } else {
    res.json({ success: false, message: 'Identifiants incorrects' });
  }
});

app.get('/api/data', (req, res) => {
  res.json({
    stats: database.stats,
    operations: database.operations,
    info: database.info
  });
});

// Mise à jour des stats (Admin seulement)
app.post('/api/stats', (req, res) => {
  const { role } = req.body;
  if (role !== 'admin') {
    return res.status(403).json({ success: false, message: 'Accès refusé' });
  }
  
  database.stats = { ...database.stats, ...req.body.stats };
  io.emit('statsUpdated', database.stats);
  res.json({ success: true, stats: database.stats });
});

// Mise à jour des opérations (Admin seulement)
app.post('/api/operations', (req, res) => {
  const { role, operation } = req.body;
  if (role !== 'admin') {
    return res.status(403).json({ success: false, message: 'Accès refusé' });
  }
  
  if (operation.id) {
    // Mise à jour
    const index = database.operations.findIndex(op => op.id === operation.id);
    if (index !== -1) {
      database.operations[index] = operation;
    }
  } else {
    // Nouvelle opération
    operation.id = database.operations.length + 1;
    database.operations.push(operation);
  }
  
  io.emit('operationsUpdated', database.operations);
  res.json({ success: true, operations: database.operations });
});

// Supprimer une opération (Admin seulement)
app.delete('/api/operations/:id', (req, res) => {
  const { role } = req.body;
  if (role !== 'admin') {
    return res.status(403).json({ success: false, message: 'Accès refusé' });
  }
  
  const id = parseInt(req.params.id);
  database.operations = database.operations.filter(op => op.id !== id);
  io.emit('operationsUpdated', database.operations);
  res.json({ success: true, operations: database.operations });
});

// WebSocket pour temps réel
io.on('connection', (socket) => {
  console.log('Nouvel utilisateur connecté');
  
  socket.on('disconnect', () => {
    console.log('Utilisateur déconnecté');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
  console.log(`📱 Accédez au site sur http://localhost:${PORT}`);
});
