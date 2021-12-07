import React, { useState ,useEffect } from 'react';
import { MailOutlined, PhoneOutlined, GlobalOutlined, HeartOutlined, HeartFilled, EditOutlined, DeleteFilled } from '@ant-design/icons';

export default function Cards({cardsData}){

  const [heartFilled, setHeartFilled] = useState(false)

  async function getAvatar(name)  {
    await fetch(`https://avatars.dicebear.com/v2/avataaars/${name}.svg?options[mood][]=hap`)
                  .then((res) => console.log(res))
  }

  useEffect(() => {
    getAvatar('bharat')
  }, [])

    // console.log(cardsData);
    return(

      cardsData.map(cardData => (
        <div key={cardData.id} className="card">
            <div className="card_head_image">
                <img alt='' src={`https://avatars.dicebear.com/v2/avataaars/${cardData.name}.svg?options[mood][]=hap`} />
            </div>
            <div className="card_body">
            <div className='card_body_main'>
                <h3>{cardData.name}</h3>
                {/* <h3>Mohit Sharma</h3> */}
                
                <div className='card_body_detail'>
                  <div>
                  <MailOutlined />
                    <span>{cardData.email}</span>
                  </div>

                  <div>
                  <PhoneOutlined />
                    <span>{cardData.phone}</span>
                  </div>

                  <div>
                  <GlobalOutlined />
                    <span>{cardData.website}</span>
                  </div>
                  
                </div>
                
            </div>

            <div className='buttons'>
            <button className='favourite'>
              <HeartOutlined style={{outlineColor: 'red'}} />
            </button>
            <button className='edit'>
              <EditOutlined />
            </button>
            <button className='delete'><DeleteFilled /></button>
            </div>
                
            </div>
          </div>
      ))
    )
  }

  
