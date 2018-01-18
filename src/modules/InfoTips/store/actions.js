const InfoTipsActionTypes = {
  OPEN_INFO_TIP: 'OPEN_INFO_TIP',
  CLOSE_INFO_TIP: 'CLOSE_INFO_TIP',
};

export const openInfoTipModal = message => ({
  type: InfoTipsActionTypes.OPEN_INFO_TIP,
  payload: {
    isInfoTipShown: true,
    message,
  },
});

export const closeInfoTipModal = () => ({
  type: InfoTipsActionTypes.CLOSE_INFO_TIP,
  payload: {
    isInfoTipShown: false,
  },
});

export default InfoTipsActionTypes;
