//import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

const Chart = (props) => {
  return (
    <div>
      test
    </div>
  );
}

export default Chart;
