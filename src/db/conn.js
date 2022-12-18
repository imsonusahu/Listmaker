const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://imsonusahu:Sonu%408200@listmaker.gboc1nr.mongodb.net/ListMaker?retryWrites=true&w=majority", {
}).then(()=>{

    console.log("Connection successful")
}).catch((err)=>{
    console.log(`${err}`)

});
