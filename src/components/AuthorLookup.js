import React from "react";
import queryString from "query-string";
import Author from "../views/Author.js";
import UploadSpinner from "../views/spinners/UploadSpinner.js";
import { getDomain } from "../helpers/getDomain";
import PulseSpinner from "../views/spinners/PulseSpinner";
import SaveSpinner from "../views/spinners/SaveSpinner";

class AuthorLookup extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    const query = queryString.stringify({
      ethAddress: this.props.addresses
    });
    fetch(`${getDomain()}/api/users?${query}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(response => response.json())
      .then(async response => {
        if (response.success) {
          await new Promise(resolve => setTimeout(resolve, 750));
          let data = Array.isArray(response.data)
            ? response.data
            : [response.data];
          this.setState({ data });
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.data ? (
          <div>
            {this.state.data.map((author, i) => {
              if (author) {
                return <Author key={i} author={author} {...this.props} />;
              } else {
                return (
                  <i key={i}>
                    We did not found any user with this address in our database.
                  </i>
                );
              }
            })}
          </div>
        ) : (
          <SaveSpinner />
        )}
      </div>
    );
  }
}
export default AuthorLookup;
