import { connect } from 'react-redux';
import ParkingsView from '../Components/ParkingsView';
import { bindActionCreators } from 'redux'
import {
    USER_FETCH_REQUESTED
} from '../Constants/Constants';

const mapStateToProps = state => {
    return state
};
const mapDispatchToProps = dispatch => bindActionCreators(
    {
        fetchParkings: () =>  dispatch({type: USER_FETCH_REQUESTED})
    }
, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(ParkingsView)
