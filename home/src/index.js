import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// чтобы подняться на уровень выше - '../'
// чтобы на два уровня выше - '../../'
// чтобы начать поиск в текущей директории - './'
// чтобы найти компонент Name в текущей директории в components - './components/Name'
// чтобы импортировать из библиотеки - 'название библиотеки'

// Sr пишем в console.log(); и выделяем нужный компонент во вкладке react

//Емли писать {MyFunc} то выполнится функция а если писать {MyFunc()} то сразу вернется ее результат

//все что находится внутри {} это this можно сделать console.log(this)

//массив с данными
// потом используется в newsTemplate = myNewsList.map(function(item) {
const myNewsList = [
    {
        id: 1,
        author: 'Саша Печкин',
        text: 'В четверг, четвертого числа...',
        bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
    },
    {
        id: 2,
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!',
        bigText: 'А евро 42!'
    },
    {
        id: 3,
        // author: 'Max Frontend',
        text: 'Прошло 2 года с прошлых учебников, а $ так и не стоит 35',
        bigText: 'А евро опять выше 70.'
    },
    {
        id: 4,
        author: 'Гость',
        text: 'Бесплатно. Без смс, про реакт, заходи - https://maxpfrontend.ru',
        bigText: 'Еще есть группа VK, telegram и канал на youtube! Вся инфа на сайте, не реклама!'
    }
];

// потом выводится в общем списке компонентов как <News />
class News extends React.Component{
    render() {
        // const { MainData } = this.props;
        // аналогично записи const MainData = this.props.MainData
        // потом используется в return
        let newsTemplate;

        if (myNewsList.length) {
            // если новости есть, пробегись map'ом
            newsTemplate = myNewsList.map(function(item) {
                // возвращает имя автора и текст его новости
                // возвращается сразу компонентом потому что  у наших новостей появляются какие-то дополнительные
                // поля, пользователь начинает взаимодействовать с ними, например "пометить как прочитанное" и так далее.
                // Нам было бы удобно, чтобы каждая новость была представлена отдельным компонентом.
                return <Article key={item.id} MainData={item}/>
                // return MyComponent data={wizard} eshe_odno_svoistvo={[1,2,3,4,5]} />
            })
        } else {
            // если новостей нет - сохрани в переменную параграф
            newsTemplate = <strong>К сожалению новостей нет</strong>
        }

        return (
            <div className="news">
                {newsTemplate}
                <br/>
                {/*тернарный оператор if else*/}
                {/*реализация классов если есть новости то одним цветом, если нет. то другим*/}
                <strike className={myNewsList.length > 0 ? 'red':'blue'}>Всего новостей: {myNewsList.length}</strike>
                <br/>
                {/*реализация наличия или отсутсвия элемента в дом дереве без классов*/}
                {/*что "условия" внутри JSX пишутся в фигурных скобках*/}
                {
                    myNewsList.length ? <strong>Всего новостей: {myNewsList.length}</strong> : null
                }
            </div>
        );
    }
}

class Article extends React.Component {

    // Если вы определяете какое-то изменяемое свойство в компоненте, необходимо указать начальное состояние
    // (в терминологии react.js - initial state). Для этого, у компонента нужно просто определить свойство state
    state = {
        visible: false, // определили начальное состояние
        rating: 0 // определили начальное состояние рейтинга
    };

    handleReadMoreClck = (e) => { // добавили метод для клика
        e.preventDefault();
        this.setState({
            visible: true,
            //рейтинг с нуля повысится до 100500 по клику на ссылку подробнее
            rating: 100500
            },
            //Так же у setState есть возможность указать callback функцию, которая будет вызвана после того,
            // как новое состояние "установится"
            () => {
            alert('Состояние изменилось');
        })
    };

