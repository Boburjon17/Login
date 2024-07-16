
import { useEffect } from 'react'
import { useParams } from 'react-router'
import ArticleService from '../service/article'
import { useDispatch, useSelector } from 'react-redux'
import { articleDetailStart, articleDetailSuccess } from '../reducers/ArticlesSlice'
import moment from 'moment/moment'
import Loader from '../ui/loader'

const articleDetail = () => {
    const dispatch= useDispatch()
    const {articleDetail, isLoading}= useSelector(state =>state.article)
   

    const {slug} = useParams()


    const GetArticleDetail = async()=>{
        dispatch(articleDetailStart())

      try {
        const response = await ArticleService.GetArticleDetail(slug)
        dispatch(articleDetailSuccess(response.article))
        
      
        
      } catch (error) {
        console.log(error);
        
      }

    }

    useEffect(()=>{
        GetArticleDetail()
    }, [slug])
  return (
            isLoading? <Loader/>:(
                articleDetail !== null &&
                <div>
                <div className="container py-3 mb-4  rounded-3">
                    <div className="container-fluid pb-5">
                        <h1 className="display-5 fw-bold">{articleDetail.title}</h1>
                        <p className="col-md-8 fs-4">{articleDetail.description}</p>
                        <p className="text-muted">
                            <span className="fw-bold">Created at:</span>{" "}
                            {moment(articleDetail.createdAt).format("DD MMM, YYYY")}
                        </p>
                        <div className="col-md-6">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <strong className="d-inline-block mb-2 text-primary text-uppercase">
                                        {articleDetail.author.username}
                                    </strong>
                                    <p className="card-text mb-auto">
                                        {articleDetail.author.bio}
                                    </p>
                                </div>
                                <div className="col-auto d-none d-lg-block">
                                    <svg
                                        className="bd-placeholder-img"
                                        width="200"
                                        height={"100%"}
                                        xmlns="http://www.w3.org/2000/svg"
                                        role="img"
                                        aria-label="Placeholder: Thumbnail"
                                        preserveAspectRatio="xMidYMid slice"
                                        focusable="false"
                                       
                                    >
                                        <title>Placeholder</title>
                                        <rect width="100%" height="100%" fill="#55595c"></rect>
                                        <text
                                            x={"45%"}
                                            y={"53%"}
                                            fill={"#fff"}
                                            className="fs-2 text-uppercase p-0 m-0"
                                        >
                                            {articleDetail.author.username[0]}
                                        </text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div>{articleDetail.body}</div>
                    </div>
                </div>
            </div>
            )
  )
}

export default articleDetail