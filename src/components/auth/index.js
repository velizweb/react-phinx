import { compose } from "redux";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import SignIn from "./SignIn";

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SignIn);
