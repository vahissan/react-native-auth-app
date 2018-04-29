import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

describe('Button component', () => {
  const onPress = jest.fn();
  const title = "Button";
  const wrapper = shallow(<Button title={title} onPress={() => onPress()} />);
  
  it('Should render properly', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should call onPress handler when pressed', () => {
    wrapper.simulate('press');
    expect(onPress).toHaveBeenCalled();
  });
});