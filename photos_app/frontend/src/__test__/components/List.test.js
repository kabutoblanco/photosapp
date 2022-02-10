import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import List from '../../components/photo/List';

describe('<List/>', () => {
  test('Render del componente List', () => {
    const list = shallow(
      <ProviderMock>
        <List />
      </ProviderMock>
    );
    expect(list.length).toEqual(1);
  });
  test('Comprobar que no aparezca el mensaje de lista vacia', () => {
    const wrapper = shallow(
      <ProviderMock>
        <List />
      </ProviderMock>
    );
    expect(wrapper.find('.text-warning').exists())
  });
});
