import React from 'react'
import CreateArticleTextarea from '../create-article-textarea/create-article-textarea'
import Input from '../ui/Input'

const FormArticle = (props) => {
    const  {title, setTitle, description, setDescription, body ,setBody,PostArticles}=props
  return (
    <>
  
  <form className="w-75 mx-auto">
  <Input
    
    state={title}
    setState={setTitle}
    label={"Title"}
    


    
  />
  <CreateArticleTextarea   label={"Description"}  state={description} setState={setDescription} />
  <CreateArticleTextarea  label={"Body"} state={body} setState={setBody} height="300px" />
</form>
<button
    onClick={PostArticles }
     
        className="btn btn-primary w-100 h-10 py-2 mt-2"
        type="submit"
      >
        Create

      </button>
      </>

  )
}

export default FormArticle