    render() {

        // render - дорогостоящая операция, поэтому внимательно относитесь к тому, где вы вызываете setState,
        // и что это за собой влечет. Банальные console.log могут вам в этом помочь.

        const { author, text, bigText } = this.props.MainData;
        // Как вы помните, свойства (this.props) следует использовать только для чтения, а для динамических свойств нужно
        // использовать так называемое "состояние" (state).
        const { visible } = this.state; // вытащили visible из this.state
        return (
            <div className="article">
                <p className="news__author blue">{author}:</p>
                <p className="news__text">{text}</p>
                { /* если не visible, то показывай ссылку */
                    /* добавили onClick */
                    !visible && <a onClick={this.handleReadMoreClck} href="#" className='news__readmore'>Подробнее</a>
                }
                { /* если visible, то показывай текст */
                    visible && <p className='news__big-text'>{bigText}</p>
                }
            </div>
        )
    }
}

class NewsMassive extends React.Component {
    render() {
        //У каждого компонента могут быть свойства. Они хранятся в this.props, и передаются компоненту как атрибуты.
        // const newsTemplate = this.props.MainData.map(function(item, index) {
        const newsTemplate = this.props.MainData.map(function(item) {
            return (
                //использовали у родительского элемента атрибут key, реакту нужна уникальность, чтобы все его механизмы работали корректно.
                // По "ключу" он будет понимать с каким именно дочерним узлом вы работаете и какому родителю он принадлежит
                //<div key={index}>
                <div key={item.id}> {/* используем id в качестве ключа */}
                    <p className="news__author">{item.author}: {item.text}</p>
                    {/*<p className="news__text">{item.text}</p>*/}
                </div>
            )
        });

        console.log(newsTemplate);

        return (
            <div className="news">
                {newsTemplate}
                <strong>Всего новостей: {this.props.MainData.length}</strong>
                {/*<strong>Всего новостей: {this.props.MainData.length} + {this.props.eshe_odno_svoistvo.length}</strong>*/}
            </div>
        )
    }
}

//Отлов ошибок на отсутствие автора в id 3
Article.propTypes = {
    MainData: PropTypes.shape({
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        bigText: PropTypes.string.isRequired
    })
};

// создание компонента через функцию - stateless component (то есть, компоненты без состояния)
const NewsPost = () => {
    return <p>Здесь будет пост Мы создали компонент с помощью функции</p>
};

//Controlled components (контролируемые компоненты)
class TestInput extends React.Component {
    state = {
        myValue: '',
    }
    // используется e.currentTarget.value
    onChangeHandler = (e) => {
        this.setState({ myValue: e.currentTarget.value })
    }
    onBtnClickHandler = (e) => {
        alert(this.state.myValue);
    }
    render() {
        return (
            <React.Fragment>
                <input
                    className='test-input'
                    onChange={this.onChangeHandler}
                    value={this.state.myValue}
                    placeholder='введите значение' />
                <button onClick={this.onBtnClickHandler}>Показать alert</button>
            </React.Fragment>
        )
    }
}

//Uncontrolled Components (неконтролируемый компонент)
// Главное отличие неконтролируемого компонента от контролируемого в том, что у него нет обработчика изменений,
// а значит нет постоянных вызовов setState и перерисовок.
//     Для того чтобы считать значение неконтролируемого компонента используется механизм refs.
//     Для неконтролируемого компонента в момент начальной загрузки можно указывать defaultValue.

class TestInputUncontrol extends React.Component {
    constructor(props) {
        super(props)
        this.input = React.createRef()
    }
    //жизненный цикл компонента - компонент примонтировался и фокус поставился в инпут
    componentDidMount() {
        // ставим фокус в input
        this.input.current.focus()
    }
    onBtnClickHandler = () => {
        alert(this.input.current.value)
    }
    render() {
        return (
            <React.Fragment>
                <input
                    className='test-input'
                    defaultValue=''
                    placeholder='введите значение'
                    ref={this.input}
                />
                <button onClick={this.onBtnClickHandler}>Показать alert</button>
            </React.Fragment>
        )
    }
}

