const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const eventRoutes = require('./routes/eventRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/events', eventRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync()
    .then(() => {
        console.log('Base de datos sincronizada');
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch((error) => console.error('Error al conectar con la base de datos:', error));
