import React, {Component} from 'react';
import logo from './img/theme/icons/i.png';
import Header from './components/header';

//массив с данными чекбоксов
const projectCheckbox = [
    {
        id: 1,
        label: 'Копка ям123'
    },
    {
        id: 2,
        label: 'Вывоз грунта'
    },
    {
        id: 3,
        label: 'Вывоз строительного мусора'
    },
    {
        id: 4,
        label: 'Перемещение сыпучего материала'
    },
    {
        id: 5,
        label: 'Копка ям для растений (вручную)'
    },
    {
        id: 6,
        label: 'Корчевание деревьев'
    }
];

//массив с данными страниц
const pageLabels = [
    {
        id: 1,
        count: 1,
        label: 'Услуги'
    },
    {
        id: 2,
        count: 2,
        label: 'Калькулятор'
    },
    {
        id: 3,
        count: 3,
        label: 'Заявка'
    }
];

//массив с данными блока
const projectBlock = [
    {
        id: 1,
        brownTitle: 'Копка ям',
        title: 'Какой объем планируется выкопать',
        popup: 1,
        img: 1,
        radio1: 1,
        radio2: 1,
        radio3: 1,
        radio4: 1,
        col7: 1,
        col12: 1,
        col5: 1
    },
    {
        id: 2,
        brownTitle: 'Копка ям',
        title: 'Какой объем планируется выкопать',
        popup: 1,
        img: 1,
        radio1: 1,
        radio2: 1,
        radio3: 1,
        radio4: 1,
        col7: 1,
        col12: 1,
        col5: 1
    }
];

//вывод строк с чекбоксами
class BlockInServices extends Component {
    render() {
        const checkRow = this.props.MainData.map(function (item) {
            return (
                <div key={item.id} className="row no-gutters standart-padding">
                    <div className="col-7">
                        <div className="main-block__mini-title">{item.title}
                            {
                                item.popup === 1 ? <React.Fragment><img alt="logo" className="desc-img" src={logo} /><div className="popup">Здесь будут когда-нибудь подсказки к этому разделу!</div></React.Fragment> : null
                            }
                        </div>
                    </div>

                    {
                        item.col5 === 1 ?
                            <div className="col-5">
                                <div className="counter">
                                    <div className="counter__minus">-</div>
                                    <input className="counter__input" placeholder="0" type="text" />
                                    <div className="counter__plus">+</div>
                                </div>
                            </div>
                        : null
                    }



                    <div className="col-12">
                        <label className="checkbox-radio-label">
                            <input className="checkbox-radio-label__checxbox-input" type="radio" name="transport" value="" />
                            <span className="checkbox-radio-label__checxbox-cover round"></span>
                            <span className="checkbox-radio-label__checkbox-text">Переместим сами</span>
                        </label>
                        <label className="checkbox-radio-label">
                            <input className="checkbox-radio-label__checxbox-input" type="radio" name="transport" value="" />
                            <span className="checkbox-radio-label__checxbox-cover round"></span>
                            <span className="checkbox-radio-label__checkbox-text">Ручной</span>
                        </label>
                        <label className="checkbox-radio-label">
                            <input className="checkbox-radio-label__checxbox-input" type="radio" name="transport" value="" />
                            <span className="checkbox-radio-label__checxbox-cover round"></span>
                            <span className="checkbox-radio-label__checkbox-text">Экскаватор</span>
                        </label>
                    </div>

                </div>
            )
        });

        return (
            <React.Fragment>
                {checkRow}
            </React.Fragment>
        )
    }
}

