import { useState } from "react";
import { Item } from "../../types";
import GridItem from "./GridItem"
import Pagination from "./Pagination";

interface ResultGridProps {
    results: Item[]
}

function ResultGrid({ results }: ResultGridProps) {

    const [page, setPage] = useState(1);

    const indexOfLastItem = page * 12;
    const indexOfFirstItem = indexOfLastItem - 12;
    const currentItems = results.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber: number) => setPage(pageNumber);

    return (
        <>
            <div className="grid grid-cols-3 p-4">
                { currentItems.map((item, i) =>  (<GridItem {...item} key={i}/>)) }
            </div>
            <Pagination postsPerPage={12} totalPosts={results.length} paginate={paginate} />
        </>
    );
}

export default ResultGrid;