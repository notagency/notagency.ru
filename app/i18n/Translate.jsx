/* eslint react/prefer-stateless-function: "off" */
/* Because stateless functions don't have context it seems */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import strings from '../json/content.json';

export default function translate(key) {
    return Component => {
        const stateToProps = state => ({
            currentLanguage: state.lang.code
        });

        class TranslationComponent extends React.Component {
            render() {
                const currentStrings = strings[this.props.currentLanguage][key];
                const merged = {
                    ...this.props.currentStrings,
                    ...currentStrings
                };
                if (currentStrings) {
                    return (
                        <Component {...this.props}
                          strings={merged}
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
            currentStrings: PropTypes.object,
            currentLanguage: PropTypes.string
        };

        return connect(stateToProps)(TranslationComponent);
    };
}
