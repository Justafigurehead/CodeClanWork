import React from 'react';

class CountrySelector extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedIndex: undefined
    };
  }

  handleChange(event){
    var newIndex = event.target.value;
    this.setState({
      selectedIndex: newIndex
    });
    var selectedCountry = this.props.countries[newIndex];
    this.props.selectCountry(selectedCountry);
  }

  render() {
    var countryOptions = this.props.countries.map((country, index) =>{
      return (
        <option value={index} key={index}> {country.name}</option>
        )
    });
    return (
      <select id="countries" 
              value={this.state.selectedIndex} 
              onChange={(event) =>{this.handleChange(event)}} >
        {countryOptions}
      </select>
    );
  }
}

module.exports = CountrySelector;