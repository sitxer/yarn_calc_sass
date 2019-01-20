import React, { Component } from 'react';

//вывод страниц
class Header extends Component {
    render() {
        let pageCount = this.props.MainData.map((item) =>
            <li key={item.id} className="nav__item">
                <span className="nav__link" href="#">
                    {/*условие*/}
                    <span className={item.id === 1 ? 'first-link active-link' : 'first-link'}>{item.count}</span> {item.label}
                </span>
            </li>
        );

        return (
            <div className="header">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <nav className="nav">
                                <ul className="nav__list">
                                    {pageCount}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header
