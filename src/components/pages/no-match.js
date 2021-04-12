import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../pageComponents/pageTitle";

// eslint-disable-next-line
export default function () {
    return (
        <div className='no-match'>
            <PageTitle className='no-match__page-title' title="We Couldn't Find The Page You Were Looking For!" />
            <Link to="/">Return to homepage</Link>
        </div>
    );
}