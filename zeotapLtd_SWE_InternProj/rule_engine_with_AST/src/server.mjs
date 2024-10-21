

import express from 'express';
import { json } from 'body-parser';
import apiRoutes from './api';



const app = express();

app.use(json());

app.use('/api', apiRoutes);




const PORT = process.env.PORT || 3000;




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
