import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from "react-router";
// require('dotenv').config()


const VideoCallPage = () => {
  // let { roomId } = useParams(); 
  console.log(useParams().roomId);
  const myArray = window.location.href.split("/");
  let roomId = myArray[4];

  const myMeetings = async(element) =>{
    const appId = process.env.ZEGO_APPID;
    const serverSecret = process.env.ZEGO_SERVERS;
    // console.log(process.env.ZEGO_APPID);
    // console.log(process.env.ZEGO_SERVERS);
    console.log(appId, serverSecret);
    const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomId,  Date.now().toString(), "Anmol Chhabra");
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Personal link',
          url:
           window.location.protocol + '//' + 
           window.location.host + window.location.pathname
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  }
  return (

    <div>
      <div ref={myMeetings}/>
    </div>
  )
}

export default VideoCallPage