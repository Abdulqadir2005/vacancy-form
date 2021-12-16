import React, {Component} from 'react';
import axios from "axios";

import {Input, Option} from "./components";


class Form extends Component {

    state = {
        companyName: '',
        positionName: '',
        options: {
            Junior: true,
            Middle: false,
            Senior: false,
            Lead: false,
            Head: false
        },
        salaryAmount: '',
        salaryQuestion: false,
        location: '',
        relocationQuestion: false,
        relocationPackage: '',
        educationQuestion: false,
        education: '',
        stack: '',
        requirements: '',
        addRequirements: '',
        benefits: '',
        companyDescription: '',
        positionDescription: '',
        tasksDescription: '',
        team: '',
        rates: '',
        steps: '',
        referral: '',
        username: '',
        english: '',
        englishQuestion: false,
        sentForm: false,
        errorSent: false,
        fulfill: false
    }

    handleRelocationOption = e => {
        this.setState({
            relocationQuestion: e.target.value
        })
        console.log(this.state.relocationQuestion)
    }

    handleEducationOption = e => {
        this.setState({
            educationQuestion: e.target.value
        })
        console.log(this.state.educationQuestion)
    }

    handleEnglishOption = e => {
        this.setState({
            englishQuestion: e.target.value
        })
        console.log(this.state.englishQuestion)
    }


    handleCompanyName = e => {
        this.setState({
            companyName: e.target.value
        })
    }

    handlePosition = e => {
        this.setState({
            positionName: e.target.value
        })
    }

    handlePositionGrade = e => {
        let state = this.state;
        state.options[e.target.value] = e.target.checked;
        this.setState(state);
    }

    handleSalaryAmount = e => {
        this.setState({
            salaryAmount: e.target.value
        })
    }

    handleSalaryQuestion = e => {
        this.setState({salaryQuestion: e.target.value});
        console.log(this.state)
    }

    handleLocation = e => {
        this.setState({
            location: e.target.value
        })
    }

    handleRelocationPackage = e => {
        this.setState({
            relocationPackage: e.target.value
        })
    }

    handleStack = e => {
        this.setState({
            stack: e.target.value
        })
    }

    handleRequirements = e => {
        this.setState({
            requirements: e.target.value
        })
    }

    handleAddRequirements = e => {
        this.setState({
            addRequirements: e.target.value
        })
    }

    handleBenefits = e => {
        this.setState({
            benefits: e.target.value
        })
    }

    handleCompanyDescription = e => {
        this.setState({
            companyDescription: e.target.value
        })
    }

    handlePositionDescription = e => {
        this.setState({
            positionDescription: e.target.value
        })
    }

    handleTasksDescription = e => {
        this.setState({
            tasksDescription: e.target.value
        })
    }

    handleTeam = e => {
        this.setState({
            team: e.target.value
        })
    }

    handleRates = e => {
        this.setState({
            rates: e.target.value
        })
    }

    handleSteps = e => {
        this.setState({
            steps: e.target.value
        })
    }

    handleReferral = e => {
        this.setState({
            referral: e.target.value
        })
    }

    handleUsername = e => {
        this.setState({
            username: e.target.value
        })
    }

    handleEnglish = e => {
        this.setState({
            english: e.target.value
        })
    }

    handleEducation = e => {
        this.setState({
            education: e.target.value
        })
    }


    formSubmit = (e) => {
        e.preventDefault();

        let form = document.getElementById('form');


        let data = {
            companyName : this.state.companyName,
            positionName : this.state.positionName,
            options: this.state.options,
            salaryAmount: this.state.salaryAmount,
            salaryQuestion: this.state.salaryQuestion,
            location: this.state.location,
            relocationQuestion: this.state.relocationQuestion,
            relocationPackage: this.state.relocationPackage,
            educationQuestion: this.state.educationQuestion,
            education: this.state.education,
            stack: this.state.stack,
            requirements: this.state.requirements,
            addRequirements: this.state.addRequirements,
            benefits: this.state.benefits,
            companyDescription: this.state.companyDescription,
            positionDescription: this.state.positionDescription,
            tasksDescription: this.state.tasksDescription,
            team: this.state.team,
            rates: this.state.rates,
            steps: this.state.steps,
            referral: this.state.referral,
            username: this.state.username,
            english: this.state.english,
            englishQuestion: this.state.englishQuestion,
        }

        let error = this.formValidate(form);

        if (error === 0) {
            axios
                .post('/api/form/', data)
                .then(res => {
                    this.setState({
                        sentForm: true
                    }, this.resetForm)
                })
                .catch(() => {
                    this.setState({
                        errorSent: true
                    })
                })
        } else {
            this.setState({
                fulfill: true
            })
        }
    }

