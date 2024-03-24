import './index.css'
import React from  'react';
import {Component} from 'react';

class LightDarkMode extends Component{
    state ={isbackgroundChanged:false}

    onClickBackgroundButtonClick = () =>  {
        this.setState(prevState => ({isbackgroundChanged: !prevState.isbackgroundChanged}));
    }

    onGetButtonText = () => {
        const {isbackgroundChanged} = this.state;
        return isbackgroundChanged ? 'Dark Mode': 'Light Mode'
    }
    render(){
        const buttonText = this.onGetButtonText();
        const {isbackgroundChanged} = this.state;
        const modelClassName = isbackgroundChanged ? 'light-mode': 'dark-mode';
        const headingClassName= isbackgroundChanged? 'heading-in-light':'heading-in-dark';
        return(
            <div className="bg-container">
                <div className={`container ${modelClassName}`}>
                    <h1 className={`container ${headingClassName}`}>Click to Change Mode</h1>
                    <button className="button" type="button" onClick={this.onClickBackgroundButtonClick}>{buttonText}</button>

                </div>
            </div>
        )

    }
}
export default LightDarkMode;