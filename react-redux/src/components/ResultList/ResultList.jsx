import React from 'react';
import PropTypes from 'prop-types';

const ResultList = (props) => {
  const resultList = props.resultList.map((item) => (
    <li>{item}</li>
  ));
  return (
    <>
      <ul>
        {resultList}
      </ul>
    </>
  );
};

ResultList.propTypes = {

};

export default ResultList;
