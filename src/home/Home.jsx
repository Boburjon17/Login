import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../ui/loader";
import { useNavigate } from "react-router";
import { articleStart, articleSuccess } from "../reducers/ArticlesSlice";
import ArticleService from "../service/article";


const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const getArticle= async ()=>{
    dispatch(articleStart())
    try {
      const response  = await ArticleService.GetArticle()
      dispatch(articleSuccess(response.data))
     
      
    } catch (error) {
      console.log(error);
      
    }



   }
   useEffect(()=> {
    getArticle()
  },[])

 
  const {article, isLoading} =useSelector((state)=>state.article)
  const {user, isLogenIn} = useSelector(state =>state.auth)

  const DeleteArticles= async(slug)=>{
   try {
    const response = await   ArticleService.deleteArticle(slug)
  
    getArticle()
    
   } catch (error) {
    console.log(error);
   }
  }

 
  return (
     <>
    {  isLoading &&
      <Loader/>
     }
    <div className="container   d-block    mx-auto">

     
       
       
       
      
     
      <div className=" row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {
          article.articles &&
          article.articles.map((item) =>(
          

            <div className="col" key={item.id} >
            <div className="card shadow-sm h-100">
              <svg
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
              <div className="card-body">
                <p className="card-text fw-bold m-0">
                  {item.title}
               

                  </p>
                <p className="card-text">
                  {item.description}
                  </p>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button
                    onClick={() => navigate(`article/${item.slug}`)}
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button>
                  {isLogenIn && user.username === item.author.username && (
                    <>
                      <button
                      onClick={() => navigate(`/edit-article/${item.slug}`)}
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => DeleteArticles(item.slug)}
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                      >
                        Delete
                      </button>
                    </>
          )}
                  
                </div>
                <small className="text-body-secondary text-capitalize">
                  {item.author.username}
                </small>
              </div>
            </div>
          </div>
        ))}
    </div>
  </div>
  </>

          
               )   }

export default Home;
