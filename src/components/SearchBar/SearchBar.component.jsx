import React from 'react';
import './SearchBar.styles.scss';

class SearchBar extends React.Component {

    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return(
            <div className="searchbar">
            <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
            <label>Image Search :</label>
            <input 
            type="text"
            value={this.state.term} 
            onChange={e => this.setState({ term: e.target.value })} 
            />
            </div>
            </form>
        </div>
        ); 
    }
};

export default SearchBar;