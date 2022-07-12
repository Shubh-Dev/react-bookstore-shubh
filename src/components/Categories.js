import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkBookStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.CategoryReducer.categories);
  const dispatch = useDispatch();
  const update = (e) => {
    e.preventDefault();
    dispatch(checkBookStatus());
  };

  return (
    <div>
      <h2>Comeing Soon</h2>
      <button type="button" onClick={update}>Check Status</button>
      <h4>{ categories }</h4>
    </div>
  );
};

export default Categories;
