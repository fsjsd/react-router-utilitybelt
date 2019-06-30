/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import ReactRouterPropTypes from "react-router-prop-types";
import { Link } from "react-router-dom";
import { useSetPageTitleOverride } from "react-router-utilitybelt";

// we'll define a whole bunch of stubs for pages here.
// You'd separate these and build each one up to suite.

const Home = () => (
  <>
    <h1>React Router Demo</h1>
    <p>Welcome to this demo of some react router use cases</p>
    <p>Make sure you check out the code to see what&apos;s going on</p>
    <p>
      As you browse the components, remember there&apos;s nothing special going
      on here with extra packages or magic code. Normal react router{" "}
      <Link to="/settings">links</Link> still work.
    </p>
  </>
);

const Reports = () => (
  <>
    <div>I&apos;m the Reports component</div>
    <ul>
      <li>
        <Link to="/report/2019">2019 report</Link>
      </li>
      <li>
        <Link to="/report/2018">2018 report</Link>
      </li>
      <li>
        <Link to="/report/2017">2017 report</Link>
      </li>
      <li>
        <Link to="/report/2016">2016 report</Link>
      </li>
    </ul>
  </>
);

const Report = ({ match }) => {
  const reportID = match.params.reportId;

  useSetPageTitleOverride(`${reportID} Report`);

  return (
    <>
      <div>I&apos;m a specific report</div>
      <p>{match.params.reportId}</p>
    </>
  );
};

Report.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
};

const Billing = () => <div>I&apos;m the Billing component</div>;

const Catalog = () => <div>I&apos;m the Catalog component</div>;

const Support = () => <div>I&apos;m the Support component</div>;

const Orders = () => <div>I&apos;m the Orders component</div>;

const Portfolio = () => <div>I&apos;m the Portfolio component</div>;

const Charts = () => <div>I&apos;m the Charts component</div>;

const Settings = () => (
  <div>
    I&apos;m the Settings component - notice I&apos;m hidden from the main
    navigation
  </div>
);

const Breadcrumbs = () => (
  <div>
    Breadcrumbs demo - try the <Link to="/breadcrumbs/1">next level down</Link>
  </div>
);

const Breadcrumbs1 = () => (
  <div>
    Level 1 - try the <Link to="/breadcrumbs/1/2">next level down</Link>
  </div>
);

const Breadcrumbs2 = () => <div>Level 2</div>;

const FormExample = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const handleSubmit = () => {
    setFormMessage("Submitted");
  };

  const canSubmit = () => name !== "" && email !== "";

  return (
    <div>
      <p>
        Quick form component with some implementation to assist with performance
        checks :)
      </p>
      <p>
        <label htmlFor="txtName">Name: </label>
        <input
          type="text"
          id="txtName"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="txtEmail">Email: </label>
        <input
          type="email"
          id="txtEmail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </p>
      <p>
        <button type="button" disabled={!canSubmit()} onClick={handleSubmit}>
          Submit
        </button>
      </p>
      {formMessage ? <p>{formMessage}</p> : null}
    </div>
  );
};

export default {
  Home,
  Billing,
  Catalog,
  Settings,
  Support,
  Orders,
  Portfolio,
  Charts,
  Reports,
  Report,
  Breadcrumbs,
  Breadcrumbs1,
  Breadcrumbs2,
  FormExample
};
