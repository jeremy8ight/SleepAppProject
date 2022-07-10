import {configureStore} from '../../reducers';
import {Provider} from 'react-redux';
import {MemberTimeDetails} from '../MemberTimeDetails';
import {render} from '@testing-library/react-native';
import * as React from 'react';

describe('SignIn screen', () => {
  const mockNavigation = jest.fn();

  it('should return correctly', () => {
    const initialState = {
      familyMemberIntervals: [],
      nameSelected: 'jeremy',
    };
    const store = configureStore(initialState);
    const component = (
      <Provider store={store}>
        <MemberTimeDetails navigation={mockNavigation} />
      </Provider>
    );
    const result = render(component).toJSON();
    expect(result).toMatchSnapshot()
  });
});
