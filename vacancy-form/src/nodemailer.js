const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(cors());


app.get('/', (req, res) => {
    res.send('welcome to my form')
});


app.post('/api/form/', (req, res) => {
    let data = req.body;
    let smtpTransport = nodemailer.createTransport({
        host: "outlook.live.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "getmeit-4123-4123@outlook.com",
            pass: "Test12341234"
        },
    });

    let mailOptions = {
        from: "getmeit-4123-4123@outlook.com",
        to: "dima@getmeit.ru",
        subject: `Вакансия ${data.positionName} от компании ${data.companyName}`,
        html: `
            <h1>Вакансия ${data.positionName} от компании ${data.companyName}</h1>
            <br>
            <p><b>Локация:</b> ${data.location}</p><br>
            <p><b>Технический стек:</b> ${data.stack}</p><br>
            <p><b>Требования:</b> ${data.requirements}</p><br>
            <p><b>Будет плюсом:</b> ${data.addRequirements}</p><br>
            <p><b>Англиский:</b> Нужен ли английский ${data.englishQuestion}<br>
            <b>Как он будет использоваться:</b> ${data.english}</p><br>
            <p><b>Высшее образование:</b> Нужно ли ВО? ${data.educationQuestion}<br>
            <b>Зачем оно требуется:</b> ${data.education}</p><br>
            <p><b>Заработная плата:</b> ${data.salaryAmount} <br>Можно ли писать в открытую? ${data.salaryQuestion}</p>
            <p><b>Условия:</b> ${data.benefits}</p><br>
            <p><b>Релокация:</b> Предусмотрена ли релокация? ${data.relocationQuestion}<br>
            <b>Информация о релокационном пакете:</b> ${data.relocationPackage}</p><br>
            <p><b>Описание компании:</b> ${data.companyDescription}</p><br>
            <p><b>Описание проекта:</b> ${data.positionDescription}</p><br>
            <p><b>Описание задач:</b> ${data.tasksDescription}</p><br>
            <p><b>Состав команды:</b> ${data.team}</p><br>
            <p><b>Кол-во открытых ставок:</b> ${data.rates}</p><br>
            <p><b>Этапы отбора:</b> ${data.steps}</p><br>
            <br>
            <p><b>Username рекрутера в телеге:</b> ${data.username}</p><br>
            <br>
            <p><b>Описание реферальной программы, если есть:</b> ${data.referral}</p><br>
            `
    }

    smtpTransport.sendMail(mailOptions, (error, response) => {
        if (error) {
            res.send(error);
        } else {
            res.send('Success');
        }
        smtpTransport.close();
    })

})


const PORT = process.env.PORT||3001;
app.listen(PORT, () => {
    console.log(`server starting at port ${PORT}`);
})
