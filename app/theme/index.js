import { StyleSheet } from 'react-native';

const colors = {
  primaryColor: '#6b52ae',
  secondaryColor: '#e0e0e0',
  appBgColor: '#4F6D7A',
  textColor: '#393939',
  altTextColor: '#ffffff',
  noColor: 'transparent'
};

const metrics = {
  iOSStatusBarHeight: 40
};

const fontSizes = {
  title: 20,
  subtitle: 16,
  body: 14,
  small: 12
};

const styles = StyleSheet.create({
  appRoot: {
    flex: 1,
    backgroundColor: colors.appBgColor
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.appBgColor
  }
});

export default {
  colors,
  metrics,
  fontSizes,
  styles
};