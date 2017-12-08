import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableHead, TableRow, TableSortLabel } from 'material-ui/Table';
import Tooltip from 'material-ui/Tooltip';

const columnData = [
  {
    id: 'id', disablePadding: false, label: 'ID',
  },
  {
    id: 'fullName', disablePadding: false, label: 'Full name',
  },
  {
    id: 'dateOfBirth', disablePadding: false, label: 'Born',
  },
  {
    id: 'grade', disablePadding: false, label: 'Grade',
  },
];
class PupilsListHeader extends React.Component {
  static propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    orderBy: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired,
  };

  createSortHandler = property => (event) => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const {
      orderBy,
      order,
    } = this.props;
    return (
      <TableHead>
        <TableRow>
          {columnData.map(column => (
            <TableCell
              key={column.id}
              padding={column.disablePadding ? 'none' : 'default'}
            >
              <Tooltip
                title="Sort"
                placement="bottom-end"
                enterDelay={300}
              >
                <TableSortLabel
                  active={orderBy === column.id}
                  direction={order}
                  onClick={this.createSortHandler(column.id)}
                >
                  {column.label}
                </TableSortLabel>
              </Tooltip>
            </TableCell>
          ), this)}
        </TableRow>
      </TableHead>
    );
  }
}

export default PupilsListHeader;
