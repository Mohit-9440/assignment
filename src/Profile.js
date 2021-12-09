import React, { useState ,useEffect } from 'react';
import { BackTop, Card } from 'antd';
import { MailOutlined, PhoneOutlined, GlobalOutlined, HeartOutlined, HeartFilled, EditOutlined, DeleteFilled, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

// import BasicModal from './Modal'

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


export default function Cards({cardsData, setcardsData}){

  useEffect(() => {
    // CardOptions()
    console.log(cardsData)
    // AllCards()
    
  }, [cardsData])

  const AllCards = () => {

    return (
      cardsData.map(cardData => ( 
        <Card
          key={cardData.id}
          className='card'
        >
          <Meta
            description={<Hero name={cardData.name} />}
          />
          <div className="card_body">
          <div className='card_body_main'>
              <Meta
                description={<Title title={cardData.name} />}
              />
              <Meta
                description={<Description email={cardData.email} phone={cardData.phone}  website={cardData.website} />}
              />
          </div>
  
          <Meta
            description={<CardOptions cardsData={cardsData} setcardsData={setcardsData} id={cardData.id} />}
          />
          </div>
        </Card>
        ))
    )
  }

  const { Meta } = Card;

    return( 
<>
      {AllCards()}
     {/* <button onClick={BasicModal}>modal</button> */}
</>
    )}

  const Title = ({title}) => {
    return (
      <h3>{title}</h3>
    )
  }
  const Hero = ({name}) => {
    return (
      <div className="card_head_image">
        <img alt='' src={`https://avatars.dicebear.com/v2/avataaars/${name}.svg?options[mood][]=hap`} />
      </div>
    )
  }
  const Description = ({email, phone, website}) => {
    return (
        <div className='card_body_detail'>
           <div>
           <MailOutlined />
             <span>{email}</span>
           </div>

           <div>
           <PhoneOutlined />
             <span>{phone}</span>
           </div>

           <div>
           <GlobalOutlined />
             <span>{website}</span>
           </div>
                  
        </div>
    )
  }
  
  const CardOptions = ({ cardsData, id, setcardsData }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [website, setWebsite] = useState('')
    const [temp, setTemp] = useState(0)

    

    const handleDelete = () => {
      // fetch(`https://jsonplaceholder.typicode.com/users/2`, {
      // method: 'DELETE',
      // });
     cardsData.splice((id-1), 1)
     setTemp(temp+1)
    //  console.log(cardsData)
     setcardsData(cardsData)
      // console.log(cardsData[id-1])
      

// console.log(id)

    }
    // console.log(name)

    const formData = {
    name: name,        
    email: email,        
    phone: phone,        
    website: website,          
    }

          const handleOk = () => {

            console.log(name)
            console.log(email)
            console.log(phone)
            console.log(website)
          }
    const BasicModal = (message) => {
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='modal'>
              <div class="main_modal">
                <div className='modal_header'>
                  <div className='modal_title'>Basic Modal</div>
                  <div onClick={() => onClose()} style={{cursor: 'pointer'}}>X</div>
                </div>
  
                <div class="modal_form">
                  <div>
                    <label for="name">Name :</label>
                    <input type="text" id="name" placeholder={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  
                  <div>
                    <label for="email">Email :</label>
                    <input type="text" id="email" placeholder={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div>
                    <label for="phone">Phone :</label>
                    <input type="text" id="phone" placeholder={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                  <div>
                    <label for="website">Website :</label>
                    <input type="text" id="website" placeholder={website} onChange={(e) => setWebsite(e.target.value)} />
                  </div>
  
                </div>
  
                <div class="modal_footer">
                  <div>
                    <button  onClick={() => onClose()}>Cancel</button>
                    <button onClick={handleOk}>OK</button>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    return (
      <div className='buttons'>

        <button className='favourite'>
          <HeartOutlined style={{outlineColor: 'red'}} />
        </button>

        <button onClick={BasicModal} className='edit'>
          <EditOutlined />
        </button>

        <button onClick={handleDelete} className='delete'>
          <DeleteFilled />
        </button>

      </div>
    )
  }


 
  



  // cardsData.map(cardData => (
      //   <div key={cardData.id} className="card">
      //       <div className="card_head_image">
      //           <img alt='' src={`https://avatars.dicebear.com/v2/avataaars/${cardData.name}.svg?options[mood][]=hap`} />
      //       </div>
      //       <div className="card_body">
      //       <div className='card_body_main'>
      //           <h3>{cardData.name}</h3>
      //           {/* <h3>Mohit Sharma</h3> */}
                
      //           <div className='card_body_detail'>
      //             <div>
      //             <MailOutlined />
      //               <span>{cardData.email}</span>
      //             </div>

      //             <div>
      //             <PhoneOutlined />
      //               <span>{cardData.phone}</span>
      //             </div>

      //             <div>
      //             <GlobalOutlined />
      //               <span>{cardData.website}</span>
      //             </div>
                  
      //           </div>
                
      //       </div>

      //       <div className='buttons'>
      //       <button className='favourite'>
      //         <HeartOutlined style={{outlineColor: 'red'}} />
      //       </button>
      //       <button className='edit'>
      //         <EditOutlined />
      //       </button>
      //       <button className='delete'><DeleteFilled /></button>
      //       </div>
                
      //       </div>
      //     </div>
      // ))