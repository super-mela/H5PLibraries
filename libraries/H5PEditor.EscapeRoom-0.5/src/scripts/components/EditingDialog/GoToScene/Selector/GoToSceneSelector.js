import React from 'react';
import PropTypes from 'prop-types';
import SceneList from '@components/ControlBar/SceneSelector/SceneList.js';
import './GoToSceneSelector.scss';

/**
 * @param {object} props React props.
 * @returns {object} JSX element.
 */
const GoToSceneSelector = (props) => (
  <div className='go-to-scene-selector'>
    <div
      className='go-to-scene-selector-title'
    >{props.pickAnExistingSceneLabel}:</div>
    <div className='error-message'>{props.selectASceneErrorLabel}</div>
    <SceneList
      scenes={props.scenes}
      markedScene={props.markedScene}
      onSceneClick={props.setNextSceneId.bind(this)}
      isShowingCheck={true}
    />
  </div>
);

GoToSceneSelector.propTypes = {
  scenes: PropTypes.arrayOf(PropTypes.object).isRequired,
  markedScene: PropTypes.number,
  setNextSceneId: PropTypes.func.isRequired,
  pickAnExistingSceneLabel: PropTypes.string.isRequired,
  selectASceneErrorLabel: PropTypes.string.isRequired
};

export default GoToSceneSelector;
