const comingLSdata = localStorage.getItem("wish");
const convertLSdata = JSON.parse(comingLSdata);

const intialWish = convertLSdata ?? [];

const wishReducer = (state = intialWish, action) => {
  switch (action.type) {
    case "ADD_WISH":
      if (localStorage.getItem("wish") == null) {
        localStorage.setItem("wish", "[]");
      } else {
        let ld = localStorage.getItem("wish");
        let old_data = JSON.parse(ld);
        old_data.push(action.wish);
        localStorage.setItem("wish", JSON.stringify(old_data));
      }

      const y = localStorage.getItem("wish");
      const yl = JSON.parse(y);
      return [...yl];

    case "REMOVE_WISH":
      const removewish = state.filter(({ id }) => {
        return id !== action.id;
      });
      const tyu = JSON.stringify(removewish);
      localStorage.setItem("wish", tyu);
      return removewish;

    default:
      return state;
  }
};

export default wishReducer