//вывод блоков одной услуги
class MassiveOfCheckbox  extends Component {
    render() {
        const checkRow = this.props.MainData.map(function (item) {
            return (
                <label key={item.id} className="checkbox-radio-label">
                    <input className="checkbox-radio-label__checxbox-input" type="checkbox" name="one" value="" id="first-check"/>
                    <span className="checkbox-radio-label__checxbox-cover"></span>
                    <span className="checkbox-radio-label__checkbox-text">{item.label}</span>
                </label>
            )
        });

        return (
            <React.Fragment>
                <p className="first-slide__desc">Кликните на значок <img alt="logo" className="desc-img" src={logo}/>
                    если какой-нибудь вопрос вызывет сложности — выпавшая подсказка поможет вам сориентироваться.
                </p>
                <div className="check-block">
                    {checkRow}
                </div>
            </React.Fragment>
        )
    }
}

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header MainData={pageLabels}/>
                <div className="slider">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <div className="slider single-item">
                                    <section className="first-slide">
                                        <MassiveOfCheckbox MainData={projectCheckbox}/>
                                    </section>

                                    <section className="second-slide">

                                        <div className="main-block" id="first-block">
                                            <h2 className="main-block__title">Копка ям</h2>
                                            <div className="main-block__main-title-block">
                                                <BlockInServices MainData={projectBlock}/>
                                            </div>
                                        </div>

                                        <div className="main-block" id="second-block">
                                            <h2 className="main-block__title">Вывоз грунта</h2>
                                            <div className="main-block__main-title-block">
                                                <div className="row no-gutters standart-padding">
                                                    <div className="col-7">
                                                        <div className="main-block__mini-title">Какой объем планируетсявывезти?
                                                            <img alt="logo" className="desc-img" src={logo} />
                                                            <div className="popup">Здесь будут когда-нибудь подсказки к этому разделу!</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-5">
                                                        <div className="counter">
                                                            <div className="counter__minus">-</div>
                                                            <input className="counter__input" placeholder="0" type="text"/>
                                                            <div className="counter__plus">+</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters standart-padding">
                                                    <div className="col-7">
                                                        <div className="main-block__mini-title">Способ перемещения?
                                                            <img alt="logo" className="desc-img" src={logo} />
                                                            <div className="popup">Здесь будут когда-нибудь подсказки к этому разделу!</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="checkbox-radio-label">
                                                        <input className="checkbox-radio-label__checxbox-input" type="radio" name="transport" value=""/>
                                                            <span className="checkbox-radio-label__checxbox-cover round"></span>
                                                            <span className="checkbox-radio-label__checkbox-text">Переместим сами</span>
                                                        </label>
                                                        <label className="checkbox-radio-label">
                                                            <input className="checkbox-radio-label__checxbox-input" type="radio" name="transport" value=""/>
                                                            <span className="checkbox-radio-label__checxbox-cover round"></span>
                                                            <span className="checkbox-radio-label__checkbox-text">Ручной</span>
                                                        </label>
                                                        <label className="checkbox-radio-label">
                                                            <input className="checkbox-radio-label__checxbox-input" type="radio" name="transport" value=""/>
                                                            <span className="checkbox-radio-label__checxbox-cover round"></span>
                                                            <span className="checkbox-radio-label__checkbox-text">Экскаватор</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters standart-padding alert">
                                                    <div className="col-7">
                                                        <div className="main-block__mini-title">Какой способ погрузки?
                                                            <img alt="logo" className="desc-img" src={logo} />
                                                            <div className="popup">Здесь будут когда-нибудь подсказки к этому разделу!</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="checkbox-radio-label">
                                                        <input className="checkbox-radio-label__checxbox-input" type="radio" name="
                                                        move" value=""/>
                                                            <span className="checkbox-radio-label__checxbox-cover round"></span>
                                                            <span className="checkbox-radio-label__checkbox-text">Погрузим сами</span>
                                                        </label>
                                                        <label className="checkbox-radio-label">
                                                            <input className="checkbox-radio-label__checxbox-input" type="radio" name="move" value=""/>
                                                            <span className="checkbox-radio-label__checxbox-cover round"></span>
                                                            <span className="checkbox-radio-label__checkbox-text">Ручной</span>
                                                        </label>
                                                        <label className="checkbox-radio-label">
                                                            <input className="checkbox-radio-label__checxbox-input" type="radio" name="move" value=""/>
                                                            <span className="checkbox-radio-label__checxbox-cover round"></span>
                                                            <span className="checkbox-radio-label__checkbox-text">Экскаватор</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters standart-padding-no-border">
                                                    <div className="col-12">
                                                        <div className="price-block">
                                                            <div className="price-block__for-digger">За вывоз:
                                                                <span id="for-digger-pit1">10 524</span></div>
                                                            <div className="price-block__for-digger">За погрузку:
                                                                <span id="for-digger-pit2">10 524</span></div>
                                                            <div className="price-block__total">Всего за копку ям:
                                                                <span id="total-pit1">10 524</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main-block" id="third-block">
                                            <h2 className="main-block__title">Вывоз строительного мусора</h2>
                                            <div className="main-block__main-title-block">
                                                <div className="row no-gutters standart-padding">
                                                    <div className="col-7">
                                                        <div className="main-block__mini-title">Объем строительного мусора?
                                                            <img alt="logo" className="desc-img" src={logo} />
                                                            <div className="popup">Здесь будут когда-нибудь подсказки к
                                                                этому разделу!
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-5">
                                                        <div className="counter">
                                                            <div className="counter__minus">-</div>
                                                            <input className="counter__input" placeholder="0" type="text"/>
                                                            <div className="counter__plus">+</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters standart-padding">
                                                    <div className="col-7">
                                                        <div className="main-block__mini-title">Какой способ перемещения?
                                                            <img alt="logo" className="desc-img" src={logo} />
                                                            <div className="popup">Здесь будут когда-нибудь подсказки к
                                                                этому разделу!
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="checkbox-radio-label">
                                                        <input className="checkbox-radio-label__checxbox-input" type="radio" name="transport-trash" value=""/>
                                                            <span className="checkbox-radio-label__checxbox-cover round"></span>
                                                            <span className="checkbox-radio-label__checkbox-text">Перемещение не требуется</span>
                                                        </label>
                                                        <label className="checkbox-radio-label">
                                                            <input className="checkbox-radio-label__checxbox-input" type="radio" name="transport-trash" value=""/>
                                                            <span className="checkbox-radio-label__checxbox-cover round"></span>
                                                            <span className="checkbox-radio-label__checkbox-text">Переместите сами</span>
                                                        </label>
                                                        <label className="checkbox-radio-label">
                                                            <input className="checkbox-radio-label__checxbox-input" type="radio" name="transport-trash" value=""/>
                                                            <span className="checkbox-radio-label__checxbox-cover round"></span>
                                                            <span className="checkbox-radio-label__checkbox-text">Ручной</span>
                                                        </label>
                                                        <label className="checkbox-radio-label">
                                                            <input className="checkbox-radio-label__checxbox-input" type="radio" name="transport-trash" value=""/>
                                                            <span className="checkbox-radio-label__checxbox-cover round"></span>
                                                            <span className="checkbox-radio-label__checkbox-text">Ручной</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters standart-padding">
                                                    <div className="col-7">
                                                        <div className="main-block__mini-title">Какой способ погрузки?
                                                            <img alt="logo" className="desc-img" src={logo} />
                                                            <div className="popup">Здесь будут когда-нибудь подсказки к этому разделу!</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="checkbox-radio-label">
                                                        <input className="checkbox-radio-label__checxbox-input" type="radio" name="move-trash" value=""/>
                                                            <span className="checkbox-radio-label__checxbox-cover round"></span>
                                                            <span className="checkbox-radio-label__checkbox-text">Погрузим сами</span>
                                                        </label>
                                                        <label className="checkbox-radio-label">
                                                            <input className="checkbox-radio-label__checxbox-input" type="radio" name="move-trash" value=""/>
                                                            <span className="checkbox-radio-label__checxbox-cover round"></span>
                                                            <span className="checkbox-radio-label__checkbox-text">Ручной</span>
                                                        </label>
                                                        <label className="checkbox-radio-label">
                                                            <input className="checkbox-radio-label__checxbox-input" type="radio" name="move-trash" value=""/>
                                                            <span className="checkbox-radio-label__checxbox-cover round"></span>
                                                            <span className="checkbox-radio-label__checkbox-text">Экскаватор</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters standart-padding-no-border">
                                                    <div className="col-12">
                                                        <div className="price-block">
                                                            <div className="price-block__for-digger">За вывоз:
                                                                <span id="for-digger-trash1">10 524</span>
                                                            </div>
                                                            <div className="price-block__for-digger">За погрузку:
                                                                <span id="for-digger-trash">10 524</span>
                                                            </div>
                                                            <div className="price-block__total">Всего за вывоз строительного мусора:
                                                                <div id="total-trash2">10 524</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main-block" id="fourth-block">
                                            <h2 className="main-block__title">Перемещение сыпуч. материала</h2>
                                            <div className="main-block__main-title-block">
                                                <div className="row no-gutters standart-padding">
                                                    <div className="col-7">
                                                        <div className="main-block__mini-title">Что планируется переместить?
                                                            <img alt="logo" className="desc-img" src={logo} />
                                                            <div className="popup">Здесь будут когда-нибудь подсказки к этому разделу!</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="checkbox-radio-label">
                                                        <input className="checkbox-radio-label__checxbox-input" type="radio" name="transport-material" value=""/>
                                                            <span className="checkbox-radio-label__checxbox-cover round"></span>
                                                            <span className="checkbox-radio-label__checkbox-text">Землю</span>
                                                        </label>
                                                        <label className="checkbox-radio-label">
                                                            <input className="checkbox-radio-label__checxbox-input" type="radio" name="transport-material" value=""/>
                                                            <span className="checkbox-radio-label__checxbox-cover round"></span>
                                                            <span className="checkbox-radio-label__checkbox-text">Песок</span>
                                                        </label>
                                                        <label className="checkbox-radio-label">
                                                            <input className="checkbox-radio-label__checxbox-input" type="radio" name="transport-material" value=""/>
                                                            <span className="checkbox-radio-label__checxbox-cover round"></span>
                                                            <span className="checkbox-radio-label__checkbox-text">Строительный мусор</span>
                                                        </label>
                                                        <label className="checkbox-radio-label">
                                                            <input className="checkbox-radio-label__checxbox-input" type="radio" name="transport-material" value=""/>
                                                            <span className="checkbox-radio-label__checxbox-cover round"></span>
                                                            <span className="checkbox-radio-label__checkbox-text">Щебень</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters standart-padding">
                                                    <div className="col-7">
                                                        <div className="main-block__mini-title">Какой объем планируется переместить?
                                                            <img alt="logo" className="desc-img" src={logo} />
                                                            <div className="popup">Здесь будут когда-нибудь подсказки к этому разделу!</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-5">
                                                        <div className="counter">
                                                            <div className="counter__minus">-</div>
                                                            <input className="counter__input" placeholder="0" type="text"/>
                                                            <div className="counter__plus">+</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters standart-padding">
                                                    <div className="col-7">
                                                        <div className="main-block__mini-title">Какой способ погрузки?
                                                            <img alt="logo" className="desc-img" src={logo} />
                                                            <div className="popup">Здесь будут когда-нибудь подсказки к этому разделу!</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="checkbox-radio-label">
                                                        <input className="checkbox-radio-label__checxbox-input" type="radio" name="move-material" value=""/>
                                                            <span className="checkbox-radio-label__checxbox-cover round"></span>
                                                            <span className="checkbox-radio-label__checkbox-text">Ручной</span>
                                                        </label>
                                                        <label className="checkbox-radio-label">
                                                            <input className="checkbox-radio-label__checxbox-input" type="radio" name="move-material" value=""/>
                                                            <span className="checkbox-radio-label__checxbox-cover round"></span>
                                                            <span className="checkbox-radio-label__checkbox-text">Экскаватор</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters standart-padding">
                                                    <div className="col-7">
                                                        <div className="main-block__mini-title">На сколько?
                                                            <img alt="logo" className="desc-img" src={logo} />
                                                            <div className="popup">Здесь будут когда-нибудь подсказки к этому разделу!</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="main-block__mini-title">В метрах</div>
                                                    </div>
                                                    <div className="col-5">
                                                        <div className="counter">
                                                            <div className="counter__minus">-</div>
                                                            <input className="counter__input" placeholder="0" type="text"/>
                                                            <div className="counter__plus">+</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="main-block__mini-title">В шагах</div>
                                                    </div>
                                                    <div className="col-5">
                                                        <div className="counter">
                                                            <div className="counter__minus">-</div>
                                                            <input className="counter__input" placeholder="0" type="text"/>
                                                            <div className="counter__plus">+</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters standart-padding-no-border">
                                                    <div className="col-12">
                                                        <div className="price-block">
                                                            <div className="price-block__total">Всего за перемещение:
                                                                <div id="total-trash3">10 524</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main-block" id="fifth-block">
                                            <h2 className="main-block__title">Копка ям для растений (вручную)</h2>
                                            <div className="main-block__main-title-block">
                                                <div className="row no-gutters standart-padding">
                                                    <div className="col-7">
                                                        <div className="main-block__mini-title">Малых ям
                                                            <img alt="logo" className="desc-img" src={logo} />
                                                            <div className="popup">Здесь будут когда-нибудь подсказки к этому разделу!</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-5">
                                                        <div className="counter">
                                                            <div className="counter__minus">-</div>
                                                            <input className="counter__input" placeholder="0" type="text"/>
                                                            <div className="counter__plus">+</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-7">
                                                        <div className="main-block__mini-title">Средних ям
                                                            <img alt="logo" className="desc-img" src={logo} />
                                                            <div className="popup">Здесь будут когда-нибудь подсказки к этому разделу!</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-5">
                                                        <div className="counter">
                                                            <div className="counter__minus">-</div>
                                                            <input className="counter__input" placeholder="0" type="text"/>
                                                            <div className="counter__plus">+</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-7">
                                                        <div className="main-block__mini-title">Больших ям
                                                            <img alt="logo" className="desc-img" src={logo} />
                                                            <div className="popup">Здесь будут когда-нибудь подсказки к этому разделу!</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-5">
                                                        <div className="counter">
                                                            <div className="counter__minus">-</div>
                                                            <input className="counter__input" placeholder="0" type="text"/>
                                                            <div className="counter__plus">+</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters standart-padding">
                                                    <div className="col-7">
                                                        <div className="main-block__mini-title">Какой тип земли?
                                                            <img alt="logo" className="desc-img" src={logo} />
                                                            <div className="popup">Здесь будут когда-нибудь подсказки к этому разделу!</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="checkbox-radio-label">
                                                        <input className="checkbox-radio-label__checxbox-input" type="radio" name="what-type-ground" value=""/>
                                                            <span className="checkbox-radio-label__checxbox-cover round"></span>
                                                            <span className="checkbox-radio-label__checkbox-text">Рыхлая земля</span>
                                                        </label>
                                                        <label className="checkbox-radio-label">
                                                            <input className="checkbox-radio-label__checxbox-input" type="radio" name="what-type-ground" value=""/>
                                                            <span className="checkbox-radio-label__checxbox-cover round"></span>
                                                            <span className="checkbox-radio-label__checkbox-text">Глинистая или мокрая земля</span>
                                                        </label>
                                                        <label className="checkbox-radio-label">
                                                            <input className="checkbox-radio-label__checxbox-input" type="radio" name="what-type-ground" value=""/>
                                                            <span className="checkbox-radio-label__checxbox-cover round"></span>
                                                            <span className="checkbox-radio-label__checkbox-text">Сухая глина или каменистая почва</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters standart-padding">
                                                    <div className="col-7">
                                                        <div className="main-block__mini-title">Что делать с вырытым грунтом?
                                                            <img alt="logo" className="desc-img" src={logo} />
                                                            <div className="popup">Здесь будут когда-нибудь подсказки к этому разделу!</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="checkbox-radio-label">
                                                        <input className="checkbox-radio-label__checxbox-input" type="radio" name="transport-grunt" value=""/>
                                                            <span className="checkbox-radio-label__checxbox-cover round"></span>
                                                            <span className="checkbox-radio-label__checkbox-text">Оставить на месте</span>
                                                        </label>
                                                        <label className="checkbox-radio-label">
                                                            <input className="checkbox-radio-label__checxbox-input" type="radio" name="transport-grunt" value=""/>
                                                            <span className="checkbox-radio-label__checxbox-cover round"></span>
                                                            <span className="checkbox-radio-label__checkbox-text">Переместить</span>
                                                        </label>
                                                        <label className="checkbox-radio-label">
                                                            <input className="checkbox-radio-label__checxbox-input" type="radio" name="transport-grunt" value=""/>
                                                            <span className="checkbox-radio-label__checxbox-cover round"></span>
                                                            <span className="checkbox-radio-label__checkbox-text">Вывезти</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters standart-padding">
                                                    <div className="col-7">
                                                        <div className="main-block__mini-title">Какая дальность перемещения?
                                                            <img alt="logo" className="desc-img" src={logo} />
                                                            <div className="popup">Здесь будут когда-нибудь подсказки к этому разделу!</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="main-block__mini-title">В метрах</div>
                                                    </div>
                                                    <div className="col-5">
                                                        <div className="counter">
                                                            <div className="counter__minus">-</div>
                                                            <input className="counter__input" placeholder="0" type="text"/>
                                                            <div className="counter__plus">+</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="main-block__mini-title">В шагах</div>
                                                    </div>
                                                    <div className="col-5">
                                                        <div className="counter">
                                                            <div className="counter__minus">-</div>
                                                            <input className="counter__input" placeholder="0" type="text"/>
                                                            <div className="counter__plus">+</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters standart-padding-no-border">
                                                    <div className="col-12">
                                                        <div className="price-block">
                                                            <div className="price-block__for-digger">За копку:
                                                                <span id="for-digger-pit3">10 524</span>
                                                            </div>
                                                            <div className="price-block__for-digger">За перемещение:
                                                                <span id="for-digger-pit4">10 524</span>
                                                            </div>
                                                            <div className="price-block__total">Всего за копку ям для растений:
                                                                <span id="total-trash">10 524</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main-block" id="six-block">
                                            <h2 className="main-block__title">Корчевание деревьев</h2>
                                            <div className="main-block__main-title-block">
                                                <div className="row no-gutters standart-padding">
                                                    <div className="col-7">
                                                        <div className="main-block__mini-title">Как?
                                                            <img alt="logo" className="desc-img" src={logo} />
                                                            <div className="popup">Здесь будут когда-нибудь подсказки к этому разделу!</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="checkbox-radio-label">
                                                        <input className="checkbox-radio-label__checxbox-input" type="radio" name="what-type-three" value=""/>
                                                            <span className="checkbox-radio-label__checxbox-cover round"></span>
                                                            <span className="checkbox-radio-label__checkbox-text">Вручную</span>
                                                        </label>
                                                        <label className="checkbox-radio-label">
                                                            <input className="checkbox-radio-label__checxbox-input" type="radio" name="what-type-three" value=""/>
                                                            <span className="checkbox-radio-label__checxbox-cover round"></span>
                                                            <span className="checkbox-radio-label__checkbox-text">Экскаватором</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </section>

                                    {/*<section className="third-slide">*/}
                                    {/*<div className="third-slide__desc">1. Личная информация<input className="third-slide__input"*/}
                                    {/*type="tel"*/}
                                    {/*placeholder="Введите Ваш телефон"/><input*/}
                                    {/*className="third-slide__input" type="text" placeholder="Введите Вашу почту"/><input*/}
                                    {/*className="third-slide__input" type="text"*/}
                                    {/*placeholder="Код на скидку"/></div>*/}
                                    {/*<div className="third-slide__desc">2. Оставить заявку</div>*/}
                                    {/*<div className="third-slide__map"><img className="third-slide__img" src="/img/content/map.png"*/}
                                    {/*alt="" role="presentation"/></div>*/}
                                    {/*</section>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="footer__desc-black">всего: <span id="total-black">999 999 </span> р.</div>
                            <div className="footer__desc">рассчитать стоимость</div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
    );
    }
    }

export default App;