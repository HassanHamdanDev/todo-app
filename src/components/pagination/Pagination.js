import React from 'react';
import { Pagination } from 'react-bootstrap';


export default function PaginationPages(props) {
    let pageNumbers = [];

    for (let i = 1; i <= Math.ceil(props.totalList / props.itemsPerPage); i++) {
        pageNumbers.push(
            <Pagination.Item onClick={() => props.paginate(i)} key={i}>{i}</Pagination.Item>
        );
    }
    return (
        <Pagination>
            {pageNumbers}
        </Pagination>
    )
}
