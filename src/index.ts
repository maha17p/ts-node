import express,{Application,Request,Response} from 'express';


const app:Application = express();

const PORT_NUM  = 5000;

app.listen(PORT_NUM, () => console.log(`Server is listening to ${PORT_NUM}`))