import React from 'react';
import PropTypes from 'prop-types';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from '@material-ui/core/Tooltip';

const columnData = [
  {
    id: 'title', disablePadding: false, label: 'Title',
  },
  {
    id: 'description', disablePadding: false, label: 'Description',
  },
  {
    id: 'difficulty', disablePadding: false, label: 'Difficulty',
  },
];
class CardListHeader extends React.Component {
  static propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    orderBy: PropTypes.string.isRequired,
    order: PropTypes.string,
  };

  static defaultProps = {
    order: 'desc',
  }

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

export default CardListHeader;
