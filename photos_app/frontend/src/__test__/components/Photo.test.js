import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import PhotoMock from '../../__mocks__/PhotoMock';
import Photo from '../../components/photo/Card';

describe('<Product/>', () => {
  test('Render del componente Photo', () => {
    const product = shallow(
      <ProviderMock>
        <Photo photo={PhotoMock} />
      </ProviderMock>
    );
    expect(product.length).toEqual(1);
  });
  test('Comprobar que se marque la estrella amarilla', () => {
    const wrapper = mount(
      <ProviderMock>
        <Photo photo={PhotoMock} />
      </ProviderMock>
    );
    expect(wrapper.find('.favorite').prop('src')).toEqual('/static/frontend/img/star_1.png');
  });
});
