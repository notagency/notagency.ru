import React from 'react';
import Timer from 'helpers/Timer.jsx';

class IndexTitle extends Timer {
  render() {
      return (
        <div>
            <h1 className={"hero__title animate top-to-bottom " + (this.state.timer > 400 ? "start-animation" : "")}>Команда разработчиков</h1>
            <h3 className={"hero__subtitle animate zoom-in "  + (this.state.timer > 600 ? "start-animation" : "")}>Профессиональная разработка сайтов на&nbsp;1C&#8209;Битрикс,&nbsp;Laravel,&nbsp;Symfony</h3>
            <hr className={"hero__hr  zoom-in animate " + (this.state.timer > 800 ? "start-animation" : "")} />
            <h3 className={"hero__subtitle bottom-to-top animate "  + (this.state.timer > 1000 ? "start-animation" : "")}>
                По любым вопросам<br/>
                <a href="mailto:info@notagency.ru">info@notagency.ru</a>
            </h3>
        </div>
      );
  }
};

export default IndexTitle;