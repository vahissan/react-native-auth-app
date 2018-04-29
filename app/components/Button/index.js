import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import Theme from "../../theme";
import styles from './styles';

export default class ButtonComponent extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render() {
    return (
      <Button 
        {...this.props}
        containerViewStyle={styles.button}
        buttonStyle={styles.button}
        backgroundColor={Theme.colors.primaryColor}
        raised={true}
      />
    );
  }
}


