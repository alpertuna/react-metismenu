/**
 * @file active-via-react.snapshot.jsx
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 09.11.2016
 */

/* eslint-env jest */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

import React from 'react';
import renderer from 'react-test-renderer';
import Menu from '../src';
import content from './CONTENT.json';

// Mocked Materials
const createTestApplication = (defaultState) => {
  let menu;
  let setState;

  const state = defaultState || {};

  class TestApp extends React.Component {
    constructor() {
      super();

      this.state = state;
      setState = this.setState.bind(this);
    }
    render() {
      return (
        <Menu
          ref={(ref) => { menu = ref; }}
          content={content}
          activeLinkId={this.state.activeLinkId}
          activeLinkTo={this.state.activeLinkTo}
          activeLinkLabel={this.state.activeLinkLabel}
        />
      );
    }
  }

  const app = renderer.create(<TestApp />);

  return {
    menu,
    app,
    setState,
  };
};

describe('Menu with recursive content', () => {
  let snapshotSample;

  // Ref Methods
  it(
    'should looks like snapshot when you activate link with "changeActiveLinkId" method',
    () => {
      const topic = createTestApplication();
      topic.menu.changeActiveLinkId(8);
      const tree = topic.app.toJSON();
      snapshotSample = JSON.stringify(tree);
      expect(tree).toMatchSnapshot();
    },
  );

  it(
    'should looks like others when you activate link with "changeActiveLinkTo" method',
    () => {
      const topic = createTestApplication();

      topic.menu.changeActiveLinkTo('#level-3-item-1');
      const tree = topic.app.toJSON();
      expect(tree).toMatchSnapshot();
      expect(JSON.stringify(tree)).toEqual(snapshotSample);
    },
  );

  it(
    'should looks like others when you activate link with "changeActiveLinkLabel" method',
    () => {
      const topic = createTestApplication();

      topic.menu.changeActiveLinkLabel('Level 3 Item 1');
      const tree = topic.app.toJSON();
      expect(tree).toMatchSnapshot();
      expect(JSON.stringify(tree)).toEqual(snapshotSample);
    },
  );

  // Initial Prop
  it(
    'should looks like others when you activate link with "activeLinkId" prop with state',
    () => {
      const topic = createTestApplication({ activeLinkId: 8 });
      const tree = topic.app.toJSON();
      expect(tree).toMatchSnapshot();
      expect(JSON.stringify(tree)).toEqual(snapshotSample);
    },
  );

  it(
    'should looks like others when you activate link with "activeLinkTo" prop with state',
    () => {
      const topic = createTestApplication({ activeLinkTo: '#level-3-item-1' });
      const tree = topic.app.toJSON();
      expect(tree).toMatchSnapshot();
      expect(JSON.stringify(tree)).toEqual(snapshotSample);
    },
  );

  it(
    'should looks like others when you activate link with "activeLinkLabel" prop with state',
    () => {
      const topic = createTestApplication({ activeLinkLabel: 'Level 3 Item 1' });
      const tree = topic.app.toJSON();
      expect(tree).toMatchSnapshot();
      expect(JSON.stringify(tree)).toEqual(snapshotSample);
    },
  );

  // Updated Prop with State
  it(
    'should looks like others when you activate link with "activeLinkId" prop with state',
    () => {
      const topic = createTestApplication();

      topic.setState({ activeLinkId: 8 });

      const tree = topic.app.toJSON();
      expect(tree).toMatchSnapshot();
      expect(JSON.stringify(tree)).toEqual(snapshotSample);
    },
  );

  it(
    'should looks like others when you activate link with "activeLinkTo" prop with state',
    () => {
      const topic = createTestApplication();

      topic.setState({ activeLinkTo: '#level-3-item-1' });

      const tree = topic.app.toJSON();
      expect(tree).toMatchSnapshot();
      expect(JSON.stringify(tree)).toEqual(snapshotSample);
    },
  );

  it(
    'should looks like others when you activate link with "activeLinkLabel" prop with state',
    () => {
      const topic = createTestApplication();

      topic.setState({ activeLinkLabel: 'Level 3 Item 1' });

      const tree = topic.app.toJSON();
      expect(tree).toMatchSnapshot();
      expect(JSON.stringify(tree)).toEqual(snapshotSample);
    },
  );
});
