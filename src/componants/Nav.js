import React from "react";
import { useDispatch } from "react-redux";
import { toggleShow } from "./musicLibrarySlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const dispatch = useDispatch();
  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={() => dispatch(toggleShow())}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
}

export default Nav;
