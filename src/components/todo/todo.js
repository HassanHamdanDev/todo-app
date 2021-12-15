import React, { useEffect, useState, useContext } from 'react';
import useForm from '../../hooks/form.js';
import ToDoForm from './Form';
import ToDoList from './List';
import { Row, Col, Container } from 'react-bootstrap';
import { SettingContext } from '../../context/settings/context';
import PaginationPages from '../pagination/Pagination';
import { v4 as uuidv4 } from 'uuid';

export default function ToDo() {
  const settings = useContext(SettingContext);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function addItem(item) {
    item.id = uuidv4();
    item.complete = false;
    const saveList = settings.list;
    settings.setList([...saveList, item]);
  }

  function deleteItem(id) {
    const items = settings.list.filter((item, index) => index !== id);
    settings.setList(items);
    setShow(false);
  }

  function toggleComplete(id) {
    const items = settings.list.map((item, index) => {
      if (index == id) {
        item.complete = !item.complete;
      }
      return item;
    });
    settings.setList(items);
  }

  useEffect(() => {
    let incompleteCount = settings.list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  });

  function getToDo() {
    const indexOfLastPost = currentPage * settings.itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - settings.itemsPerPage;
    const currentPosts = settings.list.slice(indexOfFirstPost, indexOfLastPost);

    if (!settings.displayComplete) {
      return currentPosts.filter(item => item.complete === settings.displayComplete);
    } else {
      return currentPosts;
    }
  }
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <Container className="mt-1" gap="30">
        <Row xs={4} md={2} className="g-4">
          <Col>
            <ToDoForm handleSubmit={handleSubmit} handleChange={handleChange} />
          </Col>
          <Col>
            <div>
              <h1 style={{ fontFamily: 'cursive' }}>To Do List: {incomplete} items pending</h1>
            </div>
            <ToDoList
              incomplete={incomplete}
              list={getToDo()}
              toggleComplete={toggleComplete}
              deleteItem={deleteItem}
              show={show}
              handleShow={handleShow}
              handleClose={handleClose}
            />
            <PaginationPages
              itemsPerPage={settings.itemsPerPage}
              totalList={settings.list.length}
              paginate={paginate}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};


