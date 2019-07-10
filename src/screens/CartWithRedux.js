import React from 'react';
import { View, Text } from 'react-native';
import Cart from '../components/cart';
import InputQTY from '../components/input-qty';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../redux/actions/inputQtyAction';

class CartWithRedux extends React.Component {
    componentDidMount = () => {
        console.log(this.props.actions)
    }
  render() {
    const { 
        counterIncrement, 
        counterDecrement 
    } = this.props.actions
    const {
        counter
    } = this.props
    return (
      <View style={{flex:1, justifyContent:'center',alignItems:'center' }}>
        <InputQTY
          incrementItem={counterIncrement}
          decrementItem={counterDecrement}
          itemName={'Indomie'}
        />
        <Cart count={counter} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators({ ...Actions }, dispatch) };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartWithRedux)
