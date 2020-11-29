import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter,
	CardTitle, CardText, Pagination, PaginationItem, 
	PaginationLink } from 'reactstrap';
import './styles.css';
import api from '../../services/api';

function Abrigos(props) {

	const [abrigos, setAbrigos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
	const pageSize = 3;
	const pagesCount = Math.ceil(abrigos.length / pageSize);
	
  function handleClick(e, index) {
    e.preventDefault();
    setCurrentPage(index);
  }

	useEffect(() => {
		let mounted = true;
		async function ListaAbrigos() {
			try {
				const response = await api.get("/abrigos");
				if (mounted) {
					setAbrigos(response.data);
				}
			} catch (err) {
				console.log(err);
			};
		};
		ListaAbrigos();
		return () => mounted = false;
	}, []);

	return (
		<>
			<h1 className="titulo-abrigos">Lista de Abrigos</h1>
			<Card style={{border: "none"}}>
				{abrigos.slice(currentPage * pageSize,(currentPage + 1) * pageSize).map((abrigo, i) =>
					<CardBody key={i} className="abrigo">
						<CardHeader style={{background: "none", border: "none", padding: "20px"}}>
							<CardTitle tag="h3">
								{abrigo.nome}
							</CardTitle>
							<CardText tag="h5" className="abrigo-descricao">
								{abrigo.descricao}
							</CardText>
						</CardHeader>
						<CardFooter className="bttn-conhecer">
							<Link to={`/perfil-abrigo/${abrigo.id}`} className="link-abrigo">Conhecer</Link>
						</CardFooter>
					</CardBody>
				)}
			</Card>
			
			<div className="pagination-wrapper">
        <Pagination className="d-flex justify-content-center">
					<PaginationItem>
						<PaginationLink
              onClick={() => setCurrentPage(0)}
							first
							href="#"
						/>
					</PaginationItem>
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
					<PaginationItem>
						<PaginationLink
              onClick={() => setCurrentPage(pagesCount - 1)}
							last
							href="#"
						/>
					</PaginationItem>
        </Pagination>
      </div>
		</>
	);
}

export default Abrigos;
