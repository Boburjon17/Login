import React, { useEffect, useState } from 'react'
import FormArticle from '../form-article/form-article'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { articleDetailStart, articleDetailSuccess, createArticleStart, createArticleSuccess } from '../reducers/ArticlesSlice';
import ArticleService from '../service/article';

const EditArticle = () => {
    const {slug} =useParams()
    const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const [body, setBody] = useState("");
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const GetArticleDetail = async()=>{
    dispatch(articleDetailStart())

  try {
    const response = await ArticleService.GetArticleDetail(slug)
  
    dispatch(articleDetailSuccess(response.article))
    setTitle(response.article.title)
    setDescription(response.article.description)
    setBody(response.article.body)
    
  
    
  } catch (error) {
    console.log(error);
    
  }

}


    const PostArticles = (e) => {
        e.preventDefault();
        dispatch(createArticleStart());
        const article = {
          title,
          description,
          body,
        };
        try {
          const response = ArticleService.editArticle(slug, article)
          
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

      useEffect(()=>{
        GetArticleDetail()

      }, [slug])
  return (
    <div>
      <div className="fs-2  text-center">Create Article</div>

      <FormArticle {...formProps} />
    </div>
  )
}

export default EditArticle