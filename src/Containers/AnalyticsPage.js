import { connect } from 'react-redux';
import AnalyticsView from '../Components/AnalyticsView';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getIncome, getAvailablePlacesForAllParkings } from '../Utils';
import {
    ANALYTICS_PAGE_FETCH_REQUESTED
} from '../Constants/Constants';

const mapStateToProps = state => {
    return {
        income: getIncome(state),
        availabilityInfo: getAvailablePlacesForAllParkings(state),
        sessions: state.sessionsReducer.entities.session,
        sessionIds: state.sessionsReducer.result.sessions,
        isLoading: state.parkingsReducer.isLoading,
    }
};
const mapDispatchToProps = dispatch => bindActionCreators(
    {
        fetchSessions: () =>  dispatch({type: ANALYTICS_PAGE_FETCH_REQUESTED})
    }
    , dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AnalyticsView))
