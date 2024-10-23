import React, { useState } from "react";
import axios from "axios";
import "./TableList.css";

const TableList = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const getData = async () => {
        try {
            const res = await axios.get("http://jsonplaceholder.typicode.com/posts");
            let filteredData = res.data;
            filteredData.map((item) => delete item["userId"]);

            console.log("original response", res.data);
            console.log("deleted key prop", filteredData);

            setData(filteredData);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteItem = (id) => {
        const filter = data.filter((item, i) => {
            return item.id !== id;
        });

        setData(filter);
    };

    const handleNextPage = () => {
        if (currentPage === totalPages) {
            setCurrentPage(1);
        } else {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage === 1) {
            setCurrentPage(totalPages);
        } else {
            setCurrentPage(currentPage - 1);
        }
    };
    return (
        <div id="sub-container">
            <div>
                <div className="title-container">
                    <h3>Our List</h3>
                    <button onClick={getData}>Refresh Data</button>
                </div>
                {data.length > 0 ? (
                    <>
                        <table id="table">
                            <thead>
                                <tr>
                                    <th>User ID</th>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Body</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.userId}</td>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.body}</td>
                                        <td>
                                            <button onClick={() => handleDeleteItem(item.id)}>
                                                X
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div>
                            <p>
                                Page {currentPage}, Data {indexOfFirstItem + 1}-
                                {Math.min(indexOfLastItem, data.length)} of {data.length}
                            </p>
                            <div className="pagination">
                                <a onClick={handlePreviousPage}>❮</a>
                                <a onClick={handleNextPage}>❯</a>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="nodata-container">
                        <h3>Sorry, there is no data to show now</h3>
                        <h3>Click Refresh data to get a new data list</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TableList;