class Add extends React.Component {
    state = { // добавили начальное состояние
        name: '',
        text: '',
        agree: false // новое значение состояния - agree (булево)
    }
    validate = () => {
        const { name, text, agree } = this.state
        if (name.trim() && text.trim() && agree) {
            return true
        }
        return false
    }
    onBtnClickHandler = (e) => {
        e.preventDefault();
        const { name, text } = this.state;
        alert(name + '\n' + text) // \n = перенос строки
    }
    handleNameChange = (e) => {
        //обработчик, в котором обновляем name
        this.setState({ name: e.currentTarget.value })
    }
    handleTextChange = (e) => {
        //обработчик, в котором обновляем text
        this.setState({ text: e.currentTarget.value })
    }

    handleCheckboxChange = (e) => { // обработчик кликов по чекбоксу
        // чтобы установить true/false считываем свойство checked
        this.setState({ agree: e.currentTarget.checked })
    }
    render() {
        const { name, text, agree } = this.state // вытащили значения из стейта

        // добавили value для name и для textarea
        return (
            // здесь далее идет JSX синтаксис, если мы хотим записать что то на JavaScript языке
            // то мы долнжны завернуть это в {}
            <form className='add'>
                <input
                    type='text'
                    onChange={this.handleNameChange}
                    className='add__author'
                    placeholder='Ваше имя'
                    value={name}
                />
                <textarea
                    onChange={this.handleTextChange}
                    className='add__text'
                    placeholder='Текст новости'
                    value={text}
                ></textarea>
                <label className='add__checkrule'>
                    <input type='checkbox' onChange={this.handleCheckboxChange} /> Я согласен с правилами
                </label>
                {/* кнопке добавили disabled равный (НЕ agree) */}
                <button
                    className='add__btn'
                    onClick={this.onBtnClickHandler}
                    disabled={!this.validate()}>
                    Показать alert
                </button>
            </form>
        )
    }
}

// создание компонента через класс - называются statefull компоненты (то есть, компоненты с состоянием)
class App extends React.Component{
    MyFunc(e) {
        console.log(this);
    }

    //если пользоваться выводом кнопки через первый способ - без bind и чтобы ело меньшн оперативной памяти, то нужно записать через
    //жирную стрелочную функцию
    MyFunc2= (e) => {
        debugger
        //открываем консоль и нажимаем на кнопку стобы посмотреть методы
        console.log(this);
    }

    render() {
        return (
            <React.Fragment>

                //возвращаем this
                <button onClick={this.MyFunc2}>Зима</button>
                <button onClick={this.MyFunc.bind(this)}>Зима</button> //вернет всю кнопку

                {/*чтобы не городить лишний div*/}
                {/*<div className="app">*/}
                    Всем привет, я компонент App! Я умею отображать новости.
                    <NewsPost />
                    <Add />
                    <TestInput /> {/* добавили вывод компонента */}
                    <TestInputUncontrol /> {/* добавили вывод компонента */}
                    <News />
                    {/*//myNewsList - используется в названии массива*/}
                    {/*//MainData - используется в названии this.props.MainData*/}
                    {/*//NewsMassive - используется в названии класса (statefull компоненты (то есть, компоненты с состоянием)),*/}
                    {/*//константы - через функцию - stateless component (то есть, компоненты без состояния)*/}
                    {/*//по другому statefull компонент NewsMassive использует имя свойства MainData(в котором лежат наши новости), которое хранит в себе массив myNewsList*/}
                    <NewsMassive MainData={myNewsList} />
                    {/*компонент NewsMassive имеет атрибут MainData со свойствами myNewsList*/}

                    {/*<MyComponent data={wizard} eshe_odno_svoistvo={[1,2,3,4,5]} />*/}
                {/*</div>*/}
            </React.Fragment>
        )
    }
}

//вывод в блок
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
