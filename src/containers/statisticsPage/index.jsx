import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { clearIncomes, clearExpenses } from 'redux/actions'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from 'components/table';
import MenuDropdown from 'components/menuDropdown';
import FormDatePicker from 'components/form/FormDatePicker';
import ResultTable from './ResultTable';
import { incomeExpenseColumns } from 'consts';
import useStyles from '../styles';
import usePageStyles from './styles';
import validationSchema from './schema';

const statisticsLinks = [
  {
    id: 0,
    text: 'Стастистика доходов по счетам',
    to: '#',
  },
  {
    id: 1,
    text: 'Стастистика доходов по категориям',
    to: '#',
  },
  {
    id: 2,
    text: 'Стастистика расходов по счетам',
    to: '#',
  },
  {
    id: 3,
    text: 'Стастистика расходов по категориям',
    to: '#',
  },
];

const exportLinks = [
  {
    id: 0,
    text: 'Экспортировать в PDF',
    to: '#',
  },
  {
    id: 1,
    text: 'Экспортировать в TXT',
    to: '#',
  },
];

const StatisticsLabel =
  (<Button component={ Button } color="primary">
  Диаграммы
  </Button>)

const ExportLabel =
  (<Button component={ Button } color="primary">
    Экспортировать
  </Button>)

const StatisticsPage = () => {
  const { data: expenses } = useSelector(state => state.expenses);
  const { data: incomes } = useSelector(state => state.incomes);
  const dispatch = useDispatch();
  const classes = useStyles();
  const pageStyles = usePageStyles();

  useEffect(() => {
    dispatch(clearIncomes());
    dispatch(clearExpenses());
  }, [])

  const initialValues = {
    startDate: new Date(),
    endDate: new Date(),
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      console.log(values)
    },
  });

  return (
    <div className={classes.page}>
      <div className={classes.linksContainer}>
        <MenuDropdown links={statisticsLinks} Label={StatisticsLabel}/>
        <MenuDropdown links={exportLinks} Label={ExportLabel}/>
      </div>
      <div className={pageStyles.container}>
        <div className={pageStyles.settingsContainer}>
          <Typography component="p" variant="h5" style={{textAlign: 'center', fontSize: 18,}}>
            Выберите период для генерации отчёта
          </Typography>
          <form className={classes.form} onSubmit={formik.handleSubmit}>
            <FormDatePicker
              formik={formik}
              name="startDate"
              label="Начало периода"
            />
            <FormDatePicker
              formik={formik}
              name="endDate"
              label="Конец периода"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.addButton}
              style={{width: 240}}
            >Сгенерировать отчёт</Button>
          </form>
        </div>
        <div className={pageStyles.settingsContainer}>
          <Typography component="p" variant="h5" style={{textAlign: 'center', fontSize: 18,}}>
            Итоговая таблица
          </Typography>
          <ResultTable/>
        </div>
        <div className={pageStyles.tablesContainer}>
          <Typography component="h4" variant="h5" style={{fontSize: 20, textAlign: 'center'}}>
            Доходы
          </Typography>
          <Table
            columns={incomeExpenseColumns}
            rows={incomes}
            withActions={false}
            classes={pageStyles}
          />
          <Typography component="h4" variant="h5" style={{fontSize: 20, textAlign: 'center'}}>
            Расходы
          </Typography>
          <Table
            columns={incomeExpenseColumns}
            rows={expenses}
            withActions={false}
            classes={pageStyles}
          />
        </div>
      </div>
    </div>
  );
}

export default StatisticsPage;