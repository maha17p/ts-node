import express,{Application,Response,Request} from 'express';



const app:Application = express();
const PORT_NUM = 5000 ||process.env.PORT_NUM

app.listen(PORT_NUM, () => console.log(`Server is listening to ${PORT_NUM}`))