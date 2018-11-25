import { connect } from 'react-redux';
import AnalyticsView from '../Components/AnalyticsView';
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import {
    SESSIONS_FETCH_REQUESTED
} from '../Constants/Constants';

const mapStateToProps = state => {
    return {
        sessions: state.parkingsReducer.entities.session,
        sessionIds: state.parkingsReducer.result.sessions,
        isLoading: state.parkingsReducer.isLoading,
    }
};
const mapDispatchToProps = dispatch => bindActionCreators(
    {
        fetchParkings: () =>  dispatch({type: SESSIONS_FETCH_REQUESTED})
    }
    , dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AnalyticsView))
