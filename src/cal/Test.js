// import { useState } from 'react';
// import { Container } from 'react-bootstrap';
// import { evaluate } from 'mathjs';

// const Test = () => {
//     const [x, setX] = useState();
//     const [y, setY] = useState();
//     const [sum, setSum] = useState();

//     const getx = (e) => {
//         setX(e.target.value);
//     }

//     const gety = (e) => {
//         setY(e.target.value);
//     }

//     const handlecalSum = () => {
//         const result = calSum(+x, +y);
//         setSum(result);
//     }

//     function calSum(x, y) {
//         return x + y;
//     }

//     return (
//         <Container>
//             <div>
//                 <h4>X</h4>
//                 <input type='number' onChange={getx}></input>
//                 <h4>n</h4>
//                 <input type='number' onChange={gety}></input>
//                 <h4><button onClick={handlecalSum}>cal</button></h4>
//                 <p>Sum: {sum}</p>
//                 x: {x}
//                 n: {y}
//             </div>
//         </Container>
//     )
// }

// export default Test;


import { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { evaluate } from 'mathjs';

const Test = () => {
    const [x, setX] = useState('');
    const [y, setY] = useState('');
    const [sum, setSum] = useState('');

    const getx = (e) => {
        setX(e.target.value);
    }

    const gety = (e) => {
        setY(e.target.value);
    }

    const handlecalSum = () => {
        const result = calSum(+x, +y);
        setSum(result);
    }

    function calSum(x, y) {
        return x + y;
    }

    return (
        <Container className="mt-5 p-4 bg-light border rounded shadow-sm d-flex flex-column align-items-center">
            <Form className="text-center">
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="formX">
                            <Form.Label>X</Form.Label>
                            <Form.Control type="number" placeholder="Enter X" value={x} onChange={getx} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formY">
                            <Form.Label>Y</Form.Label>
                            <Form.Control type="number" placeholder="Enter Y" value={y} onChange={gety} />
                        </Form.Group>
                    </Col>
                </Row>

                <Button variant="primary" onClick={handlecalSum}>
                    คำนวนเลย!
                </Button>

                <Form.Group controlId="formResult" className="mt-3">
                    <Form.Label>ผลลัพธ์:</Form.Label>
                    <Form.Control type="text" readOnly value={sum} />
                </Form.Group>
            </Form>

            <div className="mt-3 text-center">
                <p><strong>x:</strong> {x}</p>
                <p><strong>y:</strong> {y}</p>
            </div>
            kuyกหฟกฟหกร่ฟรน่ยรน
        </Container>
        
    )
}

export default Test;



