import { React, useEffect, useState } from "react";
import { useParams } from "react-router";

const BoardDetail = () => {
  const [board, setBoard] = useState([]);

  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE}/board/` + id)
      .then((res) => res.json())
      .then((res) => {
        setBoard(res.data);
        console.log(board);
      });
  }, []);

  return <></>;
};

export default BoardDetail;
