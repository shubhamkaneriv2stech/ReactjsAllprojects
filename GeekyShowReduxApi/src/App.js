import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
  useDeletePostByIdMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
} from "./services/Post";
const App = () => {
  const responseInfo = useGetAllPostQuery();

  const responseInfoById = useGetPostByIdQuery(5);
  const responseInfoByLimitQuery = useGetPostByLimitQuery(35);
  const [createPost, responseInfoPost] = useCreatePostMutation();
  const [deletePostFunction, responseInfoData] = useDeletePostByIdMutation();

  const [updatePost, responseInfoUpdate] = useUpdatePostMutation();
  const newPost = {
    title: "This is New New Title",
    body: "This is New New Body",
    userId: 1,
  };
  const updatePostData = {
    id: 1,
    title: "This is Update Post Title",
    body: "This is Update Post Body",
    userId: 1,
  };
  if (responseInfo.isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Container className="justify-content d-flex text-center ">
      {/* <Row>
        {responseInfoByLimitQuery.data.map((data) => {
          return (
            <Col md={4} key={data.id} className="my-4">
              <Card border="info" style={{ width: "20rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <h3> id:{data.id}</h3>
                  <Card.Title>
                    Title : <span className="text-info">{data.title}</span>{" "}
                  </Card.Title>
                  <Card.Text>
                    Body: <span className="text-success">{data.body}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row> */}
      {/* <Card border="info" style={{ width: "20rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <h3> id:{responseInfoById.data.id}</h3>
          <Card.Title>
            Title :
            <span className="text-info">{responseInfoById.data.title}</span>
          </Card.Title>
          <Card.Text>
            Body:
            <span className="text-success">{responseInfoById.data.body}</span>
          </Card.Text>
        </Card.Body>
      </Card> */}
      {/* <Button
        onClick={() => {
          deletePostFunction(5);
        }}
      >
        {" "}
        Delete Post
      </Button> */}
      <button
        onClick={() => {
          createPost(newPost);
        }}
      >
        Add Post
      </button>

      <button
        onClick={() => {
          updatePost(updatePostData);
        }}
      >
        Update Post
      </button>
    </Container>
  );
};

export default App;
