import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { clearIncomes, clearExpenses, getIncomes, getExpenses, showModal } from 'redux/actions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Table from 'components/table';
import MenuDropdown from 'components/menuDropdown';
import PdfExportLink from 'components/pdfExportLink';
import StatisticsPdf from 'components/documents/statisticsPdf';
import FormDatePicker from 'components/form/FormDatePicker';
import ResultTable from './ResultTable';
import { CHART_MODAL, incomeExpenseColumns } from 'consts';
import { groupByCategory, groupByBankAccount, downloadTxtFile, generateReport, calculateResultSum } from 'helpers';
import useStyles from '../styles';
import usePageStyles from './styles';
import validationSchema from './schema';

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
  const { id: accountId } = useSelector(state => state.user.data);
  const [dates, setDates] = useState({ startDate: '', endDate: ''});
  const dispatch = useDispatch();
  const classes = useStyles();
  const pageStyles = usePageStyles();
  const report = useMemo(() => {
    return generateReport(incomes, expenses, dates.startDate, dates.endDate);
  }, [dates, incomes, expenses])
  const statisticsLinks = useMemo(() => {
    return [
      {
        id: 0,
        text: 'Стастистика доходов по счетам',
        to: '#',
        onClick: () => dispatch(showModal({
          modalType: CHART_MODAL,
          title: 'Стастистика доходов по счетам',
          dataset: groupByBankAccount(incomes)
        }))
      },
      {
        id: 1,
        text: 'Стастистика доходов по категориям',
        to: '#',
        onClick: () => dispatch(showModal({
          modalType: CHART_MODAL,
          title: 'Стастистика доходов по категориям',
          dataset: groupByCategory(incomes)
        }))
      },
      {
        id: 2,
        text: 'Стастистика расходов по счетам',
        to: '#',
        onClick: () => dispatch(showModal({
          modalType: CHART_MODAL,
          title: 'Стастистика расходов по счетам',
          dataset: groupByBankAccount(expenses)
        }))
      },
      {
        id: 3,
        text: 'Стастистика расходов по категориям',
        to: '#',
        onClick: () => dispatch(showModal({
          modalType: CHART_MODAL,
          title: 'Стастистика расходов по категориям',
          dataset: groupByCategory(expenses)
        }))
      },
    ]
  }, [dispatch, incomes, expenses])
  const exportLinks = useMemo(() => [
    {
      id: 0,
      Element: () => <PdfExportLink document={<StatisticsPdf report={report}/>}/>
    },
    {
      id: 1,
      text: 'Экспортировать в TXT',
      to: '#',
      onClick: () => downloadTxtFile(report)
    },
  ], [report]);
  useEffect(() => {
    dispatch(clearIncomes());
    dispatch(clearExpenses());
  }, [dispatch])

  const initialValues = {
    startDate: new Date(),
    endDate: new Date(),
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async ({startDate, endDate}) => {
      const toSend = {
        startDate: startDate.toISOString().split("T")[0],
        endDate: endDate.toISOString().split("T")[0],
      }
      dispatch(getIncomes(accountId, toSend))
      dispatch(getExpenses(accountId, toSend))
      setDates({startDate, endDate})
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
          <ResultTable expensesSum={calculateResultSum(expenses)} incomesSum={calculateResultSum(incomes)}/>
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