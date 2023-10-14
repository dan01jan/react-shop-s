import React, { Fragment, useState, useEffect } from 'react';
import MetaData from './Layout/Metadata';
import axios from 'axios';
import Pagination from 'react-js-pagination';
import Product from './Product/Product';
import Loader from './Layout/Loader';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  const [productsCount, setProductsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [resPerPage, setResPerPage] = useState(4); // Set a default value for resPerPage

  const getProducts = async (page = 1) => {
    try {
      let link = `http://localhost:8001/api/v1/products/?page=${page}`;
      console.log(link);
      let res = await axios.get(link);
      console.log(res);
      setProducts(res.data.products);
      setResPerPage(res.data.resPerPage); // Update resPerPage with the value from the server
      setProductsCount(res.data.productsCount);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts(currentPage);
  }, [currentPage]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={'Buy Best Products Online'} />
          <div className="container container-fluid">
            <h1 id="products_heading">Latest Products</h1>
            <section id="products" className="container mt-5">
              <div className="row">
                {products &&
                  products.map((product) => (
                    <Product key={product._id} product={product} />
                  ))}
              </div>
            </section>
            {productsCount > resPerPage && ( // Display pagination based on productsCount and resPerPage
              <div className="d-flex justify-content-center mt-5">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resPerPage}
                  totalItemsCount={productsCount}
                  onChange={setCurrentPage}
                  nextPageText={'Next'}
                  prevPageText={'Prev'}
                  firstPageText={'First'}
                  lastPageText={'Last'}
                  itemClass="page-item"
                  linkClass="page-link"
                />
              </div>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
