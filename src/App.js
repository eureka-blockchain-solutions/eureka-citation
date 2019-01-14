import React, { Component } from "react";
import Alert from "./views/design-components/Alerts";
import Modal from "./views/design-components/Modal";

class App extends Component {
  render() {
    return (
      <div>
        <Alert status={"success"} iconSize={25}>
          This is a success alert
        </Alert>
        <Modal
          type={"notification"}
          toggle={isErrorMessage => {
            this.setState({ errorMessage: null });
          }}
          show={true}
          title={"You got the following error"}
        >
          apkosfjoasfjoasjo
        </Modal>


      </div>
    );
  }
}

export default App;
