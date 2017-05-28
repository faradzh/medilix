/**
 * Created by faradj on 4/19/17.
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createEventCard, eventCardChange, getEventCards } from '../../actions/eventActions';

import Events from '../../components/dashboard/events';

const mapStateToProps = (state) => {
    return {
        events: state.eventReducer.events
    }
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({createEventCard, eventCardChange, getEventCards}, dispatch)
};

class EventsContainer extends React.Component {
    componentWillMount () {
        this.props.getEventCards();
    }

    render () {
        return <Events events={this.props.events} onSubmit={this.props.createEventCard} onChange={this.props.eventCardChange}/>
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(EventsContainer);