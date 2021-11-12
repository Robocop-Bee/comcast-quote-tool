

import './../assets/style/sidebar.css';
import leftarrow from './../assets/images/arrow-left-solid.svg';
import rightarrow from './../assets/images/arrow-right-solid.svg';

const Sidebar = (props) => {


    return ( 
        <div className="side-bar">
            <img src={leftarrow} alt="arrow-left" className="left-arrow" onClick={props.toggleBar}/>
            <img src={rightarrow} alt="arrow-right" className="right-arrow" onClick={props.toggleBar}/>
            <section className="checkboxes">
                <h2>Filter</h2>

                <div className="checkbox-container">
                    <label htmlFor="all">
                        <input type="checkbox" name="All" id="all" />
                        All
                    </label>
                    <label  htmlFor="internet">
                        <input type="checkbox" name="Internet" id="internet" />
                        Internet
                    </label>
                    <label  htmlFor="tv">
                        <input type="checkbox" name="TV" id="tv" />
                        TV
                    </label>
                    <label  htmlFor="home-security">
                        <input type="checkbox" name="Home Security" id="home-security" />
                        Home Security
                    </label>
                    <label  htmlFor="voice">
                        <input type="checkbox" name="Voice" id="voice" />
                        Voice
                    </label>
                </div>
                
            </section>

            <section className="internet-slider">
                <h2>Internet</h2>

                <div className="internet-selection">
                    <input type="range"  list="speed" min="50" max="1200"/>
                    
                    <datalist id="speed">
                        <option value="50"></option>
                        <option value="100"></option>
                        <option value="300"></option>
                        <option value="600"></option>
                        <option value="900"></option>
                        <option value="1200"></option>
                    </datalist>

                </div>
            </section>

            <section className="tv-checkbox">
                <h2>TV</h2>

                <div className="tv-selection">
                    <label htmlFor="ultimate-tv">
                        <input type="checkbox" name="Ultimate-Tv" id="ultimate-tv" />
                        Ultimate-Tv
                    </label>

                    <label htmlFor="popular">
                        <input type="checkbox" name="Popular" id="popular" />
                        Popular
                    </label>

                    <label htmlFor="choice-tv">
                        <input type="checkbox" name="Choice-Tv" id="choice-tv" />
                        Choice-Tv
                    </label>
                </div>
            </section>

            <section className="xh-selection">
                <h2>Home Security</h2>
                
                <div className="xh-button">
                    <label htmlFor="xh-yes">
                        <input type="radio" name="xh" id="xh-yes" />
                        Yes
                    </label>

                    <label htmlFor="xh-no">
                        <input type="radio" name="xh" id="xh-no" />
                        No
                    </label>
                </div>

            </section>

            <section className="voice-selection">
                <h2>Voice</h2>

                <div className="voice-button">
                    <label htmlFor="voice-yes">
                        <input type="radio" name="voice" id="voice-yes" />
                        Yes
                    </label>

                    <label htmlFor="voice-no">
                        <input type="radio" name="voice" id="voice-no" />
                        No
                    </label>
                </div>
            </section>
        </div>
     );
}
 
export default Sidebar;