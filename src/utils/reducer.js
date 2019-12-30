const initialState = {
  chefInfo: {
    name: "",
    location: "",
    phone: "",
    email: "",
    username: "",
    password: ""
  },
  recipes: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
