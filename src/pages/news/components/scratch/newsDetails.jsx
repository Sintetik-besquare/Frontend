import React, { useEffect } from "react";
import { useParams } from "react-router";
import { getTitle, getDescription, getTime } from "../../../services/newsAPI";

export const NewsTitle = () => {
  const [getNewsTitle, setNewsTitle] = React.useState([]);
  //For undefined title
  const [modal, setModal] = React.useState(undefined);

  const { title } = useParams();
  useEffect(() => {
    setNewsTitle([]);
    getNewsTitle(title).then(setNewsTitle);
  }, [title]);

  return (
    <>
    
    </>
  )
};

const [getNewsDescription, setNewsDescription] = React.useState([]);
