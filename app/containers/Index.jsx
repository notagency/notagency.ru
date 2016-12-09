import React from 'react';
import Timer from 'helpers/Timer.jsx';
import { connect } from 'react-redux';

class Index extends Timer {

  constructor(props) {
      super(props);
      this.state.heroHeight = window.innerHeight;
  }

  componentDidMount() {
    super.componentDidMount();
    window.addEventListener('resize', this.fixHeroHeight.call(this));
    this.fixHeroHeight();
  }
  
  fixHeroHeight() {
    var minHeroHeight = 400,
        windowHeight = window.innerHeight,
        heroHeight = windowHeight > minHeroHeight ? windowHeight : minHeroHeight;
    this.setState({heroHeight: heroHeight});
  }

  render() {

    return (
      <div className="slide slide_hero" height={this.state.heroHeight}>
            <div className="hero">
                <h1 className={"hero__title animate top-to-bottom " + (this.state.timer > 400 ? "start-animation" : "")}>Команда разработчиков</h1>
                <h3 className={"hero__subtitle animate zoom-in "  + (this.state.timer > 600 ? "start-animation" : "")}>Профессиональная разработка сайтов на&nbsp;1C&#8209;Битрикс,&nbsp;Laravel,&nbsp;Symfony</h3>
                <hr className={"hero__hr  zoom-in animate " + (this.state.timer > 800 ? "start-animation" : "")} />
                <h3 className={"hero__subtitle bottom-to-top animate "  + (this.state.timer > 1000 ? "start-animation" : "")}>
                    По любым вопросам<br/>
                    <a href="mailto:info@notagency.ru">info@notagency.ru</a>
                </h3>
                <div className="about container-fluid">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className={"about__item bottom-to-top animate " + (this.state.timer > 1000 ? "start-animation" : "")}>
                                <div className="about__digit" data-digit="true">
                                    65
                                </div><div className="about__text">
                                    проектов по заказу агентств<br/>
                                    <strong>Articul&nbsp;Media, CreativePeople,<br/>ZephyrLab, NotaMedia</strong>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className={"about__item bottom-to-top animate " + (this.state.timer > 1100 ? "start-animation" : "")}>
                                <div className="about__digit" data-digit="true">
                                    20
                                </div><div className="about__text">
                                    проектов по заказу клиентов<br/>
                                    <strong>Yota, НПФ&nbsp;Сбербанка<br/>и других</strong>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className={"about__item bottom-to-top animate " + (this.state.timer > 1200 ? "start-animation" : "")}>
                                <div className="about__digit" data-digit="true">
                                    8
                                </div><div className="about__text">
                                    лет работы
                                    <br/><strong>в веб&#8209;индустрии</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isMobile: state.data.isMobile,
  };
}

export default connect(mapStateToProps)(Index);