import { Container, Grid, Typography } from "@mui/material";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { boardPostAsync } from "../../app/slices/boardSlice";
import { SButton, SInput } from "./styles";

const BoardUpdateForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      boardPostAsync({
        title: title,
        content: content,
      })
    );
  };

  return (
    <>
      <Container component="main" maxWidth="xs" style={{ marginTop: "5%" }}>
        <Grid item xs={12}>
          <Typography
            component="h1"
            variant="h5"
            style={{ marginBottom: "4%", fontWeight: "600" }}
          >
            글 수정하기
          </Typography>
        </Grid>
        <form onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography component="h3" variant="h7">
                제목
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <SInput
                variant="outlined"
                required
                fullWidth
                color="secondary"
                id="title"
                placeholder="제목을 입력하세요"
                name="title"
                value={title}
                type="text"
                maxLength="25"
                onChange={(e) => setTitle(e.target.value)}
                style={{ background: "white", width: "420px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography component="h3" variant="h7">
                내용
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <SInput
                variant="outlined"
                required
                fullWidth
                color="secondary"
                id="content"
                placeholder="내용을 입력하세요."
                name="content"
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                style={{
                  background: "white",
                  width: "420px",
                  height: "200px",
                }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <SButton type="submit">저장</SButton>
          </Grid>
          <Link
            to="/board"
            style={{
              fontSize: "15px",
              textDecoration: "none",
              textAlign: "right",
            }}
          >
            <Grid item>뒤로 가기</Grid>
          </Link>
        </form>
      </Container>
    </>
  );
};

export default BoardUpdateForm;
