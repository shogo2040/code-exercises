import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';

// connect redux to react in the end.
import {connect} from 'react-redux';

// actions, usually exported from an actions/index.js file
const IS_LOADING = 'IS_LOADING';
const HELLO_RESPONSE = 'HELLO_RESPONSE';

function isLoading(isLoading = false) {
  return {
    type: IS_LOADING,
    isLoading: isLoading,
  };
}

function helloResponse(json) {
  return {
    type: HELLO_RESPONSE,
    json: json,
  };
}

function fetchHello() {
  return dispatch => {
    dispatch(isLoading(true));
    fetch('http://5afa7456edf5520014cbd352.mockapi.io/hello-world')
      .then(response => {
        return response;
      })
      .then(response => response.json())
      .then(json => {
        dispatch(isLoading(false));
        dispatch(helloResponse(json));
      });
  };
}

// reducers
function listReducer(state = {}, action) {
  switch (action.type) {
    case HELLO_RESPONSE:
      return action.json;
    default:
      return state;
  }
}

function isLoadingReducer(state = {}, action) {
  switch (action.type) {
    case IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

const reducer = combineReducers({
  listReducer,
  isLoadingReducer,
});

// create the store (looks like this is depracated, todo, learn redux toolkit)
const store = createStore(reducer, applyMiddleware(thunk));

class ExampleComponent extends Component {
  render() {
    if (this.props.isLoading) {
      return <p>Loading...</p>;
    }

    if (this.props && this.props.list) {
      console.log('this.props.list', this.props.list)
      return (
        <div>
          <h2>The list below is being pulled via the usual http external api.</h2>
          <List list={this.props.list} />
        </div>
      );
    } else {
      return null;
    }
  }

  componentDidMount() {
    this.props.getHello();
  }
}

const mapStateToProps = state => {
  return {
    list: state.list,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHello: () => {
      dispatch(fetchHello());
    },
  };
};

const Example = connect(mapStateToProps, mapDispatchToProps)(ExampleComponent);

ReactDOM.render(
  <div>
    <h1>React Redux Thunk Example</h1>
    <p>
      This is an example of using Async Actions with the <strong>redux-thunk</strong> module.
    </p>
    <Provider store={store}>
      <Example />
    </Provider>
  </div>,
  document.getElementById('root')
);