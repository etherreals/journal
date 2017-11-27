import React from 'react';
import { TableCell, TableHead, TableRow } from 'material-ui/Table';

const PupilsListHeader = () => (
  <TableHead>
    <TableRow>
      <TableCell>ID</TableCell>
      <TableCell>Full name</TableCell>
      <TableCell>Date of birth</TableCell>
      <TableCell>Grade</TableCell>
    </TableRow>
  </TableHead>
);

export default PupilsListHeader;
