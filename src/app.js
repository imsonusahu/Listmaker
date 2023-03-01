const express = require('express')
const port = process.env.PORT || 3000
require("./db/conn");
const mongoose = require("mongoose");
const dotenv = require('dotenv');

var ImageKit = require("imagekit")
;const app = express();
dotenv.config();

mongoose.set('strictQuery', false);

const Student = require("./model/students");
const animationList = require("./model/lotieAnim");
const allUsers = require("./model/loginApi");
const router = require("./routes/routes");
const AddServices = require("./model/AddServices");
const PlumberApi = require("./model/PlumberApi");
const BannerModel = require("./model/BannerModel");
const RecentInvoice = require("./model/RecentInvoice");


app.use(express.json());

//student API
app.post("/students", async (req, res) => {


    try {
        const myStudent = new Student(req.body);
        const createUser = await myStudent.save();
        res.status(201).send(createUser);
    } catch (error) {


        /*  let msg={
              "code":203,
              "msg":error.toString().replace("ValidationError: email:","")
          }


          console.log(error);*/
        res.status(400).send(error)
    }


});

//Sign in API
app.post("/allUsers", async (req, res) => {

    try {
        const newUser = new allUsers(req.body);
        const data = await newUser.save();
        let response = {
            "code": 200,
            "msg": "Sign up successful",
            data
        }

        res.status(200).send(response);
        console.log(data);

    } catch (err) {

        let scsdcd

        if (err.name == 'ValidationError') {
            for (field in err.errors) {
                console.log(err.errors[field].message);
                scsdcd = err.errors[field].message;
            }
        }


        let msg = {

            "code": 400,
            "msg": scsdcd
        }

        if (err.code == 11000) {


            let email = err.keyValue.email;
            const data = await allUsers.findOne({email: email})

            let errMsg = {
                code: 200,
                msg: "Email already exist",
                data
            }


            console.log(errMsg)

            res.body = errMsg;

            res.status(200).send(res.body);
        } else {

            res.status(400).send(msg);
        }


    }
});

//getting Student
app.get("/students", async (req, res) => {

    try {
        const student = await Student.find();
        res.status(201).send(student);
        console.log(student);
    } catch (error) {
        res.status(400).send(error);
        console.log(error.message);

    }

});

//GET server response
app.get("/", (req, res) =>
    res.send("Listmaker is running..."));

app.get("/onboardings", async (req, res) => {

    try {
        const animList = await animationList.find();
        console.log(animList);
        res.status(201).send(animList);
    } catch (error) {
        res.status(400).send(json({error}));
        console.log(error.message);
    }

});

//Adding Animation in database
app.post("/onboardings", async (req, res) => {

    try {
        const addAnimList = new animationList(req.body);
        const newAnimation = await addAnimList.save();
        res.status(201).send(newAnimation);
        console.log(newAnimation);

    } catch (error) {


        res.status(400).send({error});


    }

});

//test


//Adding Plumber API

app.post("/plumberItems", async (req, res) => {

    try {
        const plumberApi = new PlumberApi(req.body);
        const addPlumberItems = await plumberApi.save();
        res.status(200).send({
            success: true,
            data: addPlumberItems

        });
        console.log(addPlumberItems);

    } catch (error) {

        res.status(400).send({error});

    }

});

//Adding Plumber API

app.get("/plumberItems", async (req, res) => {

    try {
        const plumberApi = await PlumberApi.find();
        console.log(plumberApi);
        res.status(200).send(
            {
                success: true,
                data: plumberApi

            }
        );
    } catch (error) {
        res.status(400).send(json({error}));
        console.log(error.message);
    }

});


/*{
    "name": "Kiran Sahu"
    "profile":"wcnweovnewocvnewocnewcn"
    "email":"sonu.kalinjer@gmail.com"
    "gender":"Male"
    "loginStatus":true
}*/

//Admin
app.post("/addServices", async (req, res) => {

    try {
        const services = new AddServices(req.body);
        const newAnimation = await services.save();
        res.status(201).send(newAnimation);
        console.log(newAnimation);

    } catch (error) {

        console.log("Error addServices >> ", error);

        res.status(400).send({
            status: false,
            message: error.message

        });


    }
});
//Admin
app.post("/addBanner", async (req, res) => {

    try {
        const addBanner = new BannerModel(req.body);
        const sendBanner = await addBanner.save();
        res.status(200).send(sendBanner);
        console.log(sendBanner);

    } catch (error) {

        res.status(400).send({error});
    }
});

app.post("/recentInvoice", async (req, res) => {

    try {
        const recentInvoice = new RecentInvoice(req.body);
        const responseInvoice = await recentInvoice.save();
        res.status(200).send(responseInvoice);
        console.log(responseInvoice);

    } catch (error) {

        res.status(400).send({error});
    }
});




//Admin
app.post("/fileupload", async (req, res) => {

    try {
        const imagekit = new ImageKit({
            publicKey : "public_a1+qXeZpzvlK2hrA/VOuE9sHv4M=",
            privateKey : "private_gz3/vqyS61PfOpg4/rpJhfD1PQQ=",
            urlEndpoint : "https://ik.imagekit.io/imsonusahu/"
        });


        console.log(imagekit)

    } catch (error) {

        res.status(400).send({error});
    }
});

app.get("/getServices", async (req, res) => {

    try {
        console.log(req.body.city_name);
        const service = await AddServices.find();

        console.log(service);
        res.status(200).send({
                success: true,
                data: service
            }
        );
    } catch (error) {
        res.status(400).send(json(error));
        console.log(error.message);
    }

});

app.get("/getBanner", async (req, res) => {

    try {

        const banner = await BannerModel.find();
        console.log(banner);

        res.status(200).send({status:"true",data:banner});
    } catch (error) {
        res.status(400).send(json({error}));
        console.log(error.message);
    }

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
