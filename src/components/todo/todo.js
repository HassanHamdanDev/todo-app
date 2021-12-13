import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form.js';
import ToDoForm from './Form';
import ToDoList from './List';
import { Row, Col, Container } from 'react-bootstrap';
import { SettingContext } from '../../context/settings/context';
import PaginationPages from '../pagination/Pagination';

export default function ToDo() {
  const settings = useContext(SettingContext);
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function addItem(item) {
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter((item, index) => index !== id);
    setList(items);
    setShow(false);
  }

  function toggleComplete(id) {
    const items = list.map((item, index) => {
      if (index == id) {
        item.complete = !item.complete;
      }
      return item;
    });
    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  });


  const indexOfLastPost = currentPage * settings.itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - settings.itemsPerPage;
  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <>

      <div>
        <h1>To Do List: {incomplete} items pending</h1>
      </div>
      <Container className="mt-2" gap="30">
        <Row xs={4} md={2} className="g-4">
          <Col>
            <ToDoForm handleSubmit={handleSubmit} handleChange={handleChange} />
          </Col>
          <Col>
            <ToDoList
              incomplete={incomplete}
              list={currentPosts}
              toggleComplete={toggleComplete}
              deleteItem={deleteItem}
              show={show}
              handleShow={handleShow}
              handleClose={handleClose}
            />
            <PaginationPages
              itemsPerPage={settings.itemsPerPage}
              totalList={list.length}
              paginate={paginate}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};


