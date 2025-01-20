import React from "react";
import Form from "react-bootstrap/Form";
import "../../assets/css/ModalOne.css";
import { Link } from "react-router-dom";
function FormStatuspending() {
  return (
    <div>
      <Form>
        {["checkbox"].map((type) => (
          <div key={`default-${type}`} className="nd-label">
            <Link to="#">
              <Form.Check
                className="nd-check-box-btn "
                type={type}
                id={`default-${type}`}
                label={`**मेरे द्वारा शासनादेश का पूर्णता अध्यन कर लिए गया है`}
                style={{ cursor: "pointer" }} // Cursor pointer for better UX
              />
            </Link>
          </div>
        ))}
      </Form>
    </div>
  );
}

export default FormStatuspending;
