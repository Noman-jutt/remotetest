import React from 'react'
import './style.css';
import HraetIcon from "../../assets/heart-icon.svg"
import CommentIcon from "../../assets/comment-icon.svg"
import SaveIcon from "../../assets/save-icon.svg"
import ThreeDotIcon from "../../assets/dots-icon.svg"
import ProfileImg from "../../assets/profile-img.png"
import ActivityIcon from "../../assets/activity-icon.svg"
import "../../common.css"
import PostHeader from './postHeader';
import UserDetail from './userDetails';
import PostContent from './postContent';
import Reactions from './reaction';
import CommentSection from './commentSection';
import WriteComment from './writeComment';

const PostComp = () => {
  const ReactionData = [
    {
      icon: HraetIcon,
      totalCount: 5,
      type: 'reaction'
    },
    {
      icon: CommentIcon,
      totalCount: 5,
      type: 'comment'
    },
    {
      icon: SaveIcon,
      type: 'tag'
    },
    {
      icon: ThreeDotIcon,
      type: 'more'
    },
  ]
  return (
    <div className='post_wrapper'>
      <PostHeader title={'자유톡'} />
      <UserDetail profileImg={ProfileImg} activityIcon={ActivityIcon} userName={'안녕 나 응애 '} lastActive={'1일전'} weight={53} size={165} />
      <PostContent title={'지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?'} />
      <Reactions data={ReactionData} />
      {[1].map((data) => <CommentSection />)}
      <WriteComment />
    </div>
  )
}
export default PostComp













