import React, { useState } from 'react'
import "../style/table.css";
const DemoPagination = () => {

    const [paginateData, setPaginateData] = useState(1)

    const itemDisplay = 5;
    const TotalItem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14, 15, 16,17]
    const newPage = Math.ceil(TotalItem.length / itemDisplay)
    const numbers = [...Array(newPage + 1).keys()].slice(1)

    console.log("numbers", numbers.length, newPage);

    const prePage = () => {



        if (paginateData !== 1) {
            setPaginateData(paginateData - 1)
        }
    }

    const nextPage = () => {


        if (paginateData !== newPage) {
            setPaginateData(paginateData + 1)
        }
    }

    const changePageNum = (num) => {
        setPaginateData(num);
    }

    return (
        <>
            <div>
                <h1>Demo Pagination</h1>
                <nav className='d-flex justify-content-center mt-4 '>
                    <ul className="pagination">
                        <li className="page-item"> <a className="page-link" href="#" onClick={prePage}>Previous</a></li>

                        {
                            numbers.map((num, i) => {
                                return (
                                    <li className={`page-item ${paginateData === num ? 'active' : ' '}`} key={i}><a className="page-link" href="#" onClick={() => changePageNum(num)}> {num}</a></li>
                                )
                            })
                        }
                        <li className="page-item"><a className={`page-link ${paginateData === numbers.length ? 'next' : ''}`} href="#" onClick={nextPage}>Next</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default DemoPagination