    resetForm = () => {
        this.setState({
            companyName: '',
            positionName: '',
            options: {
                Junior: true,
                Middle: false,
                Senior: false,
                Lead: false,
                Head: false
            },
            salaryAmount: '',
            salaryQuestion: false,
            location: '',
            relocationQuestion: false,
            relocationPackage: '',
            educationQuestion: false,
            education: '',
            stack: '',
            requirements: '',
            addRequirements: '',
            benefits: '',
            companyDescription: '',
            positionDescription: '',
            tasksDescription: '',
            team: '',
            rates: '',
            steps: '',
            referral: '',
            username: '',
            english: '',
            englishQuestion: false,
            errorSent: false,
            fulfill: false
        })

        setTimeout(() => {
            this.setState({
                sentForm: false
            })
        },5000)
    }

    formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            this.formRemoveError(input);

            if (input.getAttribute('type') === "checkbox" && input.checked === false) {
                this.formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    this.formAddError(input);
                    error++;
                }
            }
        }
        console.log(`Нужно заполнить еще ${error} полей`);
        return error;

    }

    formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }




    render() {
        return (
            <div>
                <div className="image"/>
                <div id="wrapper" className="wrapper">
                    <form onSubmit={this.formSubmit}  action="#" id="form" className="form">

                        {/*  Заголовок формы */}
                        <h1 className="form__title">
                            Подача вакансии на размещение в Get me IT
                        </h1>
                        {/* Вопрос про название компании */}
                        <div className="form__item">
                            <label
                                htmlFor="companyName"
                                className="form__label">
                                Company Name*:
                            </label>
                            <input
                                id="companyName"
                                type="text"
                                name="Name"
                                className="form__input _req"
                                placeholder="Яндекс"
                                value={this.state.companyName}
                                onChange={this.handleCompanyName}
                            />
                        </div>

                        {/* Вопрос про название позиции */}
                        <div className="form__item">
                            <label
                                htmlFor="positionName"
                                className="form__label">
                                Position Name*
                            </label>
                            <input
                                id="positionName"
                                type="text"
                                name="Position"
                                className="form__input _req"
                                placeholder="Java Developer"
                                value={this.state.positionName}
                                onChange={this.handlePosition}
                            />
                        </div>

                        {/* Вопрос про грейд позиции */}
                        <div className="form__item">
                            <div className="form__label">Укажите грейд позиции*</div>
                            <div className="options _req">
                                <div className="options__item">
                                    <input
                                        id="formJunior"
                                        type="checkbox"
                                        value="Junior"
                                        name="grade"
                                        className="options__item-box"
                                        checked={this.state.options.Junior}
                                        onChange={this.handlePositionGrade}
                                    />
                                    <label
                                        htmlFor="formJunior"
                                        className="options__item-label">
                                        Junior
                                    </label>
                                </div>
                                <div className="options_item">
                                    <input
                                        id="formMiddle"
                                        type="checkbox"
                                        value="Middle"
                                        name="grade"
                                        className="options__item-box"
                                        checked={this.state.options.Middle}
                                        onChange={this.handlePositionGrade}
                                    />
                                    <label
                                        htmlFor="formMiddle"
                                        className="options__item-label">
                                        Middle
                                    </label>
                                </div>
                                <div className="options_item">
                                    <input
                                        id="formSenior"
                                        type="checkbox"
                                        value="Senior"
                                        name="grade"
                                        className="options__item-box"                                    checked={this.state.options.Junior}
                                        checked={this.state.options.Senior}
                                        onChange={this.handlePositionGrade}
                                    />
                                    <label
                                        htmlFor="formSenior"
                                        className="options__item-label">
                                        Senior
                                    </label>
                                </div>
                                <div className="options_item">
                                    <input
                                        id="formLead"
                                        type="checkbox"
                                        value="Lead"
                                        name="grade"
                                        className="options__item-box"
                                        checked={this.state.options.Lead}
                                        onChange={this.handlePositionGrade}
                                    />
                                    <label
                                        htmlFor="formLead"
                                        className="options__item-label">
                                        Lead
                                    </label>
                                </div>
                                <div className="options_item">
                                    <input
                                        id="formHead"
                                        type="checkbox"
                                        value="Head"
                                        name="grade"
                                        className="options__item-box"
                                        checked={this.state.options.Head}
                                        onChange={this.handlePositionGrade}
                                    />
                                    <label
                                        htmlFor="formHead"
                                        className="options__item-label">
                                        Head
                                    </label>
                                </div>
                            </div>
                        </div>


                        {/* Вопрос про сумму ЗП */}
                        <div className="form__item">
                            <label
                                htmlFor="formSalary"
                                className="form__label">
                                Salary*
                            </label>
                            <input
                                id="formSalary"
                                type="text"
                                name="Salary"
                                className="form__input _req"
                                placeholder="100-150.000 rubbles"
                                value={this.state.salaryAmount}
                                onChange={this.handleSalaryAmount}
                            />
                            <div className="form__item-label">Можно ли писать про ЗП в открытую?*
                                <select
                                    name="relocation_probability"
                                    className="select _req"
                                    value={this.state.salaryQuestion}
                                    onChange={this.handleSalaryQuestion}
                                >
                                    <option value={false}>Нет</option>
                                    <option value={true}>Да</option>
                                </select>
                            </div>
                        </div>

                        {/* Вопрос про локацию позиции */}
                        <div className="form__item">
                            <label
                                htmlFor="formLocation"
                                className="form__label">
                                Position location*
                            </label>
                            <input
                                id="formLocation"
                                type="text"
                                name="Position"
                                className="form__input _req"
                                placeholder="Moscow, Russia/Remote"
                                onChange={this.handleLocation}
                            />
                        </div>

                        <Option
                            title="Предусмотрена ли релокация?*"
                            name="relocation_probability"
                            inputTitle="Информация о релокационном пакете"
                            inputId="relocationPackage"
                            inputName="relocationPackage"
                            inputPlaceholder="Оплата жилья, билетов."
                            showQuestion={this.state.relocationQuestion}
                            value={this.state.relocationPackage}
                            handleInput={this.handleRelocationPackage}
                            handleSelect={this.handleRelocationOption}
                        />

                        {/* Вопрос про технический стек позиции */}
                        <Input
                            title="Технический стек проекта"
                            id="formStack"
                            name="stack"
                            placeholder="Kotlin, Android SDK, Rest, Git, Jira."
                            req="_req"
                            value={this.state.stack}
                            handleInput={this.handleStack}
                        />

                        {/* Вопрос про требования к кандидату */}
                        <Input
                            title="Требования к кандидату"
                            id="formRequirements"
                            name="requirements"
                            placeholder="Понимание архитектуры Android, разработка адаптивных интерфейсов."
                            req="_req"
                            value={this.state.requirements}
                            handleInput={this.handleRequirements}
                        />

                        {/* Вопрос про необязательные требования к кандидату */}
                        <Input
                            title="Дополнительные требования к кандидату"
                            id="formAdditionalRequirements"
                            name="additionalRequirements"
                            placeholder="Не обязательно, но было бы круто знать..."
                            value={this.state.addRequirements}
                            handleInput={this.handleAddRequirements}
                        />

                        {/* Вопрос про уровень английского языка */}
                        <Option
                            title="Нужен ли английский язык в работе?*"
                            name="english_level"
                            inputTitle="Какой требуемый уровень языка и какая цель его использования в работе*: "
                            inputId="english_level"
                            inputName="english_level"
                            inputPlaceholder="Нужен intermediate, чтобы вести рабочую переписку на английском."
                            value={this.state.english}
                            handleInput={this.handleEnglish}
                            showQuestion={this.state.englishQuestion}
                            handleSelect={this.handleEnglishOption}
                        />

                        {/* Вопрос про образование */}
                        <Option
                            title="Требуется ли высшее образование?*"
                            name="education"
                            inputTitle="Причина данного требования к вакансии:"
                            inputId="education"
                            inputName="education"
                            inputPlaceholder="Причина требования ВО."
                            value={this.state.education}
                            handleInput={this.handleEducation}
                            showQuestion={this.state.educationQuestion}
                            handleSelect={this.handleEducationOption}
                        />

                        {/* Вопрос про бенефиты к вакансии */}
                        <Input
                            title="Бенефиты*:"
                            id="benefits"
                            name="benefits"
                            placeholder="Здесь лучше указать что-то материальное: компенсация спорта, обедов, оплата курсов, выплата в долларах или евро."
                            req="_req"
                            value={this.state.benefits}
                            handleInput={this.handleBenefits}
                        />

                        {/* Вопрос про описание компании */}
                        <Input
                            title="Описание компании*:"
                            id="formCompanyDescription"
                            name="companyDescription"
                            placeholder="Чем занимается компания, ее ключевые отличия, достижения."
                            req="_req"
                            value={this.state.companyDescription}
                            handleInput={this.handleCompanyDescription}
                        />

                        {/* Вопрос про описание проекта */}
                        <Input
                            title="Описание проекта*:"
                            id="formPositionDescription"
                            name="positionDescription"
                            placeholder="В чем суть проэкта? Его фишка? Аудитория?"
                            req="_req"
                            value={this.state.positionDescription}
                            handleInput={this.handlePositionDescription}
                        />

                        {/* Вопрос про описание задач позиции */}
                        <Input
                            title="Задачи*:"
                            id="formTasksDescription"
                            name="tasksDescription"
                            placeholder="Задачи из беклога."
                            req="_req"
                            value={this.state.tasksDescription}
                            handleInput={this.handleTasksDescription}
                        />

                        {/* Вопрос про описание команды */}
                        <Input
                            title="Команда*:"
                            id="formTeam"
                            name="team"
                            placeholder="Сколько человек в команде? Кто в нее входит?"
                            req="_req"
                            value={this.state.team}
                            handleInput={this.handleTeam}
                        />

                        {/* Вопрос про открытые ставки */}
                        <Input
                            title="Кол-во ставок:"
                            id="rates"
                            name="rates"
                            placeholder="Сколько открыто ставок на позицию?"
                            value={this.state.rates}
                            handleInput={this.handleRates}
                        />

                        {/* Вопрос про этапы отбора */}
                        <Input
                            title="Этапы отбора:"
                            id="steps"
                            name="steps"
                            placeholder="Если один-два этапа отбора, можно указать."
                            value={this.state.steps}
                            handleInput={this.handleSteps}
                        />

                        {/* Вопрос про юзернейм рекрутера в телеграме */}
                        <div className="form__item">
                            <label
                                htmlFor="username"
                                className="form__label">
                                Telegram username*:
                            </label>
                            <input
                                id="username"
                                type="text"
                                name="username"
                                className="form__input _req"
                                placeholder="@test"
                                value={this.state.username}
                                onChange={this.handleUsername}
                            />
                        </div>

                        {/* Вопрос про реферальную программу */}
                        <Input
                            title="Описание реферальной программы"
                            id="referral"
                            name="referral"
                            placeholder="Готовы заплатить 1млн$ за реккомендацию друга на позицию."
                            value={this.state.referral}
                            handleInput={this.handleReferral}
                        />

                        {/*Форма согласия обработки данных */}
                        <div className="form__item">
                            <div className="form__item-checkbox">
                                <input id="agreement" defaultChecked type="checkbox" name="agreement" className="checkbox _req" />
                                <label htmlFor="agreement" className="label">Я даю свое согласие на обработку персональных данных.</label>
                            </div>
                        </div>

                        {/* Кнопка отправления поданной инфы */}
                        <div className={this.state.sentForm ? "sendSuccess _msgAppear" : "sendSuccess"}>Вакансия отправлена!</div>
                        <div className={this.state.errorSent ? "sendError _msgAppear" : "sendError"}>Ошибка!</div>
                        <div className={this.state.fulfill ? "sendFulfill _msgAppear" : "sendFulfill"}>Заполните форму до конца!</div>
                        <button type="submit" className="form__button">Отправить</button>
                    </form>
                </div>
            </div>
        );
    }
}


export default Form;