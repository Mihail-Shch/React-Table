import React from "react";
import ReactPaginate from "react-paginate";
import _ from "lodash";

import { Table, Loader, PersonInfo, ChooseData } from "./components";

function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [order, setOrder] = React.useState("asc");
  const [param, setParam] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [person, setPerson] = React.useState(null);
  const [clicked, setClicked] = React.useState(false);

  const onClickItem = (item) => {
    setPerson(item);
  };

  const onSort = (sortParam) => {
    const clonedData = data;
    order === "asc" ? setOrder("desc") : setOrder("asc");
    const orderedArray = _.orderBy(clonedData, sortParam, order);
    setData(orderedArray);
    setParam(sortParam);
    console.log(order);
  };

  const onDataSelect = async (url) => {
    setClicked(true);
    const resp = await fetch(url);
    const respData = await resp.json();
    setData(respData);
    setIsLoaded(true);
  };

  const handlePageClick = ({ selected }) => {
    setPage(selected);
  };

  const bigDataOrdered = _.chunk(data, 50)[page];

  if (!clicked) {
    return (
      <div className="container">
        <ChooseData onClick={onDataSelect} />
      </div>
    );
  } else {
    return (
      <div className="container">
        {isLoaded === false ? (
          <Loader />
        ) : (
          <Table
            items={bigDataOrdered}
            onSort={onSort}
            onClick={onClickItem}
            param={param}
            order={order}
          />
        )}
        {person ? <PersonInfo info={person} {...person} /> : ""}
        {data.length > 50 ? (
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            pageCount={20}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            nextClassName={"page-item"}
            forcePage={page}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
