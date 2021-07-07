import React from 'react'
import { useParams} from 'react-router-dom';
function Post(props){
  let {title} = useParams()
  let {description} = props.dataProps.location.state.postData
  console.log(description)

  return(
    <>

      <article className="mt-5">
<div class="container">
              <div class="row">
        <div class ="col-sm-1"></div>
        <div class ="col-sm-10">
          <br />
          <br />
          <h1><b>{title}</b></h1>
          <br/>
          <div dangerouslySetInnerHTML={{ __html: description }}>
          </div>

      </div>
        <div class ="col-sm-1"></div>
      </div>

</div>
</article>





    </>
  )
}
  export default Post 
