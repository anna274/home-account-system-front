import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, Link } from "react-router-dom";
import { deleteCategory, getCategories, showModal } from 'redux/actions';
import Button from '@material-ui/core/Button';
import Table from 'components/table';
import { CATEGORY_MODAL, CONFIRMATION_MODAL, INCOME_CATEGORY, EXPENSE_CATEGORY } from 'consts';
import useStyles from '../styles';
import useCategoriesPageStyles from './styles';

const columns = [
  { id: 'name', label: 'Название категории', minWidth: 150 },
];

const CategoryPage = () => {
  const { data: categories } = useSelector(state => state.categories);
  const dispatch = useDispatch();
  const classes = useStyles();
  const categoriesPageStyles = useCategoriesPageStyles();
  const currentType = new URLSearchParams(useLocation().search).get('type')

  useEffect(() => {
    dispatch(getCategories(currentType || INCOME_CATEGORY))
  }, [dispatch, currentType])

  const editHandler = (category) => {
    dispatch(showModal({
      modalType: CATEGORY_MODAL,
      isEdit: true,
      category,
    }))
  }

  const deleteHandler = (categoryId) => {
    dispatch(showModal({
      modalType: CONFIRMATION_MODAL,
      isEdit: true,
      onConfirm: () => dispatch(deleteCategory(categoryId)),
      text: 'Вы уверенны, что хотите удалить категорию?',
      confirmText: 'Да, удалить категорию'
    }))
  }

  return (
    <div className={classes.page}>
      <div className={classes.linksContainer}>
        <Button component={ Link } to={`/categories?type=${INCOME_CATEGORY}`} color="primary">
          Категории доходов
        </Button>
        <Button component={ Link } to={`/categories?type=${EXPENSE_CATEGORY}`} color="primary">
          Категории расходов
        </Button>
      </div>
      <Table
        columns={columns}
        rows={categories}
        deleteHandler={deleteHandler}
        editHandler={editHandler}
        classes={categoriesPageStyles}/>
      <Button
        variant="contained"
        color="primary"
        className={classes.addButton}
        onClick={() => dispatch(showModal({ modalType: CATEGORY_MODAL }))}
      >
        Добавить категорию
      </Button>
    </div>
  );
}

export default CategoryPage;