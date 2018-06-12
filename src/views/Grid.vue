<template>
  <div>
    <h1>Grid</h1>

    <Row>
      <Col>1</Col>
      <Col>2</Col>
    </Row>

  </div>
</template>

<script>
import Row from "../components/grid/Row";
import Col from "../components/grid/Col";
export default {
  components: { Col, Row }
};
</script>
