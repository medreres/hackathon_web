import React from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";

export default function Project() {
  const { projectId } = useParams();
  console.log(projectId);
  return (
    <>
      <BackButton />
    </>
  );
}
