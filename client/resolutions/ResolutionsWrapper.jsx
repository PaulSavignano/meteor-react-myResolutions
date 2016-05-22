import React from 'react';
import {render} from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';

Resolutions = new Mongo.Collection('resolutions');

export default class ResolutionsWrapper extends TrackerReact(React.Component) {
  resolutions() {
    return Resolutions.find().fetch();
  }

  render() {
    return (
      <div>
        <h1>My Resolutions</h1>
        <ResolutionsForm />
        <ul className="resolutions">
          {this.resolutions().map((resolution) => {
            return <ResolutionSingle key={resolution._id} resolution={resolution} />
          })}
        </ul>
      </div>
    )
  }
}
