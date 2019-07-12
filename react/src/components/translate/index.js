import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ru from '../../locales/ru.json';
import en from '../../locales/en.json';

export default function translate(pageName) {
  return Component => {
    class TranslationComponent extends React.Component {
      render() {
        const strings = {ru, en};
        const currentStrings = strings[this.props.currentLanguage][pageName];
        if (currentStrings) {
          return (
            <Component {...this.props}
                       strings={currentStrings}
                       currentLanguage={this.props.currentLanguage}
            />
          );
        }

        return (
          <Component {...this.props}
                     currentLanguage={this.props.currentLanguage}
          />
        );
      }
    }

    TranslationComponent.propTypes = {
      currentLanguage: PropTypes.string
    };

    const mapStateToProps = (state) => ({
      currentLanguage: state.lang.code
    });

    return connect(mapStateToProps)(TranslationComponent);
  };
}