/**
 * custom-style.snapshot.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 15.09.2016
 */

/* eslint-env jest */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

import React from 'react';
import renderer from 'react-test-renderer';
import Menu from '../src';
import content from './CONTENT.json';

describe('Menu', () => {
  it('with no built-in classes', () => {
    const component = renderer.create(<Menu content={content} noBuiltInClassNames />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('with customized class names', () => {
    const customClassNamesProp = {
      className: 'test-c',
      classNameContainer: 'test-cc',
      classNameContainerVisible: 'test-ccv',
      classNameItem: 'test-ci',
      /* classNameItemActive: 'test-cia',
      classNameItemHasActiveChild: 'test-cihac',
      classNameItemHasVisibleChild: 'test-cihvc',*/
      classNameLink: 'test-cl',
      /* classNameLinkActive: 'test-cla',
      classNameLinkHasActiveChild: 'test-clhac',*/
      classNameIcon: 'test-cic',
      classNameStateIcon: 'test-csi',
      iconNamePrefix: 'test-ip',
      iconNameStateVisible: 'test-isv',
      iconNameStateHidden: 'test-ish',
    };

    it('and built-in classes', () => {
      const component = renderer.create(<Menu content={content} {...customClassNamesProp} />);
      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    });
    it('and no built-in classes', () => {
      const component = renderer.create(
        <Menu content={content} noBuiltInClassNames {...customClassNamesProp} />,
      );
      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    });
    it('classNameContainer func support', () => {
      customClassNamesProp.classNameContainer = props => props.itemId ? 'child-cc' : 'test-cc'
      const component = renderer.create(
        <Menu content={content} noBuiltInClassNames {...customClassNamesProp} />
      );
      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
