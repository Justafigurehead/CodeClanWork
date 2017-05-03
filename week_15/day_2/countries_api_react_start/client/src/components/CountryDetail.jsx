import React from 'react';

class CountryDetail extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    if(!this.props.country){
      return null;
    }
    return (
      <div>
        <h3>Details for: {this.props.country.name}</h3>
          <ul>
            <li>{this.props.country.capital}</li>
            <li>{this.props.country.currencies[0].name}({this.props.country.currencies[0].symbol})</li>
          </ul>
      </div>
    );
  }
}

module.exports = CountryDetail;
