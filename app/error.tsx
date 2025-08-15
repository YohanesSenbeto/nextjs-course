"use client";
import React from "react";
import { clearScreenDown } from "readline";
interface Props {
    error: Error;
    reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
    console.log("error", error);
    return (
        <>
            <div>An Unexpected error has occured. </div>
            <button className="btn text-red-500" onClick={() => reset()}>
                Try Again
            </button>
        </>
    );
};

export default ErrorPage;
