import React,{Component} from 'react';
import PlacesAutocomplete from 'react-places-autocomplete-extended';
import { geocodeByAddress,getLatLng } from 'react-places-autocomplete-extended'


export default class GeoAddressComplete extends Component{
    constructor(props){
        super(props);
        this.state = {
            address: '' ,
        }
        this.onChange = (address) => this.setState({ address })
    }

    
    handleFormSubmit = (event) => {
        event.preventDefault()
     
    geocodeByAddress(this.state.address)
        .then(results => getLatLng(results[0]))
        .then(latLng => console.log('Success', latLng))
        .catch(error => console.error('Error', error))
      }
      render() {
        const handleSelect = (address, placeId) => {
            this.setState({ address, placeId })
           
            // You can do other things with address string or placeId. For example, geocode :)
          }
        const inputProps = {
          value: this.state.address,
          onChange: this.onChange,
          onBlur: () => {
            console.log('blur!')
          },
          type: 'search',
          placeholder: 'Enter your address',
          autoFocus: true,
        }
        const AutocompleteItem = ({ formattedSuggestion }) => (<div style={{fontFamily: 'Lato',height:'20px',paddingBottom: '3px'}}>
            <strong style={{fontSize: '10px'}}>{ formattedSuggestion.mainText }</strong>{' '}
            <small style={{fontSize: '8px',paddingLeft: '5px'}}>{ formattedSuggestion.secondaryText }</small>
          </div>)

const defaultStyles = {
    root: {
      position: 'relative',
      paddingBottom: '0px',
    },
    input: {
       height: '4vh',
        width: '25vw',
    border: '#E6E8ED 1px solid',
    borderRadius: '4px',
    outline: 'none'
    },
    
    autocompleteContainer: {
      position: 'absolute',
      top: '100%',
      backgroundColor: '#FBFBFD',
      border: '1px solid #E6E8ED',
      width: '25vw',
    },
    autocompleteItem: {
      backgroundColor: '#ffffff',
      height: '2.5vh',
      paddingBottom: '1px',
      color: '#555555',
      cursor: 'pointer',
      fontFamily: 'smaller'
    },
    autocompleteItemActive: {
      backgroundColor: '#fafafa'
    },
    googleLogoContainer: {
      textAlign: 'right',
      padding: '1px',
      backgroundColor: '#fafafa'
    },
    
  }
  const handleEnter = (address) => {
    geocodeByAddress(address)
      .then(results => {
        console.log('results', results)
      })
  }
 
        return (
          <div>
                  <PlacesAutocomplete
                    inputProps={inputProps}
                    autocompleteItem={AutocompleteItem}
                    styles={defaultStyles}
                    onSelect={handleSelect}
                    onEnterKeyDown={handleEnter}
                  />
          </div>
        
            
        )
      }
}