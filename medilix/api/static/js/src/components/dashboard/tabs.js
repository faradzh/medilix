/**
 * Created by faradj on 5/27/17.
 */
import React from 'react';

class Tabs extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            activeTab: 'about'
        }
    }

    clickHandler = (name, e) => {
        e.preventDefault();
        this.setState({activeTab: name});
    };

    render () {
        console.log("ActiveTab", this.state.activeTab);
        const { tabs, children } = this.props;
        return (
            <div className="block">
                <ul className="nav nav-tabs nav-tabs-alt" data-toggle="tabs">
                    {
                        tabs.map((tab) => {
                            if (tab.name == this.state.activeTab){
                                return <li key={tab.id} onClick={this.clickHandler.bind(this, tab.name)} id={tab.name} className='active'>
                                    <a href=''>
                                        <i className={tab.icon}/> {tab.title}
                                    </a>
                                </li>
                            }
                            return <li key={tab.id} onClick={this.clickHandler.bind(this, tab.name)} id={tab.name} className=''>
                                <a href=''>
                                    <i className={tab.icon}/> {tab.title}
                                </a>
                            </li>
                        })
                    }
                </ul>
                <div className="block-content tab-content">
                    {
                        tabs.map((tab) => {
                            if (tab.name == this.state.activeTab){
                                return <div key={tab.id} className='tab-pane active' id={tab.name}>
                                           <p>{children[tab.id]}</p>
                                       </div>
                            }
                            else{
                                return <div key={tab.id} className='tab-pane' id={tab.name}>
                                           <p>{children[tab.id]}</p>
                                       </div>
                            }
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Tabs;