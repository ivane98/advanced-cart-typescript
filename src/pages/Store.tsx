import storeItems from "../data/items.json";
import { Row, Col } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";

export function Store() {
  return (
    <>
      <Row xs={1} sm={2} lg={3} className="ge-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
