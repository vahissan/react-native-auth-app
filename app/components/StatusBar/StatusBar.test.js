import React from 'react';
import { shallow } from 'enzyme';
import StatusBar from './index';

describe('StatusBar component', () => {
  jest.mock('Platform', () => {
    const Platform = require.requireActual('Platform');
    Platform.OS = 'ios';
    return Platform;
  });
  
  it('should render propery', () => {
    const wrapper = shallow(<StatusBar />);
    expect(wrapper).toMatchSnapshot();
  });
});