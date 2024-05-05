import { useState } from "react";

import { usePagination } from "./paginationUtil";

import { pagination as style } from "../../style";

interface PaginationProps {
    postsPerPage: number;
    totalPosts: number;
    paginate: (pageNumber: number) => void;
}

function Pagination({ postsPerPage, totalPosts, paginate }: PaginationProps) {
    const pageNos = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNos.push(i);
    }

    const [currentPage, setCurrentPage] = useState(1);

    const paginationRange = usePagination({
        totalCount: totalPosts,
        pageSize: postsPerPage,
        siblingCount: 1,
        currentPage
    });

    const onClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        paginate(pageNumber);
    }

    return (<>
        <nav className="flex justify-center">
            <ul className="flex">
                {paginationRange.map((pageNumber) => (
                    <li key={pageNumber} className="p-1">
                        { pageNumber !== '...' ? <button className={pageNumber === currentPage ? style.activeBtn : style.btn} onClick={() => onClick(pageNumber)} >
                            {pageNumber}
                        </button> :  <span className="text-white font-bold p-2 rounded-md">. . .</span>}

                    </li>
                ))}
            </ul>
        </nav>
    </>);
}

export default Pagination;