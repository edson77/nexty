import React from "react";
import PostComments from "./posts/comments";
const Post = () =>{
    return (
        <>
        <div class="card">
            {/* Card header START */}
            <div class="card-header border-0 pb-0">
              <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  {/* Avatar */}
                  <div class="avatar me-2">
                    <a href="#!"> <img class="avatar-img mon-cercle-image" src={process.env.PUBLIC_URL + "assets/images/07.jpg"} alt=""/> </a>
                  </div>
                  {/* Info */}
                  <div>
                    <div class="nav nav-divider">
                      <h6 class="nav-item card-title mb-0"> <a href="#!"> Lori Ferguson </a></h6>
                      <span class="nav-item small"> 2hr</span>
                    </div>
                    <p class="mb-0 small">Web Developer at Webestica</p>
                  </div>
                </div>
                {/* Card feed action dropdown START */}
                <div class="dropdown">
                  <a href="#" class="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardFeedAction1" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-three-dots"></i>
                  </a>
                  {/* Card feed action dropdown menu */}
                  <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardFeedAction1">
                    <li><a class="dropdown-item" href="#"> <i class="bi bi-bookmark fa-fw pe-2"></i>Save post</a></li>
                    <li><a class="dropdown-item" href="#"> <i class="bi bi-person-x fa-fw pe-2"></i>Unfollow lori ferguson </a></li>
                    <li><a class="dropdown-item" href="#"> <i class="bi bi-x-circle fa-fw pe-2"></i>Hide post</a></li>
                    <li><a class="dropdown-item" href="#"> <i class="bi bi-slash-circle fa-fw pe-2"></i>Block</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="#"> <i class="bi bi-flag fa-fw pe-2"></i>Report post</a></li>
                  </ul>
                </div>
                {/* Card feed action dropdown END */}
              </div>
            </div>
            {/* Card header END */}
            {/* Card body START */}
            <div class="card-body">
              <p>I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.</p>
              {/* Card img */}
              <img class="card-img mon-cercle-image" src={process.env.PUBLIC_URL + "assets/images/07.jpg"} alt="Post"/>
              {/* Feed react START */}
              <ul class="nav nav-stack py-3 small">
                <li class="nav-item">
                  <a class="nav-link active" href="#!"> <i class="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#!"> <i class="bi bi-chat-fill pe-1"></i>Comments (12)</a>
                </li>
                {/* Card share action START */}
                <li class="nav-item dropdown ms-sm-auto">
                  <a class="nav-link mb-0" href="#" id="cardShareAction8" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-reply-fill flip-horizontal ps-1"></i>Share (3)
                  </a>
                  {/* Card share action dropdown menu */}
                  <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardShareAction8">
                    <li><a class="dropdown-item" href="#"> <i class="bi bi-envelope fa-fw pe-2"></i>Send via Direct Message</a></li>
                    <li><a class="dropdown-item" href="#"> <i class="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark </a></li>
                    <li><a class="dropdown-item" href="#"> <i class="bi bi-link fa-fw pe-2"></i>Copy link to post</a></li>
                    <li><a class="dropdown-item" href="#"> <i class="bi bi-share fa-fw pe-2"></i>Share post via …</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="#"> <i class="bi bi-pencil-square fa-fw pe-2"></i>Share to News Feed</a></li>
                  </ul>
                </li>
                {/* Card share action END */}
              </ul>
              {/* Feed react END */}

              {/* Add comment */}
              <div class="d-flex mb-3">
                {/* Avatar */}
                <div class="avatar avatar-xs me-2">
                  <a href="#!"> <img class="avatar-img mon-cercle-image-1" src={process.env.PUBLIC_URL + "assets/images/07.jpg"} alt=""/> </a>
                </div>
                {/* Comment box  */}
                <form class="position-relative w-100">
                  <textarea class="form-control pe-4 bg-light" rows="1" placeholder="Add a comment..."></textarea>
                </form>
              </div>
              {/* Comment wrap START */}
                <PostComments />
              {/* Comment wrap END */}
            </div>
            {/* Card body END */}
            {/* Card footer START */}
            <div class="card-footer border-0 pt-0">
              {/* Load more comments */}
              <a href="#!" role="button" class="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center" data-bs-toggle="button" aria-pressed="true">
                <div class="spinner-dots me-2">
                  <span class="spinner-dot"></span>
                  <span class="spinner-dot"></span>
                  <span class="spinner-dot"></span>
                </div>
                Load more comments 
              </a>
            </div>
            {/* Card footer END */}
          </div>
        </>
    )
}

export default Post;