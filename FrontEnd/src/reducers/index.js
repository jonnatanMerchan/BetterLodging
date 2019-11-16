const reducer = (state, action) => {
  switch (action.type) {
    
    case 'SEARCH_VIDEO':
      if (action.payload === '') {
        return {
          ...state,
          search: [],
        };
      }
      return {
        ...state,
        search: state.content.filter((items) => items.title.toLowerCase().includes(action.payload.toLowerCase())) ||
          [],
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user:action.payload,
        autenticado:true,
      }
    default:
      return state;
  }
};

export default reducer;
