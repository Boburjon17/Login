import axios from "./api";

const ArticleService = {
  
   
   
     GetArticle: async()=> {
       const data = await axios.get("/articles")
       return data
    },
    GetArticleDetail: async(slug)=>{
      const {data} = await axios.get(`/articles/${slug}`)
      return data
    },
    PostArticle: async(article)=>{
      const {data}= await axios.post('/articles',{article})
      return data
    },
    deleteArticle: async(slug) =>{
      const response = await axios.delete(`/articles/${slug}`)
       return response

    },
     editArticle: async (slug,article)=>{
      const response =await axios.put(`/articles/${slug}`, {article})
      return response
     }
  };
  export default ArticleService;