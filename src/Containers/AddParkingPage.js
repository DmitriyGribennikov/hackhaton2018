import { connect } from 'react-redux';
import AddParkingView from '../Components/AddParkingView';
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import {
    PARKING_FETCH_REQUESTED
} from '../Constants/Constants';

const mapStateToProps = (state, ownProps )=> {
    return {
        parkings: state.parkingsReducer.entities.parkings,
        parkingIds: state.parkingsReducer.result.parkings,
        isLoading: state.parkingsReducer.isLoading,
    }
};
const mapDispatchToProps = dispatch => bindActionCreators(
    {
        fetchParkings: () =>  dispatch({type: PARKING_FETCH_REQUESTED})
    }
    , dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddParkingView))
