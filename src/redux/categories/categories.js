const CHECK_STATUS = 'CHECK_STATUS';

export const checkBookStatus = () => ({
  type: CHECK_STATUS,
});

const categories = {
  categories: ['under construction'],
};

const CategoryReducer = (state = categories, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return categories;
    default:
      return state;
  }
};

export default CategoryReducer;
