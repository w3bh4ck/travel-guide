import React from 'react';
import RegionCard from './RegionCard';

const RegionList = ({ countries, regions }) => {

  const regionArray = regions.map((region, i) => {
    const countryList = countries.filter(country => {
      return country.region === region;
    });

    return (
        <RegionCard className='tc'
          key={i}
          name={region}
          countryList={countryList}
        />
    );
  });
  return (<div> {regionArray} </div>);
};

export default RegionList;
