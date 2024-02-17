import React, { useEffect, useState } from 'react';
import { tableData } from './TableData';
import "../style/table.css";

const Table = () => {

    const [checkData, setCheckdata] = useState([])

    const [Apidata, setApiData] = useState([])

    // rdtfghjkl;
    

    useEffect(() => {
        setApiData(records)
    }, [])

    console.log("Apidata", Apidata);


    const [currentPage, setCurrentPage] = useState(1)
    const recordPerPage = 5; // Number of records per page
    const lastIndex = currentPage * recordPerPage
    const FirstIndex = lastIndex - recordPerPage
    const records = tableData.slice(FirstIndex, lastIndex)
    const Newpage = Math.ceil(tableData.length / recordPerPage)
    const numbers = [...Array(Newpage + 1).keys()].slice(1)


    const prePage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const nextPage = () => {
        if (currentPage !== Newpage) {
            setCurrentPage(currentPage + 1)
        }
    }

    const changePageNum = (n) => {
        setCurrentPage(n);

    }


    const handleChange = (e) => {
        const { name, checked } = e.target
        
        if (name === "allSelect") {
            let template = Apidata.map((item) => { return { ...item, isChecked: checked }; })
            setApiData(template)
        } else {
            let template = Apidata.map((item) => item.checkdata === name ? { ...item, isChecked: checked } : item)
            setApiData(template)
        }
    }
    return (
        <>
            <div>
                <table>
                    <thead>
                        <th>
                            <div className="d-flex align-items-center gap-3">
                                <input type="checkbox" name="allSelect" onChange={handleChange} checked={Apidata.filter(item => item?.isChecked !== true).length < 1} />
                                All Select</div>
                        </th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </thead>
                    <tbody>
                        {
                            Apidata.map((item, itm) => {
                                return (
                                    <tr key={itm}>
                                        <th>
                                            <div className="d-flex align-items-center gap-3">
                                                <input type="checkbox" onChange={handleChange} name={item.checkdata} checked={item?.isChecked || false} />
                                                {item.checkdata} </div>
                                        </th>
                                        <td>{item.id} </td>
                                        <td> {item.name}</td>
                                        <td>{item.gmail}</td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>
                <nav className='d-flex justify-content-center mt-4 '>
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#" onClick={prePage}>Previous</a></li>
                        {
                            numbers.map((n, i) => {
                                return (
                                    <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}><a className="page-link" href="#" onClick={() => changePageNum(n)}> {n} </a></li>
                                )

                            })
                        }
                        <li className="page-item"><a className={`page-link ${currentPage === Newpage ? 'next' : ""}`} href="#" onClick={nextPage}>Next</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Table
