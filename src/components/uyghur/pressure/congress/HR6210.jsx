import React, { Component } from 'react';

// components
import StepMessage from '../../../common/StepMessage';

// messages
import { congressHR6210 } from './../messages';

// segments
import {
  renderGovTrackSegment,
  renderStep3Segment
} from './renderSegments';

class HR6210 extends Component {
  render() {
    const steps = [
      {
        type: 'other',
        name: 'Track The Bill',
        subheader: 'Follow and track this bill on the govtrack site!',
        segment: renderGovTrackSegment("https://www.govtrack.us/congress/bills/116/hr6210"),
      },
      {
        type: 'name',
        name: 'Step 1',
      },
      {
        type: 'message',
        name: 'Step 2',
        message: congressHR6210,
      },
      {
        type: 'other',
        name: 'Step 3',
        subheader: 'Find your congress representative, and paste your message!',
        segment: renderStep3Segment(),
      },
    ]
    return (
      <div>
        <StepMessage
          steps={steps}
        />
      </div>
    );
  }
}

export default HR6210;
