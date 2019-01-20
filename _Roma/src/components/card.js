import {Component} from "react";
import React from "react";

class Card extends Component {
    render() {
        let paragraphs = this.props.paragraphs.map((item) =>
            <p className="card__paragraph">{item}</p>
        );
        return (
            <div className="grid-row card card--left">
                <div className="grid-no-2 card__left-side">
                    <div className="card__image">
                        <img src={this.props.image} alt="yourfunds" />
                    </div>
                </div>
                <div className="grid-no-6">
                    <div className="card__content">
                        <h2 className="card__header">{this.props.header}</h2>
                        {paragraphs}
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
