import React from "react";
import {Link} from 'react-router-dom'
import PropTypes from "prop-types";
import {blogUrl} from '../../utils/routes'
import { makeStyles } from "@material-ui/core/styles";

import styles from "../../assets/jss/components/paginationStyle.js";

const useStyles = makeStyles(styles);

export default function Pagination(props) {
  const classes = useStyles();
  const { totalPages, currentPage} = props;
  const isThereNextPage = currentPage < totalPages.length
  const isTherePrevPage = currentPage > 1

  return (
    <ul className={classes.pagination}>
      {(isTherePrevPage)&&(
         <li className={classes.paginationItem}>
           <Link to={blogUrl+'/?'+(currentPage-1)}
              className={classes.paginationLink}>
                  PREV
            </Link>
         </li>
      )}
      {totalPages.map((page, key) => {
        page=page+1
        return(
          <li className={classes.paginationItem} key={key}>
              <Link
                className={classes.paginationLink+" "+((page===currentPage)?classes.primary:'')}
                to={blogUrl+'/?'+page}
              >
                {page}
              </Link>
          </li>
      )})}
      {(isThereNextPage)&&(
         <li className={classes.paginationItem}>
            <Link
                to={blogUrl+'/?'+(currentPage+1)}
                className={classes.paginationLink}
            >
                NEXT
            </Link>
         </li>
      )}
    </ul>
  );
}

Pagination.defaultProps = {
  currentPage: 1
};

Pagination.propTypes = {
  totalPages: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
};
