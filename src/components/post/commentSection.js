import React from 'react'
import UserDetail from './userDetails'
import Reactions from './reaction'
import HraetIcon from "../../assets/heart-icon.svg"
import CommentIcon from "../../assets/comment-icon.svg"
import ProfileImg from "../../assets/profile-img.png"
import UserPF from "../../assets/userPf.png"
import ActivityIcon from "../../assets/activity-icon.svg"

const CommentSection = () => {
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
  ]
  const ReactionDataCommetReply = [{
    icon: HraetIcon,
    totalCount: 5,
    type: 'reaction'
  },]
  return (
    <div className='Commen_Section  com_pr_16 '>
      <UserDetail profileImg={ProfileImg} activityIcon={ActivityIcon} isShowForComment={true} userName={'안녕 나 응애 '} lastActive={'1일전'} weight={53} size={165} />
      <div className='comment_Main_wrapper'>
        <p className='p_CommetText '>어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭
          우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도
          아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다
          괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니
          꼭 봐주세용~!</p>
        <Reactions className={"comment_Reaction"}  data={ReactionData} />
        {[1, 2, 3, 4].map((data) =>
          <div className='comments_reply'>
            <UserDetail className='reply_Profile' profileImg={UserPF} activityIcon={ActivityIcon} isShowForComment={true} userName={'안녕 나 응애 '} lastActive={'1일전'} weight={53} size={165} />
            <p className='p_CommetText com_pl_69 '>오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다</p>
            <div className='com_pl_69'>
              <Reactions className={"comment_Reaction"} data={ReactionDataCommetReply} />
            </div>
          </div>)}

      </div>
    </div>
  )
}
export default CommentSection