import React, { useEffect, useState } from 'react';
import { tableData } from '../Pagination/TableData';

import "../style/table.css";

const Newpagination = () => {

    const [showPage, setShowPage] = useState(1)

    const [checkBox, setChexkbox] = useState([])

    const itemShow = 5;
    const lastIndex = showPage * itemShow
    const firstIndex = lastIndex - itemShow
    const record = tableData.slice(firstIndex, lastIndex)
    const npage = Math.ceil(tableData.length / itemShow)
    const numbers = [...Array(npage + 1).keys()].slice(1);

             
    const preHandler = () => {
        if (showPage !== 1) {
            setShowPage(showPage - 1)
        }
    }


    const nextHandler = () => {
        if (showPage !== npage) {
            setShowPage(showPage + 1)
        }
    }
    const pageNumberHandler = (data) => {
        setShowPage(data)
    }

    useEffect(() => {
        setChexkbox(record)
    },[])
    const checkBoxHandler = (aa, e) => {
        const {name, checked }= e.target.value
        const template = record.map((item)=>item.name === name ? {...item, isChecked: checked}:item )
        setChexkbox(template)
        const bbbb = template.filter((chk)=> chk.checkdata === aa )
        console.log("bbbbbbbbbbbbbbbb", bbbb);

    }


    return (
        <>
            <h1 className='text-center m-4 text-danger'>New Table Pages </h1>
            <div>
                <table>
                    <thead>
                        <td>
                            <div className='d-flex align-items-center gap-2 '>
                                <input type="checkbox" name="allSelect" />
                                <p className='m-0'>All Select</p>
                            </div>

                        </td>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </thead>
                    <tbody>
                        {
                            record.map((Td, i) => {
                                return (
                                    <tr key={i} >
                                        <td>

                                            <div className="d-flex align-items-center gap-3">
                                                <input type="checkbox" onChange={(e)=>checkBoxHandler(Td.checkdata,e)} name={Td.checkdata}   />
                                                {Td.checkdata}
                                            </div>

                                        </td>
                                        <td>{Td.id}</td>
                                        <td>{Td.name}</td>
                                        <td>{Td.gmail}</td>
                                    </tr>
                                )
                            }
                            )
                        }
                    </tbody>
                </table>

                <nav className='d-flex justify-content-center mt-4 '>
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="#" onClick={preHandler} >Previous</a></li>
                        {
                            numbers.map((data, i) => {
                                return (
                                    <li className={`page-item ${showPage === data ? "active" : ""}`} key={i} ><a className="page-link" href="#" onClick={() => pageNumberHandler(data)}>{data}</a></li>
                                )
                            })
                        }
                        <li className="page-item"><a className={`page-link ${showPage === npage ? 'next' : ""}`} href="#" onClick={nextHandler} >Next</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Newpagination
