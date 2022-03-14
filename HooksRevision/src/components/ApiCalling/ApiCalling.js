import { useEffect, useState } from "react";
import axios from "axios";
import { FcApproval } from "react-icons/fc";
import { Container, Row, Col, Card, Image, Spinner } from "react-bootstrap";
const ApiCalling = () => {
    const [weatherDetails, setWeatherDetails] = useState(null);
    const [loader, setLoader] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    useEffect(() => {
        let mounted = true;

        const fetchWeather = () => {
            axios
                .get(`https://api.github.com/users`)
                .then(function (response) {
                    if (mounted) {
                        setWeatherDetails(response.data);
                        console.log(response);
                        setTimeout(() => {
                            setLoader(false);
                        }, 2000);
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                    setErrorMsg("Data Not Available");
                    setLoader(false);
                });
        };
        fetchWeather();
        return function cleanup() {
            mounted = false;
        };
    }, []);
    return (
        <>
            <div className="text-center bg-danger"> {errorMsg}</div>
            {loader ? (
                <>
                    <div
                        style={{
                            padding: "200px",
                            color: "red",
                            textAlign: "center",
                        }}
                    >
                        <Spinner animation="border" role="status"></Spinner>
                        <h1>Loading Data Please wait...</h1>
                    </div>
                </>
            ) : (
                <>
                    <h2 className="text-center">List of Github Users</h2>
                    <Container className="mt-5">
                        <Row className="text-center">
                            {weatherDetails.map((items, i) => {
                                return (
                                    <Col xs={10} md={4} xl={4} className="mt-5">
                                        <Card style={{ width: "18rem" }}>
                                            <Image
                                                src={items.avatar_url}
                                                roundedCircle
                                            />
                                            <Card.Body>
                                                <Card.Title>
                                                    {items.login}
                                                    <FcApproval />
                                                </Card.Title>
                                                {items.type}
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                );
                            })}
                        </Row>
                    </Container>
                </>
            )}
        </>
    );
};

export default ApiCalling;
