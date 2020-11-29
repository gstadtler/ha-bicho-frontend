/*import React, { useState } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

function Teste() {

  const dataSet = [
    { nome: 'lucas', idade: '12' },
    { nome: 'joao', idade: '12' },
    { nome: 'fernando', idade: '12' },
    { nome: 'lucas', idade: '12' },
    { nome: 'joao', idade: '12' },
    { nome: 'gabriel', idade: '12' },
    { nome: 'marcos', idade: '12' },
    { nome: 'marcela', idade: '12' },
    { nome: 'fernando', idade: '12' },
    { nome: 'karina', idade: '12' },
    { nome: 'julia', idade: '12' },
  ].map(nome => nome.nome);

  const pageSize = 10;
  const pagesCount = Math.ceil(dataSet.length / pageSize);

  const [currentPage, setCurrentPage] = useState(0);

  function handleClick(e, index) {
    e.preventDefault();
    setCurrentPage(index);
  }

  return (
    <>
      <div className="pagination-wrapper">
        <Pagination>
          <PaginationItem disabled={currentPage <= 0}>
            <PaginationLink
              onClick={e => handleClick(e, currentPage - 1)}
              previous
              href="#"
            />
          </PaginationItem>
          {[...Array(pagesCount)].map((page, i) =>
            <PaginationItem active={i === currentPage} key={i}>
              <PaginationLink onClick={e => handleClick(e, i)} href="#">
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          )}
          <PaginationItem disabled={currentPage >= pagesCount - 1}>
            <PaginationLink
              onClick={e => handleClick(e, currentPage + 1)}
              next
              href="#"
            />
          </PaginationItem>
        </Pagination>
      </div>

      {dataSet.slice(currentPage * pageSize,(currentPage + 1) * pageSize).map(
        (data, i) =>
          <div className="data-slice" key={i}>
            {data}
          </div>
        )}
    </>
  );
}

export default Teste;*/
