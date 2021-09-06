import React, { useEffect, useState } from 'react'
import request from "../../api"
import "./_video.scss"
import moment from "moment"

import {AiFillEye} from "react-icons/ai"
import numeral from "numeral"


const Video = ({ video }) => {

  const {id , snippet:{channelId,channelTitle,title,publishedAt,thumbnails: { medium },}} = video;

  const [views, setViews] = useState(null)
  const [duration, setDuration] = useState(null)
  const [channelIcon,setChannelIcon] = useState(null)

  const _videoId = id?.videoId || id;
 
  const seconds = moment.duration(duration).asSeconds()
  const _duration = moment.utc(seconds * 1000).format("mm:ss")
  

  useEffect(() => {

    const get_video_details = async () => {

      const {data:{items},} = await request("/videos",{

        params:{
          part:"contentDetails,statistics",
          id : _videoId,
        },
      
      })
      setDuration(items[0].contentDetails.duration)
      setViews(items[0].statistics.viewCount)

      console.log(items)
    }

    get_video_details()
    
  }, [_videoId])


  useEffect(() => {

    const get_channel_icon = async () => {

      const {data:{items},} = await request('/channels',{

        params:{
          part:"snippet",
          id : channelId,
        },
      
      })
      setChannelIcon(items[0].snippet.thumbnails.default)
    }

    get_channel_icon()

  }, [channelId])

  return (
    <div className = "video">
      <div className="video_top">
        {<img src={medium.url} alt=""/>}
        <span>{_duration}</span>
      </div>
      <div class="video_tittle">
        {title}
      </div>
      <div className="video_details">

        <span>
          <AiFillEye/> {numeral(views).format("0.a")} views •
        </span>
        <span>{moment(publishedAt).fromNow()}</span>
      </div>
      <div className="video_channel">
        <img src={channelIcon?.url} alt=""/>
        <p>{channelTitle}</p>
      </div>
    </div>
  )
   
}




export default Video
