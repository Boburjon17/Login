import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import { Navbar, Home, Login, Register ,PageNotFound, ArticleDetail, CreateArticle, EditArticle} from "../index";
import { BrowserRouter } from "react-router-dom";
import authService from "../service/auth";
import { useDispatch } from "react-redux";
import { userSuccess } from "../reducers/reducer";
import { GetItem } from "../helpers/persistance-storage";



const App = () => {
  const dispatch= useDispatch()


   const GetUser= async () =>{
     try {
      const responce=  await authService.GetUser()
      dispatch(userSuccess(responce.user))
     } catch (error) {
      console.log("Error");
      
     }
   }
  //  const getArticle= async ()=>{
  //   dispatch(articleStart())
  //   try {
  //     const response  = await articleService.GetArticle()
  //    
  //     dispatch(articleSuccess(response.data))
     
      
  //   } catch (error) {
  //     console.log(error);
      
  //   }



  //  }
   useEffect(()=>{
    const token = GetItem('token')
    if(token){
      GetUser()
    }

  
   
 
   }, [])
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<PageNotFound/>}/>
          <Route path="/article/:slug" element={<ArticleDetail/>} />
          <Route path="/create-article" element={<CreateArticle/>} />
          <Route path="/edit-article/:slug" element={<EditArticle/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
