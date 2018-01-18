import InfoTipsActionTypes from './actions';

const initialState = {
  isInfoTipShown: false,
  message: '',
};

const handleOpenInfoTip = (state, action) => ({
  ...state,
  isInfoTipShown: action.payload.isInfoTipShown,
  message: action.payload.message,
});

const handleCloseInfoTip = (state, action) => ({
  ...state,
  isInfoTipShown: action.payload.isInfoTipShown,
});

const handlers = {
  [InfoTipsActionTypes.OPEN_INFO_TIP]: handleOpenInfoTip,
  [InfoTipsActionTypes.CLOSE_INFO_TIP]: handleCloseInfoTip,
};

function infoTipsReducer(state = initialState, action) {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
}

export default infoTipsReducer;
