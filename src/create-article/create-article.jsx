import React, { useState } from "react";
import Input from "../ui/Input";
import { FormArticle } from "..";
import ArticleService from "../service/article";
import { useDispatch } from "react-redux";
import {
  createArticleStart,
  createArticleSuccess,
} from "../reducers/ArticlesSlice";
import { useNavigate } from "react-router";

const CreateArticle = ({
  type,
  id,
  placeholder,
  label,
  state,
  setState,
  height,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const PostArticles = (e) => {
    e.preventDefault();
    dispatch(createArticleStart());
    const article = {
      title,
      description,
      body,
    };
    try {
      const response = ArticleService.PostArticle(article);
      dispatch(createArticleSuccess(response));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const formProps = {
    title,
    setTitle,
    description,
    setDescription,
    body,
    setBody,
    PostArticles,
  };
  return (
    <div>
      <div className="fs-2  text-center">Create Article</div>

      <FormArticle {...formProps} />
    </div>
  );
};

export default CreateArticle;
