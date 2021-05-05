import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';

const ResultTable = ({ expensesSum = 0, incomesSum = 0 }) => {
  return <Table>
    <TableRow>
      <TableCell variant="head">Доходы</TableCell>
      <TableCell>{incomesSum}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell variant="head">Расходы</TableCell>
      <TableCell>{expensesSum}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell variant="head">Семейный бюджет</TableCell>
      <TableCell>{incomesSum - expensesSum}</TableCell>
    </TableRow>
  </Table>
}

export default ResultTable;