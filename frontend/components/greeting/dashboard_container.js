import { connect } from 'react-redux';
import Dashboard from './dashboard.jsx';
import {logout} from '../../actions/session_actions'

const mapStateToProps = (state) => {

    return {
        users: Object.values(state.entities.users),
        session: Object.values(state.session),
        currentUser: state.entities.users[state.session.id]
    };
};
const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);